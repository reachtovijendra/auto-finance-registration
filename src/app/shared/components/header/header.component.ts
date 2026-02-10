import { Component, inject } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, ToggleSwitchModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly themeService = inject(ThemeService);

  get isDark(): boolean {
    return this.themeService.isDark();
  }

  set isDark(value: boolean) {
    if (value !== this.themeService.isDark()) {
      this.themeService.toggle();
    }
  }
}
