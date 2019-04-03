import { Module, DynamicModule } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { createAuthProvider, createAsyncAuthProvider } from "./auth.provider";
import {
  AuthModuleOptions,
  AuthModuleAsyncOptions,
} from "./auth-module-options.interface";

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {
  public static register(options: AuthModuleOptions): DynamicModule {
    return {
      module: AuthModule,
      providers: [createAuthProvider(options)],
      imports: [JwtModule.register(options)],
    };
  }

  public static registerAsync(options: AuthModuleAsyncOptions): DynamicModule {
    return {
      module: AuthModule,
      providers: [createAsyncAuthProvider(options)],
      imports: options.imports
        ? [...options.imports, JwtModule.registerAsync(options)]
        : [JwtModule.registerAsync(options)],
    };
  }
}
