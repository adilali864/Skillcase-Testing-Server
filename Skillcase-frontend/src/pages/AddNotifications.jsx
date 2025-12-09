import { useState } from "react";
import api from "../api/axios";
const AddNotifications = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const sendNotification = async () => {
    if (!title || !body) return alert("Fill all fields");
    setSending(true);
    try {
      await api.post("/notifications/broadcast", { title, body });
      alert("Notification sent to all users!");
      setTitle("");
      setBody("");
    } catch (err) {
      alert("Failed to send notification");
    }
    setSending(false);
  };
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">📢 Send Notification</h2>
      <input
        type="text"
        placeholder="Notification Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border rounded-lg mb-3"
      />
      <textarea
        placeholder="Notification Message"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full p-3 border rounded-lg mb-4 h-24"
      />
      <button
        onClick={sendNotification}
        disabled={sending}
        className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold"
      >
        {sending ? "Sending..." : "Send to All Users"}
      </button>
    </div>
  );
};

export default AddNotifications;
