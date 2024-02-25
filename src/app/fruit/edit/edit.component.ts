import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {

// formdata : Fruit = {
//   id:0,
//   name:'',
//   quantity:0,
//   price:0
// };

// formatdataId : Fruit[]=[]

mocfruitDta: Fruit = {
  id:0,
  name:'',
  quantity:0,
  price:0

}
  constructor( 
    private fruitService : FruitService,
     private route :ActivatedRoute,
     private router:Router
    ) {}

    ngOnInit(): void {
      let id = this.route.snapshot.params['id'];
       console.log('iddd',id);
       this.getFruitById(id);
    
    }


  getFruitById(id:string) {
    this.fruitService.editFruit(id).subscribe( data => {
      this.mocfruitDta = data;
      console.log('this.formatdataId ',this.mocfruitDta);
    })
  }

  update(data: Fruit) {
    this.fruitService.updateFruit(data).subscribe( res=> {
    console.log('res de update',res)
    this.router.navigate(['/fruit/home']);
 })
  }

}
