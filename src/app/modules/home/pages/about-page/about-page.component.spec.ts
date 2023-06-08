import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageComponent } from './about-page.component';
import { ActivatedRoute } from '@angular/router';

const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: (param: string) => 'test_param' // Replace 'test_param' with your desired parameter value
    }
  }
};

describe('AboutPageComponent', () => {
  let component: AboutPageComponent;
  let fixture: ComponentFixture<AboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPageComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
