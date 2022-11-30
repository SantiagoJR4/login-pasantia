import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../interfaces/departamentos-interface';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  
  urlDivipola="https://www.datos.gov.co/resource/gdxc-w37w.json";

  constructor(private http:HttpClient) { }

  buscarDepartamento():Observable<Departamento[]>{
    const url: string = `${this.urlDivipola}?$select=dpto&$group=dpto&$order=dpto` 
    return this.http.get<Departamento[]>(url);
  
  }


}
