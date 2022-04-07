import React from 'react';


class Profile extends React.Component {
 


    constructor() {
      console.log("constructor()")
      super()
      this.state = {

      interval: 0,
      timer:0,
      }
}
       
       
 
  
  componentDidMount() {
    
    this.setState({
      interval: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 })},1000)
    })
  }
  
  componentWillUnmount() {

    
    clearInterval(this.state.interval)
  }
    
    
  
  render() {
  
    return <h2 style={{ textAlign: "center" }}>Interval Time: {this.state.timer} </h2>
    
    }
}
export default Profile;