import React from "react";
import {
    FormGroup,
    Label,
    Input
} from 'reactstrap';

const SortingBy = (props) => (
            <div className="Books_Sorting">                
                <FormGroup className="Category">
                    <Label for="Category">Категория</Label>
                    <Input type="text" id="Category" placeholder="All">
                        <ul id="Category_ul">
                            <li><a href="#books">Books</a></li>
                            <li><a href="#podcasts">Podcasts</a></li>
                            <li><a href="#addBlog">Add a Blog</a></li>
                        </ul>
                    </Input>
                </FormGroup>
                <FormGroup className="Sorting">
                    <Label for="Sorting">Сортировать по:</Label>
                    <Input type="text" id="Sorting" placeholder="Relevance"></Input>
                </FormGroup>
            </div>
        );

export default SortingBy;