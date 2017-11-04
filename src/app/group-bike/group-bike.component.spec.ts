import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupBikeComponent } from './group-bike.component';

describe('GroupBikeComponent', () => {
  let component: GroupBikeComponent;
  let fixture: ComponentFixture<GroupBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
