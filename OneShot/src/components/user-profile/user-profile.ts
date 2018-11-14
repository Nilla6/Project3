import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

/**
 * Generated class for the UserProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfileComponent {

  profile: any;
  profileForm: FormGroup;

  constructor(private ps: ProfileService, private fb: FormBuilder) {
    console.log('Hello UserProfileComponent Component');
  
  }

  startNewProfile(){
    this.profile = this.ps.createProfile()
    this.buildForm()
  }

  saveProfileChanges(){
    if(this.profileForm.status != 'VALID'){
      console.log('Form Not Valid')
      return
    }

    const data = this.profileForm.value
    this.ps.updateProfile(this.profile, data)
  }

  private buildForm(){
    this.profileForm = this.fb.group({
      fn: ['', Validators.required ],
      ln: ['', Validators.required ],
      img: ['', Validators.required ]
    });
    this.profile.subscribe(profile => {
      this.profileForm.patchValue(profile)
    })

  }
}
