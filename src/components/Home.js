import React from "react";
import Form from "./Form";
import Timer from "./Timer";

class Home extends React.Component {
  state = {
    dateTime: undefined
  };

  constructor(props) {
    super(props);
    const dateTime = props.match.params.datetime;
    if (this.isDateTime(dateTime)) {
      this.state = { dateTime };
    }
  }

  getTimer = e => {
    e.preventDefault();
    const dateTime = e.target.elements.date.value;
    if (this.isDateTime(dateTime)) {
      this.setState({ dateTime });
    }
  };

  isDateTime = time2go => {
    const dateTime = new Date(time2go);
    return dateTime instanceof Date && !isNaN(dateTime);
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-5 title-container">
                  <h1 className="title-container__title">Time2Go</h1>
                  <h3 className="title-container__subtitle">
                    It's more like a big ball of wibbly wobbly... timey wimey...
                    stuff.
                  </h3>
                </div>
                <div className="col-7 form-container">
                  <Form getTimer={this.getTimer} />
                  <Timer dateTime={this.state.dateTime} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
