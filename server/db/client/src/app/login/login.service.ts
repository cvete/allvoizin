import {EventEmitter, Injectable, isDevMode, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';



@Injectable()
export class LoginService {

    baseUrl = "http://localhost:3003";
    
    @Output() change: EventEmitter<null> = new EventEmitter();

    subject: Subject<Observable<any>> = new Subject(); //générateur d'evenements pour AuthComponent
    
    constructor(private http: HttpClient) {}

    public login(mail: string, password: string): Observable <any> {
        var obs: Observable<any> = this.http.get<any>(this.baseUrl + '/user/login/' + mail + '/' + password);
        this.subject.next(obs); 
        return obs;
    }
}

