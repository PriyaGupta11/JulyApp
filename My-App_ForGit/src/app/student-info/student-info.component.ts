import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IStudentinfo, Users } from '../Employee/employeeLocal';


@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})

export class StudentInfoComponent implements OnInit {
students: IStudentinfo[];
userlist: Users[];
errormessage;
  constructor(private _employeeService:EmployeeService)
  {
    this.userlist = 
   [{ Id: '1001', name: 'Anil SIngh', site: 'http://www.code-sample.com' },
    { Id: '1002', name: 'Alok', site: 'http://www.code-view.com' },
    { Id: '1003', name: 'Reena', site: 'http://www.code-sample.xyz' },
    { Id: '1004', name: 'Dilip', site: 'http://www.codefari.com' },
    ];
  }
  values = '';
  onKeyUp(event: any) {
      this.values = event.target.value;
  };

  addUser(user) {
      alert(JSON.stringify(user));
  };

  updateUser(user) {
      alert(JSON.stringify(user));
  };

  deleteUser(user) {
      alert(JSON.stringify(user));
  };

  ngOnInit():void {
    this._employeeService.getStudentInfo()
    .subscribe((data)=> this.students=data),
    console.log("getting student info in service", this.students),
    ((error)=> this.errormessage)
  }
}
