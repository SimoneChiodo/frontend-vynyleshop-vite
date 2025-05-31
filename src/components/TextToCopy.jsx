import { useEffect, useRef } from "react";
import { Popover } from "bootstrap";

export default function TextToCopy({ text }) {
  const emailRef = useRef();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      const popover = Popover.getInstance(emailRef.current);
      if (popover) {
        popover.show();
        setTimeout(() => popover.hide(), 2000);
      }
    } catch (err) {
      console.log("Error while copying text: ", err);
    }
  };

  useEffect(() => {
    new Popover(emailRef.current, {
      trigger: "manual",
      placement: "top",
      content: "Copied to clipboard",
    });
  }, []);

  return (
    <p
      ref={emailRef}
      className="d-inline-block m-0 hover-pointer hover-underline"
      onClick={handleCopy}
    >
      {text}
    </p>
  );
}
