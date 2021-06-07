import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from '../constants/constants';

export interface DialogData {
  name: string;
  role: string;
}

@Component({
  selector: 'app-team-member-dialog',
  templateUrl: './team-member-dialog.component.html',
  styleUrls: ['./team-member-dialog.component.css']
})
export class TeamMemberDialogComponent implements OnInit {

  roles:string[] = Constants.roles;

    constructor(private dialogRef: MatDialogRef<TeamMemberDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    ngOnInit() {}

    save() {
        this.dialogRef.close(this.data);
    }

    close() {
        this.dialogRef.close();
    }

}
