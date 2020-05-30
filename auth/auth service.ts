import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class Authservice{
    private authUrl='https://localhost:44372/api/GenerateJWTToken';
    
constructor(private userAuth: HttpClient) {}
login(model:any){
    return this.userAuth.post(this.authUrl,model).pipe(
        map((response:any) =>{
            let user =response;
            if(user =true){
                localStorage.setItem('token',user.token)
            }
        })
    )
}
    // rateJWTToken')
    
}
    
    
