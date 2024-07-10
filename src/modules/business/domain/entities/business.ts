type BusinessProps = {
  id: string;
  logo: string;

  name: string;
  identifier: string;

  address: string;
};

export class Business {
  private props: BusinessProps;

  private constructor(props: BusinessProps) {
    this.props = props;
  }

  public static create(props: BusinessProps): Business {
    return new Business(props);
  }

  public get id(): string {
    return this.props.id;
  }
}
