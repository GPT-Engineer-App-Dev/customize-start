import React from 'react';
import { useProducts, useAddProduct, useUpdateProduct, useDeleteProduct } from '../integrations/supabase/index.js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const { data: products, error, isLoading } = useProducts();
  const addProduct = useAddProduct();
  const updateProduct = useUpdateProduct();
  const deleteProduct = useDeleteProduct();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <Button onClick={() => updateProduct.mutate({ ...product, price: product.price + 1 })}>Increase Price</Button>
              <Button onClick={() => deleteProduct.mutate(product.id)}>Delete</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button onClick={() => addProduct.mutate({ name: 'New Product', price: 10 })}>Add Product</Button>
    </div>
  );
};

export default Index;