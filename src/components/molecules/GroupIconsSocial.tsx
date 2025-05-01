import { FaInstagram, FaTwitter, FaPaypal } from "react-icons/fa6";
import { SiAwwwards } from "react-icons/si";
import BtnSocial from "../atoms/BtnSocial";
import { typeInfoSocial } from "../../type/typeIconSocial";

const iconMap = {
    instagram: FaInstagram,
    paypal: FaPaypal,
    twitter: FaTwitter,
    portfolio: SiAwwwards
  };

export default function GroupIconsSocial ({social}:{social:typeInfoSocial}){
    return <>
        <div style={{display:"flex",gap:".5em"}}>
            {social.instagram_username && <BtnSocial name="instagram" user= {social.instagram_username} icon={iconMap.instagram} />}
            {social.paypal_email && <BtnSocial name="paypal" user= {social.paypal_email} icon={iconMap.paypal} />}
            {social.portfolio_url && <BtnSocial name="portfolio" user= {social.portfolio_url} icon={iconMap.portfolio} />}
            {social.twitter_username && <BtnSocial name="twitter" user= {social.twitter_username} icon={iconMap.twitter} />}
        </div>
    </>
}