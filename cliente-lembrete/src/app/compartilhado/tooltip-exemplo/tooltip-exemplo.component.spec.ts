import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipExemploComponent } from './tooltip-exemplo.component';

describe('TooltipExemploComponent', () => {
  let component: TooltipExemploComponent;
  let fixture: ComponentFixture<TooltipExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
