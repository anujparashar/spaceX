import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {
  @Input('filterData') filterData: any;
  subscription: Subscription;
  allLaunchDtls = [];
  // for testing

  // imgSrc = [
  //   {
  //     src: 'https://www.w3schools.com//w3images/wedding.jpg',
  //     name: 'anuj'
  //   },
    //   {
    //   src:'https://www.w3schools.com//w3images/falls.jpg',
    //   name: 'anuj'
    // },
  //   {
  //     src: 'https://www.w3schools.com//w3images/rocks.jpg',
  //     name: 'anuj'
  //   },
  //   {
  //     src: 'https://www.w3schools.com//w3images/paris.jpg',
  //     name: 'anuj'
  //   },
  //   {
  //     src: 'https://www.w3schools.com//w3images/nature.jpg',
  //     name: 'anuj'
  //   },
  //   {
  //     src: 'https://www.w3schools.com//w3images/mist.jpg',
  //     name: 'anuj'
  //   },
  //   {
  //     src: 'https://www.w3schools.com//w3images/underwater.jpg',
  //     name: 'anuj'
  //   },
  //   {
  //     src: 'https://www.w3schools.com//w3images/ocean.jpg',
  //     name: 'anuj'
  //   },
  //   {
  //     src: 'https://www.w3schools.com//w3images/mountainskies.jpg',
  //     name: 'anuj'
  //   }
  // ]
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getAllLaunchDtls();
  }
  ngOnChanges(changes: SimpleChanges) {
    // get filtered data when filter applied
    this.allLaunchDtls = changes.filterData.currentValue;
  }
  // get itital all data record
  getAllLaunchDtls() {
   this.subscription =  this.dashboardService.getAllLaunchDtls().subscribe((res: any) => {
      this.allLaunchDtls = res;
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
