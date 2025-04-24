import { CiHeart } from "react-icons/ci";

export default function CardInfoImage(){
    return <>
        <div style={{display:"flex", flexDirection:"column", gap: "1em"}}>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between"}}>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap: "1em"}}>
                    <img style={{
                        borderRadius: "50%"
                    }} src="https://images.unsplash.com/profile-1507853554791-242cf697adee?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64" alt="" />
                    <div style={{
                        display:"flex", 
                        flexDirection:"column"
                        }}>
                        <span style={{marginBottom: ".1em",fontWeight: "bold"}}>David Kovalenko</span>
                        <span style={{color: "#7A8599"}}>Views: 1000</span>
                    </div>
                </div>
                <div className="backgroundSegundary" style={{
                    display:"flex",
                    alignItems: "center",
                    width: "max-content",
                    padding: "0 1em",
                    borderRadius: "1em"
                }}>
                    <CiHeart size={30} color="black" />
                    <span>4600</span>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap: ".5em"}}>
                <span style={{fontWeight: "bold"}}>Photo Details</span>
                <div style={{display:"flex", flexDirection:"column", color: "#7A8599"}}>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <span>Resolution</span>
                        <span>4000 x 3000</span>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <span>Published date</span>
                        <span>2017-10-16</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}