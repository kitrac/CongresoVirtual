import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {PresentacionComponent} from './components/presentacion/presentacion.component';
import {FormularioComponent} from './components/formulario/formulario.component';
import {EmpresasComponent} from './components/empresas/empresas.component';
import {EspecialistasComponent} from "./components/presentacion/especialistas/especialistas.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ModalComponent} from './components/formulario/modal/modal.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [HomeComponent, PresentacionComponent, FormularioComponent, EmpresasComponent, EspecialistasComponent, ModalComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  entryComponents: [ModalComponent],
})
export class HomeModule {
}
