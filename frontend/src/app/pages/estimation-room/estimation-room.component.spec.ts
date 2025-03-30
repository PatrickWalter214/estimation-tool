import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationRoomComponent } from './estimation-room.component';

describe('EstimationRoomComponent', () => {
  let component: EstimationRoomComponent;
  let fixture: ComponentFixture<EstimationRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimationRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimationRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
