import { Component, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public title: string = 'App works!';
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  
  public ngOnInit() {
   if (isPlatformBrowser(this.platformId)) {
      // Client only code.
   }
   if (isPlatformServer(this.platformId)) {
     // Server only code.
   }
  }
}
