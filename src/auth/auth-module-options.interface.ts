import { JwtModuleOptions } from "@nestjs/jwt";
import { UsersService } from "../users/users-service.interface";

export interface AuthModuleOptions extends JwtModuleOptions {
  readonly usersService: UsersService;
}
