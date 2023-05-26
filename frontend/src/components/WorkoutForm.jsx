import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import '../index.css'
import { useAuthContext } from '../hooks/useAuthContext';
import {  toast } from 'react-toastify';

function WorkoutForm() {

  const {dispatch} = useWorkoutsContext();
  const {user} = useAuthContext();
    
  const [name, setName] = useState('');
  const [type, setType] = useState('run');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');
  const [error,setError] = useState(null)
  const [emptyFields , setEmptyFields] = useState([])
  const [description,setDescription] = useState('');

  const notify = () => toast.success('Activity added successfully!', {
    position: "bottom-left",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  
    const handleSubmit = async (e) =>{
        e.preventDefault()

        if(!user){
          setError('You must be logged in')
          return  
        }

        console.log({name,description,type,duration,date});
        try {
          const workout = {name,description,type,duration,date}

        const response = await fetch('http://localhost:4000/api/workout',{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          },
          body: JSON.stringify(workout),
          
        })
          const json = await response.json();

          if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
          }
          if(response.ok){
            notify()
            setDate('')
            setDescription('')
            setDuration('')
            setName('')
            setType('')
            setError(null)
            setEmptyFields([])
            dispatch({
              type:'CREATE_WORKOUT',
              payload: json
            })
            console.log('data added successfully',json);
          }

        } catch (error) {
         console.log(error); 
        }
        
    }
    
  return (
    <form className='workout-form hide-form'>
        <h5>Add New Activity:</h5>
        <label htmlFor="name">Name</label>
        <input id='name' type="text" onChange={(val)=>setName(val.target.value) } value={name} className={emptyFields.includes('name') ? 'error': ''} required="required"
        />
        <label htmlFor="Description">Description</label>
        <input id='Description' type="text" onChange={(val)=>setDescription(val.target.value) } value={description} className={emptyFields.includes('description') ? 'error': ''}
        />
        <label htmlFor="type">Select Exercise Type:</label>
        
      <select id="type" onChange={(val)=>setType(val.target.value)} value={type} className={emptyFields.includes('type') ? 'error': ''}>
        <option value="run">Run</option>
        <option value="bicycle">Bicycle</option>
        <option value="swim">Swim</option>
        <option value="ride">Ride</option>
        <option value="walk">Walk</option>
        <option value="hike">Hike</option>
      </select>
      
      <label htmlFor="duration">Duration</label>
        <input id='duration' type="text" onChange={(val)=>setDuration(val.target.value) } value={duration}  className={emptyFields.includes('duration') ? 'error': ''}
        />
         <label htmlFor="date">Date</label>
        <input id='date' type="date" onChange={(val)=>setDate(val.target.value) } value={date} className={emptyFields.includes('date') ? 'error': ''}
        />
        <Button onClick={ handleSubmit} className='nav-btn mt-2'>Add</Button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm