import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementClientComponent } from './management-client.component';

describe('ManagementClientComponent', () => {
  let component: ManagementClientComponent;
  let fixture: ComponentFixture<ManagementClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
