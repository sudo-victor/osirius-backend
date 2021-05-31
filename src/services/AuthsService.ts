import jwt from 'jsonwebtoken';

class AuthsService {

  decryptedToken(token: string) {
    const data = jwt.decode(token)

    return data
  }

}

export { AuthsService };
