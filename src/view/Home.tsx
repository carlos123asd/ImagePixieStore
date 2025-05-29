import TitSection from "../components/atoms/TitSection";
import GroupCardTags from "../components/molecules/GroupCardTags";
import Footer from "../components/organism/Footer";
import Header from "../components/organism/Header";
import Nav from "../components/organism/Nav";
import GroupImages from "../components/molecules/GroupImages";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../features/store/store";
import { typeUnsplashImage } from "../type/typeUnsplashImage";
import { IoCloseSharp } from "react-icons/io5";
import { getImagesThunk } from "../features/thunks/getImagesThunk";
import { setUser } from "../features/slices/listImagesSlice";
import { urlImagesInit } from "../features/urls/urls";
import Pagination from "../components/atoms/Pagination";


export default function Home(){
    const userState = useSelector<RootState, boolean>((state) => state.images.user as boolean)
    const images = useSelector<RootState, typeUnsplashImage[]>((state) => state.images.data)
    const dispatch = useDispatch<AppDispatch>()
    
    const handleDeleteFilterUser = () => {
         dispatch(getImagesThunk(urlImagesInit))
         dispatch(setUser(false))
    }

    return <>
        <Nav />
        <div className="main-content">
            <Header />
            <TitSection titulo="Trending searches" subtitulo={null} />
            <GroupCardTags />
            <div  style={{display: "flex", paddingLeft:"2%", gap:".5em", alignItems: "center"}}>
                {
                    userState ? 
                    <img style={{
                        borderRadius: "50%"
                    }} 
                    src={images[0].user.profile_image.large} 
                    alt="Image Profile" /> : 
                    <></>
                }
                <div className="sectionTitUserHome">
                    <TitSection
                    titulo={userState ? images[0].user.username : "New & Notable"} 
                    subtitulo={null} />
                    {userState && <span>Photos: {String(images[0].user.total_photos)} images</span>}
                </div>
                {userState && <IoCloseSharp onClick={handleDeleteFilterUser} className="deleteUserFilter" color="red" size={30}/>}
            </div>
            <GroupImages />
            <Pagination />
        </div>
        <Footer />
    </>
}