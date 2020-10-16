import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseoneComponent } from './caseone.component';

describe('CaseoneComponent', () => {
  let component: CaseoneComponent;
  let fixture: ComponentFixture<CaseoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
