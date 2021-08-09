using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Profile4d.Domain
{
  public class Pagination
  {
    public int Page { get; set; }
    public int PageSize { get; set; }
    public int Total { get; set; }

    public Pagination()
    {
      this.Page = 1;
      this.PageSize = 50;
    }

    /// <summary>
    /// Constructor for api request
    /// </summary>
    /// <param name="page"></param>
    /// <param name="pageSize"></param>
    public Pagination(int page, int pageSize)
    {
      this.Page = page;
      this.PageSize = pageSize;
    }
  }

  public class Pagination<T>
  {
    public int Page { get; set; }
    public int PageSize { get; set; }
    public int Total { get; set; }
    public T Object { get; set; }

    /// <summary>
    /// Constructor for API response
    /// </summary>
    /// <param name="page"></param>
    /// <param name="pageSize"></param>
    /// <param name="total"></param>
    /// <param name="Object"></param>
    public Pagination(int page, int pageSize, int total, T Object)
    {
      this.Page = page;
      this.PageSize = pageSize;
      this.Total = total;
      this.Object = Object;
    }

    /// <summary>
    /// Constructor without object
    /// </summary>
    /// <param name="total"></param>
    /// <param name="page"></param>
    /// <param name="pageSize"></param>
    public Pagination(int total, int page, int pageSize)
    {
      this.Total = total;
      this.Page = page;
      this.PageSize = pageSize;
    }
  }
}
