import chai, { expect } from 'chai';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
import React, { Component } from 'react'
import {
  renderIntoDocument,
  findRenderedComponentWithType
} from 'react-addons-test-utils';
import WindowState from '../src/WindowState';

chai.use(sinonChai);

describe('WindowState', () => {
  class ComposedComponent extends Component {
    render() {
      return <div {...this.props}/>;
    }
  }

  const Container = WindowState(ComposedComponent);

  describe('Event Listner', () => {
    let _addEventListener, _removeEventListener, elem;
    beforeEach(() => {
      _addEventListener = window.addEventListener;
      window.addEventListener = spy();
      _removeEventListener = window.removeEventListener;
      window.removeEventListener = spy();
      elem = renderIntoDocument(<Container />);
    });

    afterEach(() => {
      window.addEventListener = _addEventListener;
      window.removeEventListener = _removeEventListener;
    });

    it('should listen focus when it did mount', () => {
      expect(window.addEventListener).to.have.been.calledWith('focus', elem.windowFocus);
    });

    it('should listen blur when it did mount', () => {
      expect(window.addEventListener).to.have.been.calledWith('blur', elem.windowBlur);
    });
  });

  it('should setState to ComposedComponent when it will update', () => {
    let elem = renderIntoDocument(<Container />);
    let stub = findRenderedComponentWithType(elem, ComposedComponent);
    stub.setState = spy();
    elem.setState({ windowFocused: true });
    expect(stub.setState).to.have.been.calledWith({ windowFocused: true });
  });

  describe('Event Handler', () => {
    let elem, stub;
    beforeEach(() => {
      elem = renderIntoDocument(<Container />);
      stub = findRenderedComponentWithType(elem, ComposedComponent);
      stub.setState = spy();
    });
    it('windowFocus should setState windowFocused:true to ComposedComponent', () => {
      elem.windowFocus();
      expect(stub.setState).to.have.been.calledWith({ windowFocused: true });
    });

    it('windowBlur should setState windowFocused:false to ComposedComponent', () => {
      elem.windowBlur();
      expect(stub.setState).to.have.been.calledWith({ windowFocused: false });
    });
  });

  it('should receive props passed down', () => {
    const elem = renderIntoDocument(<Container pass="through" baz={50} />);
    const stub = findRenderedComponentWithType(elem, ComposedComponent);
    expect(stub.props.pass).to.equal('through');
    expect(stub.props.baz).to.equal(50);
    expect(stub.props.hello).to.equal(undefined);
  });
});
