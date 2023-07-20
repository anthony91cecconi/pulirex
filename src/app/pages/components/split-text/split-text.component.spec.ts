import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitTextComponent } from './split-text.component';

describe('SplitTextComponent', () => {
  let component: SplitTextComponent;
  let fixture: ComponentFixture<SplitTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplitTextComponent]
    });
    fixture = TestBed.createComponent(SplitTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
