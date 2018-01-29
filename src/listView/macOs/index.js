import React, { Component, Children } from 'react';
import styles from './style/10.11';
import Background, { backgroundPropTypes } from '../../style/background/macOs';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import Header from './header';
import Footer from './footer';
import Row from './row';

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
    ...paddingPropTypes
  };

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
