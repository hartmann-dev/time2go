import React from "react";

class Timer extends React.Component {
  state = {
    secondsLeft: undefined
  };

  componentDidMount = () => {
    if (this.props.dateTime === undefined) return;
    const curDateTime = new Date();
    const dateTimeLeft = Math.floor((this.props.dateTime - curDateTime) / 1000);
    this.setState({
      invervalId: setInterval(this.timer, 1000),
      secondsLeft: dateTimeLeft
    });
  };

  componentWillUnmount = () => {
    if (this.state.invervalId === undefined) return;
    clearInterval(this.state.invervalId);
  };

  timer = () => {
    this.setState({
      secondsLeft: this.state.secondsLeft - 1
    });
  };

  render() {
    return (
      <div>
        {this.state.secondsLeft && (
          <div className="timer__info">
            <p className="timer__key">
              Sekunden:
              <span className="timer__value"> {this.state.secondsLeft}</span>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Timer;
