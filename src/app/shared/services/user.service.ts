import { Injectable } from '@angular/core';
import { USER } from '../mock-data';
import { User } from '../models';

@Injectable()
export class UserService {

  getUserProfile(): User {
    return USER;
  }

}
