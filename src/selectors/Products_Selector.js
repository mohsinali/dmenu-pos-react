export const productsByCategory = (products, category_id) => {    
  return products.filter((p) => {
    return p.category_id == category_id;
  });
}