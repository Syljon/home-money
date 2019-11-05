import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './components/error-message/error-message.component'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErrorMessageComponent
  ],
  exports: [ErrorMessageComponent]
})
export class SharedModule { }
