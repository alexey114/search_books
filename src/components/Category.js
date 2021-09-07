import React from "react";
import {
    FormGroup,
    Label,   
} from 'reactstrap';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'all'};
    
    this.handleChange = this.handleChange.bind(this);    
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <FormGroup className="Category">
                <Label for="Category">Category 
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="art">art</option>
                        <option value="all">all</option>
                        <option value="biography">biography</option>
                        <option value="computers">computers</option>
                        <option value="medical">medical</option>
                        <option value="history">history</option>
                        <option value="poetry">poetry</option>
                    </select>
                </Label>
            </FormGroup>
        );
    }
    
}

export default Category;