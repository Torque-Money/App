import {ethers} from "ethers";
import {useEffect, useState} from "react";
import Banner from "../../components/Banner";
import {Approved} from "../../providers/useChainData";
import {ProtocolData} from "../../providers/useProtocolData";
import displayString from "../../utils/displayString";
import parseError from "../../utils/parseError";
import {parseNumber, parseNumberFloat} from "../../utils/parseNumber";

export default function HeaderBanner({token, protocolData}: {token: Approved; protocolData: ProtocolData}) {
    const [data, setData] = useState<{
        provideLiquidityAPY: number | undefined;
        totalAmountLocked: ethers.BigNumber | undefined;
        totalValueLocked: ethers.BigNumber | undefined;
    } | null>(null);

    useEffect(() => {
        (async () => {
            const provideLiquidityAPY = await parseError(async () => await protocolData.provideLiquidityAPY(token));
            const totalAmountLocked = await parseError(async () => await protocolData.totalTokenAmountLocked(token));
            const totalValueLocked = await parseError(async () => await protocolData.totalTokenPriceLocked(token));

            setData({
                provideLiquidityAPY,
                totalAmountLocked,
                totalValueLocked,
            });
        })();
    }, [protocolData, token]);

    return (
        <div className="lg:block hidden">
            <Banner
                placeholders={[
                    {title: "Provide Liquidity APY", body: parseNumberFloat(data?.provideLiquidityAPY) + " %"},
                    {title: "Total Amount Locked", body: parseNumber(data?.totalAmountLocked) + " " + displayString(token?.symbol)},
                    {title: "Total Value Locked", body: "$ " + parseNumber(data?.totalValueLocked)},
                ]}
            />
        </div>
    );
}