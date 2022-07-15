export const createProduct = ( 
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id, 
    stock: stock ?? 20, 
    isNew: isNew ?? true
  }
}

const p1 = createProduct(5, false, 0);
console.log(p1);



export const createProductv2 = ( 
  id: string | number,
  isNew: boolean = true,
  stock: number = 20
) => {
  return {
    id, 
    stock, 
    isNew
  }
}

const p2 = createProductv2(3, false, 0)
console.log(p2);

