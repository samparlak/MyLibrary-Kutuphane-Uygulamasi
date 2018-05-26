import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Kitap } from '../kitap/kitap.model';
import { KitapService } from '../kitap.service';

@Component({
  selector: 'app-kitap-detay',
  templateUrl: './kitap-detay.component.html',
  styleUrls: ['./kitap-detay.component.css']
})
export class KitapDetayComponent implements OnInit {

  id:number;
  kitap:Kitap;

  constructor(private route:ActivatedRoute,
              private kitapService:KitapService) { }

  ngOnInit() {
  }

}
