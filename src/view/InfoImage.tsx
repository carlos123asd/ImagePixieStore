import { Swiper, SwiperSlide } from "swiper/react";
import TitSection from "../components/atoms/TitSection";
import GroupCardTags from "../components/molecules/GroupCardTags";
import Footer from "../components/organism/Footer";
import Nav from "../components/organism/Nav";
import PhotoDescription from "../components/organism/PhotoDescription";
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import InfoAuthor from "../components/organism/InfoAuthor";
import { useLocation, useNavigate } from "react-router-dom";
import { typeUnsplashImage } from "../type/typeUnsplashImage";
import { useSelector } from "react-redux";
import { RootState } from "../features/store/store";
import GroupIconsSocial from "../components/molecules/GroupIconsSocial";
import { typeInfoSocial } from "../type/typeIconSocial";


export default function InfoImage(){
    const {state} = useLocation()
    const navigation = useNavigate()
    const {image} = state as { image: typeUnsplashImage } 
    const dataImageList = useSelector<RootState, typeUnsplashImage[]>((state) => state.images.data);
    const ListImageSwiper = dataImageList.filter((imageList) => {
        return imageList.id !== image.id
    }).slice(0,9)

    const handleViewImage = (image:typeUnsplashImage) => {
        navigation("/details",{ state: { image: image } })
    }
    const social: typeInfoSocial = {
        instagram_username: image.user.social.instagram_username || "",
        paypal_email: image.user.social.paypal_email || "",
        portfolio_url: image.user.social.portfolio_url || "",
        twitter_username: image.user.social.twitter_username || ""
    }

    return <>
        <Nav />
        <div className="contentMainInfoImage">
            <div className="contentLeftInfoImage">
                <PhotoDescription url={image.urls.full} descripcion={image.description} alt={image.alt_description} />
                <GroupCardTags setWord={() => {}} word={null} />
                <TitSection titulo="More Images" subtitulo={null} />
                <Swiper
                className="swiper"
                style={{width: "80%"}}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={'auto'}
                coverflowEffect={{
                   rotate: 50,
                   stretch: 0,
                   depth: 100,
                   modifier: 1,
                   slideShadows: true,
                 }}
                modules={[EffectCoverflow,Navigation,Pagination]}
                >   {
                        ListImageSwiper && ListImageSwiper.map((imageSwiper:typeUnsplashImage) => {
                            return <SwiperSlide className="swiper-slide">
                                <img style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "1em",}} 
                                onClick={() => handleViewImage(imageSwiper)}
                                src={imageSwiper.urls.full} 
                                alt={imageSwiper.alt_description ? imageSwiper.alt_description : "image not found"} />
                                </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
            <div className="contentRightInfoImage">
                <div style={{position: "fixed", width: "30%"}}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <TitSection titulo="Author" subtitulo={null} />
                        <GroupIconsSocial social={social} />
                    </div>
                    <InfoAuthor
                    id={image.id} 
                    name={image.user.name} 
                    numPhotos={image.user.total_photos} 
                    numLikes={image.likes} 
                    resolution={`${image.width} x ${image.height}`} 
                    datePublish={image.created_at} 
                    image={image.user.profile_image.medium}
                    download={image.urls.full}
                    />
                </div>
            </div>
        </div>
        <Footer />
    </>
}