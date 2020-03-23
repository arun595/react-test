import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import Content from './Timeline/Timeline';
import './timeline.css';
import List from './ItemList/ItemList';
import { itemContext } from './Component/Context';
import Test from './Component/Test';
import DataFetch from './Component/DataFetch';
import UserForm from './Component/UserForm';
import CakeContainer from './Container/CakeContainer';
import {Provider} from 'react-redux';
import store from './Store';
import IceCreamContainer from './Container/IceCreamContainer';
import UserContainer from './Container/UserContainer';
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
