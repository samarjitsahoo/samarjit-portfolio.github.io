import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const scriptSources = [
      "https://cdn.botpress.cloud/webchat/v2.1/inject.js",
      "https://mediafiles.botpress.cloud/16756fe9-836d-4dac-bdc7-1e59c45755ef/webchat/v2.1/config.js",
    ];
    const loadScripts = (sources) => {
      return sources.map((src) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.dataset.chatbotScript = true;
        document.body.appendChild(script);
        return script;
      });
    };
    const scripts = loadScripts(scriptSources);
    return () => {
      scripts.forEach((script) => document.body.removeChild(script));
    };
  }, []);

  return null;
};

export default Chatbot;
