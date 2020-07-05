import { Component, OnInit } from '@angular/core';
import { ProdServiceService } from '../prod-service.service';
import { ActivatedRoute } from '@angular/router';
import { Product} from '../product';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.styl']
})
export class ProdComponent implements OnInit {
  prod: Product;
  sub: any;
  passingID: Number;
  constructor(private prodService:ProdServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
       const id = +params['id']; // (+) converts string 'id' to a number
       this.loadProduct(id);

       // In a real app: dispatch action to load the details here.
    });
  }

  loadProduct(id:Number) {
    this.passingID = id;
    this.prod = this.prodService.getProduct(id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
