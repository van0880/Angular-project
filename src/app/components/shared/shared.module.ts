import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurMisionComponent } from '../our-mision/our-mision.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { JoinBlockComponent } from '../join-block/join-block.component';
import { FooterComponent } from '../footer/footer.component';
import { CategoryBlockComponent } from '../category-block/category-block.component';
import { AuthorsListComponent } from '../authors-list/authors-list.component';
import { RouterModule } from '@angular/router';
import { BlogPostPostsComponent } from '../blog-post-posts/blog-post-posts.component';
import { HomeCategoriesComponent } from '../home-categories/home-categories.component';
import { FeaturedPostComponent } from '../featured-post/featured-post.component';
import { MainPostComponent } from '../main-post/main-post.component';
import { PostsHomeComponent } from '../posts-home/posts-home.component';
import { AllPostsBlogComponent } from '../all-posts-blog/all-posts-blog.component';
import { AllPostsComponent } from '../all-posts/all-posts.component';


@NgModule({
  declarations: [
    OurMisionComponent,
    NavbarComponent,
    JoinBlockComponent,
    FooterComponent,
    CategoryBlockComponent,
    AuthorsListComponent,
    AllPostsComponent,
    BlogPostPostsComponent,
    HomeCategoriesComponent,
    FeaturedPostComponent,
    MainPostComponent,
    PostsHomeComponent,
    AllPostsBlogComponent
  ],
  exports: [
    OurMisionComponent,
    NavbarComponent,
    JoinBlockComponent,
    FooterComponent,
    CategoryBlockComponent,
    AuthorsListComponent,
    AllPostsComponent,
    BlogPostPostsComponent,
    HomeCategoriesComponent,
    FeaturedPostComponent,
    MainPostComponent,
    PostsHomeComponent,
    AllPostsBlogComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class SharedModule { }
