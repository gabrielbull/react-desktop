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

  constructor(root, options, params) {
    this.root = root;
    this.options = options;
    this.params = params;
  }

  render(component) {
    let newProps = {};
    let newStyles = {};
    let overrideStyles = {};

    if (component.props.width && this.options.dimension) {
      if (component.props.width.match(/^[0-9]+$/)) {
        newStyles.width = component.props.width + 'px';
      } else {
        newStyles.width = component.props.width;
      }
      overrideStyles.flexBasis = newStyles.width;
      overrideStyles.flexGrow = 0;
      newProps.width = null;
    } else if (this.options.dimension && this.params['Dimension'] && this.params['Dimension']['defaultWidth']) {
      newStyles.width = this.params['Dimension']['defaultWidth'];
    }

    if (component.props.height && this.options.dimension) {
      if (component.props.height.match(/^[0-9]+$/)) {
        newStyles.height = component.props.height + 'px';
      } else {
        newStyles.height = component.props.height;
      }
      newProps.height = null;
    } else if (this.options.dimension && this.params['Dimension'] && this.params['Dimension']['defaultHeight']) {
      newStyles.height = this.params['Dimension']['defaultHeight'];
    }

    if (component.props.margin && this.options.margin) {
      newStyles.margin = component.props.margin;
      newProps.margin = null;
    }

    if (component.props.padding && this.options.padding) {
      newStyles.padding = component.props.padding;
      newProps.padding = null;
    }

    if (component.props.background && this.options.background) {
      if (typeof component.props.background === 'boolean') {
        newStyles.background = convertColor(component.props.color);
      } else {
        newStyles.background = convertColor(component.props.background);
      }
      newProps.background = null;
    }

    if (component.props.horizontalAlignment && this.options.horizontalAlignment || this.options.alignment) {
      switch (component.props.horizontalAlignment) {
      case 'center':
        newStyles.justifyContent = 'center';
        break;
      case 'left':
        newStyles.justifyContent = 'flex-start';
        break;
      case 'right':
        newStyles.justifyContent = 'flex-end';
        break;
      }
      newProps.horizontalAlignment = null;
    }

    if (component.props.verticalAlignment && this.options.verticalAlignment || this.options.alignment) {
      switch (component.props.verticalAlignment) {
      case 'center':
        newStyles.alignItems = 'center';
        break;
      case 'top':
        newStyles.alignItems = 'flex-start';
        break;
      case 'bottom':
        newStyles.alignItems = 'flex-end';
        break;
      }
      newProps.verticalAlignment = null;
    }

    if (component.props.hidden !== null && this.options.hidden) {
      newStyles.display = component.props.hidden === true ? 'none' : 'block';
      newProps.hidden = null;
    }

    return cloneElement(component, {
      ...newProps, style: {
        userSelect: 'none',
        cursor: 'default',
        boxSizing: 'border-box',
        ...newStyles,
        ...component.props.style,
        ...overrideStyles,
        ...(newStyles.display === 'none' ? { display: 'none' } : null)
      }
    });
  }
}

export default CommonStylingComponent;
