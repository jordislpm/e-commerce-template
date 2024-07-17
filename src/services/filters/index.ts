import { Product } from "helebba-sdk";

export function filterItemsByCategory(items: Product[], category: string): Product[] {

    if (category && category !== "all"){
    return items.filter((item) =>
      item.categories.some((cat) => cat.name.toLowerCase() === category.toLowerCase())
    )}
    return items
  }