import { AuthModuleOptions } from "./auth-module-options.interface";
import { AUTH_MODULE_OPTIONS } from "./auth.constants";

export function createAuthProvider(options: AuthModuleOptions): any[] {
  return [{ provide: AUTH_MODULE_OPTIONS, useValue: options }];
}
