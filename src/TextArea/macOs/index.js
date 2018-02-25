import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Radium, { StyleRoot } from 'radium';
import styles from './styles/10.11';
import Text from '../../Text/macOs';
import Label from '../../Label/macOs';
import Hidden, { hiddenPropTypes, removeHiddenProps } from '../../style/hidden';
import Margin, { marginPropTypes, removeMarginProps } from '../../style/margin';
import Dimension, {
  dimensionPropTypes,
  removeDimensionProps
} from '../../style/dimension';
import FontSize, {
  fontSizePropTypes,
  removeFontSizeProps
} from '../../style/fontSize';
import PlaceholderStyle from '../../placeholderStyle';
import mapStyles from '../../utils/mapStyles';
import { parseDimension } from '../../styleHelper';
import focusRingAnimation from './focusRingAnimation';
import { pullLeft, pushCenter } from './centerPlaceholderAnimation';
import ValueRef from '../../ValueRef';

@ValueRef()
@Hidden()
@Dimension()
@Radium
class TextAreaOSX extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    ...marginPropTypes,
    ...dimensionPropTypes,
    ...fontSizePropTypes,
    label: PropTypes.string,
    rounded: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string
    ]),
    rows: PropTypes.number,
    cols: PropTypes.number,
    focusRing: PropTypes.bool,
    onEnter: PropTypes.func,
    centerPlaceholder: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    placeholder: PropTypes.string
  };

  static defaultProps = {
    focusRing: true
  };

  static mapStyles = {
    container: ['margin', 'width', 'height', 'display']
  };

  static contextTypes = {
    titlebarChild: PropTypes.bool
  };

  constructor() {
    super();
    this.state = {
      isFocused: false,
      showPlaceholder: true,
      iconPadding: null
    };
  }

  componentDidMount() {
    const el = ReactDOM.findDOMNode(this).getElementsByTagName('TEXTAREA')[0];
    el.addEventListener('blur', this.handleBlur);
    el.addEventListener('focus', this.handleFocus);
    el.addEventListener('keypress', this.handleKeypress);
    el.addEventListener('keydown', this.handleKeydown);
    el.addEventListener('keyup', this.handleChange);
    el.addEventListener('change', this.handleChange);

    if (this.props.icon) {
      setTimeout(() =>
        this.setState({
          iconPadding: ReactDOM.findDOMNode(
            this.refs.icon
          ).getBoundingClientRect().width
        })
      );
    }
  }

  componentWillUnmount() {
    const el = ReactDOM.findDOMNode(this).getElementsByTagName('TEXTAREA')[0];
    el.removeEventListener('blur', this.handleBlur);
    el.removeEventListener('focus', this.handleFocus);
    el.removeEventListener('keypress', this.handleKeypress);
    el.removeEventListener('keydown', this.handleKeydown);
    el.removeEventListener('keyup', this.handleChange);
    el.removeEventListener('change', this.handleChange);
  }

  handleKeydown = e => {
    if (e.keyCode === 8 && e.target.value.length === 1) {
      this.setState({ showPlaceholder: true });
    }
  };

  handleKeypress = e => {
    const noEffect = [0, 13];
    if (e.which === 13 && this.props.onEnter) {
      this.props.onEnter(e);
    }

    if (!e.which || noEffect.indexOf(e.which) !== -1) return null;
    if (String.fromCharCode(e.which)) {
      if (this.state.showPlaceholder) {
        this.setState({ showPlaceholder: false });
      }
    }
  };

  handleChange = e => {
    if (e.target.value && this.state.showPlaceholder) {
      this.setState({ showPlaceholder: false });
    } else if (!e.target.value && !this.state.showPlaceholder) {
      this.setState({ showPlaceholder: true });
    }
  };

  handleBlur = e => {
    if (this.props.centerPlaceholder) {
      if (!e.target.value) {
        pushCenter(e.target, ReactDOM.findDOMNode(this.refs.label));
      }
    }

    this.setState({ isFocused: false });
  };

  handleFocus = e => {
    if (this.props.centerPlaceholder) {
      if (!e.target.value) {
        pullLeft(e.target, ReactDOM.findDOMNode(this.refs.label));
      }
    }
    setTimeout(() => this.setState({ isFocused: true }));
  };

  /**
   * Remove the focus programmatically
   * @public
   * */
  blur() {
    const inputEl = ReactDOM.findDOMNode(this.refs.element);
    inputEl.blur();
  }

  /**
   * Focus the input programmatically
   * @public
   */
  focus() {
    const inputEl = ReactDOM.findDOMNode(this.refs.element);
    inputEl.focus();
  }

  render() {
    let {
      style,
      label,
      size,
      rounded,
      focusRing,
      placeholder,
      centerPlaceholder,
      icon,
      ...props
    } = this.props;
    delete props.onEnter;

    let [inputStyle, containerStyle] = mapStyles(style, TextAreaOSX.mapStyles);

    let componentStyle = { ...styles.textField };

    if (rounded) rounded = rounded === true ? '4px' : parseDimension(rounded);

    let focusElement;
    if (this.state.isFocused && focusRing) {
      componentStyle = {
        ...componentStyle,
        ...(rounded ? styles.textFieldRoundedFocus : styles.textFieldFocus)
      };

      let focusElementStyle = {
        ...styles.focusElement,
        animation: 'x .25s linear forwards',
        animationName: focusRingAnimation(rounded)
      };
      focusElement = <div style={focusElementStyle} />;
    }

    let labelComponent = label ? (
      <Label margin="0 0 3px 0">{label}</Label>
    ) : null;

    props = removeFontSizeProps(
      removeDimensionProps(removeMarginProps(removeHiddenProps(props)))
    );

    if (rounded) {
      componentStyle.borderRadius = parseDimension(rounded);
    }

    if (size && parseInt(size) !== 13) {
      const ratio = size / 13;
      componentStyle.lineHeight = parseDimension(size * 1.4);
      componentStyle.paddingLeft = parseDimension(3.5 * ratio);
      componentStyle.paddingRight = parseDimension(3.5 * ratio);
    }

    let input = FontSize(
      <textarea
        key="element"
        ref="element"
        style={componentStyle}
        // If we're centering the place holder, we don't want to set the `placeholder`
        // property. Otherwise we'll end up with two placeholders.
        placeholder={!centerPlaceholder ? placeholder : undefined}
        {...props}
      />,
      this.props
    );

    if (this.state.iconPadding) {
      inputStyle.paddingLeft = parseDimension(this.state.iconPadding + 12);
    }

    if (this.context.titlebarChild) {
      inputStyle = { ...inputStyle, ...styles.titleBarTextArea };
      if (this.state.isFocused && focusRing) {
        inputStyle = { ...inputStyle, ...styles.titleBarTextAreaFocus };
      }
    }

    input = cloneElement(input, {
      ...input.props,
      style: { ...input.props.style, ...inputStyle }
    });
    let placeholderElement;

    if (centerPlaceholder) {
      placeholderElement = (
        <div style={styles.label}>
          <div ref="label" style={styles.labelContent}>
            <div ref="icon" style={styles.icon}>
              {icon}
            </div>
            {this.state.showPlaceholder ? (
              <Text color="#c0c0c0" size="12">
                {placeholder}
              </Text>
            ) : null}
          </div>
        </div>
      );
    } else if (placeholder) {
      input = (
        <PlaceholderStyle placeholderStyle={styles.textField[':placeholder']}>
          {cloneElement(input, {
            ...input.props,
            style: { ...input.props.style, ...inputStyle },
            placeholder
          })}
        </PlaceholderStyle>
      );
    }

    return Margin(
      <div
        style={{
          ...styles.container,
          ...(this.state.isFocused ? styles.containerFocus : {}),
          ...containerStyle
        }}
      >
        {labelComponent}
        <div style={styles.wrapper}>
          <StyleRoot>{focusElement}</StyleRoot>
          {placeholderElement}
          {input}
        </div>
      </div>,
      this.props
    );
  }
}

export default TextAreaOSX;
