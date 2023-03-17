import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostsBlogComponent } from './all-posts-blog.component';

describe('AllPostsBlogComponent', () => {
  let component: AllPostsBlogComponent;
  let fixture: ComponentFixture<AllPostsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPostsBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPostsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
