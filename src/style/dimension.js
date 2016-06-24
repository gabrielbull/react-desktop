import { PropTypes, cloneElement } from 'react';
import { parseDimension } from '../dimension';

function Dimension(options, ComposedComponent) {
  return class extends ComposedComponent {
    static propTypes = {
      ...ComposedComponent.propTypes,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    };

    hasDimension() {
      return (
        this.props.width !== undefined ||
        this.props.height !== undefined
      );
    }

    render() {
      if (this.hasDimension()) {
        const el = super.render();
        const props = { ...super.render().props };

        if (!props.style) props.style = {};
        for (let prop in props) {
          if (props.hasOwnProperty(prop)) {
            if (['width', 'height'].indexOf(prop) !== -1) {
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
  if (options.length === 1 && typeof options[0] === 'function') return Dimension.apply(null, [[], options[0]]);
  return Dimension.bind(null, options);
}
