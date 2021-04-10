import React from "react";

/**
 * @author 109149
 * @time Sat 10 Apr 2021 15:36:01 +04
 *
 * Hook for handling event listener on element.
 * Add event listener on user input element. Listen for changes. Clean up.
 *
 * @usage
 * useEventListener("mousemove", (event) => console.log(event.pageX));
 *
 * @param {string} eventName is the event to listen to.
 * @param {function(Event): void} eventHandler is function to dispatch when event occurs.
 * @param {EventTarget} [element=window] is the target element to add event on.
 */
const useEventListener = (eventName, eventHandler, element = window) => {
  const handler = React.useRef();

  React.useEffect(() => {
    handler.current = eventHandler;
  }, [eventHandler]);

  React.useEffect(() => {
    const valid = element && element.addEventListener;
    if (!valid) return;

    const _handler = (event) => handler.current(event);

    element.addEventListener(eventName, _handler);

    return () => element.removeEventListener(eventName, _handler);
  }, [element, eventName]);
};

export default useEventListener;
