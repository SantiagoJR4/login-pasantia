import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamentos } from '../interfaces/departamentos-interface';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  
  urlDivipola="https://www.datos.gov.co/resource/gdxc-w37w.json?$select=dpto&$group=dpto";

  constructor(private http:HttpClient) { }

  buscarDepartamento():Observable<Departamentos[]>{
    return this.http.get<Departamentos[]>(this.urlDivipola);
  
  }


}
