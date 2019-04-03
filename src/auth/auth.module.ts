import { Module, DynamicModule } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { AuthModuleOptions } from "./auth-module-options.interface";
import { createAuthProvider } from "./auth.provider";

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {
  public static register(options: AuthModuleOptions): DynamicModule {
    return {
      module: AuthModule,
      providers: createAuthProvider(options),
      imports: [JwtModule.register(options)],
    };
  }
}
