import { useState } from "react";
import { typeIconSocial } from "../../type/typeIconSocial";

export default function BtnSocial({name,user,icon}:{name:string,user:string,icon:typeIconSocial}){
    const Icon = icon
    const [hover,setHover] = useState<boolean>(false)

    const linkHref = () => {
        if(name === "instagram"){
            return `https://www.instagram.com/${user}`
        }else if(name === "paypal"){
            return `https://paypal.me/${user}`
        }else if(name === "portfolio"){
            return user
        }else{
             return `https://twitter.com/${user}`
        }
    }

    return <>
        <a 
        className="btnSocial" 
        href={linkHref()} 
        target="_blank" 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <Icon size={30} color={hover ? "#36A1F4" : "#93A2B3"}/>
        </a>
    </>
}