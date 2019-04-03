import { JwtModuleOptions } from "@nestjs/jwt";
import { UsersService } from "../users/users-service.interface";
import { ModuleMetadata } from "@nestjs/common/interfaces";

export interface AuthModuleOptions extends JwtModuleOptions {
  readonly usersService: UsersService;
}

export interface AuthModuleAsyncOptions
  extends Pick<ModuleMetadata, "imports"> {
  readonly useFactory: () => Promise<AuthModuleOptions>;
  readonly inject?: any[];
}
