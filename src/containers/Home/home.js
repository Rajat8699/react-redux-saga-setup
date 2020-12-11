import React from 'react';
import {connect} from 'react-redux';
import {users} from '../../services/actions/home'
import { bindActionCreators } from 'redux';
import HomeUI from './homeUI';

class Home extends React.Component{
    state={
        data:{
            username:'',
            password:''
        },
        loading:false
    }
    
    componentDidMount(){
        
        this.props.users();
    }
    onSubmit = (e) =>{
            

    }

    onChange = (e) => {
        this.setState({
            data:{
                ...this.state.data,
                [e.target.name]:e.target.value
            }
        })
    }

    render() {
        return(
           <HomeUI {...this.state} {...this.props}/>
        )
    }
}
const mapDispatch = (dispatch) =>{
    return bindActionCreators({
        users
    }, dispatch)
}
const mapGetState = (state) =>{
    return {
      userresult: state.home.Users.data,
    };
}
export default connect(mapGetState, mapDispatch)(Home);
