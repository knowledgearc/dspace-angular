import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigmaHomesidebarSearchComponent } from './sigma-homesidebar-search.component';

describe('SigmaHomesidebarSearchComponent', () => {
  let component: SigmaHomesidebarSearchComponent;
  let fixture: ComponentFixture<SigmaHomesidebarSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigmaHomesidebarSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigmaHomesidebarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
