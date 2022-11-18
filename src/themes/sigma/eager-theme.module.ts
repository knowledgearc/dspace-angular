import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../app/shared/shared.module';
import { HomeNewsComponent } from './app/home-page/home-news/home-news.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HeaderComponent } from './app/header/header.component';
import { HeaderNavbarWrapperComponent } from './app/header-nav-wrapper/header-navbar-wrapper.component';
import { SearchModule } from '../../app/shared/search/search.module';
import { RootModule } from '../../app/root.module';
import { NavbarModule } from '../../app/navbar/navbar.module';
import {HomePageComponent} from './app/home-page/home-page.component';
import {
  TopLevelCommunityListComponent
} from './app/home-page/top-level-community-list/top-level-community-list.component';
import {BrowseByModule} from '../../app/browse-by/browse-by.module';
import {BrowseBySwitcherComponent} from './app/browse-by/browse-by-switcher/browse-by-switcher.component';
import { RecentlyAddedComponent } from './app/home-page/recently-added/recently-added.component';
import { SidebarComponent } from './app/home-page/sidebar/sidebar.component';
import { SigmaHomesidebarSearchComponent } from './app/home-page/sidebar/sigma-homesidebar-search/sigma-homesidebar-search.component';
import { FooterComponent } from './app/footer/footer.component';
import {RootComponent} from './app/root/root.component';
import { ContactComponent } from './app/contact/contact.component';
import {LoginPageComponent} from './app/login-page/login-page.component';
import {UntypedItemComponent} from './app/item-page/simple/item-types/untyped-item/untyped-item.component';
import {ItemPageModule} from '../../app/item-page/item-page.module';
import {NgxMasonryModule} from "ngx-masonry";

/**
 * Add components that use a custom decorator to ENTRY_COMPONENTS as well as DECLARATIONS.
 * This will ensure that decorator gets picked up when the app loads
 */
const ENTRY_COMPONENTS = [
  UntypedItemComponent
];

const DECLARATIONS = [
  ...ENTRY_COMPONENTS,
  HomePageComponent,
  HomeNewsComponent,
  HeaderComponent,
  HeaderNavbarWrapperComponent,
  NavbarComponent,
  TopLevelCommunityListComponent,
  BrowseBySwitcherComponent
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SearchModule,
        FormsModule,
        RootModule,
        NavbarModule,
        BrowseByModule, ItemPageModule, NgxMasonryModule
    ],
  declarations: [
    DECLARATIONS,
    RootComponent,
    RecentlyAddedComponent,
    SidebarComponent, FooterComponent, LoginPageComponent,
    SigmaHomesidebarSearchComponent,
    ContactComponent
  ],
  providers: [
    ...ENTRY_COMPONENTS.map((component) => ({ provide: component }))
  ],
})
/**
 * This module is included in the main bundle that gets downloaded at first page load. So it should
 * contain only the themed components that have to be available immediately for the first page load,
 * and the minimal set of imports required to make them work. Anything you can cut from it will make
 * the initial page load faster, but may cause the page to flicker as components that were already
 * rendered server side need to be lazy-loaded again client side
 *
 * Themed EntryComponents should also be added here
 */
export class EagerThemeModule {
}
