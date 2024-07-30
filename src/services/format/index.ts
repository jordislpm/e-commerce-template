


export function formatPrice(value: number): string {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }


  export function normalizeString(str: string): string {
    return str.toLowerCase()
            .normalize('NFD') 
            .replace(/[\u0300-\u036f]/g, '') 
            .replace(/[\W_]/g, '');
  }