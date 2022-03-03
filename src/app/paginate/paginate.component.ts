import { HttpParams } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { PaginateService } from './paginate.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {

  constructor(private paginateService: PaginateService) { }

  @Input() headers!: Array<any>;
  @Input() endpoint!: string;
  @Input() scope!: string;

  sortParams?: HttpParams;

  data: any;

  sortSetup: any;

  itensPerPage = 30;
  page = 0;
  paginationSideLimit = 5;

  ngOnInit(): void {
    this.consultar();
  }

  get pagesQty() {
    let numbers = [];
    for(let i = 0; i < this.data.totalPages; i++)
      numbers.push(i + 1);

    return numbers;
  }

  changePage(page: number) {
    this.page = page;
    this.consultar(this.sortParams);
  }
  
  changeItensPerPage() {
    this.page = 0;
    this.consultar(this.sortParams);
  }

  consultar(params?: HttpParams) {
    this.paginateService.get(this.scope, this.page, this.itensPerPage, params)
      .subscribe(x => this.data = x);
  }

  setSort(prop: string, sort: string) {
    this.sortSetup = {
      prop,
      sort
    }

    let params = new HttpParams();
    params = params.append('property', this.sortSetup.prop);
    params = params.append('order', this.sortSetup.sort)

    this.sortParams = params;

    return this.consultar(this.sortParams);
  }

}
