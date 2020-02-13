import {Routes} from '@angular/router';
import {IconsComponent} from '../../pages/icons/icons.component';
import {EscolaComponent} from '../../pages/escola/escola.component';
import {TurmaComponent} from '../../pages/turma/turma.component';
import {CursoComponent} from '../../pages/curso/curso.component';
import {DisciplinaComponent} from '../../pages/disciplina/disciplina.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'icons', component: IconsComponent},
  {path: 'escola', component: EscolaComponent},
  {path: 'turma', component: TurmaComponent},
  {path: 'curso', component: CursoComponent},
  {path: 'disciplina', component: DisciplinaComponent}
];
