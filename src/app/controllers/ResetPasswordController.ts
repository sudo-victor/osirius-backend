import { Request, Response } from "express";

import { AuthsService } from "../../services/AuthsService";
import { ResetPasswordService } from "../../services/ResetPasswordService";

type Token = {
  id?: string;
}

class ResetPasswordController {
  async create(request: Request, response: Response) {

    const resetPasswordService = new ResetPasswordService();

    const { email } = request.body;
    
    try {
      const user = await resetPasswordService.sendMail(email);

      return response.status(201).json();
    } catch (error) {
      return response.status(500).json({ error: error.message});
    }
  }

  async update(request: Request, response: Response) {
    const resetPasswordService = new ResetPasswordService();
    const authService = new AuthsService();

    const {password, confirmPassword} = request.body;
    const { token } = request.params;

    const dataToken = authService.decryptedToken(token) as Token;

    try {
      await resetPasswordService.updatePassword({ password, confirmPassword, id: dataToken.id || "" });

      return response.status(201).json();
    } catch (error) {
      return response.status(500).json({ error: error.message});
    }
  }
}

export { ResetPasswordController };
