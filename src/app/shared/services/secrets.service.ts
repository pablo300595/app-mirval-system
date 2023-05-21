import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecretsService {
  private readonly environmentUrl: string;

  constructor(private http: HttpClient) {
    this.environmentUrl = '/__/firebase/init.json';
  }
  
  getConfig() {
    return this.http.get<any>(this.environmentUrl);
  }

}
