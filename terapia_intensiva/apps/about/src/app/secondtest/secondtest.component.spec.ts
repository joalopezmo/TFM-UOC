import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondtestComponent } from './secondtest.component';

describe('SecondtestComponent', () => {
  let component: SecondtestComponent;
  let fixture: ComponentFixture<SecondtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondtestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
