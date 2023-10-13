"use client";

import { scrollToBottom, initialMessages, getSources } from "@/lib/utils";

import { useChat, Message } from "ai/react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { useEffect, useRef } from "react";
import { ChatBubble } from "./ChatBubble";
import { useState, type FormEvent } from "react";
import DEFAULT_RETRIEVAL_TEXT from "@/data/DefaultRetrievalText";
import Footer from "../homepage/Footer";

export function Chat() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [document, setDocument] = useState(DEFAULT_RETRIEVAL_TEXT);
  const ingest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("/api/ingest", {
      method: "POST",
      body: JSON.stringify({
        text: document
      })
    });
    if (response.status === 200) {
      setDocument("Uploaded!");
    } else {
      const json = await response.json();
      if (json.error) {
        setDocument(json.error);
      }
    }
    setIsLoading(false);
  };
  const { messages, input, handleInputChange, handleSubmit, data } =
    useChat({
        api: 'api/retrieval',
      initialMessages,
    });

  useEffect(() => {
    setTimeout(() => scrollToBottom(containerRef), 100);
  }, [messages]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
  
    if (selectedFile) {
      // You can now work with the selected file, for example, store it in state or perform any necessary actions.
      console.log("Selected file:", selectedFile);
  
      // If you want to store the selected file in state, you can use the state setter function.
      // For example, if you have a state variable named 'selectedFile' to store the file:
      // setSelectedFile(selectedFile);
    } else {
      // Handle the case where no file is selected.
      console.log("No file selected");
    }
  };
  
  
  return (
    <>
    <div className="rounded-2xl border h-full mt-4 mb-4 w-[80%] justify-center items-center flex flex-col ml-[10%]">
      <div className="p-6 overflow-auto" ref={containerRef}>
        {messages.map(({ id, role, content }: Message, index) => (
          <ChatBubble
            key={id}
            role={role}
            content={content}
            // Start from the third message of the assistant
            sources={data?.length ? getSources(data, role, index) : []}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 flex clear-both">
        <Input
          value={input}
          placeholder={"Type to chat with AI..."}
          onChange={handleInputChange}
          className="mr-2 w-full"
        />

        <Button type="submit" className="w-24">
          {isLoading ? <Spinner /> : "Ask"}
        </Button>
      </form>
      <form onSubmit={ingest} className="flex justify-center items-center w-full mb-4">
        {/* <textarea
          className="grow mr-4 p-4 rounded"
          value={document}
          onChange={(e) => setDocument(e.target.value)}
        ></textarea>
        <br/> */}
        {/* <label htmlFor="fileInput" className="shrink-0 items-center justify-center  cursor-pointer">
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <span className="text-sm border border-black rounded p-2">Choose File</span>
        </label>
        <button type="submit" className="px-4 py-2 bg-sky-600 rounded w-24">
          <div role="status" className={`${isLoading ? "" : "hidden"} flex justify-center`}>
            <span className="sr-only">Loading...</span>
          </div>
          <span className={isLoading ? "hidden" : ""}>Upload</span>
        </button> */}
        <div className="flex justify-center items-center">
          <label htmlFor="fileInput" className="shrink-0 items-center justify-center  cursor-pointer">
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <span className="text-sm border border-black rounded p-2">Choose File</span>
          </label>
          <Button type="submit" className="ml-2 px-4 py-2 rounded w-24">
            <div role="status" className="{{ isLoading ? '' : 'hidden' }} flex justify-center">
              <span className="sr-only">Loading...</span>
            </div>
            <span className="{{ isLoading ? 'hidden' : '' }}">Upload</span>
          </Button>
        </div>

      </form>


    </div>
    <Footer/>
    </>
  );
}