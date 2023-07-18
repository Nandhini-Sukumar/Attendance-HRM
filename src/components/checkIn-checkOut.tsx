
import React, { useEffect,  useState } from "react";
import Button from '@mui/material/Button';
import LinearProgress from "@mui/material/LinearProgress";
import CheckInHistory from "./checkInHistory";


export default function CheckIn() {

  let minutes :any
  let hours : any

  let current = new Date();
  let getdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [btnChange,setbtnChange] = useState('check In') // Button Change
    const [progress,setprogress] = useState(0) // Progress
    const [seconds, setSeconds] = useState(0); //Timer
    const [btnActive,setbtnActive] = useState(false) // Button Active
    const [Greet,setGreet]=useState(''); //To Greet the user
    // const [progressChange,setprogressChange]=useState(false)
    const[Loading,setLoading]= useState(false)

  
  

    // progress bar
    useEffect(() => {
        const timer = setInterval(() => {
          setprogress((oldProgress) => {
            if (oldProgress === 100) {
              return 100;
            }
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 100);
          });
        }, 280000); //280000
    
        return () => {
          clearInterval(timer);
        };
    }, []);
    

    //Button change and timer control
   const buttonClick = ()=>{
   
    if(btnChange === 'check In')
    {
        setbtnChange('check Out')
        setbtnActive(true);
        GreetMsg()
        setprogress(0)
        setLoading(true)
        // setprogressChange(true)
      
    }
    
    else
    {
     
        setbtnChange('check In')
        setbtnActive(false)
        // setprogressChange(false)
       
    }
  }

//Timer calc
  useEffect(() => {
    let interval: any

    if (btnActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [btnActive]);

  // Time format
  const formatTime = (time:any) => {
     hours = Math.floor(time / 3600);
     minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours}:${padNumber(minutes)}:${padNumber(seconds)}`;

  };

  // for two values in time
  const padNumber = (number:any) => {
    return number.toString().padStart(2, '0');
  };

  // Greet Msg
  const GreetMsg=()=>{
  console.log(hours)
    if(hours >=0 && hours <=11)
    {
      setGreet('Good morning');
    }
    else if(hours >= 12 && hours <= 14)
    {
      setGreet('Good Afternoon');
    }
    else if(hours >=14 && hours <= 20){
      setGreet('Good Evening');
    }
  }

  // progress bar color change
  
  return(
    <>
        <div className="overAllAlign">
            <div className="cardMain">
            <h3>Hello, {Greet}</h3>
                    <div className="cardContent">
                    
                        <div className="timer">
                           
                            <span>
                            {formatTime(seconds)}
                            
                            </span><br/>
                            <span className="dateAlign">
                              {getdate}
                            </span>
                            <LinearProgress variant="determinate" value={progress} className="progressBar "/>
                            
                        </div>

                        <div className="btnAlign" onClick={buttonClick} >
                            <Button variant="contained" style={{backgroundColor : btnActive ? "red" :"green" }}  >
                            <span>{btnChange} {Loading} </span></Button>

                            
                        </div>

                        <CheckInHistory></CheckInHistory>

                    </div>
                    
                </div>
        </div>
        

    </>
  )

}


