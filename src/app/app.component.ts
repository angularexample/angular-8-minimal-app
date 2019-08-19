import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>{{ title }}</h1>
      <h2>Angular 8 App with Bare Minimum Files and Configuration</h2>
      <h3>Created by AngularExample</h3>
      <p><a href="https://github.com/angularexample">https://github.com/angularexample</a></p>
      <h3>Source Code At:</h3>
      <p><a href="https://github.com/angularexample/angular-8-minimal-app">https://github.com/angularexample/angular-8-minimal-app</a></p>
    </div>
  `
})
export class AppComponent {
  title = 'angular-8-minimal-app';
}
