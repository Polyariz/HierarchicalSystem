import {Injectable} from '@angular/core';
import {Folder} from '../_models/foder';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { FolderService } from '../_services/folder.service'; 
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class FolderDetailResolver implements Resolve<Folder> 
{
    constructor(private folderService: FolderService, private router: Router)
    {

    }

    resolve(route: ActivatedRouteSnapshot) : Observable<Folder>
    {
        return this.folderService.getFolder(route.params['id']).pipe(
            catchError(error => 
                {
                    this.router.navigate(['/root']);
                    return of(null); 
                })
        )
    }
}