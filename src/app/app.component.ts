import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'Practices-Of-Input-Output Decarator';
  counter = 9;
  
  incrementCounter(event){
    this.counter = this.counter + 1;
  }

  ngOnInit(){
    
  }


} 
