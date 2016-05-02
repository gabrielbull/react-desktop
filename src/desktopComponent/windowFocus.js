class WindowFocusComponent {
  constructor(root) {
    this.root = root;
    this.root.state.windowFocused = true;
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('focus', this.windowFocus);
      window.addEventListener('blur', this.windowBlur);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('focus', this.windowFocus);
      window.removeEventListener('blur', this.windowBlur);
    }
  }

  windowFocus = () => {
    this.root.setState({ windowFocused: true });
  };

  windowBlur = () => {
    this.root.setState({ windowFocused: false });
  };
}

export default WindowFocusComponent;
