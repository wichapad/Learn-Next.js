import Image from "next/image"; 
export default async function productsDetail({ params: { id } }) {
  const result = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await result.json();
  return (
    <>
      
      <div>
        <Image src={data.thumbnail} width={300} height={300} alt={data.title}/>
        <div>
        <h1>Name: {data.title}</h1>
        <h2>Price: {data.price}</h2>
        <h2>Catagories: {data.category}</h2>
        <h3>Brand: {data.brand}</h3>
        <p>Description: {data.description}</p>
        </div>
      </div>
    </>
  );
}
