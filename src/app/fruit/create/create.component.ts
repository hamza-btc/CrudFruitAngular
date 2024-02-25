import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

 constructor(
  private createService: FruitService,
  private router:Router) {}

ngOnInit(): void {}

newFruitList :any;

  addFruit(fruit:Fruit) {
  
 }

 onSubmit(data:Fruit){
    console.log('data save',data);
    this.createService.createFruit(data).subscribe( fruit=> {
    this.newFruitList = fruit;
    console.log('this.newFruitLis',this.newFruitList);
    this.router.navigate(['/fruit/home']);
    })
   }

}
