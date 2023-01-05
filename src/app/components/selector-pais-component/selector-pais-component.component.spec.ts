import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorPaisComponentComponent } from './selector-pais-component.component';

describe('SelectorPaisComponentComponent', () => {
  let component: SelectorPaisComponentComponent;
  let fixture: ComponentFixture<SelectorPaisComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorPaisComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorPaisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
