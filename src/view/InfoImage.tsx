import { Swiper, SwiperSlide } from "swiper/react";
import TitSection from "../components/atoms/TitSection";
import GroupCardTags from "../components/molecules/GroupCardTags";
import Footer from "../components/organism/Footer";
import Nav from "../components/organism/Nav";
import PhotoDescription from "../components/organism/PhotoDescription";
import imageTest from "../assets/testInfoImage.jpg"
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import InfoAuthor from "../components/organism/InfoAuthor";

export default function InfoImage(){
    return <>
        <Nav />
        <div className="contentMainInfoImage">
            <div className="contentLeftInfoImage">
                <PhotoDescription />
                <GroupCardTags />
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
                >
                    <SwiperSlide className="swiper-slide"><img style={{width:"100%",height:"100%"}} src={imageTest} alt="" /></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img style={{width:"100%",height:"100%"}} src={imageTest} alt="" /></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img style={{width:"100%",height:"100%"}} src={imageTest} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="contentRightInfoImage">
                <div style={{position: "fixed", width: "30%"}}>
                    <TitSection titulo="Author" subtitulo={null} />
                    <InfoAuthor />
                </div>
            </div>
        </div>
        <Footer />
    </>
}