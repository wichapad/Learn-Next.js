import Link from "next/link";
import Image from "next/image";
export default function navbar() {
  return (
    <nav>
      <div className="p-2 flex  justify-between border">
        <div>
          <Image src="/logo.png" width={50} height={50} alt="logo" />
        </div>
        <ul className="flex justify-center items-center">
          <Link href="/" className=" navbar-link">
            Home
          </Link>
          <Link href="/about" className=" navbar-link">
            About
          </Link>
          <Link href="/products" className=" navbar-link">
            Product
          </Link>
        </ul>
      </div>
    </nav>
  );
}
