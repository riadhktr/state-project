import React from 'react';
import Profile from './component/Profile';


class App extends React.Component {  
  style = {

    display: "flex",
    flexDirection:"column",
    textAlign:"center"
    
  }
  
  constructor() {
    
    super()
    this.state = {
     
    shows: false,
    }

    this.person = {
      fullName: "Riadh Khaterchi",
      bio: "My name is Riadh . I'm learning Full Stack Js.",
      profession: "web developer",
      picture: "./picture1.jpg",
    }
  }
  toggle = () => {
    this.setState({ shows: ! this.state.shows})
  }

  
  render() {
   
    return <div>
      
      <div >
       {this.state.shows  ?
         <div>
         <div style={{ backgroundColor: "#4295f1"}} >
           <img src={this.person.picture} alt="profilePic" style={{width:"180px", marginLeft:"43%" ,marginTop:"40px"}}></img>
           </div>
            <div style={this.style}>
              
           <h1> {this.person.fullName}</h1>
           <h3>{this.person.bio}</h3>
           <h3>{ this.person.profession}</h3>
           </div>         
          </div> : <div> </div> }
        <div>
           <button onClick={()=>this.toggle()} style={{ marginLeft: "45%", marginTop: "10px", width: "150px", height: "50px", backgroundColor: "#4295f1", border: "transparent", borderRadius: "5px", cursor: "pointer" }}><h3>{ this.state.shows ? "Hide Profile":"Show Profile"}</h3></button>
      
  {this.state.shows && <Profile/>}
       

    </div>
      </div>
    </div>
 }
}
export default App;