import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatagoriesComponent } from './Components/catagory/catagories/catagories.component';
import { SelectedCatComponent } from './Components/catagory/selected-cat/selected-cat.component';
import { HomeFreelancerDashboardComponent } from './Components/freelancerDashboard/home-freelancer-dashboard/home-freelancer-dashboard.component';
import { EditprofileComponent } from './Components/editprofile/editprofile.component';
import { ProfileComponent } from './Components/profile/profile/profile.component';
import { SettingComponent } from './Components/setting/setting.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { AddPortfolioComponent } from './Components/portfolio/add-portfolio/add-portfolio.component';
import { EditPortfolioComponent } from './Components/portfolio/edit-portfolio/edit-portfolio.component';
import { ListPortfolioComponent } from './Components/portfolio/list-portfolio/list-portfolio.component';
import { ViewPortfolioComponent } from './Components/portfolio/view-portfolio/view-portfolio.component';



 //signup &login
import { MultipleStep_registrationComponent } from './Components/multipleStep_registration/multipleStep_registration.component';
import { LoginComponent } from "./Components/Login/login/login.component";
import { ResetNewPasswordComponent } from './Components/Login/ResetNewPassword/ResetNewPassword.component';
import { ForgetPasswordComponent } from "./Components/Login/forgetPassword/forgetPassword.component";
//submit purposal
import { SubmitPurposalComponent } from './Components/jobs/purposals/submit-purposal/submit-purposal.component';
import { ViewAcceptedPurposalComponent} from './Components/jobs/purposals/view-accepted-purposal/view-accepted-purposal.component';




import { CreateComponent } from './Components/jobs/crud/create/create.component';
import { ListComponent } from './Components/jobs/crud/list/list.component';
import { EditComponent } from './Components/jobs/crud/edit/edit.component';
import { ViewComponent } from './Components/jobs/crud/view/view.component';
import { AddReviewComponent } from './Components/jobs/add-review/add-review.component';
import { MessagesComponent } from './Components/chat/messages/messages.component';
import { MessageComponent } from './Components/messages/message/message.component';

const routes: Routes = [
  {path:"Categories",component:CatagoriesComponent },
  {path:"Categories/:name",component: SelectedCatComponent },
  {path:"dashboard",component:HomeFreelancerDashboardComponent},
  {path:"listportfolio",component:ListPortfolioComponent},
  {path:"viewportfolio/:id",component:ViewPortfolioComponent},
  {path:"addportfolio",component:AddPortfolioComponent},
  {path:"editportfolio/:id" , component:EditPortfolioComponent},

  {path:"profile",component:ProfileComponent},

  {path:"profile/:id",component:ProfileComponent},

  {path:"setting/:id",component:SettingComponent},
  {path:"editProfile",component:EditprofileComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component: AboutComponent},
  {path:"home",component:HomeComponent},
  {path:"addproject",component:CreateComponent},
  {path:"listproject",component:ListComponent},
  {path:"editproject/:id",component: EditComponent },
  {path:"viewproject/:id",component: ViewComponent },
  {path:"addReview/:project_id/:developer_id",component: AddReviewComponent },
  {path:"realTimeChat/:id",component: MessagesComponent },
  //  {path:"messages/:id",component: MessageComponent},
  //  {path:"messages",component: MessageComponent},



//registration
{path:'signUp',component:MultipleStep_registrationComponent},
  //login
  { path: "login", component:LoginComponent},
  { path:"forgetPassword", component:ForgetPasswordComponent},
  { path:"resetPassword", component:ResetNewPasswordComponent},
//purposal
{ path:"purposal/:id", component:SubmitPurposalComponent},
{path:"viewAcceptPurposal/:id",component:ViewAcceptedPurposalComponent},


  {path:"",redirectTo:"home" , pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }