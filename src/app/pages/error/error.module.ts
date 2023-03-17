import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ErrorComponent } from './error.component';


@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    SharedModule

  ]
})
export class ErrorModule { }
