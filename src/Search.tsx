import { Table, TableHeader, TableBody, Row, Cell, Column, SearchField, Label, Input, Button } from "react-aria-components";
import { VisuallyHidden, useFilter } from "react-aria";
import { useMemo, useState } from "react";

const columns = [
    {
        id: "name",
        children: "Name",
        isRowHeader: true,
    },
    {
        id: "actions",
        children: <VisuallyHidden>Actions</VisuallyHidden>,
    },
];

export default function Search() {
    const [value, setValue] = useState("");

    const dependencies = useMemo(() => {
        return [columns];
    }, []);

    const { startsWith } = useFilter();

    const matchedItems = items.filter((item) => startsWith(item.name, value));

    return (
        <>
            <SearchField>
                <Label>Search</Label>
                <Input value={value} onChange={(e) => setValue(e.target.value)} />
                <Button>✕</Button>
            </SearchField>
            <Table aria-label="Fan list segments">
                <TableHeader columns={columns}>{(column) => <Column {...column} />}</TableHeader>
                <TableBody items={matchedItems} dependencies={dependencies}>
                    {(item) => (
                        <Row columns={columns} href={"https://test.com"}>
                            {(column) => {
                                switch (column.id) {
                                    case "name":
                                        return <Cell>{item.name}</Cell>;
                                    case "actions":
                                        return <Cell></Cell>;
                                    default:
                                        return <></>;
                                }
                            }}
                        </Row>
                    )}
                </TableBody>
            </Table>
        </>
    );
}

const items = [
    {
        fanListId: "1",
        id: "34",
        name: "E-Mail Contains AND Subscribed Date Is Before",
    },
    {
        fanListId: "1",
        id: "33",
        name: "Subscribed Date Is Before",
    },
    {
        fanListId: "1",
        id: "32",
        name: "Subscribed Date Is After",
    },
    {
        fanListId: "1",
        id: "31",
        name: "Subscribed Date Is",
    },
    {
        fanListId: "1",
        id: "30",
        name: "Service One Of",
    },
    {
        fanListId: "1",
        id: "29",
        name: "Service None Of",
    },
    {
        fanListId: "1",
        id: "28",
        name: "Service All Of",
    },
    {
        fanListId: "1",
        id: "27",
        name: "Presave Method One Of",
    },
    {
        fanListId: "1",
        id: "26",
        name: "Presave Method None Of",
    },
    {
        fanListId: "1",
        id: "25",
        name: "Presave Method All Of",
    },
    {
        fanListId: "1",
        id: "24",
        name: "Predicted Location Not In Country",
    },
    {
        fanListId: "1",
        id: "23",
        name: "Predicted Location Not In City",
    },
    {
        fanListId: "1",
        id: "22",
        name: "Predicted Location Is Unknown",
    },
    {
        fanListId: "1",
        id: "21",
        name: "Predicted Location In Country",
    },
    {
        fanListId: "1",
        id: "20",
        name: "Predicted Location In City",
    },
    {
        fanListId: "1",
        id: "19",
        name: "Predicted Location Is Within",
    },
    {
        fanListId: "1",
        id: "18",
        name: "Predicted Location Is Not Within",
    },
    {
        fanListId: "1",
        id: "17",
        name: "Notification Method One Of",
    },
    {
        fanListId: "1",
        id: "16",
        name: "Notification Method None Of",
    },
    {
        fanListId: "1",
        id: "15",
        name: "Notification Method All Of",
    },
    {
        fanListId: "1",
        id: "14",
        name: "Landing Page Uid One Of",
    },
    {
        fanListId: "1",
        id: "13",
        name: "Landing Page Uid None Of",
    },
    {
        fanListId: "1",
        id: "12",
        name: "Landing Page Uid All Of",
    },
    {
        fanListId: "1",
        id: "11",
        name: "Fan List Topic Id One Of",
    },
    {
        fanListId: "1",
        id: "10",
        name: "Fan List Topic Id None Of",
    },
    {
        fanListId: "1",
        id: "9",
        name: "Fan List Topic Id All Of",
    },
    {
        fanListId: "1",
        id: "8",
        name: "E-Mail Starts With",
    },
    {
        fanListId: "1",
        id: "7",
        name: "E-Mail Is Not Empty",
    },
    {
        fanListId: "1",
        id: "6",
        name: "E-Mail Is Not",
    },
    {
        fanListId: "1",
        id: "5",
        name: "E-Mail Is Empty",
    },
    {
        fanListId: "1",
        id: "35",
        name: "E-Mail Does Not Contain",
    },
    {
        fanListId: "1",
        id: "36",
        name: "E-Mail Ends With",
    },
    {
        fanListId: "1",
        id: "37",
        name: "Last Activity Date Before",
    },
    {
        fanListId: "1",
        id: "38",
        name: "Last Activity Date After",
    },
    {
        fanListId: "1",
        id: "39",
        name: "Last Activity Date Is",
    },
    {
        fanListId: "1",
        id: "40",
        name: "Engagement Score Above",
    },
    {
        fanListId: "1",
        id: "41",
        name: "Engagement Score Below",
    },
    {
        fanListId: "1",
        id: "42",
        name: "Engagement Score Is",
    },
    {
        fanListId: "1",
        id: "43",
        name: "Subscription Source One Of",
    },
    {
        fanListId: "1",
        id: "44",
        name: "Subscription Source None Of",
    },
    {
        fanListId: "1",
        id: "45",
        name: "Subscription Source All Of",
    },
    {
        fanListId: "1",
        id: "46",
        name: "Campaign Interaction Count Above",
    },
    {
        fanListId: "1",
        id: "47",
        name: "Campaign Interaction Count Below",
    },
    {
        fanListId: "1",
        id: "48",
        name: "Campaign Interaction Count Is",
    },
    {
        fanListId: "1",
        id: "49",
        name: "Device Type One Of",
    },
    {
        fanListId: "1",
        id: "50",
        name: "Device Type None Of",
    },
    {
        fanListId: "1",
        id: "51",
        name: "Device Type All Of",
    },
    {
        fanListId: "1",
        id: "52",
        name: "Browser One Of",
    },
    {
        fanListId: "1",
        id: "53",
        name: "Browser None Of",
    },
    {
        fanListId: "1",
        id: "54",
        name: "Browser All Of",
    },
    {
        fanListId: "1",
        id: "55",
        name: "Purchase History Contains",
    },
    {
        fanListId: "1",
        id: "56",
        name: "Purchase History Does Not Contain",
    },
    {
        fanListId: "1",
        id: "57",
        name: "Total Spent Above",
    },
    {
        fanListId: "1",
        id: "58",
        name: "Total Spent Below",
    },
    {
        fanListId: "1",
        id: "59",
        name: "Total Spent Is",
    },
    {
        fanListId: "1",
        id: "60",
        name: "Custom Field Contains",
    },
    {
        fanListId: "1",
        id: "61",
        name: "Custom Field Does Not Contain",
    },
    {
        fanListId: "1",
        id: "62",
        name: "Custom Field Is Empty",
    },
    {
        fanListId: "1",
        id: "63",
        name: "Custom Field Is Not Empty",
    },
    {
        fanListId: "1",
        id: "64",
        name: "User Tags Contain",
    },
];
