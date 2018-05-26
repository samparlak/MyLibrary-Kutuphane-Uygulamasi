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

  ngOnInit() {
    this.yayinEviService.getYayinEvleri().subscribe((res)=>{
      this.yayinEvleri=res;
    })
  }

}
