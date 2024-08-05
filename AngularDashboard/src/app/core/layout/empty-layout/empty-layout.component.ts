import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'empty-layout',
  templateUrl: 'empty-layout.component.html',
})
export class EmptyLayout { }
