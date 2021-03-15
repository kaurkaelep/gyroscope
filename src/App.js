import React, { useState } from "react";
import { useDeviceOrientation } from "./useDeviceOrientation";

const App = () => {
  const [isAllowed, setIsAllowed] = useState(true);
  const { orientation, requestAccess, revokeAccess } = useDeviceOrientation();
  console.log(`orientation`, orientation);

  const onToggle = () => {
    if (isAllowed) {
      requestAccess();
    } else {
      revokeAccess();
    }
    setIsAllowed(!isAllowed);
  };

  /*
   * Because Generic Sensor API is a powerful feature, Chrome only allows it on secure contexts.
   * In practice it means that to use Generic Sensor API you'll need to access your page through HTTPS.
   * During development you can do so via http://localhost but for production you'll need to have
   * HTTPS on your server. See Security with HTTPS article for
   * best practices and guidelines there.
   */

  // Until then I can use the device orientation sensor on chrome, muahhaha!!!

  const orientationInfo = (
    <div>
      <p>
        <button onClick={() => onToggle(true)}>
          {isAllowed ? "Request" : "Revoke"} access
        </button>
      </p>
      <ul style={{ margin: 0, padding: 0 }}>
        <li>
          ɑ:{" "}
          {orientation && (
            <code className="language-text">{orientation.alpha}</code>
          )}
        </li>
        <li>
          β:{" "}
          {orientation && (
            <code className="language-text">{orientation.beta}</code>
          )}
        </li>
        <li>
          γ:{" "}
          {orientation && (
            <code className="language-text">{orientation.gamma}</code>
          )}
        </li>
      </ul>
    </div>
  );

  return <div>{orientationInfo}</div>;
};

export default App;
