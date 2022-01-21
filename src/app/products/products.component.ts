import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      image: 'http://placekitten.com/200/300',
      title: 'Camiseta',
      price: 80000,
      description: 'lorem ipsum asdasdada'
    },
    {
      id: '2',
      image: 'http://placekitten.com/200/300',
      title: 'Hoodie',
      price: 80000,
      description: 'lorem ipsum asdasdada'
    },
    {
      id: '3',
      image: 'http://placekitten.com/200/300',
      title: 'Mug',
      price: 80000,
      description: 'lorem ipsum asdasdada'
    },
    {
      id: '4',
      image: 'http://placekitten.com/200/300',
      title: 'Pin',
      price: 80000,
      description: 'lorem ipsum asdasdada'
    },
    {
      id: '5',
      image: 'http://placekitten.com/200/300',
      title: 'Stickers',
      price: 80000,
      description: 'lorem ipsum asdasdada'
    },
    {
      id: '6',
      image: 'http://placekitten.com/200/300',
      title: 'Stickers',
      price: 80000,
      description: 'lorem ipsum asdasdada'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

}
