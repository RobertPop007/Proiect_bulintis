import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeFactorizationDocumentationComponent } from './prime-factorization-documentation.component';

describe('PrimeFactorizationDocumentationComponent', () => {
  let component: PrimeFactorizationDocumentationComponent;
  let fixture: ComponentFixture<PrimeFactorizationDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeFactorizationDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeFactorizationDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
