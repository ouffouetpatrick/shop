import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  product: Product | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ){}

  ngOnInit() {
    // First get the product id from the current route.
    // Capture tous les parametre qui sont dans la route
    const routeParams = this.route.snapshot.paramMap;
    // Initialiser la valeur de l'id qui est contenu dans 'productId' à 
    // la variable productIdFromRoute
    const productIdFromRoute = Number(routeParams.get('productId'));
    // Rechercher le produit
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
