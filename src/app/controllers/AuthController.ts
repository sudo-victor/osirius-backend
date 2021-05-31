import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { UsersService } from "../../services/UsersService";

class AuthController {
  async signin(request: Request, response: Response) {
    const { email, password } = request.body;

    const usersService = new UsersService();
    
    try { 
      const user = await usersService.findByEmail(email);
      
      const correctPassword = bcrypt.compareSync(password, user.password);
      if(!correctPassword) {
        return response.status(400).json({ error: "Password incorrect!"});
      }

      const payload = { id: user.id};
      const secretKey = process.env.AUTH_SECRET_KEY;

      const token = jwt.sign(payload, secretKey, { expiresIn: "2d"});

      return response.json({ user, token });
    } catch(error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { AuthController};
