import React from 'react'
import { insertData } from '../functions/function'

export default function Insertcontent({setEvent}) {
    const [form,setForm] = React.useState(false)
    const [name,setName] = React.useState('')
    const [desc,setDesc] = React.useState('')
    const [price,setPrice] = React.useState('')
    const submitHandle = (e)=>{
       e.preventDefault()
       insertData({name,desc,price})
       setEvent(prev=>prev+1)
       setName('');setDesc('');setPrice('')
    }
    return (
        <div>
           <button onClick={()=>setForm(prev=>setForm(!prev))}>insert</button>
           {
               form?(
                   <>
                   <form style={{marginTop:"2rem"}} onSubmit ={submitHandle}>
                   <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder ="Item Name" />&nbsp;&nbsp;&nbsp;
                   <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder ="Item Description"  />&nbsp;&nbsp;&nbsp;
                   <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder ="Item Prize" />&nbsp;&nbsp;&nbsp;
                   <button type="submit">Add Item</button>
                   </form>
                   </>
               ):null
           }
        </div>
    )
}
