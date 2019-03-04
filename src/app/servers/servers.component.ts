import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Itt egy uj szerver, name: ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  onResetUser() {
    this.userName = '';
  }
}
