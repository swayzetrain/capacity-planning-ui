import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
  <div class="container">
  <div class="content has-text-centered">
    <p>
      Swayzetrain &copy; 2021
    </p>
  </div>
  </div>
  </footer>
  `,
  styleUrls: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
