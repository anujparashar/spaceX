import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
baseUrl='https://api.spacexdata.com/v3/launches?limit=100';

  constructor(private http: HttpClient) { }

  getAllLaunchDtls() {
    return this.http.get(this.baseUrl);
  }
  
  getFilteredData(req: any) {
    let paramObj = new HttpParams();
      Object.keys(req).forEach((key) => {
        paramObj = paramObj.append(key, req[key]);
      })  
   return this.http.get(this.baseUrl, {params: paramObj })
  }
}
