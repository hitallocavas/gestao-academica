import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Disciplina} from './disciplina.model';
import {LocalDataSource} from 'ng2-smart-table';
import {RestService} from '../../../service/rest-service';

@Component({
  selector: 'escola-cmp',
  moduleId: module.id,
  templateUrl: 'disciplina.component.html'
})

export class DisciplinaComponent implements OnInit {
  disciplinas: Disciplina[] = [];
  disciplina: Disciplina;
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
      qtdAulas: {
        title: 'Quantidade de Aulas'
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

  constructor(private modalService: NgbModal, private service: RestService) {
  }

  ngOnInit(): void {
    this.disciplina = new Disciplina();
    this.data = new LocalDataSource();
    this.carregarDisciplinas();
  }

  async carregarDisciplinas() {
    await this.service.get('/disciplina/listar').subscribe(lista => {
      this.disciplinas = lista;
      this.data.load(lista);
    })
  }

  async salvar() {
    await this.service.post('/disciplina/salvar', this.disciplina).subscribe(lista => {
      this.carregarDisciplinas();
    })
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  adicionarCurso() {
    this.modalService.dismissAll();
    this.salvar();
    this.disciplina = new Disciplina();
  }

  onUserRowSelect($event): void {
    this.disciplina = $event.data;
    this.open(this.content)
  }
}
