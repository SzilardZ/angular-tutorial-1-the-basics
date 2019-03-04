import {Component} from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})

export class DirectivePracticeComponent {
  showSecret = false;
  logs = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.logs.push(this.logs.length + 1);
    }
}
