import { Component, OnInit, Input } from '@angular/core';
import { Folder } from '../_models/foder';
import { FolderService } from '../_services/folder.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {
  subfolders: Folder[];
  folder: Folder;
  // @Input() folder: Folder;
  id:number;

  constructor(private folderService: FolderService, private route: ActivatedRoute) { }

  ngOnInit() {

   // this.id =  +this.route.snapshot.params['id']== null ? 1 : this.route.snapshot.params['id'];
    this.loadFolders(1);

    // this.route.data.subscribe(data => {
    //   this.folder = data['folder'];
    // }) 
  }

  loadFolders(id: number) {
    this.folderService.getFolder(id).subscribe((folder: Folder) => {
      this.folder = folder;
      
    }, error => {
     
    });

    this.folderService.getSubFolders(1).subscribe((folders: Folder[]) => {
      this.subfolders = folders;
    }, error => {
     
    }); 
  }
}
