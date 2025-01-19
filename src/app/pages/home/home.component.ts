import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { ComingSoonPageComponent } from "../coming-soon-page/coming-soon-page.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule, ComingSoonPageComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}