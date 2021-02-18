import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GappNewsComponent } from './gapp-news.component';

describe('GappNewsComponent', () => {
  let component: GappNewsComponent;
  let fixture: ComponentFixture<GappNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GappNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GappNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
