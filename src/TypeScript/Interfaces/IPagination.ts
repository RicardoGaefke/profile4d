// @ts-ignore
export interface IPagination<T = {}> {
  Page?: number;
  PageSize?: number;
  Total?: number;
  Object?: T;
}

export class Pagination<T = {}> implements IPagination {
  Page: number;

  PageSize: number;

  Total: number;

  Object: T;

  constructor(page?: number, pageSize?: number, total?: number) {
    this.Page = page || 1;
    this.PageSize = pageSize || 30;
    this.Total = total || 30;
  }
}
