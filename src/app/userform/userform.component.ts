import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  addForm : any = FormGroup;
  submitted : boolean = false;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.createForm();
  }

  addUser(): void | boolean{
    this.submitted = true;
    if(this.addForm.invalid) {
      return false;
    }
    console.log('UserDetails',this.addForm.value)
    this.resetForm();
  }

  resetForm(){
    this.submitted = false;
    this.addForm = this.createForm();
  }


  createForm(){
    return this.fb.group({
     name : ['',[Validators.required]],
     email : ['',[Validators.required]],
     traveldateandtime : ['',[Validators.required]],
     bookingprice : ['',[Validators.required]],
     channel : ['',[Validators.required]],
     isMeetGreet : ['',[Validators.required]],
    })
  }


}
