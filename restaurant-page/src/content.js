import React from 'react';
import PageLoad from './pageLoad'
import AboutUs from './about'
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: <PageLoad />
        };
    }

    handlers () {
        console.log('handler function')
    }

    render () {
        return (
            <div>
                {this.state.content}
            </div>
            
        )
    }
       
}

export default Content