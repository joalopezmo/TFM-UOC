import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { keys } from './env/keys';
import { TodoService } from './services/todo.service';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [RemoteEntryComponent, TodoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    AngularFireModule.initializeApp(keys.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [TodoService],
})
export class RemoteEntryModule {}
