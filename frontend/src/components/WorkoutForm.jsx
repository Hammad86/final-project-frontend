import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'

function WorkoutForm() {
    const [name, setName] = useState('');
    const [description,setDescription] = useState('');
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit =async (e) =>{
        e.preventDefault()
        console.log({name,description,type,duration,date});
        
    }
  return (
    <form className='workout-form'>
        <h5>Add New Activity:</h5>
        <label htmlFor="name">Name</label>
        <input id='name' type="text" onChange={(val)=>setName(val.target.value) } value={name} 
        />
        <label htmlFor="Description">Description</label>
        <input id='Description' type="text" onChange={(val)=>setDescription(val.target.value) } value={description}
        />
        <label htmlFor="type">Select Exercise Type:</label>
        
      <select id="type" onChange={(val)=>setType(val.target.value)} value={type}>
        <option value="run">Run</option>
        <option value="bicycle">Bicycle</option>
        <option value="swim">Swim</option>
        <option value="ride">Ride</option>
        <option value="walk">Walk</option>
        <option value="hike">Hike</option>
      </select>
      <label htmlFor="duration">Duration</label>
        <input id='duration' type="text" onChange={(val)=>setDuration(val.target.value) } value={duration}
        />
         <label htmlFor="date">Date</label>
        <input id='date' type="text" onChange={(val)=>setDate(val.target.value) } value={date}
        />
        <Button onClick={ handleSubmit} className='nav-btn mt-2'>Add</Button>
    </form>
  )
}

export default WorkoutForm