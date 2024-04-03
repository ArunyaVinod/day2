import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export const Statebasics = () => {
   // var fname ="Arunya"
    var [name,setName] = useState("Arunya")
    var [value,setValue] = useState()
    const changeName =()=>{
        console.log("clicked")
        setName(value)
    }
    const inputHandler =(e)=>{
        console.log(e.target.value)
        setValue(e.target.value)
    }
  return (
    <div>
        <Typography variant='h4'>Welcome {name} </Typography>
        <TextField label="Enter name" variant='outlined' onChange={inputHandler}/> <br />
        <Button variant='contained'color='error' onClick={changeName}>change</Button>

                </div>
  )
}
