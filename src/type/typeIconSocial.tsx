import { FaInstagram } from "react-icons/fa6";
import { SiAwwwards } from "react-icons/si";

export type typeIconSocial = typeof FaInstagram | typeof SiAwwwards

export type typeInfoSocial = {
    instagram_username:string | "",
    paypal_email:string | "",
    portfolio_url:string | "",
    twitter_username:string | ""
}