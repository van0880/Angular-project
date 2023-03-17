import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPostRoutingModule } from './blog-post-routing.module';
import { BlogPostComponent } from './blog-post.component';
import { SharedModule } from "../../components/shared/shared.module";


@NgModule({
    declarations: [
        BlogPostComponent
    ],
    imports: [
        CommonModule,
        BlogPostRoutingModule,
        SharedModule
    ]
})
export class BlogPostModule { }
