import { useEffect , useState } from "react";
import React from 'react';
import './App.css'

const App = () =>{
    const [rollno , setRollno] = useState({});
    const [name , setName] = useState({});
    const [students , setStudent] = useState([]);
    // const [attendence , setAttendence] = useState(0);

    useEffect(()=>{
        let previousData = sessionStorage.getItem('student');
        // let previousAttendence = sessionStorage.getItem('attendence');

        if(previousData){
            setStudent(previousData);
        }
        // if(previousAttendence){
        //     setAttendence(previousAttendence)
        // }
    },[])

    const handleSubmit = (name,rollno)=>{
        let data = {
            'name':name,
            'rollno':rollno 
        } 
        setStudent((previous)=>[...previous,data])
        // setAttendence(attendence++)
        sessionStorage.setItem('student',students)
        // sessionStorage.setItem('attendence',attendence)
    }

    const displayStudents = (data)=>{
        return(
            data.map((item)=>{
            return(
            <div className="student">
                <div className="name">Name - <span>{item.name}</span></div>
                <div className="rollno">Roll No. - <span>{item.rollno}</span></div>
            </div>)
            })
        )
    }

    return(<React.Fragment>
        <div className="main">
            <div className="heading">Attendence Sheet</div>
            <div className="input-field">
                <form>
                    <label htmlFor='rollno' className="rollno">Roll No.</label>
                    <input id='rollno' type="text" name="rollno" placeholder='Roll no.'  onChange={(e)=>setRollno(e.target.value)} required />

                    <label htmlFor='studentname' className="studentname">Student Name</label>
                    <input id='studentname' type="text" name="studentname" placeholder='Name' onChange={(e)=>setName(e.target.value)} required />

                    <button className="submit" type="button" onClick={()=>handleSubmit(name,rollno)}>Submit</button>
                </form>
            </div>
            <div className="display-count">
                <div className="count">
                   Total Students Present : <span>{students.length}</span>
                </div>
            </div>
            <div className="display-field">
                {displayStudents(students)}
            </div>
        </div>
    </React.Fragment>);
}

export default App;