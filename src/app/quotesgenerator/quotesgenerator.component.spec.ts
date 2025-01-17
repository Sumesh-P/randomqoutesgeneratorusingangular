import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesgeneratorComponent } from './quotesgenerator.component';

describe('QuotesgeneratorComponent', () => {
  let component: QuotesgeneratorComponent;
  let fixture: ComponentFixture<QuotesgeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotesgeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotesgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
