import React, {Component} from 'react';
import './App.css';
import CommentBox from 'Container/CommentBox';

class App extends Component {

constructor(){
  super();
  this.state = {
    data : [
      {
        name : 'a'
      },
      {
        name : 'b'
      }
    ]
  }
}

render() {
 
  return (
    // <div className="notificationsFrame">
    //     <div className="panel">
    //         <ul>
    //             {this.state.data.map((item) => <List data={item}/>)}
    //         </ul>
    //     </div>
    // </div>
    
    <div className='App'>
     {/* <Test/>
     <DataFetch/>
     <UserForm/> */}
     {/* <Provider store={store}>
     <CakeContainer/>
     <IceCreamContainer/> 
     <UserContainer/>
     </Provider> */}
     <CommentBox/>
    </div>
  );
}
}
export default App;
