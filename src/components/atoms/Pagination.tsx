import { MdLastPage } from "react-icons/md";
import { MdFirstPage } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../features/store/store";
import { getImagesThunk } from "../../features/thunks/getImagesThunk";

export default function Pagination(){
    const dispatch = useDispatch<AppDispatch>()
    const {next,prev,first,last} =  useSelector((state: RootState) => state.images.links as { next: string; prev: string; first: string; last: string })
    const {current_page,total,per_page} = useSelector((state: RootState) => state.images as {current_page:number;total:number;per_page:number})

    const handlePagination = (action:string) => {
        let url = "";
        if(action==="first"){
            url=first
        }else if(action==="back"){
            url=prev
        }else if(action==="next"){
            url=next
        }else{
            url=last
        }
        dispatch(getImagesThunk(url))
    }

    return <>
        <div className="pagination">
            <div className="countPagination">
                {`${(per_page * current_page)} of ${total} images`}
            </div>
            <div style={{
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "space-evenly",
            }}>
                <div onClick={() => current_page !== 1 ? handlePagination("first") : <></>} className={`btnPagination ${current_page === 1 ? 'btnPaginationDisable' : ''}`}><MdFirstPage color="black" size={45} /></div>
                <div onClick={() => current_page !== 1 ? handlePagination("back") : <></>} className={`btnPagination ${current_page === 1 ? 'btnPaginationDisable' : ''}`}><IoChevronBack color="black" size={34} /></div>
                <h2 style={{lineHeight:".1em"}}>{current_page}</h2>
                <div onClick={() => handlePagination("next")} className="btnPagination"><IoChevronBack style={{transform: "rotatey(180deg)"}} color="black" size={34} /></div>
                <div className="btnPagination btnPaginationDisable"><MdLastPage color="black" size={45} /></div>
            </div>
        </div>
    </>
}