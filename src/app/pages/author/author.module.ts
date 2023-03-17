import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { SharedModule } from "../../components/shared/shared.module";


@NgModule({
    declarations: [
        AuthorComponent
    ],
    imports: [
        CommonModule,
        AuthorRoutingModule,
        SharedModule
    ]
})
export class AuthorModule { }
