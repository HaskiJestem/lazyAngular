import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inside1Component } from './inside1.component';

describe('Inside1Component', () => {
  let component: Inside1Component;
  let fixture: ComponentFixture<Inside1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inside1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Inside1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
