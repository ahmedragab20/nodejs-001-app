import { vFetch } from "very-good-fetch";
import { useEffect, useState } from "react";

import { IBook } from "./ts.types";
import Dropdown from "./components/Dropdown";
import Dialog from "./components/Dialog";

function App() {
  const [products, setProducts] = useState<IBook[]>([]);
  const [opened, setOpened] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [dialog, setDialog] = useState(false);
  const [previewBook, setPreviewBook] = useState<IBook | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const res = await vFetch("books", {
        vOptions: {
          cache: "session",
        },
      });

      setProducts(res?.value || res);
    })();
  }, []);

  useEffect(() => {
    if (!dialog) {
      setPreviewBook(undefined);
    }
  }, [dialog]);

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
          options={["📺 Preview", "🫶🏻 Special", "✍🏻 Edit", "🗑️ Delete"]}
          atrs={{
            className:
              "py-1 px-2 rounded-lg hover:bg-green-500 hover:text-white hover:shadow-lg text-sm cursor-pointer duration-100",
          }}
          position={position}
          onChange={function (value: any): void {
            if (value === "📺 Preview") {
              setDialog(true);
            }

            setOpened(false);
          }}
        />

        <div className="flex flex-wrap gap-4 mt-3">
          {products?.length ? (
            products?.map((product) => (
              <div
                key={product.uuid}
                className="flex flex-col items-center justify-center p-5 border rounded-xl hover:border-green-100 hover:bg-gradient-to-t hover:from-stone-50 duration-300 hover:to-green-50 w-64 select-none"
                onContextMenu={(e) => {
                  e.preventDefault();
                  setPosition({ top: e.clientY, left: e.clientX });
                  setPreviewBook(product);
                  setOpened(!opened);
                }}
              >
                <div className="h-64 w-full">
                  <img
                    src={product.poster_url}
                    alt={product.title}
                    className="w-full h-full object-contain select-none"
                    onContextMenu={(e) => {
                      e.preventDefault();
                    }}
                  />
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                  <h2 className="mt-2 text-lg font-bold truncate w-full text-center text-gray-700">
                    {product.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">{product.author}</p>
                  <p className="mt-2 text-sm text-gray-500">
                    {product.release_date}
                  </p>
                  <p className="mt-3 text-green-500 rounded-full px-3 border">
                    {product.rate}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="py-5">
              <h2 className="mt-2 text-xl font-bold truncate w-full text-center text-gray-600">
                No books found...
              </h2>
            </div>
          )}
        </div>
      </main>

      {/* Globals */}
      {dialog && (
        <Dialog
          toggler={setDialog}
          attrs={{
            className: "flex items-center justify-center",
          }}
        >
          <div className="bg-slate-100 border rounded-xl shadow-lg w-11/12 lg:w-[768px] md:max-w-3xl lg:max-w-none">
            {/* header */}
            <div className="sm:p-5 p-3 flex justify-between items-center border-b">
              <h2 className="text-xl font-bold text-slate-600">
                Book Preview{" "}
                <span className="mt-3 text-green-500 rounded-full px-1 border text-xs">
                  {previewBook?.rate}
                </span>
              </h2>
              <div>
                <button
                  onClick={() => setDialog(false)}
                  type="button"
                  className="text-red-500 hover:bg-red-100 p-1 rounded-lg duration-300 active:bg-red-500 active:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* body */}
            <div className="sm:p-5 p-3">
              {previewBook && (
                <div className="flex justify-between sm:flex-row flex-col">
                  <div className="h-full flex-grow-0 w-56 m-auto">
                    <div className="h-56 w-full">
                      <img
                        src={previewBook.poster_url}
                        alt={previewBook.title}
                        className="w-full h-full object-contain select-none pointer-events-none"
                        onContextMenu={(e) => {
                          e.preventDefault();
                        }}
                      />
                    </div>
                  </div>
                  <div className="h-full w-full sm:px-5 px-3 py-2">
                    <h3 className="text-2xl font-bold text-slate-600">
                      {previewBook.title}
                    </h3>
                    <div className="lg:my-4 my-2 text-sm sm:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit non quae corrupti eaque eos nisi tempora minima
                      architecto ipsam beatae ea perspiciatis iste quia aperiam
                      labore, quis vel ex cumque?
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                          {previewBook.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {previewBook.release_date}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="mt-5 border border-green-500 text-green-500 py-0.5 px-4 rounded-full hover:bg-green-50"
                      >
                        Special
                      </button>
                      <button
                        type="button"
                        className="mt-5 border border-blue-500 text-blue-500 py-0.5 px-4 rounded-full hover:bg-blue-50"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="mt-5 border border-red-500 text-red-500 py-0.5 px-4 rounded-full hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}

export default App;
