import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  constructor(private api: ApiService) {}
  allWishlists: any = [];
  product: any = {};

  ngOnInit(): void {
    this.api.viewWishlist().subscribe(
      (result: any) => {
        console.log(result);
        this.allWishlists = result;
      },
      (result: any) => {
        console.log(result.error);
      }
    );
  }

  addWishlistItemToCart(productId: any) {
    this.api.viewProduct(productId).subscribe(
      (result: any) => {
        console.log(result);
        this.product = result;
        Object.assign(this.product, { quantity: 1 });
        console.log(this.product);
        this.api.addToCart(this.product).subscribe(
          (result: any) => {
            alert(result);
            this.api.cartCount();
          },
          (result: any) => {
            alert(result.error);
          }
        );
      },
      (result: any) => {
        alert(result.error);
      }
    );
  }

  deleteWishlistItem(id: any) {
    this.api.deleteWishlistProduct(id).subscribe(
      (result: any) => {
        console.log(result);
        this.allWishlists = result;
        alert('Product has been removed from wishlist');
      },
      (result: any) => {
        console.log(result.error);
      }
    );
  }
}
