

import Navbar from './navbar'
import Home from './home';



function App() {
  const content = {
    titles: "The effect of war on Russia vs Ukrien war on Africa",
    body: "the war which is held currently affects especialy africa and the reason  for this is most "  +
      "africa country is dependent on the resources espeically the wheat which is come from ukrien ",
    footer: "This is all I have",
    name: "hello"
  }

 
  return (
    <div className="App">
      <Navbar thirdIndex="contact us" />
      <div className="content">
       <Home titlepage = {content}/>
    
      </div>
    </div>
    
  );
}





export default App;
