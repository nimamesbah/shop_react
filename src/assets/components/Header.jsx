import { Button } from "@mui/material";
import { useCallback, useContext, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../App";
import { useImmer } from "use-immer";
import axios from "axios";
import { setId } from "@material-tailwind/react/components/Tabs/TabsContext";
import { FilterCard } from "./Cards";
import { input } from "@material-tailwind/react";
import useGetAllProducts from "../../hooks/useGetAllProducts";
import { allProductsFetch } from "../../API/api-config";
import { useCartStore } from "../../hooks/usecartStore";


export default function Header(){
  const {cart}=useCartStore()
  const [categories,setCategories]= useImmer([])
  const {data,isLoading}= useGetAllProducts()
  const [filtered,setFiltered]=useImmer([])
  const navigate=useNavigate()
  const inp=useRef()
  const btn=useRef()
  const filterMenu = useRef()
  const location = useLocation()
  const categoriesFetch = useCallback(()=>{
        allProductsFetch('https://fakestoreapi.com/products/categories')
        .then(res=>setCategories(res))
      },[])
  function keyHandle(event){
    if(event.key==='Enter')
      btnClick()
    console.log(event)
  }
  function btnClick(){
    // !/\s/.tsest(inp.current.value)&&inp.current.value!==""?navigate(`/searched/${inp.current.value}`):"";inp.current.value=""
    if(!/\s/.test(inp.current.value)&&inp.current.value!=="")
      navigate(`/searched/${inp.current.value}`)
    inp.current.value=""
  }
  useEffect(()=> {categoriesFetch();window.addEventListener("keydown",keyHandle)},[])
  
  useEffect(()=>console.log(filtered.length))
  
  
  

  
  
    
    return(
        <>
            <header className='text-white'>
                  <div id='tHeader' className="w-full h-max bg-[#1E1F29]">
                      <div id="tHeader-container" className='max-w-container w-[90%] flex justify-between mx-auto flex-wrap content-between'>
                        <div className="flex justify-between w-max flex-wrap  gap-2 ">
                          <div className="flex items-center justify-between gap-1 text-sm py-2 w-max flex-wrap">
                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#D10024"/>
            </svg>
                            <span className='text-white'>021-44112233</span>
                          </div>
                          <div className="flex items-center justify-between gap-1 text-sm py-2 w-max flex-wrap">
                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#D10024"/>
            </svg>
                            <span className='text-white'>kheyliAlaki@gmail.com</span>
                          </div>
                          <div className="flex items-center justify-between gap-1 text-sm py-2 w-max flex-wrap">
                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#D10024" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                            <span className='text-white'>1465 alaki street karaj</span>
                          </div>
                        </div>
                        <div className="flex justify-between w-max flex-wrap gap-10 border-l border-white px-2">
                          <div className="flex items-center justify-between gap-1 text-sm py-2 w-max flex-wrap">
                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z" fill="#D10024"/>
            </svg>
                            <span className='text-white'>your wallet:10$</span>
                          </div>
                          <div className="flex items-center justify-between gap-1 text-sm py-2 w-max flex-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" fill="none" stroke="#D10024" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
            
                            <span className='text-white'>login</span>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div id="Bheader" className='w-full h-max bg-[#15161D] border-b-4 border-global-red'>
                    <div id="bHeader-container" className='w-[90%] max-w-container mx-auto flex flex-col gap-4 flex-wrap md:flex-row justify-between items-center py-3'>
                      <img className="cursor-pointer" onClick={()=>navigate("/")} src="/logo.png" alt=""  />
                      <div className="flex justify-center rounded-4xl overflow-x-hidden-hidden relative ">
                        <select className='text-black bg-white py-2.5 px-2' name="" id="">
                          <option value="">all categories</option>
                          <option value="">test 1</option>
                          <option value="">test 2</option>
                        </select>
                        <input className='bg-white md:w-[350px] w-[60%] text-black border-l px-2' type="text" name="" id="" placeholder='search here'  onClick={()=>setFiltered(data.filter(item=>item.title.toLowerCase().includes(inp.current.value.toLowerCase())))} onChange={()=>setFiltered(data.filter(item=>item.title.toLowerCase().trim().includes(inp.current.value.toLowerCase().trim())))} ref={inp} />
                        <Button ref={btn} onClick={btnClick} onKeyDown={(event)=>console.log("key",event.key)}  className='!bg-global-red !rounded-[0px]' variant="contained">search</Button>
                        <div ref={filterMenu} className={`md:w-[77%] w-full z-50 flex pt-2 rounded-2xl border-x border-global-red  text-black flex-col gap-2 items-center  absolute h-max left-0 md:left-[131px] top-[44px]  bg-white ${filtered.length===0||inp.current.value===""?"hidden":"block"} `}>
                          <svg onClick={()=>{setFiltered([]);inp.current.value=""}} className="cursor-pointer" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z" fill="#1C274C"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#1C274C"/>
                          </svg>  
                          {filtered.map(item=> <FilterCard items={item} setFiltered={setFiltered} input={inp}/>).slice(0,6)}

                          
                        </div>  
                      </div>
                      <div onClick={()=> navigate("/cart")} className="flex  group cursor-pointer justify-between flex-col items-center relative">
                        <div className="rounded-full w-5 text-sm text-black text-center bg-global-red right-0 top-[-13px] absolute">{cart.length}</div>
                        <svg className=' ' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='group-hover:stroke-global-red duration-300' d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                        <span className='group-hover:text-global-red duration-300'>your cart</span>
                      </div>
                      
                    </div>
                  </div>
                </header>
                <div className="bg-[#F9F6EE] border-b border-global-red ">
                      <div className="w-[90%] max-w-container mx-auto flex gap-2 flex-wrap py-2 sm:justify-start justify-center sm:text-xl text-sm ">
                      {categories.map(item=><h1 onClick={()=>navigate(`products/category/${item}`)} className='px-2 border-l hover:text-global-red cursor-pointer'>{item}</h1>)}
                      </div>
                    </div>
        </>
    )
}