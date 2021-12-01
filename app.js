const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

address = process.argv[2]

// if(!address){
//     console.log('Please provided address')
// } else {
//     geocode(address,(error,data)=>{
//         if (error){
//             return console.log(error)
//         }
    
//         forecast(data.latitude,data.longtitude,(error,forecastData)=>{
//             if(error){
//                 return console.log(error)
//             }
//             console.log(data.placeName)    
//             console.log('Data:',forecastData)
//         })
//     })
// }

if(!address){
    console.log('Please provided address')
} else {
    geocode(address,(error,{latitude,longtitude,placeName}={})=>{
        if (error){
            return console.log(error)
        }
    
        forecast(latitude,longtitude,(error,forecastData)=>{
            if(error){
                return console.log(error)
            }
            console.log(placeName)    
            console.log('Data:',forecastData)
        })
    })
}

