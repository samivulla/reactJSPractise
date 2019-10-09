import React, { Component } from 'react'

 class UserGreetings extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLogin : false
         }
     }
     
    render() {
        if(this.state.isLogin){
            return <div>welcome subhan</div>
        }else{
            return <div>welcome sami</div>
        }
        // return (
        //     <div>
        //         <div>Welcome Subhan</div>
        //         <div>Welcome Sami</div>
        //     </div>
        // )
    }
}

export default UserGreetings
