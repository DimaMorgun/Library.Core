import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationHouseComponent } from './publication-house.component';

describe('PublicationHouseComponent', () => {
  let component: PublicationHouseComponent;
  let fixture: ComponentFixture<PublicationHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
