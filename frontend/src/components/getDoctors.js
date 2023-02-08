import React ,{useState , useEffect}from "react";
import "./getdoctors.css"
function GetDoctors() {
    const [doctors,setDoctors] = useState([])

    useEffect (() =>{
        fetch("http://localhost:5000/doctors/")
        .then((res)=>{
            console.log("response",res)
            if(res.ok){
           return res.json()
        }
        })
        .then((result)=>setDoctors(result))
        .catch((error)=>console.log(error))
       
    },[doctors])

    return(
        <div>
            <table className="getdoctors">
                <thead>
                    <th>doctor._id</th>
                    <th>doctor.name</th>
                    <th>doctor.patients</th>
                    <th>doctor.specialty</th>
                </thead>
            
            
            {doctors.map(doctor => (
                <tbody>
                <td>{doctor._id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.patients}</td>
                <td>{doctor.specialty}</td>
            </tbody>
            ))}

            </table>
        
        </div>
    )
}



export default GetDoctors