import React from "react";

import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState("mission");

  const changeTabHandler = (name) => {
    setActiveTab(name);
  };
  return (
    <div>
      <div className="tabsNav">
        <ul className="tabsNavItems">
          <li
            className={
              activeTab === "mission" ? "tabItem activeTabItem" : "tabItem"
            }
            onClick={() => changeTabHandler("mission")}
          >
            Our Mission
          </li>
          <li
            className={
              activeTab === "vision" ? "tabItem activeTabItem" : "tabItem"
            }
            onClick={() => changeTabHandler("vision")}
          >
            Our Vision
          </li>
          <li
            className={
              activeTab === "value" ? "tabItem activeTabItem" : "tabItem"
            }
            onClick={() => changeTabHandler("value")}
          >
            Our Value
          </li>
        </ul>
      </div>
      <div className="tabs">
        <div className={activeTab === "mission" ? "tab activeTab" : "tab"}>
        Our Mission is to offer excellent service in each of our professional disciplines, in accordance with statutory practices, codes of conduct and integrity, thereby providing a leading platform from which to service the built environment and in particular, our valued Clients. 
        </div>
        <div className={activeTab === "vision" ? "tab activeTab" : "tab"}>
        To grow our multi-disciplinary team in order to offer a broad spectrum of specialist in construction and project  Management works to become our Clients' preferred Professional Service Provider (PSP) through excellence and efficiency in all aspects of the project life cycle
        </div>
        <div className={activeTab === "value" ? "tab activeTab" : "tab"}>
        We provide services for every aspect of a construction project from initial design brief through construction to maintenance after the construction. 
        </div>
      </div>
    </div>
  );
};

export default Tabs;
