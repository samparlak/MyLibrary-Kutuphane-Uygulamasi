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
