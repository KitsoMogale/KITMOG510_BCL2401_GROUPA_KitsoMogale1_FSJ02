"use client";  // Client component

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link"; 

export default function ProductList(props) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://next-ecommerce-api.vercel.app/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
     if(props.data){
        setProducts(props.data)
     }
     else{
        fetchProducts();
     }
   
  }, []);

  let next = props.number?Number(props.number)+1:1;
  let previous = props.number==1?'/':Number(props.number)-1;

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
      
      <div class="flex  mt-4">
        {/* Conditional rendering of buttons */}
        {props.number !== 0 && (
          <button class="bg-gray-800 m-2 text-white px-4 py-2 rounded">
            <Link href={`${previous}`}>Previous</Link>
          </button>
        )}
        <button class="bg-gray-800 m-2 text-white px-4 py-2 rounded">
          <Link href={`${next}`}>Next</Link>
        </button>
      </div>
    </>
  );
}


