import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leads',
  template: `
    <h2>Leads</h2>
    <ul>
      <li *ngFor="let lead of leads">{{ lead.name }} - {{ lead.email }}</li>
    </ul>
  `,
})
export class LeadsComponent implements OnInit {
  leads: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/api/leads').subscribe(data => {
      this.leads = data;
    });
  }
}
