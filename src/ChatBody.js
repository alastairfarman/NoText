import React from "react";

let sentMessages = [
    {key: 0,
    message: "To start, add a name above then type. Your messages will remain forever undelivered.",
    time: "undelivered",
}
    
];

export default function ChatBody() {
  const [updatedMessages, setUpdatedMessages] = React.useState(
    addMessagesToBody()
  );

  class InputFooter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "" };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
      if (this.state.value === "") {
        event.preventDefault();
      } else {
        event.preventDefault();
        console.log(sentMessages);
        this.setState({ value: "" });
        const now = new Date();
        const time =
          this.padTimeTo2Digits(now.getHours()) +
          ":" +
          this.padTimeTo2Digits(now.getMinutes());
        console.log(time);
        let newMessage = {
          key: sentMessages.length + 1,
          message: this.state.value,
          time: time,
        };
        sentMessages.push(newMessage);
        setUpdatedMessages(addMessagesToBody());
      }
    }

    padTimeTo2Digits(num) {
      return String(num).padStart(2, "0");
    }

    render() {
      return (
        <footer className="input-footer">
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
              autoFocus
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="image" src={require("./send-icon.png")} alt="" />
          </form>
        </footer>
      );
    }
  }

  function Message(props) {
    return (
      <React.Fragment key={props.aKey}>
        <div className="message">
          <p>{props.message}</p>
          <span className="time">{props.time}</span>
          <img className="tick" src={require("./tick.png")} alt="" />
        </div>
      </React.Fragment>
    );
  }

  function addMessagesToBody() {
    const messages = sentMessages.map((message) => {
      return (
        <Message
          key={message.aKey}
          message={message.message}
          time={message.time}
        />
      );
    });
    return <React.Fragment>{messages}</React.Fragment>;
  }

  return (
    <React.Fragment>
      <main className="chat-container">{updatedMessages}</main>
      <InputFooter />
    </React.Fragment>
  );
}
