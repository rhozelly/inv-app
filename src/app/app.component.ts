import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inv-app';
  navs: any = [
    {
      name: 'dashboard',
      svg: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path class="fill-current text-gray-600 group-hover:text-cyan-600"
        d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
      <path class="fill-current text-gray-300 group-hover:text-cyan-300"
        d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
    </svg>`),
      url: '/dashboard'
    },
    {
      name: 'products',
      svg: this.sanitizer.bypassSecurityTrustHtml(`<svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none"><path
      d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
      class="fill-current text-cyan-400 dark:fill-slate-600"></path>
    <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
      class="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
    <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
      class="fill-current group-hover:text-sky-300"></path>
  </svg>`),
      url: '/products'
    },
    {
      name: 'categories', svg: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd"
        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
      <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
      </svg>`),
      url: '/categories'
    },
    {
      name: 'attributes', svg: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
        clip-rule="evenodd" /><path class="fill-current text-gray-300 group-hover:text-cyan-300"
        d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" /></svg>`),
        url: '/attributes'
    },
    {
      name: 'transactions', svg: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /><path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd"
        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
        clip-rule="evenodd" /></svg>`),
      url: '/transactions'
    },
    {
      name: 'reports', svg: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
        clip-rule="evenodd" /><path class="fill-current text-gray-300 group-hover:text-cyan-300"
        d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" /></svg>`),
        url: '/reports'
    },
  ]

  sanitizedContent: SafeHtml;
  breadcrumbs: any = '';

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd"
      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
      clip-rule="evenodd" />
    <path class="fill-current text-gray-300 group-hover:text-cyan-300"
      d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
  </svg>`);
  }

  selectedNav(value: any){
    this.breadcrumbs = value;
  }

}
