import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public user={
    username: '',
    nombre:'',
    tipocliente:'',
    email: '',
    telefono:'',
    documento: '',
    password: ''

  }
  constructor(private userSerivce:UserService, private snack:MatSnackBar){}
  ngOnInit():void{

  }
  formSubmit(){
    console.log(this.user);
    if(this.user.username=='' || this.user.username == null){
      this.snack.open('El nombre de usuario es requerido, !!','Aceptar',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition: 'right'
      })
      return;
    }

    this.userSerivce.añadirUsuario(this.user).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('Usuario guardado','Usuario registrado con exito en el sistema','success')
      },(error)=>{
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema, !!','Aceptar',{
          duration:3000,
          
        })
      }
    )
  }

}
