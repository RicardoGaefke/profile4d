const TotalPages = (total: number, pageSize: number = 50): number => {
  if (total % pageSize === 0) {
    return (total / pageSize);
  }

  return parseInt((total / pageSize).toString(), 10) + 1;
};

TotalPages.displayName = 'TotalPages';

export default TotalPages;
