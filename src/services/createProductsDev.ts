import { RoutesNav } from "@/contast";
import { Product } from "helebba-sdk";





export function createProductsFromRoutes(routes: typeof RoutesNav): Product[] {
    const products: Product[] = [];
  
    routes.forEach(route => {
      if (route.subRoutes) {
        route.subRoutes.forEach(subRoute => {
          const product: Product = {
            name: subRoute.name,
            desc: `Descripción para ${subRoute.name}`,
            typeId: 'tipo-1',
            contactId: 'contact-001',
            account: '123',
            contactName: 'John Doe',
            price: 49.99, // Precio ficticio
            tax: 9.99, // Impuesto ficticio
            total: 59.98, // Precio total ficticio
            slug: `producto-${subRoute.name.toLowerCase().replace(/\s+/g, '-')}`,
            hasStock: 50,
            stock: 100,
            barcode: '1234567890',
            sku: `SKU-${subRoute.name.toUpperCase().replace(/\s+/g, '-')}`,
            inCatalog: true,
            cost: 39.99, // Costo ficticio
            notes: [{ title: 'Nota 1', color: '#ffffff', content: 'Nota del producto.' }],
            purchasePrice: 45.99, // Precio de compra ficticio
            purchaseTax: 5.99, // Impuesto de compra ficticio
            weight: 2.0, // Peso ficticio
            tags: ['tag1', 'tag2'],
            images: ['image1.jpg', 'image2.jpg'],
            categoryId: route.route,
            factoryCode: `FC-${subRoute.name.toUpperCase().replace(/\s+/g, '-')}`,
            forSale: 1,
            forPurchase: 1,
            salesChannelId: 'channel-001',
            expAccountId: 'exp-001',
            warehouseId: 'wh-001',
            variants: [
              { variantId: `variant-${subRoute.name.toLowerCase().replace(/\s+/g, '-')}-1`, name: 'Variante estándar' },
              { variantId: `variant-${subRoute.name.toLowerCase().replace(/\s+/g, '-')}-2`, name: 'Variante premium' }
            ]
          };
  
          products.push(product);
        });
      } else {
        const product: ProductCreationCriteria = {
          name: route.name,
          desc: `Descripción para ${route.name}`,
          typeId: 'tipo-1',
          contactId: 'contact-001',
          account: '123',
          contactName: 'John Doe',
          price: 59.99, // Precio ficticio
          tax: 11.99, // Impuesto ficticio
          total: 71.98, // Precio total ficticio
          slug: `producto-${route.name.toLowerCase().replace(/\s+/g, '-')}`,
          hasStock: 30,
          stock: 75,
          barcode: '1234567890',
          sku: `SKU-${route.name.toUpperCase().replace(/\s+/g, '-')}`,
          inCatalog: true,
          cost: 49.99, // Costo ficticio
          notes: [{ title: 'Nota 1', color: '#ffffff', content: 'Nota del producto.' }],
          purchasePrice: 55.99, // Precio de compra ficticio
          purchaseTax: 7.99, // Impuesto de compra ficticio
          weight: 1.5, // Peso ficticio
          tags: ['tag1', 'tag2'],
          images: ['image1.jpg', 'image2.jpg'],
          categoryId: route.route,
          factoryCode: `FC-${route.name.toUpperCase().replace(/\s+/g, '-')}`,
          forSale: 1,
          forPurchase: 1,
          salesChannelId: 'channel-001',
          expAccountId: 'exp-001',
          warehouseId: 'wh-001',
          variants: [
            { variantId: `variant-${route.name.toLowerCase().replace(/\s+/g, '-')}-1`, name: 'Variante estándar' },
            { variantId: `variant-${route.name.toLowerCase().replace(/\s+/g, '-')}-2`, name: 'Variante premium' }
          ]
        };
  
        products.push(product);
      }
    });
  
    return products;
  }
  
  // Crear productos basados en RoutesNav
  const createdProducts = createProductsFromRoutes(RoutesNav);
  