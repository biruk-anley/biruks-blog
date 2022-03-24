


const Home = (props) => {
    return (
      <div className="home">
        
        <h1 className="header"> {props.titlepage.titles}</h1><br></br>

        <p className="body"><br></br>{props.titlepage.body}</p><br></br>

        <div className="footer">{props.titlepage.footer}</div>
      </div>
    );
}
 
export default Home;