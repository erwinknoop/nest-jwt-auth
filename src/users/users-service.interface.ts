import { User } from "./user.interface";

export interface UsersService {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}
