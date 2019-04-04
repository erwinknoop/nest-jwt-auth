import { JwtModuleOptions } from "@nestjs/jwt";
import { ModuleMetadata } from "@nestjs/common/interfaces";
import { UsersService } from "../users/users-service.interface";

export interface AuthModuleOptions extends JwtModuleOptions {
  readonly usersService: UsersService;
}

export interface AuthModuleAsyncOptions
  extends Pick<ModuleMetadata, "imports"> {
  readonly useFactory: (...args: any[]) => Promise<AuthModuleOptions>;
  readonly inject: any[];
}
