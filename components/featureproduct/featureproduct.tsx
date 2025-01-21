
import { client } from "@/sanity/lib/client"
import Image from "next/image"
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";


const getData = async ()=>{
    const fetchData= await client.fetch(`*[_type == "products"] [4..7]{
   _id,title,price,
   "imageUrl":image.asset->url
 }`)
    return fetchData

    };
    interface catagories{
      title:string,
      imageUrl:string,
      price:number,
      _id:number
     
    }


    const Feature = async() => {
 
   const SanityData = await getData()
         console.log(SanityData)

      return (
        <div>
          <h1 className="text-center text-4xl mt-20 mb-3 font-extrabold font-serif">Featured Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4">
        {SanityData.map((item:catagories,i:number)=>{
          
            return(
  
                 <div key={i} className="gap-6 border shadow-lg hover:scale-105 ">
                    <Link href={`/product/${item._id}`}>
              <Image 
                className="rounded-t-lg h-[250px]"
                src={item.imageUrl}
                alt="image"
                width={300}
                height={300}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-sky-700 font-serif dark:text-white">
                  {item.title}
                </h5>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                ${item.price}
                </p>
         
                <p className="flex items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer transition duration-300">
  <BsCart3 className="w-5 h-5 text-gray-700 hover:text-blue-500 transition duration-300" />
</p>
        
      
      

              </div>
              </Link>
              </div>
            
              
           
            )
        })}
      </div>
    </div>
      )
    }
    
    export default Feature;







