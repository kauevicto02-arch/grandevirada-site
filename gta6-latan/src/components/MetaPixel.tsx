import { useEffect } from "react";

export default function MetaPixel() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const w = window as any;

    if (!w.fbq) {
      w.fbq = function () {
        w.fbq.callMethod
          ? w.fbq.callMethod.apply(w.fbq, arguments)
          : w.fbq.queue.push(arguments);
      };

      w._fbq = w.fbq;
      w.fbq.push = w.fbq;
      w.fbq.loaded = true;
      w.fbq.version = "2.0";
      w.fbq.queue = [];

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
    }

   w.fbq("init", "1706278740498413");
    w.fbq("track", "PageView");
  }, []);

  return null;
}