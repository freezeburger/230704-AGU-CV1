import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-ui-navbar',
  templateUrl: './ui-navbar.component.html',
  styleUrls: ['./ui-navbar.component.scss']
})
export class UiNavbarComponent {
  public online = true;

  constructor(){
   /*
    window.addEventListener('offline', () => this.online = false)
    window.addEventListener('online', () => this.online = true)
    */
  }

 /*
  @HostListener('window:offline')
  setOffline(){
    this.online = false
  }

  @HostListener('window:online')
  setOnline(){
    this.online = true
  }
  */

  @HostListener('window:offline', ['$event.type'])
  @HostListener('window:online', ['$event.type'])
  setOnline( status:string ){
    this.online  =  status === 'online'
  }

}
