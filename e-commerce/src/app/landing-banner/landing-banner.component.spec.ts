import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBannerComponent } from './landing-banner.component';
import { By } from '@angular/platform-browser';

describe('LandingBannerComponent', () => {
  let component: LandingBannerComponent;
  let fixture: ComponentFixture<LandingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have banner section',()=>{
    expect(fixture.nativeElement.querySelector("[data-test= banner-section]")).toBeTruthy()
  })

  it('should have a bg image',()=>{
    let compStyle = getComputedStyle(fixture.debugElement.query(By.css('.landing-banner')).nativeElement)
    console.log(compStyle.getPropertyValue('background-image'))
    expect(compStyle.getPropertyValue('background-image')).toContain("bg-banner.jpg")
  })

  it('should have banner section welcome text',()=>{
    expect(fixture.nativeElement.querySelector("[data-test= welcome-texte-h1]")).toBeTruthy()
  })
  it('should have banner section welcome text',()=>{
    expect(fixture.nativeElement.querySelector("[data-test= welcome-texte-h2]")).toBeTruthy()
  })
});
