import { MdLastPage } from "react-icons/md";
import { MdFirstPage } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../features/store/store";
import { getImagesThunk } from "../../features/thunks/getImagesThunk";

export default function Pagination(){
    const dispatch = useDispatch<AppDispatch>()
    const {next,prev,first,last} =  useSelector((state: RootState) => state.images.links as { next: string; prev: string; first: string; last: string })
    const selectoCurrentPage = useSelector<RootState, number>((state) => state.images.current_page)

    const handlePagination = (action:string) => {
        if(action==="first"){
            dispatch(getImagesThunk(first))
        }else if(action==="back"){
            dispatch(getImagesThunk(prev))
        }else if(action==="next"){
            console.log(next)
            dispatch(getImagesThunk(next))
        }else{
            console.log(last)
            dispatch(getImagesThunk(last))
        }
    }

    return <>
        <div style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "2em"
        }}>
            <div style={{
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "space-evenly",
            }}>
                <div onClick={() => handlePagination("first")} className="btnPagination"><MdFirstPage color="black" size={45} /></div>
                <div onClick={() => handlePagination("back")} className="btnPagination"><IoChevronBack color="black" size={34} /></div>
                <h2 style={{lineHeight:".1em"}}>{selectoCurrentPage}</h2>
                <div onClick={() => handlePagination("next")} className="btnPagination"><IoChevronBack style={{transform: "rotatey(180deg)"}} color="black" size={34} /></div>
                <div onClick={() => handlePagination("last")} className="btnPagination"><MdLastPage color="black" size={45} /></div>
            </div>
        </div>
    </>
}