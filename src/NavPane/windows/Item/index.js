import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Padding, { paddingPropTypes } from '../../../style/padding';
import Margin, { marginPropTypes } from '../../../style/margin';
import Background, {
  backgroundPropTypes
} from '../../../style/background/windows';
import Alignment, { alignmentPropTypes } from '../../../style/alignment';
import Title from './Title';
import Content from './Content';
import styles from '../style/windows10';
import { StyleRoot } from 'radium';
import { ColorContext, colorPropTypes } from '../../../style/color/windows';
import { ThemeContext, themePropTypes } from '../../../style/theme/windows';

@Padding()
@Margin()
@Background()
@Alignment()
@ColorContext()
@ThemeContext()
class Item extends Component {
  static propTypes = {
    ...colorPropTypes,
    ...themePropTypes,
    ...paddingPropTypes,
    ...marginPropTypes,
    ...backgroundPropTypes,
    ...alignmentPropTypes,
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array
    ]),
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array
    ]),
    push: PropTypes.bool,
    onSelect: PropTypes.func,
    selected: PropTypes.bool,
    paneTheme: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      prevTitle: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.title !== nextProps.title) {
      this.setState({ prevTitle: this.props.title });
    }
  }

  render() {
    const { children, title, paneTheme, ...props } = this.props;

    delete props.icon;
    delete props.push;
    delete props.onSelect;
    delete props.selected;

    return (
      <div style={styles.navPaneItem}>
        <div style={styles.contentWrapper}>
          <StyleRoot>
            <Title
              key={title}
              title={title}
              theme={paneTheme}
              prevTitle={this.state.prevTitle}
            />
          </StyleRoot>
          <Content content={children} {...props} />
        </div>
      </div>
    );
  }
}

export default Item;
