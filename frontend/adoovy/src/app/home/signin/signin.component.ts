import { Component } from '@angular/core';
import { account, ID } from '../../../lib/appwrite';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private mainService: ServiceService, private router: Router) { }



  erpUser: any
  async ngOnInit() {

    this.erpUser = JSON.parse(atob(localStorage.getItem('1001') as any));
    console.log('user==>', this.erpUser)
    if (this.erpUser.id) {
      console.log('alreday login');
      this.router.navigateByUrl('#')

    }
  }




  userEmail: any
  userPword: any
  async loginByEmaiPassword() {
    let obj: any = {}
    obj.email = this.userEmail
    obj.password = this.userPword


    let resp: any = await this.mainService.loginUser(JSON.stringify(obj))
    if (resp['error'] == false) {
      try {
        let resp2 = await account.createEmailSession(obj.email, obj.password);
        console.log('now', resp2)
        if (resp2.userId) {
          let setItem: any = {}
          setItem['id'] = resp2.userId
          setItem['session'] = 'session'  // will do letter

          localStorage.setItem('1001', btoa(JSON.stringify(setItem)));
          localStorage.removeItem('cookieFallback')

          Swal.fire('Success', 'Login Succesfully!', 'success');
          return
        } else {
          console.log('Something went wrong !!!!')
        }
      } catch (error) {
        console.log('Login field Failed =>', error)
        return
      }
    } {
      Swal.fire('warning', resp['data'], 'warning');
      return
    }





  }
}
