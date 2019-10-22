import {Routes} from '@angular/router';
import { FolderListComponent } from './folder-list/folder-list.component'; 
import { FolderComponent } from './folder/folder.component'; 
import { FolderDetailResolver } from './_resolvers/folder-detail.resolver';

export const appRoutes: Routes = [ 
    {path: 'root', component: FolderListComponent}, 
    {path: 'root/:id', component: FolderComponent, resolve: {folder: FolderDetailResolver}},  
    // {path: 'root/:id', component: FolderComponent, resolve: {folder: FolderDetailResolver}}, 
    {path: '**', redirectTo: 'root', pathMatch: 'full'}
];
