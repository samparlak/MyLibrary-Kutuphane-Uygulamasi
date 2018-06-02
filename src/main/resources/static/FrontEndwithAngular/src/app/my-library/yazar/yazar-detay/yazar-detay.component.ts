/* yazar.component.html 'den  [routerLink]="[i]" ile "../i" şeklindeki uri ya yönlendirildiğimizde 
           this.route.params.subscribe((params)=>{
           this.id=+params['id'];
             })
   ile gelen path parametresini id:number değişkenimize atarız.
   Ve
           this.yazarService.getYazarlar().subscribe((res)=>{
           this.yazar=res[this.id];
           console.log(res);
           },
          (error)=>{
          console.log(error);
           })
           }
  ile atanan id değerini kullanarak REST ile getirdiğimiz verilere ait id indexine sahip
  nesneyi this.yazar=res[this.id]; ile atarız.Ve component içinde kullanırız.
  Örneğin ../3 path'ine yönlendirildiğimizde yazarlar[3] içindeki nesneyi ve 
  nesneye ait bilgileri component için görüntüleriz.
  Aynı işlemleri kitap.component.ts,yayin-evi.component.ts içinde yaparız.
    */


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Yazar } from '../yazar.model';
import { YazarService } from '../../yazar.service';

@Component({
  selector: 'app-yazar-detay',
  templateUrl: './yazar-detay.component.html',
  styleUrls: ['./yazar-detay.component.css']
})
export class YazarDetayComponent implements OnInit {

id:number;
yazar:Yazar;

  constructor(private yazarService:YazarService,
              private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((params)=>{
      this.id=+params['id'];
    })

    this.yazarService.getYazarlar().subscribe((res)=>{
      this.yazar=res[this.id];
      console.log(res);
    },
  (error)=>{
    console.log(error);
  })
  }

}
