import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



//service
import { UserService } from '../user.service';

@Component({
   // moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

    newUser: any = {};
    message: string;
    reponse: boolean;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.newUser = {};
        this.reponse = false;
    }

    onSubmit() {
        
        if(this.newUser.prenom == undefined || this.newUser.nom == undefined || this.newUser.password == undefined || this.newUser.email == undefined){
            this.message = "Veuillez remplir tous les champs obligatoires.";
            this.reponse = false;
        }
        else {
            
            this.userService.create(this.newUser).subscribe((res => {
                console.log(res);
                this.reponse = true;
                console.log(this.reponse);
                this.message = "Votre inscription a bien été enregistré !";
            }));
        }		
    }
}

