import { useNavigate } from "react-router-dom"
import { useImmer } from "use-immer"


export default function MainCard({items:{id,category,image,title,price}}){
    
    const navigate= useNavigate()
    return(
        <>
        <div onClick={()=> navigate(`/product/${id}`)} id={`item${id}`} className="flex flex-col gap-2 justify-between items-center w-52 hover:shadow-[0_0_0_2px_#D10024] py-2 px-4 shadow-[0_0_0_1px_#E4E7ED] h-[450px] text-center cursor-pointer duration-100  ">
            <img className="object-contain w-full h-[260px]" src={image} alt="" />
            <div className="">{category}</div>
            <div className="break-words">{title}</div>
            <div>{price}$</div>
        </div>
        </>
    )
}
export function SingleCard({data:{id,category,image,title,price}}){

    return(
        
        <>
            <div className="flex justify-between items-center max-w-container w-[90%]">
                <img className="h-full object-contain aspect-square" src={image}  alt="" />
                <div className=""></div>
            </div>
        </>
    )
}