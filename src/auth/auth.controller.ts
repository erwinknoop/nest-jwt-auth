import {
  Controller,
  Body,
  Post,
  UnauthorizedException,
  HttpCode,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Login } from "./login.interface";
import { Token } from "./token.interface";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("token")
  @HttpCode(200)
  public async token(@Body() login: Login): Promise<Token> {
    const token = await this.authService.createToken(login);

    if (!token) {
      throw new UnauthorizedException();
    }

    return token;
  }
}
