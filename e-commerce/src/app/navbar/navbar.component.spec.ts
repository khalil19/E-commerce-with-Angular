import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have logo', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="logo"]')).toBeTruthy()
    //expect(fixture.nativeElement.querySelector('img').src).toContain('/images/logo.png')
    
  });
  
  it('should have search', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="search"]')).toBeTruthy()
  });
  
  it('should have menu', () => {
    expect(fixture.nativeElement.querySelector('[data-test ="menu"]')).toBeTruthy()
  });


});
