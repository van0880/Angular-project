import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from "../../components/shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class ContactModule { }
