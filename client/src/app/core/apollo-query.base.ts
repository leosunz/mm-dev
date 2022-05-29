import { BehaviorSubject, Observable } from 'rxjs';
import { Apollo, QueryRef } from 'apollo-angular';
import { ApolloQueryResult, WatchQueryOptions } from 'apollo-client';
import { filter, shareReplay, switchMap, tap } from 'rxjs/operators';
import {
  applyVariablesToQuery,
  ObservableVariables,
} from '../helpers/watch-query-variables';

export class ApolloQueryBase<T> {
  refetch: () => any;
  setObservableVariables: (observableVariables: ObservableVariables) => void;
  public appendObservableVariables: (
    observableVariables: ObservableVariables,
  ) => void;
}

export class ApolloQuery<T> implements ApolloQueryBase<T> {
  queryRef: QueryRef<T>;
  private loggingIdentifier: string;
  private observableVariables = new BehaviorSubject<ObservableVariables>(null);
  valueChanges$: Observable<ApolloQueryResult<T>>;

  private hasSubscribers = false;

  constructor(
    protected apollo: Apollo,
    protected queryOptions: WatchQueryOptions,
  ) {
    this.queryRef = this.apollo.watchQuery<T>(queryOptions);
    this.valueChanges$ = this.observableVariables.pipe(
      tap(() => (this.hasSubscribers = true)),
      filter(Boolean),
      switchMap(observableVariables =>
        applyVariablesToQuery(observableVariables, this.queryRef),
      ),
      shareReplay(1), // Added 2018-12-04
    );
  }

  enableLogging(identifier: string) {
    this.loggingIdentifier = identifier;
  }

  setObservableVariables(observableVariables: ObservableVariables) {
    if (this.loggingIdentifier) {
      console.log(
        this.loggingIdentifier + ': setObservableVariables with',
        observableVariables,
      );
    }
    this.observableVariables.next(observableVariables);
  }

  appendObservableVariables(observableVariables: ObservableVariables) {
    if (this.loggingIdentifier) {
      console.log(
        this.loggingIdentifier + ': appendObservableVariables with',
        observableVariables,
      );
    }
    this.observableVariables.next({
      ...this.observableVariables.value,
      ...observableVariables,
    });
  }

  refetch(): Promise<ApolloQueryResult<T>> {
    if (this.loggingIdentifier) {
      console.log(
        this.loggingIdentifier + ': Refetching. ObsVars:',
        this.observableVariables.value,
      );
      console.log(
        this.loggingIdentifier + ': Refetching. this.queryRef.currentResult():',
        this.queryRef.currentResult(),
      );
    }
    // Shouldnt refetch if it hasn't been initialised (i.e. this.valueChanges$ has no subscribers).
    if (this.hasSubscribers) {
      return this.queryRef.refetch();
    } else {
      if (this.loggingIdentifier) {
        console.log(
          this.loggingIdentifier +
            ': NOT REFETCHING since it has no subscribers',
        );
      }
    }
  }
}
