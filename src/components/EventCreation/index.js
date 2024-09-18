import { Component } from "react";

class EventCreation extends Component {
  state = {
    eventname: "",
  };

  onChangeEventNmae = (event) => {
    this.setState({ eventname: event.target.value });
  };

  renderEventNameField = () => {
    <>
      <label htmlFor="eventName">Event Name</label>
      <input
        type="text"
        id="eventName"
        className="input"
        value={eventname}
        onChange={onChangeEventNmae}
      />
    </>;
  };

  render() {
    return (
      <form>
        <div>{this.renderEventNameField}</div>
      </form>
    );
  }
}

export default EventCreation;
