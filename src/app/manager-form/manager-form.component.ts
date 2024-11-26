import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from '../services/manager.service';
import { Manager } from '../models/manager';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manager-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './manager-form.component.html',
  styleUrl: './manager-form.component.scss'
})
export class ManagerFormComponent implements OnInit {
  
  manager: Manager = { id: 0, name: '', email: '', company: '', country: '', whatsapp: '', createdAt: '' };
  isEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private managerService: ManagerService
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.manager = this.managerService.getManagerById(Number(id));
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.managerService.updateManager(this.manager);
    } else {
      this.managerService.addManager(this.manager);
    }
    this.router.navigate(['/']);
  }
}
