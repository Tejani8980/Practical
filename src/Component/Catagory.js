import React, { Component } from 'react';
import { Nav, Form, FormControl, Button } from "react-bootstrap";

class Catagory extends Component {
    constructor(props){
        super(props);
        this.state = {
            find: ""
        }
    }
    handleChange =(e) => {
        const name= e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    Searchdetail =(e) => {
        e.preventDefault();
        const name = this.state.find;
        console.log(name)
        this.props.filterTop(name);
        this.setState({find: ""})
    }

    show = (e) => {
        const name = e.target.name
        this.props.filterTop(name);
    }

    render() {
        return (
            <>
                <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/home">All Stock List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={this.show} name="Jeans" >Jeans</Nav.Link>

                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={this.show} name="Top">Top</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={this.show} name="Dress">Dress</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={this.show} name="Perfume">Perfume</Nav.Link>
                    </Nav.Item>
                    <Form inline>
                        <FormControl type="text" placeholder="Search through category" value={this.state.find} onChange={this.handleChange} name="find" className=" mr-sm-2" />
                        <Button type="submit" onClick={this.Searchdetail}>Submit</Button>
                    </Form>
                </Nav>
            </>
        )
    }
}

export default Catagory;