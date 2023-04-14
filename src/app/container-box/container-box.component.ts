import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerContent } from '../misc/app.constant';

@Component({
  selector: 'app-container-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container-box.component.html',
  styleUrls: ['./container-box.component.css']
})
export class ContainerBoxComponent {
  @Input() flexDirection?: boolean;
  @Input() bgColor?: string;
  @Input() content!: ContainerContent;
}
