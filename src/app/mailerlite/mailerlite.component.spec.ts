import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailerliteComponent } from './mailerlite.component';

describe('MailerliteComponent', () => {
  let component: MailerliteComponent;
  let fixture: ComponentFixture<MailerliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailerliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailerliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
