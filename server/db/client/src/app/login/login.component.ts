import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { environment } from '../../environments/environment';
import { routerNgProbeToken } from '@angular/router/src/router_module';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  public isLoggedIn : boolean = false;  
  mail : string;
  password : string;
  returnUrl: string;
  env = environment;
  


 // msgs: Message[] =  [];

  constructor(private route: ActivatedRoute, private router: Router, private loginService : LoginService) { }

 newProfil : any;

  ngOnInit() {
   
    
  }

  login() {
    this.loginService.login(this.mail, this.password)
      .subscribe(res => {
        if (res[0]) {
          console.log("we are connected");
          this.isLoggedIn = true;
          this.newProfil = res[0];
          console.log(this.newProfil);
         
         // this.router.navigate(['/profile']);
        }else {
         
           console.log("we are NOT connected");
          
        }


      });
  }
}