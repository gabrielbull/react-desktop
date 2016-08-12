import React, { Component, Children, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import styles from './style/10.11';
import Background, { backgroundPropTypes } from '../../style/background/macOs';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import Header from './header/header';
import Footer from './footer/footer';
import Row from './row/row';
import rubberBandEffect from 'rubber-band-effect';

@Background()
@Dimension()
@Hidden()
@Margin()
@Padding()
class ListView extends Component {
  static propTypes = {
    ...backgroundPropTypes,
    ...dimensionPropTypes,
    ...hiddenPropTypes,
    ...marginPropTypes,
    ...paddingPropTypes,
    disableRubberBand: PropTypes.bool
  };

  static defaultProps = {
    disableRubberBand: false
  };

  componentDidMount() {
    if (!this.props.disableRubberBand) {
      rubberBandEffect(ReactDOM.findDOMNode(this.refs.scrollable));
    }
  }

  mapChildren(children) {
    let hasDirectRows = false;
    let header = null, items = null, footer = null;
    Children.map(children, child => {
      if (child.type === Header) return header = child;
      else if (child.type === Footer) return footer = child;
      else if (child.type === Row) hasDirectRows = true;

      if (!items) items = [];
      items.push(child);
    });

    if (hasDirectRows) {
      items = <ul style={styles.list}>{items}</ul>
    }

    return { header, items, footer };
  }

  render() {
    const { children, style, ...props } = this.props;
    delete props.disableRubberBand;

    const { header, items, footer } = this.mapChildren(children);

    return (
      <section style={{ ...styles.container, ...style }} {...props}>
        {header}
        <div ref="scrollable" style={{ ...styles.scrollable }}>
          {items}
        </div>
        {footer}
      </section>
    );
  }
}

export default ListView;
