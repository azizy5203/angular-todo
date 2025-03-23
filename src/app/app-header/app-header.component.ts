import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './app-header.component.html',
    styleUrl: './app-header.component.scss',
})
export class AppHeaderComponent {
    header = "Angular Task Butler";
}