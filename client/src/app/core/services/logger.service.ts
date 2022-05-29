import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { UrlService } from './url.service';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor(private apollo: Apollo, urlService: UrlService) {}

  log(errpr) {
    // const mutation = gql`
    //
    // `;
    console.log('LOGGER NEEDS TO BE IMPLEMENTED'); // TODO
    return of(null);
  }
}
