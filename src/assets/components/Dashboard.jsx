import React from 'react'
import { Button,Form } from 'react-bootstrap'

function Dashboard() {
    const getSearch = async() =>{
        const inputCity = document.getElementById('inputCity').value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
        
        try{
            const response = await fetch(url)
            const allCities = await response.json()
            const wind = Object.values(allCities.wind)

            result.innerHTML = `<h4 className='mt-5 fw-bolder'>Weather Details</h4>
            <h6>Country: ${allCities.sys.country}</h6>
            <h1>${allCities.name}</h1>
            <p>feels like ${allCities.main.feels_like}</p>
            <h6>Humidity: ${allCities.main.humidity}</h6>
            <h6>Wind: ${wind}</h6>
            <h6>Pressure: ${allCities.main.pressure}</h6>`

        }catch(err){
            console.log(err);
        }

    }

   

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}> 
        <div className="row">
            <h2>Welcome <span id='displayUser'>User</span></h2>
            <div className="col-lg-3">
                <img src="https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/CoastalConvection_landscape.jpg" alt="" />
            </div>


            <div className="col-lg-9">
                
                <div id='result' className='mt-5'>
                <Form.Control type="text" placeholder="Enter the city" id='inputCity' className='w-50 mt-5' />
                <br />
                <Button onClick={getSearch} className='w-50' variant="warning">Search</Button>{' '}
                    

                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Dashboard