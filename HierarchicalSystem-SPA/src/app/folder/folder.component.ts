import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFolders();
  }
  getFolders() {
    this.http.get('http://localhost:5000/folders').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
