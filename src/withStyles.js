import React, { Component } from "react";

export default function withStyles(OriginalComponent, styles) {
  class ProxyComponent extends Component {
    componentWillMount() {
      const { staticContext } = this.props;
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
