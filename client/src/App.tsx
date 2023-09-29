import { $catch } from "ar-catch";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const res = await $catch({ ep: "products" });
      setProducts(res);
    })();
  }, []);

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      <button>hi button</button>
    </>
  );
}

export default App;
