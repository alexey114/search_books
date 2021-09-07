import React from "react";
import {
    FormGroup,
    Label,   
} from 'reactstrap';

class SortingBy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'relevance'};
    
    this.handleChange = this.handleChange.bind(this);    
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <FormGroup className="Sorting">
                <Label for="Sorting">Sorting By: 
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="newest">newest</option>
                        <option value="relevance">relevance</option>
                    </select>
                </Label>
            </FormGroup>
        );
    }
    
}

export default SortingBy;