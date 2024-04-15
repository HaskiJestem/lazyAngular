import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inside2Component } from './inside2.component';

describe('Inside2Component', () => {
  let component: Inside2Component;
  let fixture: ComponentFixture<Inside2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inside2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Inside2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
