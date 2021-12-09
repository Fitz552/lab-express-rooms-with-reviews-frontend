import Navbar from "../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"
import Roomcard from "../components/Roomcard"

function Homepage() {
    const [rooms, setRooms] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/api/version/v1/room/" 
        ,{headers:{Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFmMzgwM2I3MTA2MmU0NDljNjUwMWMiLCJuYW1lIjoiTHVjYXMgR29tZXMiLCJlbWFpbCI6Imxnc3RlaGxpbmdAZ21haWwuY29tIiwiaWF0IjoxNjM5MDYwNzQ5LCJleHAiOjE2MzkwNjc5NDl9.maGSx7oVFNcbagxnXA_5mSX_m27xVm3rcoA1f_0nemw"}}
        )
        .then((response) => {
            setRooms(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])
    return(
        <div>
            <Navbar/>
            {rooms.map(room=> {
                return(
                    <Roomcard name={room.name} description = {room.description} reviews={room.reviews} key={room._id}/>
                )
            })}
        </div>
    )
}

export default Homepage