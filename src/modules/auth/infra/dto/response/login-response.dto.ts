export type LoginResponseDTO = {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
  };
};
