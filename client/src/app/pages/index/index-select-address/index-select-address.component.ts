import { Component, OnInit } from '@angular/core';
import { LocationExtended } from '../../../lib/select-address/select-address.component';
import { IndexService } from '../index.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import { first } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { MatDialog } from '@angular/material';
import { NotAvailableInYourAreaComponent } from './not-available-in-your-area/not-available-in-your-area.component';

@Component({
  selector: 'mm-index-select-address',
  templateUrl: './index-select-address.component.html',
  styleUrls: ['./index-select-address.component.scss'],
})
export class IndexSelectAddressComponent implements OnInit {
  addressIsValid = new BehaviorSubject<boolean>(false);
  isLoadingAvailability = new BehaviorSubject<boolean>(false);

  constructor(
    public indexService: IndexService,
    private apollo: Apollo,
    private matDialog: MatDialog,
  ) {}

  ngOnInit() {}

  onLocationChange(location: LocationExtended) {
    this.isLoadingAvailability.next(true);
    this.isGeohashAvailable({ geohash: location.geohash }).subscribe(res => {
      this.isLoadingAvailability.next(false);
      if (res.data.isGeohashAvailable) {
        this.addressIsValid.next(true);
        return this.indexService.location.next(location);
      }

      this.matDialog.open(NotAvailableInYourAreaComponent, {
        data: { geohash: location.geohash },
        maxWidth: 400,
      });

      // throw new Error('Unfortunately not yet available in your area.');
    });
  }

  onAddressChange(address: string) {
    this.indexService.address.next(address);
  }

  confirmAddress() {
    this.indexService.nextPage();
  }

  isGeohashAvailable(variables: {
    geohash: string;
  }): Observable<ApolloQueryResult<{ isGeohashAvailable: boolean }>> {
    const query = gql`
      query IsGeohashAvailable($geohash: String!) {
        isGeohashAvailable(geohash: $geohash)
      }
    `;

    return this.apollo
      .query<{ isGeohashAvailable: boolean }>({ query, variables })
      .pipe(first());
  }
}
