import { PropTypes, cloneElement } from 'react';

function TextAlign(options, ComposedComponent) {
  const allowedValues = ['left', 'right', 'center'];

  return class extends ComposedComponent {
    static propTypes = {
      ...ComposedComponent.propTypes,
      textAlign: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    };

    render() {
      if (this.props.textAlign !== undefined) {
        const el = super.render();
        const props = { ...super.render().props };

        if (!props.style) props.style = {};
        if (allowedValues.indexOf(props.textAlign) === -1) {
          console.error('Unknown value for textAlign: ' + props.textAlign);
        } else {
          props.style.textAlign = props.textAlign;
        }
        delete props.textAlign;

        return cloneElement(el, props);
      }
      return super.render();
    }
  }
}

export default function(...options) {
  return TextAlign.bind(null, options);
}
