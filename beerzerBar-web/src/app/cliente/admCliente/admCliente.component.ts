import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClienteService } from './../../cliente.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admCliente',
  templateUrl: './admCliente.component.html',
  styleUrls: ['./admCliente.component.css']
})
export class AdmClienteComponent implements OnInit {

  clientes$!: Observable<Cliente[]>;

  constructor(private service: ClienteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(clientes=>this.clientes$ = this.service.mostrarCliente());
  }
  OnEdit(id: any)
  {
    this.router.navigate(['editarCliente', id], {relativeTo: this.route});
  }
  OnDelete()
  {

  }

}
