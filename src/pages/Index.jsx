import { useProducts } from "../integrations/supabase/index.js";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { data: products, error, isLoading } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid gap-4">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Button variant="outline">Add to Cart</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Index;
