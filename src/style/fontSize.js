import { PropTypes, cloneElement } from 'react';
import { parseDimension } from '../styleHelper';

function FontSize(options, ComposedComponent) {
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
  return FontSize.bind(null, options);
}
