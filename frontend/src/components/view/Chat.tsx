import { KeyboardReturn } from "@mui/icons-material";
import { ChatProps } from "../../Type";
import React from "react";
import { useState } from "react";
const Chat: React.FC<ChatProps> = ({ setChat }) => {
  const [message, setMessage] = useState<string>("");
  const [msgArray, setMsgArray] = useState<string[]>([]);
  const handelSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== "") {
      setMsgArray([...msgArray, message]);
      setMessage("");
    }
  };
  return (
    <>
      <div className="w-[50%] h-[50vh] border rounded-3xl border-gray-400 bg-gray-500">
        <div className="flex flex-col w-full h-full justify-between">
          <div className="header-section flex flex-row">
            <div className="m-2 text-white cursor-pointer">
              <button className="cursor-pointer" onClick={() => setChat(false)}>
                <KeyboardReturn />
              </button>
            </div>
            <div className="w-full flex flex-col">
              <p className="p-2 text-white">ABC</p>
              <hr className="text-white" />
            </div>
          </div>

          <div>
          {msgArray.map((msg,index) => (
            <div key={index} className="text-black rounded-2xl bg-white m-2 p-1"><p>{msg}</p></div>
          ))}
          <hr className="text-white p-2" />
          {/*form to chat*/}
          <form onSubmit={handelSend} className="flex gap-2 w-full">
            <input
              className="border outline-none text-white border-white rounded-3xl w-full p-1"
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="bg-transparent border border-white cursor-pointer text-white rounded p-1"
              type="submit"
              onClick={() => handelSend}
            >
              Send
            </button>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
