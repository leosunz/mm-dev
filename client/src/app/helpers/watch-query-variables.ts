import { QueryRef } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { combineLatest, Observable, OperatorFunction } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

export interface ObservableVariables {
  [key: string]: Observable<any>;
}

export const applyQueryVariables = <T, R>(
  queryRef: QueryRef<R>,
): OperatorFunction<T, ApolloQueryResult<R>> => (source: Observable<T>) =>
  source.pipe(
    tap(variables => queryRef.setVariables(variables)),
    switchMap(() => queryRef.valueChanges),
    // tap(v => !v.loading ? console.log('Valuechanges result', v) : null),
  );

export const combineVariables = <T>(
  variables: ObservableVariables,
): Observable<T> => {
  const keys = Object.keys(variables);
  const observablesArray = keys.reduce(
    (arr, key) => [...arr, variables[key]],
    [],
  );
  return combineLatest(...observablesArray).pipe(
    map(valuesArr =>
      keys.reduce<T>(
        (values: any, key, index) =>
          ({
            ...values,
            [key]: valuesArr[index],
          } as T),
        {} as T,
      ),
    ),
    distinctUntilChanged((v1, v2) => keys.every(key => v1[key] === v2[key])),
  );
};

export const applyVariablesToQuery = <T>(
  variables: any,
  queryRef: QueryRef<T>,
) => combineVariables(variables).pipe(applyQueryVariables(queryRef));
