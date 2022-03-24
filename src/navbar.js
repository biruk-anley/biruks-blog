const Navbar = (props) => {
    return ( 
        <div className="navbar">
            <h2 className="header">Kibur blogger</h2>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">NewBlog</a>
                <a href="/">{props.thirdInde}</a>
                
            </div>
        </div>
     );
}
 
export default Navbar;