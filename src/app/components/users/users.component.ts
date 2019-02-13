import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from './../../interfaces/iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: Array<IUser> = [];
  constructor(
    public usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => this.users = users);
  }

}
