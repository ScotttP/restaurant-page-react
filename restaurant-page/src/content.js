import React from 'react';
import PageLoad from './pageLoad'
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: <PageLoad />
        };
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