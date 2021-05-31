import { Request, Response } from "express";
import { UsersService } from "../../services/UsersService";

class UsersController {
  async create(request: Request, response: Response) {

    const usersService = new UsersService();

    const { fullname, email, password } = request.body;

    try {

      const user = await usersService.create({ fullname, email, password});

      return response.status(200).json({user});
    } catch (error) {
      return response.status(500).json({error: error.message});
    }

  }
}

export {UsersController};