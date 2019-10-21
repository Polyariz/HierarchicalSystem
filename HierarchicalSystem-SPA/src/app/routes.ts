import {Routes} from '@angular/router';
import { FolderListComponent } from './folder-list/folder-list.component'; 

export const appRoutes: Routes = [ 
    {path: '', component: FolderListComponent},  
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
