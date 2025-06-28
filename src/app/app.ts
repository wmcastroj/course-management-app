import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'course-management-app';

  readonly NETEC_URL = 'https://netec.com.mx/';
  readonly LOGO_URL =
    'https://static.wixstatic.com/media/fcaf90_041427bd105c44299c3df778a9b345b9~mv2.png/v1/crop/x_0,y_34,w_1205,h_408/fill/w_502,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo-NETEC-color.png';
}
