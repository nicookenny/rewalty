export type UserSession = {
  id: string;
  email: string;
  profile: {
    first_name: string;
    last_name: string;
    phone: string;
    birthdate: string;
    document: string;
  };
};
