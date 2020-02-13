import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbDatepicker, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LocalDataSource} from 'ng2-smart-table';
import {Turma} from './turma.model';

@Component({
  selector: 'escola-cmp',
  moduleId: module.id,
  templateUrl: 'turma.component.html'
})

export class TurmaComponent implements OnInit {
  turmas: Turma[] = [];
  turma: Turma;
  dia: Date;
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

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.turma = new Turma();
    this.turma.dataInicio = new Date();
    this.dia = new Date();
    this.data  = new LocalDataSource();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  addDia() {
    this.turma.dias.push(this.dia);
    this.dia = new Date();
  }

  removeDia(dia: Date) {
    const index = this.turma.dias.findIndex(diaSel => dia === diaSel);
    this.turma.dias.splice(index, 1);
  }

  adicionarTurma() {
    this.modalService.dismissAll();
    this.turmas.push(this.turma);
    this.data.load(this.turmas);
    this.turma = new Turma();
  }
}
