import SearchBar from "../../view/SearchBar"
import Post from "../../view/Post"
import ProductList from "../../view/ProductList"
import { useState,useEffect } from "react"
import { JSX } from "@emotion/react/jsx-runtime"
import { allProduct } from "../../../Type"
import Chat from "../../view/Chat"
const Home = () => {
  const [chat,setChat]=useState<boolean>(false);
  const [products,setProducts]=useState<JSX.Element[]>([]);
  useEffect(()=>{
    setProducts(Array.from({length:18},(_,i)=><ProductList key={i} image={allProduct[i].image} name={allProduct[i].name} location={allProduct[i].location} chat={chat} setChat={setChat} />))
},[]);

  return (
    <>
    <div className="flex flex-col gap-2 items-center overflow-hidden">
    <div className="mt-2">
    <SearchBar />
    </div>
    <Post />
    {/*heading:Find Out More*/}
    <div className="w-full">
    <h1 className="text-2xl pl-2">Find Out More</h1>
    </div>
    <div className="w-full flex justify-center">
    <hr className="w-[98vw] text-gray-400"/>
    </div>

    {/*products list*/}
    <div className="w-[98%%] gap-2 flex flex-row flex-wrap justify-center">
    {products}
    </div>
    {chat && <div className="w-[100%] h-[100%] flex fixed z-10 backdrop-blur-md">
    <div className="w-full h-full flex items-center justify-center">
    <Chat setChat={setChat} />
    </div>
    </div>}
    </div>
    </>
  )
}

export default Home