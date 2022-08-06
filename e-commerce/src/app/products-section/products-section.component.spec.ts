import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSectionComponent } from './products-section.component';

describe('ProductsSectionComponent', () => {
  let component: ProductsSectionComponent;
  let fixture: ComponentFixture<ProductsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSectionComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has title', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="title"]')).toBeTruthy()
  });

  it('should has product cards', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="product-card"]')).toBeTruthy()
  });
  it('should has product cards gallery', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="product-cards-gallery"]')).toBeTruthy()
  });
 
});
