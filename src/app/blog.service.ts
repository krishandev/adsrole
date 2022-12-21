import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl='https://www.adsrole.com/'

  constructor(private http:HttpClient) { }
  getPosts()
  {
    const url=`${this.blogUrl}/wp-json/wp/v2/posts`
    return this.http.get(url).pipe(catchError(this.errorHandler))
  }

  getSinglePosts($post_slug:any)
  {
    //const url=`${this.blogUrl}/wp-json/wp/v2/posts/${id}`

    const url= `https://public-api.wordpress.com/rest/v1/sites/${this.blogUrl}posts/slug:$post_slug`

    return this.http.get(url).pipe(catchError(this.errorHandler))
  }
  errorHandler(error:HttpErrorResponse){
    return new Observable((observer:Observer<any>)=>{
      observer.error(error)
    })
  }
  
}
