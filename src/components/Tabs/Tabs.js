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
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. Separated they live in Bookmarksgrove right at the
          coast of the Semantics, a large language ocean.1
        </div>
        <div className={activeTab === "vision" ? "tab activeTab" : "tab"}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. Separated they live in Bookmarksgrove right at the
          coast of the Semantics, a large language ocean.2
        </div>
        <div className={activeTab === "value" ? "tab activeTab" : "tab"}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. Separated they live in Bookmarksgrove right at the
          coast of the Semantics, a large language ocean.3
        </div>
      </div>
    </div>
  );
};

export default Tabs;
