import { PropTypes, cloneElement } from 'react';
import { convertColor } from '../color';

class CommonStylingComponent {
  static propTypes(options) {
    let propTypes = {};

    if (options.dimension) {
      propTypes.width = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
      propTypes.height = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
    }

    if (options.margin) {
      propTypes.margin = PropTypes.string;
    }

    if (options.padding) {
      propTypes.padding = PropTypes.string;
    }

    if (options.horizontalAlignment || options.alignment) {
      propTypes.horizontalAlignment = PropTypes.string;
    }

    if (options.verticalAlignment || options.alignment) {
      propTypes.verticalAlignment = PropTypes.string;
    }

    if (options.hidden) {
      propTypes.hidden = PropTypes.bool;
    }

    if (options.background) {
      propTypes.background = PropTypes.oneOfType([PropTypes.bool, PropTypes.string]);
    }

    return propTypes;
  }

  constructor(root, options, params, refs) {
    this.root = root;
    this.options = options;
    this.params = params;
    this.refs = refs;
  }

  findRef(ref, component) {
    if (component.ref === ref) {
      return component;
    }
    if (component.props.children) {
      if (Object.prototype.toString.call(component.props.children) === '[object Array]') {
        for (let i = 0, len = component.props.children.length; i < len; ++i) {
          let result = this.findRef(ref, component.props.children[i]);
          if (result) {
            return result;
          }
        }
      } else {
        if (component.props.children.ref === ref) {
          return component.props.children;
        } else if (component.props.children.props && component.props.children.props.children) {
          return this.findRef(ref, component.props.children);
        }
      }
    }
    return null;
  }

  replaceRef(ref, component, replacement) {
    if (component.props.children) {
      if (Object.prototype.toString.call(component.props.children) === '[object Array]') {
        for (let i = 0, len = component.props.children.length; i < len; ++i) {
          if (component.props.children[i].ref === ref) {
            return component.props.children[i] = replacement;
          } else if (component.props.children[i].props && component.props.children[i].props.children) {
            let result = this.replaceRef(ref, component.props.children[i], replacement);
            if (result) return result;
          }
        }
      } else {
        if (component.props.children.ref === ref) {
          return component.props.children = replacement;
        } else if (component.props.children.props && component.props.children.props.children) {
          return this.replaceRef(ref, component.props.children, replacement);
        }
      }
    }
    return null;
  }

  render(component) {
    let props = { ...component.props };
    let style;

    let styling = ['background', 'hidden', 'verticalAlignment', 'horizontalAlignment', 'padding', 'margin', 'dimension'];
    let components = {};
    for (let prop in this.refs) {
      if (this.refs.hasOwnProperty(prop)) {
        if (components[this.refs[prop]] === undefined) components[this.refs[prop]] = [];
        components[this.refs[prop]].push(...styling.splice(styling.indexOf(prop), 1));
      }
    }

    for (let ref in components) {
      if (components.hasOwnProperty(ref)) {
        let el = this.findRef(ref, component);
        if (el) {
          style = el.props.style || {};
          for (let i = 0, len = components[ref].length; i < len; ++i) {
            console.log(components[ref][i], this[components[ref][i]](props, style));
            ({ props, style } = this[components[ref][i]](props, style));
          }
          console.log(ref, style);
          this.replaceRef(ref, component, cloneElement(el, { style: style }));
        }
      }
    }

    style = component.props.style || {};
    for (let i = 0, len = styling.length; i < len; ++i) {
      ({ props, style } = this[styling[i]](props, style));
    }

    return cloneElement(component, {
      ...props,
      style: {
        userSelect: 'none',
        cursor: 'default',
        boxSizing: 'border-box',
        ...style,
        ...(style.display === 'none' ? { display: 'none' } : null)
      }
    });
  }

  dimension(props, style) {
    props = { ...props };
    let newStyles = {};
    let overrideStyles = {};

    if (props.width && this.options.dimension) {
      if (props.width.match(/^[0-9]+$/)) {
        newStyles.width = props.width + 'px';
      } else {
        newStyles.width = props.width;
      }
      overrideStyles.flexBasis = newStyles.width;
      overrideStyles.flexGrow = 0;
      props.width = null;
    } else if (this.options.dimension && this.params['Dimension'] && this.params['Dimension']['defaultWidth']) {
      newStyles.width = this.params['Dimension']['defaultWidth'];
    }

    if (props.height && this.options.dimension) {
      if (props.height.match(/^[0-9]+$/)) {
        newStyles.height = props.height + 'px';
      } else {
        newStyles.height = props.height;
      }
      props.height = null;
    } else if (this.options.dimension && this.params['Dimension'] && this.params['Dimension']['defaultHeight']) {
      newStyles.height = this.params['Dimension']['defaultHeight'];
    }

    return {
      props: props,
      style: {
        ...newStyles,
        ...style,
        ...overrideStyles
      }
    };
  }

  margin(props, style) {
    if (props.margin && this.options.margin) {
      style.margin = props.margin;
      props.margin = null;
    }

    return { props: props, style: style };
  }

  padding(props, style) {
    if (props.padding && this.options.padding) {
      style.padding = props.padding;
      props.padding = null;
    }

    return { props: props, style: style };
  }

  background(props, style) {
    if (props.background && this.options.background) {
      if (typeof props.background === 'boolean') {
        style.backgroundColor = convertColor(props.color);
      } else {
        style.backgroundColor = convertColor(props.background);
      }
      props.background = null;
    }

    return { props: props, style: style };
  }

  horizontalAlignment(props, style) {
    if (props.horizontalAlignment && this.options.horizontalAlignment || this.options.alignment) {
      switch (props.horizontalAlignment) {
      case 'center':
        style.justifyContent = 'center';
        break;
      case 'left':
        style.justifyContent = 'flex-start';
        break;
      case 'right':
        style.justifyContent = 'flex-end';
        break;
      }
      props.horizontalAlignment = null;
    }

    return { props: props, style: style };
  }

  verticalAlignment(props, style) {
    if (props.verticalAlignment && this.options.verticalAlignment || this.options.alignment) {
      switch (props.verticalAlignment) {
      case 'center':
        style.alignItems = 'center';
        break;
      case 'top':
        style.alignItems = 'flex-start';
        break;
      case 'bottom':
        style.alignItems = 'flex-end';
        break;
      }
      props.verticalAlignment = null;
    }

    return { props: props, style: style };
  }

  hidden(props, style) {
    if (props.hidden !== null && this.options.hidden) {
      if (!this._originalDisplay && style.display) this._originalDisplay  = style.display;

      style.display = props.hidden === true ? 'none' : this._originalDisplay;
      props.hidden = null;
    }

    return { props: props, style: style };
  }
}

export default CommonStylingComponent;
