import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

import React from "react"


export default function CheckInHistory(){

    // const[progress,setprogress] = useState(0)

    // progress bar
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //       setprogress((oldProgress) => {
    //         if (oldProgress === 100) {
    //           return 0;
    //         }
    //         const diff = Math.random() * 10;
    //         return Math.min(oldProgress + diff, 100);
    //       });
    //     }, 1000);
    
    //     return () => {
    //       clearInterval(timer);
    //     };
    // }, []);
    return(
        <>
        <div className='checkInHistory'>
            <div className="historyTitle"> CheckIn History </div>

            <Card className="cardAlign">
                <CardContent className="row">
                    <div className=" leftCard ">
                        <legend>In Time</legend>
                        <span style={{"color":"green"}}>00:00 Am</span> 
                    </div>
                   <div className="hr">
                    <hr className="hr_color"/>
                   </div>
                   
                    <div className="rightCard">
                        <legend>Out Time</legend>
                        <span style={{"color":"red"}}>00:00 Pm</span>
                    </div>
                    
                </CardContent>

            </Card>

        </div>
        </>
    )
}