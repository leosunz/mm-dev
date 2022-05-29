import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MechanicDetailsService } from '../../../../shared-components/mechanic-details/mechanic-details.service';
import { DbService } from '../../../../core/services/db.service';
import { Apollo } from 'apollo-angular';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import gql from 'graphql-tag';
import { SaveContactDetailsToDatabaseVariables } from './types/SaveContactDetailsToDatabase';

export interface DialogData {
  geohash: string;
}

@Component({
  selector: 'mm-not-available-in-your-area',
  templateUrl: './not-available-in-your-area.component.html',
  styleUrls: ['./not-available-in-your-area.component.scss'],
})
export class NotAvailableInYourAreaComponent implements OnInit {
  email: string;
  isSubmitted = false;

  constructor(
    private apollo: Apollo,
    public dialogRef: MatDialogRef<NotAvailableInYourAreaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveContactDetailsToDatabase(
    variables: SaveContactDetailsToDatabaseVariables,
  ) {
    const mutation = gql`
      mutation SaveContactDetailsToDatabase(
        $geohash: String!
        $email: String!
      ) {
        __typename
        createContactWhenGeohashAvailable(
          input: {
            contactWhenGeohashAvailable: { geohash: $geohash, email: $email }
          }
        ) {
          clientMutationId
        }
      }
    `;

    return this.apollo.mutate({ mutation, variables });
  }

  onSubmit() {
    if (this.email && this.data.geohash) {
      this.saveContactDetailsToDatabase({
        email: this.email,
        geohash: this.data.geohash,
      }).subscribe(res => (this.isSubmitted = true));
    }
  }
}
