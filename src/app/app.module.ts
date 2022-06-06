import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import { UserAlbumComponent } from './components/user-album/user-album.component';
import { UserTodoComponent } from './components/user-todo/user-todo.component';
import { PanelComponent } from './components/panel/panel.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserInfoComponent,
    UserPostComponent,
    UserAlbumComponent,
    UserTodoComponent,
    PanelComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
