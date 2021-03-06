import { Funcionario } from './funcionario/funcionario';
import { Pessoa } from './pessoa/pessoa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BEERZER } from './app.api';
import { retry, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient)
  {}
  show(search: string)
    {
      return this.http.get<Pessoa[]>(`${API_BEERZER}`,{
      params: { tipo: search},});
    }

    peopleById(id :number)
    {
      return this.http.get<Pessoa[]>(`${API_BEERZER}/${id}`)
      .pipe(retry(1));
    }

    update(id: number, Pessoa:any )
    {
      return this.http.put<Pessoa[]>(`${API_BEERZER}/${id}`, Pessoa )
      .pipe(take(1));
    }

    delete(pessoa: Pessoa)
    {
      return this.http.delete<Pessoa[]>(`${API_BEERZER}/` + pessoa.id);
    }

    save(funcionario: Funcionario): Observable<Funcionario>{
     return this.http.post<Funcionario>(`http://localhost:8080/api/funcionario`, funcionario);
    }
}
