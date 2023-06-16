import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CatService } from '../../../services/cat.service';

@Component({
  selector: 'app-cat-search',
  templateUrl: './cat-search.component.html',
  styleUrls: ['./cat-search.component.scss'],
})
export class CatSearchComponent implements OnInit {
  searchForm!: FormGroup;
  breeds: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private catService: CatService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      selectedBreeds: [],
      resultCount: 10,
    });

    this.searchCats();
  }

  searchCats(): void {
    this.catService.getAllBreeds().subscribe((res) => {
      this.breeds = res;
    });

    this.catService.loadCats().subscribe((res) => {
      console.log(res);
    });
  }

  resetFilters(): void {
    this.searchForm.reset({ resultCount: 10 });
  }

  onSubmit() {
    console.log(this.searchForm);
  }
}
