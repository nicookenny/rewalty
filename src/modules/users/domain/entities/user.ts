type UserProps = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export class User {
  private props: UserProps;

  private constructor(props: UserProps) {
    this.props = props;
  }

  public static create(props: UserProps): User {
    return new User(props);
  }

  public get id(): string {
    return this.props.id;
  }
}
