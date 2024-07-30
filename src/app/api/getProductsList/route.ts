import { NextResponse } from 'next/server';
import { getProductsListHandler} from '@/services/products';

export async function GET(request: Request) {
  try {
    const {items, count, pageInfo} = await getProductsListHandler();
    return NextResponse.json({items, count, pageInfo});
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}