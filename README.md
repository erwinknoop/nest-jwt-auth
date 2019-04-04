![npm](https://img.shields.io/npm/dt/nest-jwt-auth.svg)
![npm](https://img.shields.io/npm/v/nest-jwt-auth.svg)

# Nest JWT authentication

This package is meant to simplify adding JWT authentication to your [Nest application](https://nestjs.com/). The package exposes a module which mounts an authentication endpoint at the `/auth/token` url.

## Usage

Using this module is really simple, all you need to do is create a user implements the provided `User` and create a service that implements the provided `UsersService` and register the module in your application.

The recommended way to register the module is to inject your own `UsersService` implementation by using `registerAsync` but the module is flexible enough to support other solutions as long as the interface is implemented.

```typescript
AuthModule.registerAsync({
  imports: [UsersModule],
  inject: [UsersService],
  useFactory: async (usersService: UsersService) => ({
    secretOrPrivateKey: "secretOrPrivateKey",
    usersService,
  }),
}),
```

Besides the users service it is possible to pass arguments for handling JWT, these arguments are the same as the arguments that you would use to register the `JwtModule` if you would implement JWT yourself.
