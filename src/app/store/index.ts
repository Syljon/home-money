import { UserState } from './user.states';
import { createFeatureSelector } from '@ngrx/store';
import * as UserActions from './user.actions';
import { parkingSpaceOccupancyFeatureKey } from './user.module';

export const parkingOccupancyFeature = createFeatureSelector<UserState>(parkingSpaceOccupancyFeatureKey);

export * from './user.module';
export { UserActions };
