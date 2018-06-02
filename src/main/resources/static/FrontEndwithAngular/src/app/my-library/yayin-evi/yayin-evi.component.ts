import { Component, OnInit } from '@angular/core';
import { YayinEvi } from './yayin-evi.model';
import { YayinEviService } from '../yayin-evi.service';

@Component({
  selector: 'app-yayin-evi',
  templateUrl: './yayin-evi.component.html',
  styleUrls: ['./yayin-evi.component.css']
})
export class YayinEviComponent implements OnInit {


  private yayinEvleri:YayinEvi[]=[];

  

  constructor(private yayinEviService:YayinEviService) { 
    
  }

  /* REST servislerini kullanarak getirdiğimiz verileri Front End tarafında oluşturduğumuz verilere atarız. */

  ngOnInit() {
    this.yayinEviService.getYayinEvleri().subscribe((res)=>{
      this.yayinEvleri=res;
    })
  }

}
