import { Product } from "helebba-sdk";
import { normalizeString } from "../format";

export function filterItemsByCategory(items: Product[], category: string): Product[] {

    if (category && category !== "all"){
    return items.filter((item) =>
      item.categories.some((cat) => normalizeString(cat.name).includes(normalizeString(category)))
    )}
    return items
  }