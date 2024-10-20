import { Component } from "react";
// import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // you would log this to something like TrackJS or NewRelic
    console.error("ErrorBoundary component caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      console.log("render ErrorBoundary");
      return (
        // <h2>
        //   There was an error with this listing.{" "}
        //   <Link to="/">Click here to go back to the home page.</Link>
        // </h2>
        this.props.errorComponent
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
