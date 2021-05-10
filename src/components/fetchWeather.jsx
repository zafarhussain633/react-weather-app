import React,{useState ,useEffect} from 'react'
import Card from './Card';

function FetchWeather() {

    const [userInput, setuserInput] = useState("");
    const [searchValue, setsearchValue] = useState("delhi");

    const [weatherData, setweatherData] = useState({city:"", temp:null,desc:"",icon:""});
    const [IsCityName, setIsCityName] = useState(true)

    function fetchdata(){
        const APIKey = "42bd6f37bbd470ffeb73c17cf3a58896";
        try{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${APIKey}`)
            .then(res=>res.json())
            .then(res=>{
               
            if(res.main!==undefined) {
                // console.log(res)
                setweatherData((prev)=>{
                  return  {
                    ...prev,
                    city:res.name,
                    temp:Math.floor((res.main.temp)-273.15) ,
                    desc:res.weather[0].description,
                    icon:`http://openweathermap.org/img/wn/${res.weather[0]["icon"]}@2x.png`
                    }
                }
                );
            setIsCityName(true);
                
            }else{
                // alert("city not found or wrong city name")
               setIsCityName(false);
            }
            })
        } catch (err){
            console.log(err + "enter valid city name");
        }
    } //fetchdata fx ends here
    

     useEffect(fetchdata,[searchValue]);

     function handleSubmit(e){
        e.preventDefault();
        setsearchValue(userInput)
     }

    return (
        <div className="card">
            <div>
                <form  onSubmit={handleSubmit}>
               <input type="search" onChange ={(e)=>setuserInput(e.target.value)} placeholder="Search City"/>
              
                {
                    (IsCityName===true)?   <Card 
                    CityName ={weatherData.city}
                    temperature={weatherData.temp}
                    description={weatherData.desc}
                    icon={weatherData.icon}
                    />   : <div className="child-card">please input valid City Name</div>
                }
                </form>
                
            </div>
        </div>
    )
}

export default FetchWeather;

