import { useEffect } from "react";

export default function BootstrapInit() {
  useEffect(() => {
    console.warn = () => { };
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}
