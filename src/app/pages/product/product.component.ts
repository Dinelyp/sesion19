import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productos: any[] = [];

  constructor(
    private productService: ProductService,
    private router: Router 
  ) {
    this.productos = productService.getProductos();
  }

  showProducto(id: number) { 
    this.router.navigate(['empleado', id]); 
  }

  ngOnInit(): void {}



}

