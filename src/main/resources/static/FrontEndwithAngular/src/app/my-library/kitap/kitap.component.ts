import { Component, OnInit } from '@angular/core';
import { KitapService } from '../kitap.service';
import { Kitap } from './kitap.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-kitap',
  templateUrl: './kitap.component.html',
  styleUrls: ['./kitap.component.css']
})
export class KitapComponent implements OnInit {

private kitaplar:Kitap[]=[];

  constructor(private kitapService:KitapService) { }

  ngOnInit() {
    this.kitapService.getKitaplar().subscribe((res)=>{
     this.kitaplar=res;
     console.log(res);
    },
    (error)=>{
      console.log(error);
    });
  }



}
