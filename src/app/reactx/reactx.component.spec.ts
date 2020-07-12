import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactxComponent } from './reactx.component';

describe('ReactxComponent', () => {
  let component: ReactxComponent;
  let fixture: ComponentFixture<ReactxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
