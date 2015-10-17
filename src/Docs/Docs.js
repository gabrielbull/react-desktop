import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { history } from '../Router';
import ReadMe from '../../raw-docs/README.html';

export default class extends Component {
  componentDidMount() {
    const links = this.refs.element.getElementsByTagName('a');
    for(var prop in links) {
        if(links.hasOwnProperty(prop)) {
          links[prop].addEventListener('click', this.handleLink);
        }
    }
  }

  handleLink(event) {
    event.preventDefault();
    history.pushState(null, event.currentTarget.getAttribute('href'));
  }

  render() {
    return (
      <div ref="element">
        <div dangerouslySetInnerHTML={{__html: ReadMe}} />
      </div>
    );
  }
}
