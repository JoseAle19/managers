import { Injectable } from '@angular/core';
import { Manager } from '../models/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private managers: Manager[] = [
    { id: 1, name: 'John Doe 1', email: 'john@example.com', company: 'ABC Corp', country: 'USA', whatsapp: '1234567890', createdAt: '2023-01-01' },
    { id: 2, name: 'John Doe 2', email: 'john@example.com', company: 'ABC Corp', country: 'USA', whatsapp: '1234567890', createdAt: '2023-01-01' },
    { id: 3, name: 'John Doe 3', email: 'john@example.com', company: 'ABC Corp', country: 'USA', whatsapp: '1234567890', createdAt: '2023-01-01' },
    { id: 4, name: 'John Doe 4', email: 'john@example.com', company: 'ABC Corp', country: 'USA', whatsapp: '1234567890', createdAt: '2023-01-01' },
    { id: 5, name: 'John Doe 5', email: 'john@example.com', company: 'ABC Corp', country: 'USA', whatsapp: '1234567890', createdAt: '2023-01-01' },
  ];

  getManagers(): Manager[] {
    return this.managers;
  }

  getManagerById(id: number): Manager {
    return this.managers.find(manager => manager.id === id)!;
  }

  addManager(manager: Manager): void {
    manager.id = this.managers.length + 1;
    manager.createdAt = new Date().toISOString();
    this.managers.push(manager);
  }

  updateManager(updatedManager: Manager): void {
    const index = this.managers.findIndex(manager => manager.id === updatedManager.id);
    if (index !== -1) {
      this.managers[index] = updatedManager;
    }
  }

  deleteManager(id: number): void {
    this.managers = this.managers.filter(manager => manager.id !== id);
  }
}
