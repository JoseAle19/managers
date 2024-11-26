import { Component } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import { Manager } from '../models/manager';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manager-list',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './manager-list.component.html',
  styleUrl: './manager-list.component.scss'
})
export class ManagerListComponent {
  title = 'MANAGERS';
  managers: Manager[] = [];
  searchName: string = '';

  constructor(private managerService: ManagerService, private router: Router) {}

  ngOnInit() {
    this.getManagers();
  }

  getManagers(): void {
    this.managers = this.managerService.getManagers();
  }

  deleteManager(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este manager?')) {
      this.managerService.deleteManager(id);
      this.getManagers();
    }
  }

  editManager(id: number): void {

    this.router.navigate([`/edit/${id}`]);
  }
}
