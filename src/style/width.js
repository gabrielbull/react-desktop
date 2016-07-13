import { PropTypes, cloneElement } from 'react';

function Width(options, ComposedComponent) {
  return class extends ComposedComponent {
    static propTypes = {
      ...ComposedComponent.propTypes,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    };

    render() {
      if (this.props.width !== undefined) {
        const el = super.render();
        const props = { ...super.render().props };
        delete props.width;
        if (!props.style) props.style = {};
        props.style.width = this.props.width;
        if (props.style.flex) {
          delete props.style.flex;
        } else if (props.style.flexGrow) {
          delete props.style.flexGrow;
        }
        return cloneElement(el, props);
      }
      return super.render();
    }
  }
}

export default function(...options) {
  return Width.bind(null, options);
}
