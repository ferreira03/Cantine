import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  public getToken(token): string {
    return this.jwtHelper.decodeToken(token);
  }
  public loggedIn(): boolean {
    if (localStorage.getItem('access_token') == null) {
      return false;
    } else {
      return true;
    }
  }

  getHeaderWithToken() {
    let headers = new HttpHeaders;
    headers = headers.append("authorization", localStorage.getItem('access_token'))
    return headers
  }

  getUserData() {
    return this.getToken(localStorage.getItem('access_token'))
  }


  registerUser(user): Observable<any> {
    const url = "http://localhost:8080/lunchtime/user/register";
    return this.http.put<any>(url, user, { observe: "response" })
      .pipe(
        tap(res => console.log(res)),
        catchError(this.handleError<any>('register'))
      )
  }
  loginUser(user): Observable<any> {
    const url = "http://localhost:8080/lunchtime/login";
    return this.http.post<{ access_token: string }[]>(url, user, { observe: 'response' })
      .pipe(
        tap(res => {
          var jwt = res.headers.get('authorization');
          var token = jwt[1];
          localStorage.setItem('access_token', jwt);
          console.log("token : " + localStorage.getItem('access_token'))
          console.log("connected : " + this.loggedIn())
          console.log("user : " + JSON.stringify(this.getToken(localStorage.getItem('access_token'))))

        }),
        catchError(this.handleError<any>('login'))
      )
  }

  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return (error);
    };
  }
}
