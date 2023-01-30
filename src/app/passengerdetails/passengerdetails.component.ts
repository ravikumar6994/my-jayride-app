import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from '../common.service';
import { PassengerDetail, QuoteDetails } from './passengerdetails';

@Component({
  selector: 'app-passengerdetails',
  templateUrl: './passengerdetails.component.html',
  styleUrls: ['./passengerdetails.component.scss']
})
export class PassengerdetailsComponent implements OnInit,AfterViewInit {

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  dataSource = new MatTableDataSource<PassengerDetail>();
  displayedColumns: string[] = ['name', 'vehicleType', 'pricePerPassenger'];
  totalListing: number = 0;
  minPrice: number = 0;
  maxPrice: number = 0;
  avgPrice: number = 0;

  constructor(private cmService: CommonService) { }

  ngOnInit(): void {
    this.getPassengerData();
  }

  getPassengerData(): void {
    this.cmService.getPassengerDetails().subscribe((res: QuoteDetails) => {
      this.dataSource.data = res.listings.map((item) => new PassengerDetail(item));
      this.totalListing = this.dataSource.data.length;
      this.minPrice = this.dataSource.data.sort((a, b) => a.pricePerPassenger - b.pricePerPassenger)[0].pricePerPassenger;
      this.maxPrice = this.dataSource.data.sort((a, b) => a.pricePerPassenger - b.pricePerPassenger).reverse()[0].pricePerPassenger;
      this.avgPrice = (this.minPrice + this.maxPrice) / 2
    })
  }

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matSort
  }


}
