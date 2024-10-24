import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-campaigns',
  template: `
    <h2>Campaigns</h2>
    <ul>
      <li *ngFor="let campaign of campaigns">{{ campaign.name }} - {{ campaign.budget }}</li>
    </ul>
  `,
})
export class CampaignsComponent implements OnInit {
  campaigns: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/api/campaigns').subscribe(data => {
      this.campaigns = data;
    });
  }
}
