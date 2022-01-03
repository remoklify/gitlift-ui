import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getGithubUserWithUsername = async (username: string) => {
    return this.http.get<any>(
      `${environment.api.business_logic.uri}/user/public`,
      {
        params: { username },
      }
    );
  };
}
