import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-filtered-data',
  templateUrl: './filtered-data.component.html',
  styleUrls: ['./filtered-data.component.css']
})
export class FilteredDataComponent implements OnInit {
  filterData: any;
  constructor(private route: ActivatedRoute, private dashboardService: DashboardService) { }
  ngOnChanges(simple: SimpleChanges) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.dashboardService.getFilteredData(params).subscribe((res: any) => {
        this.filterData = res;
      })
    })
  }

}
