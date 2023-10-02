import { $catch } from "ar-catch";
import { useEffect, useState } from "react";

import { IBook } from "./ts.types";
import Dropdown from "./components/Dropdown";
function App() {
  const [products, setProducts] = useState<IBook[]>([]);
  const [opened, setOpened] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    (async () => {
      const res = await $catch({ ep: "books", cache: "RELOAD" });
      setProducts(res);
    })();
  }, []);

  return (
    <>
      <header>
        <h1 className="p-3 text-center border-b text-2xl font-extrabold font-mono select-none">
          BOOK
          <span className="text-green-500">BOOK</span>
        </h1>
      </header>
      <main className="container mx-auto mt-4">
        <Dropdown<string>
          opened={opened}
          options={["💚 Love it", "🛀🏻 Edit", "🗑️ Delete"]}
          atrs={{
            className:
              "py-1 px-2 rounded-lg hover:bg-green-500 hover:text-white hover:shadow-lg text-sm border border-transparent hover:border-green-500 cursor-pointer",
          }}
          position={position}
          onChange={function (value: any): void {
            setOpened(false);
          }}
        />

        <div className="flex flex-wrap gap-4 mt-3">
          {products?.length
            ? products?.map((product) => (
                <div
                  key={product.uuid}
                  className="flex flex-col items-center justify-center p-5 border rounded-xl hover:border-green-500 w-64 cursor-pointer select-none"
                  onContextMenu={(e) => {
                    e.preventDefault();
                    setPosition({ top: e.clientY, left: e.clientX });

                    setOpened(!opened);
                  }}
                >
                  <div className="h-64 w-full">
                    <img
                      src={product.poster_url}
                      alt={product.title}
                      className="w-full h-full object-contain"
                      onContextMenu={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center w-full">
                    <h2 className="mt-2 text-lg font-bold truncate w-full text-center text-gray-700">
                      {product.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      {product.author}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      {product.release_date}
                    </p>
                    <p className="mt-3 text-green-500 rounded-full px-3 border">
                      {product.rate}
                    </p>
                  </div>
                </div>
              ))
            : (
              <div className="py-5">
                <h2 className="mt-2 text-xl font-bold truncate w-full text-center text-gray-600">
                  No books found...
                </h2>
              </div>
            )}
        </div>
      </main>
    </>
  );
}

export default App;
