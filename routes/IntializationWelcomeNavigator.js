import {createStackNagivator} from '@react-navigation/stack';
import {createAppContainer} from '@react-navigation/native';
import Initialization from '../component/Initialization/Initialization.js';
import Welcome from '../component/welcome screen/Welcome.js';
import React,{Component} from 'react-native';

class InitializationWelcomeNavigator extends Component {
    constructor(props){
      super(prop);
      this.state={first: true};
    }
    handle(){
      alert('move to second component')
      this.setState({first: false})
    }
    render (){
      return (
        <div>
          <button onClick={this.handle.bind(this)}></button>
          {this.state.first == true && <Initialization/>}
          {this.state.first == false && <Welcome/>}
        </div>
      );
    }
  }
  