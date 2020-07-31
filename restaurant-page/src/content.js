import React from 'react';

class Content extends React.Component {

    render () {
        return (
            <div id='content'>
                {this.props.content}
            </div>
            
        )
    }
       
}

export default Content