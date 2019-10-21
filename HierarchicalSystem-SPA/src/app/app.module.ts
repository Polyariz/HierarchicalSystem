import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FolderComponent } from './folder/folder.component';
import { appRoutes } from './routes';
import { FolderListComponent } from './folder-list/folder-list.component';
import { FolderService } from './_services/folder.service';

@NgModule({
   declarations: [
      AppComponent,
      FolderComponent,
      FolderListComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      FolderService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
