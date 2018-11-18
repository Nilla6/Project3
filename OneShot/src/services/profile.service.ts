import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { UserProfile } from '../app/app.module';

@Injectable()
export class ProfileService{

    constructor(private db: AngularFireDatabase){
       
        
    }
    
    createProfile(): AngularFireObject<UserProfile> {
        const profileDefault = new UserProfile()
        const adKey = this.db.list('/profiles').push(profileDefault).key
        return this.db.object('/profiles/' + adKey)
    }

    updateProfile(profile: AngularFireObject<UserProfile>, data: any){
        return profile.update(data)
    } 
}