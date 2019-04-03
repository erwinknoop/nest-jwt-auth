import { Injectable, Inject } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcryptjs";
import { User } from "../users/user.interface";
import { Login } from "./login.interface";
import { Token } from "./token.interface";
import { JwtPayload } from "./jwt-payload.interface";
import { AuthModuleOptions } from "./auth-module-options.interface";
import { AUTH_MODULE_OPTIONS } from "./auth.constants";

@Injectable()
export class AuthService {
  constructor(
    @Inject(AUTH_MODULE_OPTIONS) private readonly options: AuthModuleOptions,
    private readonly jwtService: JwtService,
  ) {}

  public async createToken(login: Login): Promise<Token | null> {
    const user = await this.options.usersService.findByEmail(
      login.email && login.email.toLowerCase().trim(),
    );

    if (!user) {
      return null;
    }

    const passwordRight = await compare(login.password, user.password);

    if (!passwordRight) {
      return null;
    }

    return { token: this.jwtService.sign({ id: user.id.toString() }) };
  }

  public async validateUser(payload: JwtPayload): Promise<User | null> {
    const user = await this.options.usersService.findById(payload.id);

    if (!user) {
      return null;
    }

    return user;
  }
}
