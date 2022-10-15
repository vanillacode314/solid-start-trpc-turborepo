import { mount, StartClient } from "solid-start/entry-client";

mount(() => <StartClient />, document);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js", { scope: "/" });
}
