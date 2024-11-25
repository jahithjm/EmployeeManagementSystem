import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiniationComponent } from './desiniation.component';

describe('DesiniationComponent', () => {
  let component: DesiniationComponent;
  let fixture: ComponentFixture<DesiniationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesiniationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesiniationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
