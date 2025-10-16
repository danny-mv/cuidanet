
export interface User {
  id: number;
  fullName: string;
  email: string;
  password?: string;
  userType: 'paciente' | 'profesional';
}

let users: User[] = [
  {
    id: 1,
    fullName: 'Juan Perez',
    email: 'juan.perez@example.com',
    password: 'password123',
    userType: 'paciente',
  },
  {
    id: 2,
    fullName: 'Ana Garcia',
    email: 'ana.garcia@example.com',
    password: 'password456',
    userType: 'profesional',
  },
];

export const getUsers = () => users;

export const addUser = (user: Omit<User, 'id'>) => {
  const newUser = { ...user, id: users.length + 1 };
  users.push(newUser);
  return newUser;
};
