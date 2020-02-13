import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {IconsComponent} from '../../pages/icons/icons.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EscolaComponent} from '../../pages/escola/escola.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {TurmaComponent} from '../../pages/turma/turma.component';
import {CursoComponent} from '../../pages/curso/curso.component';
import {DisciplinaComponent} from '../../pages/disciplina/disciplina.component';
import {RestService} from '../../../service/rest-service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    Ng2SmartTableModule,
    HttpClientModule
  ],
  declarations: [
    IconsComponent,
    EscolaComponent,
    TurmaComponent,
    CursoComponent,
    DisciplinaComponent,
  ],
  providers: [RestService]
})

export class AdminLayoutModule {
}
