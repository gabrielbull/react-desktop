import { PropTypes, cloneElement } from 'react';
import { parseDimension } from '../dimension';

function Padding(options, ComposedComponent) {
  return class extends ComposedComponent {
    static propTypes = {
      ...ComposedComponent.propTypes,
      padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    };

    hasPadding() {
      return (
        this.props.padding !== undefined ||
        this.props.paddingTop !== undefined ||
        this.props.paddingLeft !== undefined ||
        this.props.paddingRight !== undefined ||
        this.props.paddingBottom !== undefined
      );
    }

    render() {
      if (this.hasPadding()) {
        const el = super.render();
        const props = { ...super.render().props };

        if (!props.style) props.style = {};
        for (let prop in props) {
          if (props.hasOwnProperty(prop)) {
            if (['padding', 'paddingTop', 'paddingLeft', 'paddingRight', 'paddingBottom'].indexOf(prop) !== -1) {
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
  if (options.length === 1 && typeof options[0] === 'function') return Padding.apply(null, [[], options[0]]);
  return Padding.bind(null, options);
}
