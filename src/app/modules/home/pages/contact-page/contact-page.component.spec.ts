import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageComponent } from './contact-page.component';
import { ActivatedRoute } from '@angular/router';

const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: (param: string) => 'test_param' // Replace 'test_param' with your desired parameter value
    }
  }
};

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPageComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
