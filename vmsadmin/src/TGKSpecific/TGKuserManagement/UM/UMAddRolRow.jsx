// import React, { Component } from 'react';
// import { render } from 'react-dom';
/*import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class UMAddRolRow extends TrackerReact(Component) {

	render(){

       return(
       		<option  value={`add$${this.props.roleDataVales.name}`} name="userListDDOption">Add {this.props.roleDataVales.name} Role to Selected </option>
	    );

	} 

}*/

import React, { Component, PropTypes } from 'react';

class UMAddRolRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
    	var name = this.props.roleDataVales;
    	// console.log("herer role namessssssssssssssssssss",name);
        return (
            <option  value={`add$${this.props.roleDataVales}`} name="userListDDOption">Add {this.props.roleDataVales} Role to Selected </option>
        );
    }
}

export default UMAddRolRow;
