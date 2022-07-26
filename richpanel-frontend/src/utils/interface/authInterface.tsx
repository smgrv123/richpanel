interface signup {
  Name: string;
  Email: string;
  Password: string;
}

interface login {
  Email: string;
  Password: string;
}

export type { signup, login };
