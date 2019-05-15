import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { MotherComponent } from './nuclearfamily/mother/mother.component';
import { DaughterComponent } from './nuclearfamily/daughter/daughter.component';
import { SonComponent } from './nuclearfamily/son/son.component';
import { TitleComponent } from './Assignment/title/title.component';
import { ThumbnailComponent } from './Assignment/thumbnail/thumbnail.component';
import { DescriptionComponent } from './Assignment/description/description.component';
import { ReviewComponent } from './Assignment/review/review.component';
import { DirectiveComponent } from './super-html/directive/directive.component';
import { InbuiltPipesComponent } from './Pipes/inbuilt-pipes/inbuilt-pipes.component';
import { BadrouteComponent } from './notfound/badroute/badroute.component';



@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    FatherComponent,
    MotherComponent,
    DaughterComponent,
    SonComponent,
    ReviewComponent,
    TitleComponent,
    ThumbnailComponent,
    DescriptionComponent,
    DirectiveComponent,
    InbuiltPipesComponent,
    BadrouteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      // { 
      //   path:'',
      //   redirectTo:'review',
      //   pathMatch:"full"
      // }

      // ,

      {
        path:'family',
        component:FamilyComponent,
        children:[
          {
            path:'father',
            component:FatherComponent

          },
          {
            path:'mother',
            component:MotherComponent

          },
          {
            path:'daughter',
            component:DaughterComponent

          },
          {
            path:'son',
            component:SonComponent

          }


        ]

      },
      {
        path: 'review',
        component:ReviewComponent

      }
      ,
      {
        path: 'pipes',
        component:InbuiltPipesComponent

      },
      {
        path:'**',
        component:BadrouteComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
