import { PropTypes, cloneElement } from 'react';
import { parseDimension } from '../dimension';

function Margin(options, ComposedComponent) {
  return class extends ComposedComponent {
    static propTypes = {
      ...ComposedComponent.propTypes,
      margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    };

    hasMargin() {
      return (
        this.props.margin !== undefined ||
        this.props.marginTop !== undefined ||
        this.props.marginLeft !== undefined ||
        this.props.marginRight !== undefined ||
        this.props.marginBottom !== undefined
      );
    }

    render() {
      if (this.hasMargin()) {
        const el = super.render();
        const props = { ...super.render().props };

        if (!props.style) props.style = {};
        for (let prop in props) {
          if (props.hasOwnProperty(prop)) {
            if (['margin', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom'].indexOf(prop) !== -1) {
              props.style[prop] = parseDimension(props[prop]);
              delete props[prop];
            }
          }
        }

        return cloneElement(el, props);
      }
      return super.render();
    }
  }
}

export default function(...options) {
  if (options.length === 1 && typeof options[0] === 'function') return Margin.apply(null, [[], options[0]]);
  return Margin.bind(null, options);
}
