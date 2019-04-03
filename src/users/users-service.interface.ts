import { User } from "./user.interface";

export interface UsersService {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}
