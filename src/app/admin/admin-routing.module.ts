import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./adminPages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: "authors",
        loadChildren: () => import('./adminPages/authors/authors.module').then(m => m.AuthorsModule)
      },
      {
        path: "categories",
        loadChildren: () => import('./adminPages/categories/categories.module').then(m => m.CategoriesModule)
      },
      {
        path: "posts",
        loadChildren: () => import('./adminPages/posts/posts.module').then(m => m.PostsModule)
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
