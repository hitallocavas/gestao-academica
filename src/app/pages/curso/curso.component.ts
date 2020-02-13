import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Curso} from './curso.model';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'escola-cmp',
  moduleId: module.id,
  templateUrl: 'curso.component.html'
})

export class CursoComponent implements OnInit {
  cursos: Curso[] = [];
  curso: Curso;
  data: LocalDataSource;

  // @ts-ignore
  @ViewChild('content') content: ElementRef;


  settings = {
    pager: {
      display: true,
      perPage: 3
    },
    columns: {
      nome: {
        title: 'Nome'
      },
      escola: {
        title: 'Escola'
      },
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
    this.curso = new Curso();
    this.data  = new LocalDataSource();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  adicionarCurso() {
    this.modalService.dismissAll();
    this.cursos.push(this.curso);
    this.data.load(this.cursos);
    this.curso = new Curso();
  }

  onUserRowSelect($event): void {
    this.curso = $event.data;
    this.open(this.content)
  }
}
