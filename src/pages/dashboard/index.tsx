import Banner from "../../components/Banner";
import TableHeader from "./tableHeader";
import TableRow from "./tableRow";
import TableCard from "./tableCard";
import config from "../../config/config.json";
import useProtocolData from "../../utils/useProtocolData";
import parseNumber from "../../utils/parseNumber";
import {useEffect, useState} from "react";
import {ethers} from "ethers";

export default function Dashboard() {
    const [protocolData, setAddress] = useProtocolData();

    const [data, setData] = useState<{tvl: ethers.BigNumber; tvb: ethers.BigNumber} | null>(null);

    useEffect(() => {
        if (!protocolData) setData(null);
        else {
            (async () => {
                const tvl = await protocolData.totalPoolPrice();
                const tvb = await protocolData.totalBorrowedPrice();
                setData({tvl, tvb});
            })();
        }
    }, [protocolData]);

    return (
        <>
            <div className="lg:block hidden">
                <Banner
                    placeholders={[
                        {title: "Total Value Locked", body: parseNumber(data?.tvl)},
                        {title: "Total Value Borrowed", body: parseNumber(data?.tvb)},
                    ]}
                />
                <TableHeader />
            </div>
            <div className="lg:block hidden">
                {config.approved.map((data, index) => {
                    return (
                        <TableRow
                            key={index}
                            name={data.name}
                            symbol={data.symbol}
                            icon={data.icon}
                            address={data.address}
                            tvl={parseNumber(protocolData?.totalPoolPrice.toString())}
                            borrowed="431.84M"
                            stakeAPY="7.23"
                            borrowAPY="16.23"
                            yieldAPR="3.21"
                        />
                    );
                })}
            </div>
            <h2 className="font-bold text-white text-3xl lg:hidden block mt-20 ml-12">Dashboard</h2>
            <div className="lg:hidden my-10">
                {config.approved.map((data, index) => (
                    <TableCard
                        key={index}
                        name={data.name}
                        symbol={data.symbol}
                        icon={data.icon}
                        address={data.address}
                        tvl={protocolData?.totalPoolPrice.toString() || "-"}
                        borrowed="431.84M"
                        stakeAPY="7.23"
                        borrowAPY="16.23"
                        yieldAPR="3.21"
                    />
                ))}
            </div>
        </>
    );
}
