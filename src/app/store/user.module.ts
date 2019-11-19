import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './user.reducer';
import { UserEffects } from './user.effects';

export const parkingSpaceOccupancyFeatureKey = 'parking-space-occupancy';

@NgModule({
  imports: [
    StoreModule.forFeature(parkingSpaceOccupancyFeatureKey, reducer),
    EffectsModule.forFeature([UserEffects])
  ],
})

export class UserStoreModule { }
