import React from 'react';
import { findDOMNode } from 'react-dom';
import { history } from '../../Router';

function ExtendComposedComponent (ComposedComponent) {
  class Compoment extends ComposedComponent {
    componentDidMount() {
      if (super.componentDidMount) {
        super.componentDidMount();
      }
      this.bindLinkEvents();
    }

    componentDidUpdate() {
      if (super.componentDidUpdate) {
        super.componentDidUpdate();
      }
      this.bindLinkEvents();
    }

    bindLinkEvents() {
      const links = findDOMNode(this).getElementsByTagName('a');
      for(var prop in links) {
        if(links.hasOwnProperty(prop)) {
          links[prop].removeEventListener('click', this.handleLink);
          links[prop].addEventListener('click', this.handleLink);
        }
      }
    }

    handleLink(event) {
      const link = event.currentTarget.getAttribute('href');
      if (link && !link.match(/^http/)) {
        event.preventDefault();
        history.pushState(null, event.currentTarget.getAttribute('href'));
        window.scrollTo(0, 0);

        if (super.onLinkClick) {
          super.onLinkClick(event);
        }
      }
    }

    render(...params) {
      return super.render(...params);
    }
  }

  return Compoment;
}

export default function LinksDecorator(...options) {
  if (options.length === 1 && typeof options[0] === 'function') {
    return ExtendComposedComponent.apply(null, [...options]);
  }

  return ExtendComposedComponent;
}
