import { Component, OnInit, Input } from '@angular/core'; 
import { FolderService } from 'src/app/_services/folder.service';
import { Folder } from '../_models/foder'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
  
export class FolderComponent implements OnInit {
 
  @Input() folder: Folder;
  @Input() folders: Folder[];

  constructor(private folderService: FolderService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe(data => { 
      this.folder = data['folder'];
    });

    // this.loadFolder();
  }

  //   loadFolder()
  // {
  //     this.folderService.getFolder(+this.route.snapshot.params['id']).subscribe((folder: Folder) => {
  //       this.folder = folder;
  //     }, 
  //     error => {
         
  //     });
  // }
}
