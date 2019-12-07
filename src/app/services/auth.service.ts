import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  registerUser(user): Observable<any> {
    const url = "http://localhost:8080/lunchtime/user/register";
    return this.http.put(url, user, { responseType: 'json' })
      .pipe(
        tap(res => console.log('user added')),
        catchError(this.handleError<any>('addUser'))
      )
  }
  loginUser(user): Observable<any> {
    const url = "http://localhost:8080/lunchtime/login";
    return this.http.post(url, user, { responseType: 'json' })
      .pipe(
        tap(res => console.log('logged')),
        catchError(this.handleError<any>('error'))
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
