import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your App</h1>
      <p className="mb-6">This is a bare-bones application that you can modify and build upon. Start customizing it to fit your needs!</p>
      <Button variant="primary" size="lg">Get Started</Button>
    </div>
  );
};

export default Index;