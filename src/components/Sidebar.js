import { useState } from "react";

const Sidebar = ()=>{
    const handleIntern = (e)=>{
        localStorage.setItem('intern', e.target.value)
    }
    const handleJr = (e)=>{
        localStorage.setItem('junior', e.target.value)
    }
    const handleRemote = (e)=>{
        localStorage.setItem('remote', e.target.value)
    }
    const handleHrs = (e)=>{
        localStorage.setItem('hours', e.target.value)
    }
    
    return (
    <section className="sidebar">
        <div className="sidebar_intern" >
        <p>Are you ready to rock an internship?</p>
            <input type="radio" id="yes"name="junior" value="yes"onClick={handleIntern}/>
            <label htmlFor="yes">Rock on! Yes</label> 
            <input type="radio" id="no"name="junior" value="no"onClick={handleIntern}/>
            <label htmlFor="no">No way!</label> 
        </div>
        <div className="sidebar_junior">
            <p>Are you ready to jam in a junior position?</p>
            <input type="radio" id="yes"name="junior" value="yes"onClick={handleJr}/>
            <label htmlFor="yes">Rock on! Yes</label> 
            <input type="radio" id="no"name="junior" value="no" onClick={handleJr}/>
            <label htmlFor="no">No way!</label> 
        </div>
        <div className="sidebar_remote">
            <p>Do you want to work in the virtual mosh pit?</p>
            <input type="radio" id="yes"name="remote" value="yes"onClick={handleRemote}/>
            <label htmlFor="yes">Hell yeah!</label> 
            <input type="radio" id="no"name="remote" value="no" onClick={handleRemote}/>
            <label htmlFor="no">No thanks!</label> 
        </div>
        <div className="sidebar_hours">
        <p>Do you want to work...</p>
            <input type="radio" id="full"name="junior" value="fulltime" onClick={handleHrs}/>
            <label htmlFor="full">Full-time: Bring it on!</label> 
            <input type="radio" id="part"name="junior" value="parttime" onClick={handleHrs}/>
            <label htmlFor="part">Part-time: Just a taste!</label> 
        </div>
    </section>
    )
}

export default Sidebar;