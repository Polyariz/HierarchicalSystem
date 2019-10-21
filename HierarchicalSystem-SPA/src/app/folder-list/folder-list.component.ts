import { Component, OnInit, Input } from '@angular/core';
import { Folder } from '../_models/foder';
import { FolderService } from '../_services/folder.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {
  subfolders: Folder[];
  folder: Folder;
  // @Input() folder: Folder;

  constructor(private folderService: FolderService) { }

  ngOnInit() {
    this.loadFolders(1);
  }

  loadFolders(id: number) {
    this.folderService.getFolder(1).subscribe((folder: Folder) => {
      this.folder = folder;
      
    }, error => {
     
    });

    this.folderService.getSubFolders(1).subscribe((folders: Folder[]) => {
      this.subfolders = folders;
    }, error => {
     
    });
  }
}
