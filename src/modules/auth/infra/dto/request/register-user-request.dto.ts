import { IsEmail, Matches } from 'class-validator';

export class RegisterUserRequestDTO {
  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  email: string;

  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {})
  password: string;
}
