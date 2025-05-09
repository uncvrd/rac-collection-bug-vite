import { useState } from "react";
import { Tab, TabPanel, TabList, Tabs } from "react-aria-components";
import Search from "./Search";

const tabs: { name: string; value: string }[] = [
    {
        name: "Topics",
        value: "TOPICS",
    },
    {
        name: "Segments",
        value: "SEGMENTS",
    },
];

function PageTabs() {
    const [tab, setTab] = useState("SEGMENTS");

    return (
        <Tabs selectedKey={tab} onSelectionChange={(value) => setTab(value as string)}>
            <div className="info-page-header">
                <div className="info-page-header-container">
                    <div></div>
                    <TabList items={tabs} aria-label="Fan list tabs">
                        {(item) => <Tab id={item.value}>{item.name}</Tab>}
                    </TabList>
                </div>
            </div>
            <div className="info-page-content">
                <TabPanel id={"TOPICS"}>{<></>}</TabPanel>
                <TabPanel id={"SEGMENTS"}>{<Search />}</TabPanel>
            </div>
        </Tabs>
    );
}

export default PageTabs;
