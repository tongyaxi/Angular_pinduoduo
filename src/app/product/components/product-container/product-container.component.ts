import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { DialogService } from 'src/app/dialog';
import { ProductVariantDialogComponent } from 'src/app/shared/components';
import { ProductVariant } from '../../domain';
import { OrderService } from '../../services';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  variants$ : Observable<ProductVariant[]> |any;

  selectedIndex = 0;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private dialogService: DialogService,
              private router: Router) { }

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      filter(params => params.has("productId")),
      map(params => params.get("productId"))
    );

    this.variants$ = productId$.pipe(
      switchMap(productId => this.orderService.getProductVariantsByProductId(productId))
      );
  }

  handleDirectBuy(variants: ProductVariant[]) {

  }
  handleGroupBuy(variants: ProductVariant[]) {
    const top = 40;

    const formSubmitted = new EventEmitter();
    formSubmitted.subscribe(ev => {
      this.dialogService.saveData(ev);
      this.router.navigate(['/orders','confirm']);
    })
    const selected = new EventEmitter<number>();
    selected.subscribe(idx => {
      console.log(idx);
      this.selectedIndex = idx;
    })

    this.dialogService.open(ProductVariantDialogComponent, {
      // 如果 key 和 value 是一个名字，直接写就可以
      inputs: {
        variants: variants,
        selectedVariantIndex : this.selectedIndex
      },
      outputs: { 
        formSubmitted, selected
      },
      position: {
        top: `${top}%`,
        left: '50%',
        width: '100%',
        height: `${100 - top}%`
      }
    });
  }

}
