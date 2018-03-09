import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlGroupComponent } from './ml-group.component';

describe('MlGroupComponent', () => {
  let component: MlGroupComponent;
  let fixture: ComponentFixture<MlGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
