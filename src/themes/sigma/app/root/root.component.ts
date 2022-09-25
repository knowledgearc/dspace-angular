import { Component } from '@angular/core';
import { slideSidebarPadding } from '../../../../app/shared/animations/slide';
import { RootComponent as BaseComponent } from '../../../../app/root/root.component';

@Component({
  selector: 'ds-root',
  styleUrls: ['./root.component.scss'],
  templateUrl: './root.component.html',
  animations: [slideSidebarPadding],
})
export class RootComponent extends BaseComponent {

}
