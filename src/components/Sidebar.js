const Sidebar = ()=>{
    return (
    <section className="sidebar">
        <div className="sidebar_hours"></div>
        <div className="sidebar_junior">
            <p>Are you a looking for a junior position?</p>
            <input type="radio" id="yes"name="junior" value="yes"/>
            <label for="yes">Yes</label> 
            <input type="radio" id="no"name="junior" value="no"/>
            <label for="no">No</label> 
        </div>
        <div className="sidebar_remote">
            <p>Do you want to work remotly?</p>
            <input type="radio" id="yes"name="remote" value="yes"/>
            <label for="yes">Yes</label> 
            <input type="radio" id="no"name="remote" value="no"/>
            <label for="no">No</label> 
            <input type="radio" id="any"name="remote" value="any"/>
            <label for="any">It doesn't matter</label> 
        </div>
        <div className="sidebar_country"></div>
    </section>
    )
}

export default Sidebar;