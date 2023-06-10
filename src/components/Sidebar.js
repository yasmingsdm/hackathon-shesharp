const Sidebar = ()=>{
    return (
    <section className="sidebar">
        <div className="sidebar_intern">
        <p>Are you ready to rock an internship?</p>
            <input type="radio" id="yes"name="junior" value="yes"/>
            <label htmlFor="yes">Rock on! Yes</label> 
            <input type="radio" id="no"name="junior" value="no"/>
            <label htmlFor="no">No way!</label> 
        </div>
        <div className="sidebar_junior">
            <p>Are you ready to jam in a junior position?</p>
            <input type="radio" id="yes"name="junior" value="yes"/>
            <label htmlFor="yes">Rock on! Yes</label> 
            <input type="radio" id="no"name="junior" value="no"/>
            <label htmlFor="no">No way!</label> 
        </div>
        <div className="sidebar_remote">
            <p>Do you want to work in the virtual mosh pit?</p>
            <input type="radio" id="yes"name="remote" value="yes"/>
            <label htmlFor="yes">Hell yeah!</label> 
            <input type="radio" id="no"name="remote" value="no"/>
            <label htmlFor="no">No thanks!</label> 
            <input type="radio" id="any"name="remote" value="any"/>
            <label htmlFor="any">It's all good, man!</label> 
        </div>
        <div className="sidebar_hours">
        <p>Do you want to work...</p>
            <input type="radio" id="yes"name="junior" value="yes"/>
            <label htmlFor="yes">Full-time: Bring it on!</label> 
            <input type="radio" id="no"name="junior" value="no"/>
            <label htmlFor="no">Part-time: Just a taste!</label> 
        </div>
    </section>
    )
}

export default Sidebar;