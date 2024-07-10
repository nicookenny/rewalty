export interface BaseController<T, R> {
  execute: (dto: T) => Promise<R>;
}
