import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signUp(data: any){
    return this.http.post(`auth/sign-up`,data).pipe(map((resp: any) =>{
      console.log('resp::', resp)
    }))
  }

}
