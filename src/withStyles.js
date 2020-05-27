import React, { Component } from "react";

export default function withStyles(OriginalComponent, styles) {
  class ProxyComponent extends Component {
    static getDerivedStateFromProps(props, state) {
      const { staticContext } = props;
      if (staticContext) {
        staticContext.csses.push(styles._getCss());
      }
    }

    render() {
      return <OriginalComponent {...this.props} />;
    }
  }
  return ProxyComponent;
}
