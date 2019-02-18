import React, { Component, Children } from 'react';
import styles from './style/10.11';
import Background, { backgroundPropTypes } from '../../style/background/macOs';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import Header from './Header';
import Footer from './Footer';
import Row from './Row';

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
    let header = null,
      items = null,
      footer = null;
    Children.map(children, child => {
      const HeaderEl = <Header />;
      const FooterEl = <Footer />;
      const RowEl = <Row />;

      if (child.type === HeaderEl.type) return (header = child);
      else if (child.type === FooterEl.type) return (footer = child);
      else if (child.type === RowEl.type) hasDirectRows = true;

      if (!items) items = [];
      items.push(child);
    });

    if (hasDirectRows) {
      items = <ul style={styles.list}>{items}</ul>;
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
