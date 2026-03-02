export type UserRole = "student" | "admin" | "mentor";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface AdminUser extends User {
  role: "admin";
}

export interface MentorUser extends User {
  role: "mentor";
}

export interface Session {
  token: string;
  user: User;
}
