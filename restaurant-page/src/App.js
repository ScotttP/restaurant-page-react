import React from 'react';
import Header from './header';
import PageLoad from './pageLoad'
import AboutUs from './about'
import Contact from './contact'
import Menu from './menu'
import Content from './content';
import Footer from './footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleTabs = this.handleTabs.bind(this)
    this.state = {
        content: <PageLoad />
    };
}

  handleTabs(clickedTab) {
    if (clickedTab === 'About'){
      this.setState({ content: <AboutUs /> })
    }else if (clickedTab === 'Menu'){
      this.setState({ content: <Menu /> })
    }else if (clickedTab === 'Contact'){
      this.setState({ content: <Contact /> })
    }else{
      this.setState({ content: <PageLoad /> })
    }
  }

  render () {
    return (
      <div>
        <Header handleClick = {this.handleTabs}/>
        <Content content={this.state.content}/>
        <Footer />
      </div>
      
    );
  }

}

export default App;
