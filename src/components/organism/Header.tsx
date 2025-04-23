import Search from "../molecules/Search";

export default function Header(){
    return <>
        <div className="backHeader">
            <div className="header colorTextSegundary">
                <div className="header_content">
                    <h1 className="header_content_tit">PixieStore</h1>
                    <span className="header_content_sub">Beautiful, free images</span>    
                </div>
                <Search colorBtn="#fff"/>
            </div>
        </div>
    </>
}