import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Escola} from './escola.model';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'escola-cmp',
  moduleId: module.id,
  templateUrl: 'escola.component.html'
})

export class EscolaComponent implements OnInit {
  // @ts-ignore
  @ViewChild('content') content: ElementRef;
  escolas: Escola[] = [];
  escola: Escola;
  data: LocalDataSource;

  settings = {
    pager: {
      display: true,
      perPage: 3
    },
    columns: {
      nome: {
        title: 'Nome'
      },
      cep: {
        title: 'CEP'
      },
      responsaveis: {
        title: 'Responsáveis'
      }
    },
    actions: {
      columnTitle: '',
      add: false,
      edit: false
    },
    delete: {
      deleteButtonContent: '<i style="color: darkred !important;" class="nc-icon nc-simple-remove"></i>',
    },
    attr: {
      class: 'table-borderless'
    }
  };
  responsavel: string;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.escola = new Escola();
    this.data = new LocalDataSource();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  addResponsavel() {
    this.escola.responsaveis.push(this.responsavel);
    this.responsavel = '';
  }

  removeResponsable(resp: string) {
    console.log(resp);
    const index = this.escola.responsaveis.findIndex(name => resp === name);
    console.log(index);
    this.escola.responsaveis.splice(index, 1);
  }

  adicionarEscola() {
    this.modalService.dismissAll();
    this.escolas.push(this.escola);
    this.data.load(this.escolas);
    this.escola = new Escola();
  }

  onUserRowSelect($event: any) {
    this.escola = $event.data;
    this.open(this.content);
  }
}
