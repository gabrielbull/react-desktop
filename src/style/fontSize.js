import { PropTypes, cloneElement } from 'react';
import { parseDimension } from '../dimension';

function Size(options, ComposedComponent) {
  return class extends ComposedComponent {
    static propTypes = {
      ...ComposedComponent.propTypes,
      size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    };

    render() {
      if (this.props.size !== undefined) {
        const el = super.render();
        const props = { ...super.render().props };

        if (!props.style) props.style = {};
        if (props.size) {
          props.style.fontSize = parseDimension(props.size);
          props.style.lineHeight = parseDimension(parseInt(props.size) * 1.2);
          delete props.size;
        }

        return cloneElement(el, props);
      }
      return super.render();
    }
  }
}

export default function(...options) {
  if (options.length === 1 && typeof options[0] === 'function') return Size.apply(null, [[], options[0]]);
  return Size.bind(null, options);
}
