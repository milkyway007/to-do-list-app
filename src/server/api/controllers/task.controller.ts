import { type Request, type Response } from 'express'
import { AppDataSource } from '../config/database'
import { User } from '../entities/User.entity'
import { CreateUserDto, UpdateUserDto } from '../types/user.types'
import { NotFoundError } from '../types/error.types'

export class UsersController {
  private userRepository = AppDataSource.getRepository(User)

  async getAll(req: Request, res: Response): Promise<void> {
    const users = await this.userRepository.find()
    res.json(users)
  }
}