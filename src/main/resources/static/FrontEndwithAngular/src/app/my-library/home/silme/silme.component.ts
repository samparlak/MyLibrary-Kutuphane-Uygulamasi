import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-silme',
  templateUrl: './silme.component.html',
  styleUrls: ['./silme.component.css']
})
export class SilmeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigate(['/'])
  },1000)

}
}