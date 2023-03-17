import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostPostsComponent } from './blog-post-posts.component';

describe('BlogPostPostsComponent', () => {
  let component: BlogPostPostsComponent;
  let fixture: ComponentFixture<BlogPostPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
