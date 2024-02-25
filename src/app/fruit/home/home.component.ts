import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor (private fruitService: FruitService) { }

 allFruits : Fruit[] = [];

 ngOnInit(): void {
    this.fruitService.getAll().subscribe( data => {
    this.allFruits = data;
    console.log('allFruitsata',this.allFruits); 
  })
 }


 delete(fruitId : number){
    console.log('fruitId',fruitId);
    this.fruitService.delete(fruitId).subscribe( data =>{
    this.allFruits = this.allFruits.filter(item =>item.id != fruitId)
    console.log('datta',data);
})


 }


}
