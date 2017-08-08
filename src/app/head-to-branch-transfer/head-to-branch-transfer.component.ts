import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-head-to-branch-transfer',
  templateUrl: './head-to-branch-transfer.component.html',
  styleUrls: ['./head-to-branch-transfer.component.scss']
})
export class HeadToBranchTransferComponent implements OnInit {
  @Output()
  formData = new EventEmitter<any>();
  form: FormGroup;
  recBranches;
  constructor(public fb: FormBuilder) {
    this.recBranches = [
      {
        place: 'Cochin Branch 01',
        acNo: '810000023322',
      },
      {
        place: 'Cochin Branch 02',
        acNo: '810023423322',
      },
      {
        place: 'Pune Branch 01',
        acNo: '912340023322',
      },
      {
        place: 'Pune Branch 02',
        acNo: '910000045622',
      },
    ];
  }

  ngOnInit() {
    this.form = this.fb.group({
      sndrAc : [{value: 1233140, disabled: true}, [Validators.required]],
      bal : [{value: 'Rs. 8,35,000', disabled: true}, [Validators.required]],
      dtTm : [{value: '08 Aug 2017 18:08', disabled: true}, [Validators.required]],
      tfamt: [0, [Validators.required]],
      recpBranch: [, [Validators.required]],
      remarks: [, [Validators.required]],
    });
  }
  finalSubmit(form) {
  console.log(form.value);
  this.formData.emit(form.value);
  }
}
