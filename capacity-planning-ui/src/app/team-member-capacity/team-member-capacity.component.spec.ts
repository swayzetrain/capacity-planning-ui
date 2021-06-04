import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberCapacityComponent } from './team-member-capacity.component';

describe('TeamMemberCapacityComponent', () => {
  let component: TeamMemberCapacityComponent;
  let fixture: ComponentFixture<TeamMemberCapacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMemberCapacityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
