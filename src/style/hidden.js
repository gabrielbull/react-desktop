import { PropTypes, cloneElement } from 'react';

function Hidden(options, ComposedComponent) {
  return class extends ComposedComponent {
    static propTypes = {
      ...ComposedComponent.propTypes,
      hidden: PropTypes.bool
    };

    render() {
      if (this.props.hidden !== undefined && this.props.hidden === true) {
        const el = super.render();
        const props = { ...super.render().props };

        if (!props.style) props.style = {};
        props.style.display = 'none';
        delete props.hidden;

        return cloneElement(el, props);
      }
      return super.render();
    }
  }
}

export default function(...options) {
  return Hidden.bind(null, options);
}
