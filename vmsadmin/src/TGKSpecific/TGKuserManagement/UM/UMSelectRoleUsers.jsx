// import React, { Component } from 'react';
// import { render } from 'react-dom';
// // import TrackerReact from 'meteor/ultimatejs:tracker-react';

// export default class UMSelectRoleUsers extends Component {

// 	render(){

//        return(
// 			<option  value={this.props.roleDataVales.name} name="roleListDDOption">{this.props.roleDataVales.name}</option>	    
// 			);

// 	} 

// }


import React, { Component, PropTypes } from 'react';

class UMSelectRoleUsers extends Component {
    
   

    render() {
        return (
            
            <option  value={this.props.roleDataVales} name="roleListDDOption">{this.props.roleDataVales}</option>	    

        );
    }
}

export default UMSelectRoleUsers;
