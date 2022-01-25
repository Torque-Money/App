import {injected, walletConnect} from "./connectors";
import {useWeb3React} from "@web3-react/core";

import useError from "../../utils/useError";
import {useEffect} from "react";

function switchNetwork() {
    // @ts-ignore
    window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
            {
                chainId: "0xFA",
                rpcUrls: ["https://rpc.ftm.tools/"],
                chainName: "Fantom Opera",
                nativeCurrency: {
                    name: "FTM",
                    symbol: "FTM",
                    decimals: 18,
                },
                blockExplorerUrls: ["https://ftmscan.com/"],
            },
        ],
    });
}

const CONNECTED = "connected";

export function useConnect() {
    const [, setError] = useError();

    const {activate} = useWeb3React();

    return async () => {
        try {
            // await activate(injected);
            walletConnect.walletConnectProvider = undefined;
            await activate(walletConnect); // **** Also add a modal for walletconnect even though it doesnt work as of yet (try and fix)

            switchNetwork(); // **** Maybe remove this and just replace it with a dropdown which shows the selected network which prompts the user to switch

            localStorage.setItem(CONNECTED, JSON.stringify(true));
        } catch (e: any) {
            setError(e.toString());
        }
    };
}

export function useDisconnect() {
    const {deactivate} = useWeb3React();

    return () => {
        deactivate();
        localStorage.setItem(CONNECTED, JSON.stringify(false));
    };
}

export default function Wallet() {
    const {active} = useWeb3React();

    const [connect, disconnect] = [useConnect(), useDisconnect()];

    useEffect(() => {
        const connected = localStorage.getItem(CONNECTED);
        if (connected && JSON.parse(connected)) connect();
    }, []);

    return (
        <button
            className="bg-neutral-900 lg:px-12 px-8 lg:py-6 py-4 lg:text-3xl text-2xl rounded-xl text-white font-bold hover:bg-fuchsia-700 glow"
            onClick={(e) => {
                !active ? connect() : disconnect();
            }}
        >
            {!active ? "Connect" : "Disconnect"}
        </button>
    );
}
