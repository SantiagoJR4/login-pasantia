import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento, Divipola } from '../interfaces/departamentos-interface';
import { Snies } from '../interfaces/snies-interface';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  
  urlDivipola="https://www.datos.gov.co/resource/gdxc-w37w.json";
  urlSnies="https://www.datos.gov.co/resource/n5yy-8nav.json";


  constructor(private http:HttpClient) { }

  buscarDepartamento():Observable<Departamento[]>{
    const url: string = `${this.urlDivipola}?$select=dpto&$group=dpto&$order=dpto`; 
    return this.http.get<Departamento[]>(url);
  
  }
  buscarMunicipio(termino:string):Observable<Divipola[]>{
    return this.http.get<Divipola[]>(`${this.urlDivipola}?dpto=${termino}`);
  }

  buscarSnies():Observable<Snies[]>{
    return this.http.get<Snies[]>(this.urlSnies);
  }


}
