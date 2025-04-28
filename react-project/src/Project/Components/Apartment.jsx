import { getAllApartments } from "../api"
import { useEffect, useState } from "react"
import { Card } from "./Card"

export const Apartment=()=>{

    const [list,setList]=useState([])
    useEffect(() => {
        getAllApartments().then(x=>{
            setList(x.data)
            
        })
        .catch(err=>{
    
        })
    
    }, )

    return<>

  {list&&list.map(x=> <div>
        <Card key={x._id} apartment={x}></Card>
    </div>)}
    </>
}