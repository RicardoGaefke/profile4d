export interface IPagination<T = {}>
{
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

  constructor(page?: number, pageSize: number = 50, total: number = 50) {
    this.Page = page || 1;
    this.PageSize = pageSize || 50;
    this.Total = total || 50;
  }
}
