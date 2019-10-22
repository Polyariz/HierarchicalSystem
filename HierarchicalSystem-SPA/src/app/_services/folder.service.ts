import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Folder } from '../_models/foder';

@Injectable({
    providedIn: 'root'
  })

  export class FolderService {
    baseUrl = environment.apiUrl;
  
    constructor(private http: HttpClient) {}
  
    getSubFolders(id): Observable<Folder[]> {
       //http://localhost:5000/folders/subfolders/1
      return this.http.get<Folder[]>(this.baseUrl + 'folders/subfolders/' + id);
    }
  
     //http://localhost:5000/folders
    getFolder(id): Observable<Folder> {
      return this.http.get<Folder>(this.baseUrl + 'folders/' + id);
    }

    // getFolderByPath(path): Observable<Folder> {
    //   return this.http.get<Folder>(this.baseUrl + 'folders/' + path);
    // }
  }
  