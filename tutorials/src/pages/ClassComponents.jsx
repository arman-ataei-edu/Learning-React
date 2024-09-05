import { Component } from "react";
import ErrorBoundary from "../tools/ErrorBoundary";

class ClassComponents extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: [
      "https://picsum.photos/600/800?random=1",
      "https://picsum.photos/600/800?random=2",
    ],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    if (active > 2) {
      throw new Error("active is greater than 3");
    }
    return (
      <div className="">
        <div className="carousel">
          <img src={images[active]} alt="random-pict" />
          <div className="carousel-smaller">
            {images.map((photo, index) => (
              // eslint-disable-next-line
              <img
                key={photo}
                src={photo}
                className={index === active ? "active" : ""}
                alt="random-Pict"
                onClick={this.handleIndexClick}
                data-index={index}
              />
            ))}
          </div>
        </div>
        <div className="w3-container">
          <ol>
            <li>
              while adding an event listener to an object in class component use
              the arrow functions to be able to access to "this" object of the
              current instance of the classComponent
            </li>
            <li>
              "event.target.dataset" refers to all data-things attributes on an
              object like img tag(a dom method){" "}
            </li>
            <li>
              everythin comes out of DOM is a string e.g.
              "event.target.dataset.index", to convert it to a number we can use
              "+" unary-plus operator to turn it to a number
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

function ClassComponentsErrorBoundary(props) {
  return (
    <ErrorBoundary errorComponent={<p>Active is greater than 2</p>}>
      <ClassComponents {...props} />
    </ErrorBoundary>
  );
}

export default ClassComponentsErrorBoundary;
// export default ClassComponents;
