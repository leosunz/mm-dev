import { Component, OnInit } from '@angular/core';
import { MechanicDetailsService } from '../mechanic-details.service';
import { DbService } from '../../../core/services/db.service';
import { Observable } from 'rxjs';
import { Job } from '../../../core/types/_all_types';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { UpdateMechanicVariables } from './types/UpdateMechanic';
import { difference } from 'lodash-es';
import { DeleteMechanicJobVariables } from './types/DeleteMechanicJob';
import {
  CreateMechanicJob,
  CreateMechanicJobVariables,
} from './types/CreateMechanicJob';
import { MechanicProfile } from '../../mechanic-profile-form/mechanic-profile-form.component';
import { filter, map } from 'rxjs/operators';
import { JobId } from '../../../core/types/JobDescription';
import { ApolloQueryResult } from 'apollo-client';
import { MECHANIC } from 'src/app/core/services/queries';

@Component({
  selector: 'mm-mechanic-profile',
  templateUrl: './mechanic-profile.component.html',
  styleUrls: ['./mechanic-profile.component.scss'],
})
export class MechanicProfileComponent implements OnInit {
  jobs: Observable<Job[]> = this.mechanicDetailsService.mech.pipe(
    map(mech => mech.mechanicJobs.nodes.map(node => node.job)),
  );
  profile$: Observable<MechanicProfile> = this.mechanicDetailsService.mech.pipe(
    map(
      ({
        fullName,
        phone,
        email,
        address,
        travelTimeMinutes,
        mechanicJobs,
      }) => ({
        fullName,
        phone,
        email,
        address,
        travelTimeMinutes,
        selectedJobIds: mechanicJobs.nodes.map(job => job.jobId),
      }),
    ),
    filter(x => !!x),
  );
  allJobs$ = this.dbService
    .allJobs()
    .pipe(map(allJobsResult => allJobsResult.data.jobs.nodes));

  constructor(
    public mechanicDetailsService: MechanicDetailsService,
    private dbService: DbService,
    private apollo: Apollo,
  ) {}

  updateMechanic(variables: UpdateMechanicVariables) {
    const mutation = gql`
      mutation UpdateMechanic(
        $mechanicId: UUID!
        $fullName: String!
        $phone: String
        $email: String
        $address: String
        $travelTimeMinutes: Int!
      ) {
        __typename
        updateMechanic(
          input: {
            patch: {
              fullName: $fullName
              phone: $phone
              email: $email
              address: $address
              travelTimeMinutes: $travelTimeMinutes
            }
            id: $mechanicId
          }
        ) {
          clientMutationId
          mechanic {
            fullName
            travelTimeMinutes
          }
        }
      }
    `;

    return this.apollo
      .mutate({ mutation, variables, refetchQueries: ['AllMechanics'] })
      .subscribe();
  }

  createMechanicJobConnection(variables: CreateMechanicJobVariables) {
    const mutation = gql`
      mutation CreateMechanicJob($mechanicId: UUID!, $jobId: UUID!) {
        createMechanicJob(
          input: { mechanicJob: { mechanicId: $mechanicId, jobId: $jobId } }
        ) {
          clientMutationId
          mechanicJob {
            id
            jobId
            mechanicId
          }
        }
      }
    `;

    return this.apollo
      .mutate({
        mutation,
        variables,
        refetchQueries: ['Mechanic'],
      })
      .subscribe();
  }

  deleteMechanicJob(variables: DeleteMechanicJobVariables) {
    const mutation = gql`
      mutation DeleteMechanicJob($mechanicJobId: UUID!) {
        deleteMechanicJob(input: { id: $mechanicJobId }) {
          clientMutationId
          deletedMechanicJobNodeId
        }
      }
    `;
    return this.apollo
      .mutate({ mutation, variables, refetchQueries: ['Mechanic'] })
      .subscribe();
  }

  ngOnInit() {}

  onSubmit(mechanicProfile: MechanicProfile) {
    const mechanic = this.mechanicDetailsService.mechSnapshot;
    this.updateMechanic({
      ...mechanic,
      mechanicId: mechanic.id,
    });

    const newJobIds = mechanicProfile.selectedJobIds; // Not to be mistaken for jobId
    const oldJobIds = mechanic.mechanicJobs.nodes.map(oldJob => oldJob.jobId);

    const addedJobIds = difference(newJobIds, oldJobIds);
    const removedJobIds = difference(oldJobIds, newJobIds)
      .map(jobId =>
        mechanic.mechanicJobs.nodes.find(oldJob => oldJob.jobId === jobId),
      )
      .map(job => job.id);

    this.addJobs(mechanic.id, addedJobIds);
    this.removeJobs(removedJobIds);
  }

  private addJobs(mechanicId: string, jobIds: JobId[]) {
    jobIds.forEach(jobId =>
      this.createMechanicJobConnection({ mechanicId, jobId }),
    );
  }

  private removeJobs(mechanicJobIds: string[]) {
    mechanicJobIds.forEach(mechanicJobId =>
      this.deleteMechanicJob({ mechanicJobId }),
    );
  }
}
