import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyRoutingComponent } from './lazy-routing.component';

describe('LazyRoutingComponent', () => {
  let component: LazyRoutingComponent;
  let fixture: ComponentFixture<LazyRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
