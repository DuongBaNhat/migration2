import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entitiy/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>
        ) {}

    async create(user: User) {
        return await this.userRepo.save(user);
    }
    
    async getAll(): Promise<User[]> {
       return await this.userRepo.find();
    }
}
