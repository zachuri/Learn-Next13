import React from 'react';
import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';

async function getProducts() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: products } = await supabase.from('products').select('*');

  return products;
}

function ProductCard({
  name,
  inventory,
  price,
  image
}: {
  name: string;
  inventory: string;
  price: string;
  image: string;
}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Inventory: {inventory}</p>
      <p>Price: {price}</p>
      <Image src={image} alt={name} height={300} width={300} />
    </div>
  );
}

const Home = async () => {
  const products = await getProducts();

  return (
    <main className="flex flex-col items-center justify-center">
      <h2>Products</h2>{' '}
      <div className="flex flex-col">
        {products?.map(product => {
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              inventory={product.inventory}
              price={product.price}
              image={product.image_url}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
