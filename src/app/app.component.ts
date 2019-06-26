import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dynamic Theme';
  themes = ['deeppurple-amber', 'indigo-pink', 'pink-bluegrey', 'purple-green'];
  cssUrl: string;
  dTheme: string;
  constructor(public domSanitizer: DomSanitizer) {}
  ngOnInit(): void {
    // console.log(document.getElementsByTagName('head'));
    // this.loadIfNot(this.themes[3]);
    this.dynamicCss(this.themes[3]);
  }
  dynamicCss(css: string) {
    this.dTheme = css;
    this.cssUrl = '/assets/themes/' + css + '.css';
  }
  themesSelected(val: string) {
    this.dynamicCss(val);
    // this.disable(val);
    // this.loadIfNot(val);
  }
  // loadIfNot(cssId: string) {
  //   console.log(cssId);
  //   const url = '/assets/themes/' + cssId + '.css';
  //   if (!document.getElementById(cssId)) {
  //     console.log('in if');
  //     const head = document.getElementsByTagName('head')[0];
  //     const link = document.createElement('link');
  //     link.id = cssId;
  //     link.rel = 'stylesheet';
  //     link.type = 'text/css';
  //     link.href = url;
  //     link.media = 'all';
  //     head.appendChild(link);
  //   } else {
  //     console.log('in else', document.getElementById(cssId));
  //     (document.getElementById(cssId) as any).disabled = false;
  //   }
  // }
  // disable(cssId) {
  //   document.getElementById(cssId).remove();
  //   // (document.getElementById(cssId) as any).disabled = true;
  // }
}
