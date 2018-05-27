import { Component, OnInit } from '@angular/core';
import { Kitap } from '../kitap/kitap.model';
import { KitapService } from '../kitap.service';
import {  ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-kitap-detay',
  templateUrl: './kitap-detay.component.html',
  styleUrls: ['./kitap-detay.component.css']
})
export class KitapDetayComponent implements OnInit {

  id:number;
  kitap:Kitap;

  constructor(private kitapService:KitapService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
    })

    this.kitapService.getKitaplar().subscribe((res)=>{
      this.kitap=res[this.id];
      console.log(res);
     },
     (error)=>{
       console.log(error);
     });

  }

}
