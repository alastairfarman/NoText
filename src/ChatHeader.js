import React from "react";

export default function ChatHeader() {
  const [recipient, setRecipient] = React.useState("Add a name...");
  let nameClass = "";

  if (recipient === "Add a name...") {
    nameClass = "default-name";
  } else {
    nameClass = "real-name";
  }

  function handleOnClick() {
    let recipientName = prompt("Add contact name", "");
    while (recipientName === "") {
      recipientName = prompt("Add contact name", "");
    }
    if(recipientName == null) {recipientName = "Add a name..."}
    setRecipient(recipientName);
  }

  return (
    <header className="chat-header">
      <img src={require("./back.png")} className="back-button" alt="" />
      <div className="pfp-name">
        <img
          src={require("./default-profile-picture.png")}
          alt="default profile"
        />
        <h3 id="recipient" className={nameClass} onClick={handleOnClick}>
          {recipient}
        </h3>
      </div>
      <div></div>
    </header>
  );
}
