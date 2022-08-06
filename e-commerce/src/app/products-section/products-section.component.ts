import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {
  
  @Input() title = '';
  product = {title:"Phone"}
  constructor() { }

  ngOnInit(): void {
  }

}
