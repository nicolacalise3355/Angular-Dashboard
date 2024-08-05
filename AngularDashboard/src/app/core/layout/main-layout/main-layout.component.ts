import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'main-layout',
  templateUrl: 'main-layout.component.html',
})
export class MainLayout { }