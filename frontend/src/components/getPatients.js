import React ,{useState , useEffect}from "react";

function GetPatients() {
  const [patients,setPatients] = useState([])

    useEffect (() =>{
        fetch("http://localhost:5000/patients/")
        .then((res)=>{
            console.log("patients",patients)
            if(res.ok){
                return res.json()
        }
        })
        .then((result)=>setPatients(result))
        .catch((error)=>console.log(error))
    },[patients])

    return(
        <div>
            <table className="getpatients">
                <thead>
                    <th>patient._id</th>
                    <th>patient.name</th>
                    <th>patient.age</th>
                    <th>patient.doctor</th>
                </thead>
            
             {patients.map(patient => (
                <tbody>
                <td>{patient._id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.doctor}</td>
            </tbody>
            ))}

            </table>
        
        </div>
    )
}

export default GetPatients
