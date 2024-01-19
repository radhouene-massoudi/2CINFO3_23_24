import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id:any;
constructor(private ac: ActivatedRoute){
  console.log('cons')

}
ngOnInit(){
this.id=this.ac.snapshot.params['idt'];
alert(this.id);

}

}
