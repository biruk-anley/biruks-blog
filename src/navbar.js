const Navbar = () => {

     const alerted = (text, events) => {
       alert(events.bubbles); //             this will handle event objects
     };
    return (
      <div className="navbar">
        <h2 className="header">Kibur blogger</h2>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create">NewBlog</a>
          
          <button
            onClick={(events) => alerted("this is argumentative event", events)}
          >
            clikMe
          </button>
        </div>
      </div>
    );
}
 
export default Navbar;