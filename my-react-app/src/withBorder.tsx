
import React, { type JSX } from "react";


export default function withBorder<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithBorderComponent(props: P) {
    return (
      <div style={{ border: "2px solid black", padding: "10px", display: "inline-block" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}
