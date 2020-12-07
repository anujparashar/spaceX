import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {
  yearArray = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2016", "2017", "2018", "2019", "2020"]
  yearFilter: any = null;
  landFilter: any = null;
  launchFilter: any = null;
  reqArray = [];
  reqObj = {}
  constructor(private dashboardService: DashboardService, public route: Router) { }

  ngOnInit(): void {
  }

  filter(filterType, filterVal) {
    switch (filterType) {
      case 'year':
        Object.keys(this.reqObj).find((val) => val === 'launch_year' && this.reqObj[val]===filterVal) ? delete this.reqObj['launch_year'] :
          this.reqObj['launch_year'] = filterVal;
        break
        
      case 'land':
        Object.keys(this.reqObj).find((val) => val === 'land_success' && this.reqObj[val]===filterVal) ? delete this.reqObj['land_success'] :
          this.reqObj['land_success'] = filterVal;
          break
      case 'launch':
        Object.keys(this.reqObj).find((val) => val === 'launch_succecss' && this.reqObj[val]===filterVal) ? delete this.reqObj['launch_succecss'] :
          this.reqObj['launch_succecss'] = filterVal;
          break
    }
    this.route.navigate(['/FilteredDataComponent'], {queryParams: this.reqObj});
  }

}
