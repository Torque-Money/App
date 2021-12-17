import { useEffect, useState } from "react";
import AssetPanel from "../../../assetPanel";
import { AssetData } from "../../home/row";
import config from "../../../../config/config.json";
import { ethers } from "ethers";
import useContracts from "../../../../utils/useContracts";
import { useWeb3React } from "@web3-react/core";
import parseNumber from "../../../../utils/parseNumber";
import useError from "../../../../utils/useError";
import Tooltip from "../../../tooltip";

interface Data {
    initialStake: string;
    currentStakeValue: string;
}

function Withdraw(props: {}) {
    const { library } = useWeb3React();

    const [amount, setAmount] = useState<ethers.BigNumber>(ethers.BigNumber.from(0));
    const [asset, setAsset] = useState<AssetData>(config.approved[0]);

    const [contracts] = useContracts();

    const [, setError] = useError();

    const [data, setData] = useState<Data | null>(null);

    const [maxWithdraw, setMaxWithdraw] = useState<ethers.BigNumber | undefined>(undefined);

    useEffect(() => {
        const pool = contracts?.pool;
        const periodId = contracts?.periodId;

        (async () => {
            const tempData: Data = {} as any;

            const provider = new ethers.providers.Web3Provider(library.provider);
            const signer = provider.getSigner();
            const signerAddress = await signer.getAddress();

            // Calculate initial stake
            const balCurrent = await pool?.balanceOf(signerAddress, asset.address, periodId);
            tempData.initialStake = parseNumber(balCurrent, asset.decimals);

            // Calculate initial stake value
            let stakeValue = ethers.BigNumber.from(0);
            try {
                const valueCurrent = await pool?.redeemValue(asset.address, balCurrent, periodId);
                stakeValue = stakeValue.add(valueCurrent);
            } catch {}

            tempData.currentStakeValue = parseNumber(stakeValue, asset.decimals);

            setData(tempData);
            setMaxWithdraw(balCurrent);
        })();
    }, [contracts, asset]);

    async function withdraw() {
        // Require a specified amount before withdrawing
        if (!amount.gt(0)) return;

        const pool = contracts?.pool;
        const periodId = contracts?.periodId;

        try {
            await pool?.redeem(asset.address, amount, periodId);
        } catch (e: any) {
            setError(e.data?.message || null);
        }
    }

    return (
        <div className="flex flex-col justify-center items-stretch">
            <h2 className="text-white text-lg font-medium mx-5">Withdraw</h2>
            <AssetPanel onChangeAsset={setAsset} onChangeAmount={setAmount} max={maxWithdraw} />
            <div className="grid grid-cols-1 gap-6 mx-5 mb-4">
                <Tooltip>
                    Initial stake: {data?.initialStake} {asset.symbol}
                </Tooltip>
                <Tooltip>
                    Current stake value: {data?.currentStakeValue} {asset.symbol}
                </Tooltip>
            </div>
            <button
                className={`${amount.gt(0) ? "bg-indigo-600 hover:bg-indigo-700" : "bg-zinc-500 cursor-default"} p-3 rounded-md text-white font-medium mb-3`}
                onClick={withdraw}
            >
                Withdraw {parseNumber(amount, asset.decimals)} {asset.symbol}
            </button>
        </div>
    );
}

export default Withdraw;
