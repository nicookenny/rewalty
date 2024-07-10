import { IsEmail, Matches } from 'class-validator';

export class LoginRequestDTO {
  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  email: string;

  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {})
  password: string;
}
