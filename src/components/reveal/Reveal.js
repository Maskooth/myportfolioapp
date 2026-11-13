import React, {
  cloneElement,
  isValidElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";

function Reveal({
  children,
  fade,
  left,
  right,
  top,
  bottom,
  distance = "100%",
  duration = 1000
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setVisible(true);
        observer.disconnect();
      }
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!visible || !node || typeof node.animate !== "function") return;
    const x = left ? `-${distance}` : right ? distance : "0";
    const y = top ? `-${distance}` : bottom ? distance : "0";
    const transform =
      x === "0" && y === "0" ? "none" : `translate3d(${x}, ${y}, 0)`;
    // "backwards" fill keeps the element in its start pose until the animation runs,
    // then hands control back to the stylesheet so CSS transforms keep working.
    node.animate(
      [
        {opacity: fade ? 0 : 1, transform},
        {opacity: 1, transform: "none"}
      ],
      {duration, easing: "ease", fill: "backwards"}
    );
  }, [visible, fade, left, right, top, bottom, distance, duration]);

  const hiddenStyle = visible ? undefined : {opacity: 0};

  if (isValidElement(children) && typeof children.type === "string") {
    return cloneElement(children, {
      ref,
      style: {...children.props.style, ...hiddenStyle}
    });
  }
  return (
    <div ref={ref} style={hiddenStyle}>
      {children}
    </div>
  );
}

export function Fade(props) {
  return <Reveal fade {...props} />;
}

export function Slide(props) {
  return <Reveal {...props} />;
}
