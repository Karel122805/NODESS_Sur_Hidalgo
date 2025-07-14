import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [CommonModule] 
})
export class App {
  protected title = 'nodesur';
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenuIfMobile(): void {
    if (window.innerWidth <= 768) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
