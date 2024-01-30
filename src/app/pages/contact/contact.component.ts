import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private toastr: ToastrService) {}

  formValues: FormValues = {
    name: '',
    email: '',
    message: '',
  };

  handleChange(event: any, fieldName: keyof FormValues): void {
    this.formValues[fieldName] = event.target.value;
  }

  handleSubmit = () => {
    this.formValues.message.trim() !== ''
      ? this.toastr.success('Correo enviado con éxito ¡Gracias!', 'Éxito')
      : this.toastr.error('Completa el campo de mensaje por favor', 'Error');
  };
}
