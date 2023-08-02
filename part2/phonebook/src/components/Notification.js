const Notification = ({ message }) => {
  return message ? <div className="added">{message}</div> : null;
};

export default Notification;
