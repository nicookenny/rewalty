export type RegisterBusinessRequestDTO = {
  email: string;
  password: string;

  business: {
    name: string;
    identifier: string;
    logo?: string;
  };
};
