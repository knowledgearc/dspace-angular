import {ChangeDetectionStrategy, Component} from '@angular/core';
import { Item } from '../../../../../../../app/core/shared/item.model';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import {
  listableObjectComponent
} from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { Context } from '../../../../../../../app/core/shared/context.model';
import {
  UntypedItemComponent as BaseComponent
} from '../../../../../../../app/item-page/simple/item-types/untyped-item/untyped-item.component';
import {NgxMasonryOptions} from "ngx-masonry";

/**
 * Component that represents an untyped Item page
 */
@listableObjectComponent(Item, ViewMode.StandalonePage, Context.Any, 'sigma')
@Component({
  selector: 'ds-themed-untyped-item',
  styleUrls: ['./untyped-item.component.scss'],
  templateUrl: './untyped-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UntypedItemComponent extends BaseComponent {
  public masonryOptions: NgxMasonryOptions = {
    gutter: 1,
    horizontalOrder: true,
    // itemSelector:".card",
    itemSelector:'.masonry-item',
    columnWidth:300
  };

  ngOnInit() {
    super.ngOnInit();
    console.log();
  }
}
