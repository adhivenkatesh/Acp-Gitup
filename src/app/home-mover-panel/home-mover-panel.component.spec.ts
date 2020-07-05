import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMoverPanelComponent } from './home-mover-panel.component';

describe('HomeMoverPanelComponent', () => {
  let component: HomeMoverPanelComponent;
  let fixture: ComponentFixture<HomeMoverPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMoverPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMoverPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
