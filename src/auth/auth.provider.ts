import { Provider } from "@nestjs/common";
import {
  AuthModuleOptions,
  AuthModuleAsyncOptions,
} from "./auth-module-options.interface";
import { AUTH_MODULE_OPTIONS } from "./auth.constants";

export function createAuthProvider(options: AuthModuleOptions): Provider {
  return { provide: AUTH_MODULE_OPTIONS, useValue: options };
}

export function createAsyncAuthProvider(
  options: AuthModuleAsyncOptions,
): Provider {
  return {
    provide: AUTH_MODULE_OPTIONS,
    useFactory: options.useFactory,
    inject: options.inject || [],
  };
}
