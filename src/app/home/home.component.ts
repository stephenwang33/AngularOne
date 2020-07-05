import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdServiceService } from "../prod-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})

export class HomeComponent implements OnInit {
  products:Product[];
  copyProducts: Product[];

  fields = [
    "ID",
    "Type",
    "Title",
    "Vendor",
    "SKU",
    "CreatedAt",
    "Price"
  ];


  constructor(private prodService: ProdServiceService, private router:Router) { }

  ngOnInit(): void {
    this.products = this.prodService.getDefaultProducts();
    this.copyProducts = this.prodService.getDefaultProducts();
  }



  searchProducts(newInput:String, selectedOption:String): void {
    this.products = this.copyProducts
      switch(selectedOption) {
        case "title" :
          this.products = this.products.filter(product => product.title.toLowerCase().match(newInput.toLowerCase()));
          break;
        case "vendor" :
          this.products = this.products.filter(product => product.vendor.toLowerCase().match(newInput.toLowerCase()));
          break;
        case "sku" :
          this.products = this.products.filter(product => product.sku.toLowerCase().match(newInput.toLowerCase()));
          break;
        case "createdAt" :
          this.products = this.products.filter(product => product.createdAt.toLowerCase().match(newInput.toLowerCase()));
          break;
        case "default" :
          break;
      }
  }


  newProductClick(): void {
    this.router.navigateByUrl('/product');
  }
}