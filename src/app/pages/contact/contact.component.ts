import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrService } from 'ngx-toastr';
import { LoadingComponent } from '../../loading/loading.component';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [LoadingComponent, CommonModule],
})
export class ContactComponent {
  constructor(private toastr: ToastrService) {}

  isSubmiting = false;

  formValues: FormValues = {
    name: '',
    email: '',
    message: '',
  };

  handleChange(event: any, fieldName: keyof FormValues): void {
    this.formValues[fieldName] = event.target.value;
  }

  handleSubmit = () => {
    if (this.formValues.message.trim() !== '') {
      this.isSubmiting = true;
      this.toastr.success('Correo enviado con éxito ¡Gracias!', 'Éxito');

      setTimeout(() => {
        this.isSubmiting = false;
      }, 3000);

      this.formValues = {
        name: '',
        email: '',
        message: '',
      };
    } else {
      this.toastr.error('Completa el campo de mensaje por favor', 'Error');
    }
  };
}
