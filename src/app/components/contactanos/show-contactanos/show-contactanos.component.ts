import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-show-contactanos',
  templateUrl: './show-contactanos.component.html',
  styleUrls: ['./show-contactanos.component.css']
})
export class ShowContactanosComponent implements OnInit {

  constructor(private https: HttpClient) { }

  onSubmit(){
    this.https.post<Details>('http://localhost:8090/showContactanos/getdetails',
    this.dataset).subscribe(
      res => {
        this.dataset = res;
        console.log(this.dataset);
        alert('Email enviado correctamente');
        this.dataset.name = '';
        this.dataset.email = '';
        this.dataset.message = '';
      });
  }
  dataset: Details = {
  name:'',
    email:'',
    message:''
  };

  ngOnInit(): void {
  }

}
interface Details{
  name:string;
  email:string;
  message:string;
}
