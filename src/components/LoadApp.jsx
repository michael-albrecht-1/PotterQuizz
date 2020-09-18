import React from "react";

function LoadApp(Component) {
  return function loadingFunction({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <div className="alert alert-primary"> Chargement... </div>;
  };
}

export default LoadApp;
