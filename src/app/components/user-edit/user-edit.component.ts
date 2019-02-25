import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { IUser } from './../../interfaces/iuser';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  private user: IUser = Object.assign({});

  constructor(private route: ActivatedRoute, private router: Router,
              private usersService: UsersService,
              private messageService: MessageService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.usersService.getUser(id).subscribe(
      (user: IUser) => {
        this.user = user;
      }
    );
  }

  /**
   * Обработчик события формы "Submit"
   */
  onSubmit() {
    this.usersService.updateUser(this.user).subscribe(
      (user) => {
        this.messageService.add({severity: 'success',
          summary: 'Service Message',
          detail: `Data of user ${user.name} is successfully edited`
        });
        this.router.navigate(['/users']);
      },
      (error) => this.messageService.add({severity: 'error', summary: 'Error Message:', detail: error.message}),
      () => console.log('User edit comleted')
    );
  }

  /**
   * Обработчик нажатия на кнопку "Go back"
   */
  public navigateBack() {
    this.router.navigate(['/users']);
  }

}
