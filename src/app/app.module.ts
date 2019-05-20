import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
import { ConsumeparentComponent } from './consume/consumeparent/consumeparent.component';
import { Consumechild1Component } from './consume/consumechild1/consumechild1.component';
import { Consumechild2Component } from './consume/consumechild2/consumechild2.component';
import { KidComponent } from './consume/kid/kid.component';
import { FormsModule } from "@angular/forms";
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { AnimationComponent } from './Animate/animation/animation.component'



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
    BadrouteComponent,
    ConsumeparentComponent,
    Consumechild1Component,
    Consumechild2Component,
    KidComponent,
    TemplateformComponent,
    ReactiveformComponent,
    AnimationComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,
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
        path: 'consume',
        component:ConsumeparentComponent,
        children:[
          {
            path:'child1',
            component:Consumechild1Component
          },
          {
            path:'child2',
            component:Consumechild2Component
          }

        ]

      },
      {
        
        path: 'template',
        component:TemplateformComponent
      },
      {
        
        path: 'reactive',
        component:ReactiveformComponent
      },
      {
        
        path: 'animate',
        component:AnimationComponent
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
