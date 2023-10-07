import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { LoggingService } from '../LoggingService.service';
import { FormuserService } from './formuser.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertMailDuplicadoComponent } from '../alert-mail-duplicado/alert-mail-duplicado.component';

@Component({
  selector: 'app-formusuario',
  templateUrl: './formusuario.component.html',
  styleUrls: ['./formusuario.component.css']
})
export class FormusuarioComponent implements OnInit {
  display = "none";
  public checkboxAceptado: boolean = false;
  public mensajeError: string = '';
  constructor(private loggingService: LoggingService, private formuserService: FormuserService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  actualizarEstadoBoton() {
    const botonSubmit = document.querySelector('.boton') as HTMLButtonElement;
    botonSubmit.disabled = !this.checkboxAceptado;
  }
  onAgregarUsuario() {

    const name = (document.getElementById('nombreUsuario') as HTMLInputElement).value;
    const apellido = (document.getElementById('apellidoUsuario') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const telefono = (document.getElementById('telefono') as HTMLInputElement).value;
    const provincia = (document.getElementById('provincia') as HTMLInputElement).value;
    const localidad = (document.getElementById('localidad') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const confPassword = (document.getElementById('confirmarPassword') as HTMLInputElement).value;

    if (password !== confPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    else {
      const usuario: Usuario = {
        name: name,    //Kral le cambio a Name por problemas con el back 
        apellidoUsuario: apellido,
        email: email,
        telefono: parseInt(telefono),
        provincia: provincia,
        localidad: localidad,
        password: password,
      };

      const formData = new FormData();
      formData.append('name', name);
      //formData.append('apellidoUsuario', apellido);
      formData.append('email', email);
      //formData.append('telefono', telefono);
      //formData.append('provincia', provincia);
      //formData.append('localidad', localidad);
      formData.append('password', password);

      this.formuserService.altaUsuario(usuario).subscribe(
        (response) => {
          console.log('Usuario creado exitosamente', response);
          this.display = "block";
        },
        (error) => {
          console.error('Error al crear el usuario', error);
          if (error.status === 400) {
            this.mostrarAlertaCorreoDuplicado();
        }
        }
      );
    }
  }

  get telefono(): FormControl {
    return this.registerForm.get("telefono") as FormControl;
  }
  
  get provincia(): FormControl {
    return this.registerForm.get("provincia") as FormControl;
  }

  get localidad(): FormControl {
    return this.registerForm.get("localidad") as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get("password") as FormControl;
  }

  get confPassword(): FormControl {
    return this.registerForm.get("confPassword") as FormControl;
  }

  get terminos(): FormControl {
    return this.registerForm.get("terminos") as FormControl;
  }

  onCloseHandled() {
    this.display = "none";
    window.location.href = "/login";
  }
  onCloseHandledInicio() {
    this.display = "none";
    window.location.href = "/";
  }
  mostrarAlertaCorreoDuplicado() {
    const dialogRef = this.dialog.open(AlertMailDuplicadoComponent, {
      width: '300px',
      data: { mensaje: 'El correo electrónico ya está registrado.' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Alerta cerrada');
    });
  }
}