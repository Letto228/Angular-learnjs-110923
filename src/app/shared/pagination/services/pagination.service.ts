export class PaginationService<T> {
  public getChunkProducts(products: T[], chunkSize: number): T[][] {
    const result: T[][] = [];
    products.forEach((item, index) => {
      if (index % chunkSize === 0) {
        result.push(products.slice(index, index + chunkSize));
      }
    });
    return result;
  }
}
