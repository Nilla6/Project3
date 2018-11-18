import { NgModule } from '@angular/core';
import { RatingComponent } from './rating/rating';
import { UserProfileComponent } from './user-profile/user-profile';
@NgModule({
	declarations: [RatingComponent,
    UserProfileComponent],
	imports: [],
	exports: [RatingComponent,
    UserProfileComponent]
})
export class ComponentsModule {}
