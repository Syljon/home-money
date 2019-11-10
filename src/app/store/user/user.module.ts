import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.effects';
import { reducer } from './user.reducer';

export const userFeatureKey = 'user';

@NgModule({
  imports: [
    StoreModule.forFeature(userFeatureKey, reducer),
    EffectsModule.forFeature([UserEffects])
  ],
})

export class UserStoreModule { }
