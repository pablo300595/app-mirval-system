import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { ActivatedRoute } from '@angular/router';

const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: (param: string) => 'test_param' // Replace 'test_param' with your desired parameter value
    }
  }
};

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
