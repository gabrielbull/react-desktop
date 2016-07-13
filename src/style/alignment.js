import { PropTypes, cloneElement } from 'react';

function Alignment(options, ComposedComponent) {
  const allowedValues = ['left', 'right', 'center'];

  return class extends ComposedComponent {
    static propTypes = {
      ...ComposedComponent.propTypes,
      horizontalAlignment: PropTypes.string,
      verticalAlignment: PropTypes.string
    };

    hasAlignment() {
      return (
        this.props.horizontalAlignment !== undefined ||
        this.props.verticalAlignment !== undefined
      );
    }

    render() {
      if (this.hasAlignment()) {
        const el = super.render();
        const props = { ...super.render().props };

        if (!props.style) props.style = {};
        for (let prop in props) {
          if (props.hasOwnProperty(prop)) {
            if (['horizontalAlignment', 'verticalAlignment'].indexOf(prop) !== -1) {
              if (allowedValues.indexOf(props[prop]) === -1) {
                console.error('Unknown value for ' + prop + ': ' + props[prop]);
              } else if (prop === 'horizontalAlignment') {
                switch (props[prop]) {
                case 'center':
                  props.style.justifyContent = 'center';
                  break;
                case 'left':
                  props.style.justifyContent = 'flex-start';
                  break;
                case 'right':
                  props.style.justifyContent = 'flex-end';
                  break;
                }
              } else if (prop === 'verticalAlignment') {
                switch (props[prop]) {
                case 'center':
                  props.style.alignItems = 'center';
                  break;
                case 'left':
                  props.style.alignItems = 'flex-start';
                  break;
                case 'right':
                  props.style.alignItems = 'flex-end';
                  break;
                }
              }
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
  return Alignment.bind(null, options);
}
