import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:'Home | E-Commerce',
  description:"shopping home"
}

export default function Home() {
  return (
    <>
      
      <div className="m-4 flex flex-col justify-center items-center">
        <div className="text-center">
          <Image
            src="/vercel.svg"
            width={300}
            height={300}
            className="bg-white"
            alt="homeImage"
          />
          <div className="pt-2">
            <h1>Home Page</h1>
            <p>Welcome to shopping</p>
            <div className="my-2">
              <Link href="/products" className="bg-red-400 py-2 px-3 rounded">
                Click Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
