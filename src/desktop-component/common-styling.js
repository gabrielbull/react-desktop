import { PropTypes, cloneElement } from 'react';

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

    return propTypes;
  }

  constructor(root, options) {
    this.root = root;
    this.options = options;
  }

  render(component) {
    let newProps = {};
    let newStyles = {};

    if (component.props.width && this.options.dimension) {
      if (component.props.width.match(/^[0-9]+$/)) {
        newStyles.width = component.props.width + 'px';
      } else {
        newStyles.width = component.props.width;
      }
      newProps.width = null;
    }

    if (component.props.height && this.options.dimension) {
      if (component.props.height.match(/^[0-9]+$/)) {
        newStyles.height = component.props.height + 'px';
      } else {
        newStyles.height = component.props.height;
      }
      newProps.height = null;
    }

    if (component.props.margin && this.options.margin) {
      newStyles.margin = component.props.margin;
      newProps.margin = null;
    }

    if (component.props.padding && this.options.padding) {
      newStyles.padding = component.props.padding;
      newProps.padding = null;
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
        ...newStyles,
        ...component.props.style,
        ...(newStyles.display === 'none' ? { display: 'none' } : null)
      }
    });
  }
}

export default CommonStylingComponent;
