import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  producto: any = {}; 
  constructor(
    private activatedRoute: ActivatedRoute, 
    private productService: ProductService 
  ) {
    this.activatedRoute.params.subscribe((params) => { 
      this.producto = this.productService.getProducto(params['id']); 
    });
  }

  ngOnInit(): void {}
}

