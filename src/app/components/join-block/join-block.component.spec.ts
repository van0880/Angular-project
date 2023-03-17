import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinBlockComponent } from './join-block.component';

describe('JoinBlockComponent', () => {
  let component: JoinBlockComponent;
  let fixture: ComponentFixture<JoinBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
