import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if it has @input product data', () => {
    expect(component.productData).toBeTruthy();
  });

  it('should has title', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="title"]')).toBeTruthy()
  });
  it('should has image', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="img"]')).toBeTruthy()
  });
  it('should has description', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="description"]')).toBeTruthy()
  });
  it('should has price', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="price"]')).toBeTruthy()
  });
  it('should has stars', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="stars"]')).toBeTruthy()
  });

  it('should has images gallery', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="imgs-gallery"]')).toBeTruthy()
  });

  it('should has img in images gallery', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="img-gallery"]')).toBeTruthy()
  });

  it('should has an actions section', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="actions"]')).toBeTruthy()
  });

  it('should has details button', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="see-details"]')).toBeTruthy()
  });

  it('should has buy button', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="buy"]')).toBeTruthy()
  });
});
