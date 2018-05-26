import { Component, OnInit } from '@angular/core';
import { YazarService } from '../yazar.service';
import { Yazar } from './yazar.model';

@Component({
  selector: 'app-yazar',
  templateUrl: './yazar.component.html',
  styleUrls: ['./yazar.component.css']
})
export class YazarComponent implements OnInit {

  private yazarlar:Yazar[]=[];

  constructor(private yazarService:YazarService) { }

  ngOnInit() {
    this.yazarService.getYazarlar().subscribe((res)=>{
      this.yazarlar=res;
      console.log(res);
    },
  (error)=>{
    console.log(error);
  })
  }

}
