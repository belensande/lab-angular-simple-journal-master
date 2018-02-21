import { Component, OnInit } from '@angular/core';
import { JournalService } from './../services/journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  journalEntries: any[];
  newEntry: any = {};
  success: boolean = false;
  showAddForm: boolean = false;
  errors: string[] = [];
  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.journalService.getList()
      .subscribe((entries) => {
        this.journalEntries = entries;
      });
  }

  addEntry(myForm: any) {
    if (myForm.valid) {
      this.journalService.add(this.newEntry)
        .subscribe(
          (res) => {            
              this.journalEntries.push(res);
              this.success = true;
              myForm.resetForm();
              this.toggleAddForm();
              this.errors = [];
        },
          (err) => {
            if (err.name == 'ValidationError' && err.errors) {
              this.errors = Object.keys(err.errors).map(key => err.errors[key].message);
            } else {
              this.errors.push[err.message];
            }
            this.success = false;
        });
    } else {
      this.success = false;
    }
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }
}
