import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { YayinEvi } from '../yayin-evi.model';
import { YayinEviService } from '../../yayin-evi.service';


@Component({
  selector: 'app-yayin-evi-detay',
  templateUrl: './yayin-evi-detay.component.html',
  styleUrls: ['./yayin-evi-detay.component.css']
})
export class YayinEviDetayComponent implements OnInit {

  id:number;
  yayin:YayinEvi;

  constructor(private yayinService:YayinEviService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
        this.id=+params['id'];
    })

    this.yayinService.getYayinEvleri().subscribe((res)=>{
      this.yayin=res[this.id];
    })
  }

}
