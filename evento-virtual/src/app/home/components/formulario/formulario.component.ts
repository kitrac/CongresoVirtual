import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from './modal/modal.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  form: FormGroup;
  paises: any[] = ['Argentina', 'Peru', 'Chile'];

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    this.initForm();
  }

  open() {
    this.modalService.open(ModalComponent, {centered: true});
  }

  initForm() {
    this.form = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      apellido: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      pais: new FormControl(null, [Validators.required]),
      telefono: new FormControl(null, [Validators.required]),
      puesto: new FormControl(null, [Validators.required]),
    });
  }

}
