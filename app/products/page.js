import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Products | E-Commerce",
  description: "shopping home",
};
export default async function products() {
  const result = await fetch(`https://dummyjson.com/products?limit=10`);
  const data = await result.json();
  return (
    <>
      <div>
        <h1 className="text-center">All Products</h1>
        <div className="flex flex-wrap justify-center">
          {data.products.map((item) => (
            <div key={item.id} className="w-[300px] h-[300px] border m-2">
              <Link href={`/products/${item.id}`}>
                <div className=" p-2 bg-gray-600">
                  <h1 className="text-center">
                    {item.title} | $ {item.price}
                  </h1>
                </div>
                <div>
                  <Image
                    src={item.thumbnail}
                    width={300}
                    height={300}
                    alt={item.title}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
