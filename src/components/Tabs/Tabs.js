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
          Our businesses are carried out with the execution of a carefully and
          studied plan to provide professional, timely and efficient support to
          our clients - private individuals and corporate organisations.
        </div>
        <div className={activeTab === "vision" ? "tab activeTab" : "tab"}>
          Our principal activity is to utilize of our products and
          professionalisms to ensure a profit is made for stakeholders while
          fulfilling our clients’ objectives in a cost effective ways.
        </div>
        <div className={activeTab === "value" ? "tab activeTab" : "tab"}>
          The keys to profitability lie in the constant demand for our service
          by the public and our ability to minimise risks, overheads and
          operating costs. Our company minimises these risks through effective
          monitoring and communications, as well as maintaining a transparency
          culture as much as possible. Our strengths lie in our management
          structures and management plan, which result in increase efficiency,
          reduce downtime, and increase profits.
        </div>
      </div>
    </div>
  );
};

export default Tabs;
