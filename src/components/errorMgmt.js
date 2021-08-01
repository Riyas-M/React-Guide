import { Component } from 'react';

class ErrorMgmt extends Component {

    constructor() {
        super();
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if(this.state.hasError) {
            return <p>Something Went Wrrong</p>;
        }
        return this.props.children;
    }
}

export default ErrorMgmt;