import {injected, walletConnect, walletLink} from "./connectors";
import {useWeb3React} from "@web3-react/core";

import useError from "../../../utils/providers/useError";
import {useWalletSelector} from "../WalletSelector";

// **** A very possible problem is that it could indeed be connecting to the default chainId everytime automatically due to the walletconnect link ???
// **** To solve this, each of these will be parsed props that will consist of one of the chain Id's based off of the selected element by the connect modal

export function useConnectMetamask() {
    const [, setError] = useError();
    const [, setWalletSelector] = useWalletSelector();

    const {activate} = useWeb3React();

    return async () => {
        try {
            await activate(injected, undefined, true);
            setWalletSelector(false);
        } catch (e: any) {
            setError(e.toString());
        }
    };
}

export function useConnectWalletConnect() {
    const [, setError] = useError();
    const [, setWalletSelector] = useWalletSelector();

    const {activate} = useWeb3React();

    return async () => {
        try {
            walletConnect.walletConnectProvider = undefined;
            await activate(walletConnect, undefined, true);
            setWalletSelector(false);
        } catch (e: any) {
            setError(e.toString());
        }
    };
}

export function useConnectWalletLink() {
    const [, setError] = useError();
    const [, setWalletSelector] = useWalletSelector();

    const {activate} = useWeb3React();

    return async () => {
        try {
            await activate(walletLink, undefined, true);
            setWalletSelector(false);
        } catch (e: any) {
            setError(e.toString());
        }
    };
}

export function useDisconnect() {
    const {deactivate} = useWeb3React();

    return () => deactivate();
}

export default function Wallet() {
    const {active} = useWeb3React();

    const [, setWalletSelector] = useWalletSelector();
    const disconnect = useDisconnect();

    return (
        <button
            className="bg-neutral-900 lg:px-12 px-8 lg:py-6 py-4 lg:text-3xl text-2xl rounded-xl text-white font-bold hover:bg-fuchsia-700 glow"
            onClick={(e) => {
                !active ? (() => setWalletSelector(true))() : disconnect();
            }}
        >
            {!active ? "Connect" : "Disconnect"}
        </button>
    );
}
