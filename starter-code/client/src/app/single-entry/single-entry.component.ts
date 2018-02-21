import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalService } from './../services/journal.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry: any;
  constructor(private route: ActivatedRoute,
    private journalService: JournalService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEntryDetails(params['id']);
    });
  }

  getEntryDetails(id) {
    this.journalService.get(id)
      .subscribe((entry) => {
        this.entry = entry;
      });
  }

}
