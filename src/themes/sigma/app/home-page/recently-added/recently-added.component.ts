import {
  Component,
  OnInit
} from '@angular/core';
import { PaginatedSearchOptions} from '../../../../../app/shared/search/models/paginated-search-options.model';
import { RemoteData} from '../../../../../app/core/data/remote-data';
import { PaginatedList} from '../../../../../app/core/data/paginated-list.model';
import { Item} from '../../../../../app/core/shared/item.model';
import {  Router } from '@angular/router';
import { PaginationComponentOptions} from '../../../../../app/shared/pagination/pagination-component-options.model';
import { SearchService} from '../../../../../app/core/shared/search/search.service';
import { SortDirection, SortOptions} from '../../../../../app/core/cache/models/sort-options.model';
import { DSpaceObjectType} from '../../../../../app/core/shared/dspace-object-type.model';
import { toDSpaceObjectListRD} from '../../../../../app/core/shared/operators';
import {Observable, Subscription } from 'rxjs';

@Component({
  selector: 'ds-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent implements OnInit {

  itemRD$: Observable<RemoteData<PaginatedList<Item>>>;
  currentPageSubscription: Subscription;
  paginationConfig: PaginationComponentOptions;
  sortConfig: SortOptions;

  constructor(private router: Router,
              private searchService: SearchService,
  ) {
    this.paginationConfig = new PaginationComponentOptions();
    this.paginationConfig.id = 'rs';
    this.paginationConfig.maxSize = 0;

    // this.paginationConfig.pageSize = environment.rpp;
    // this.paginationConfig.pageSize = new DefaultAppConfig().rpp;
    this.paginationConfig.pageSize = 20;
    this.paginationConfig.currentPage = 1;
    this.sortConfig = new SortOptions('dc.date.accessioned', SortDirection.DESC);
  }

  ngOnInit(): void {

    this.itemRD$ = this.searchService.search(
      new PaginatedSearchOptions({
        pagination: this.paginationConfig,
        sort: this.sortConfig,
        dsoTypes: [DSpaceObjectType.ITEM]
      })).pipe(toDSpaceObjectListRD()) as Observable<RemoteData<PaginatedList<Item>>>;


  }

}
