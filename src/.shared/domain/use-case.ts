export interface BaseUseCase<In, Out> {
  execute(props: In): Out;
}
