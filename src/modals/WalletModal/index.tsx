import { ContextModalProps } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";

import { WalletCard } from "./components";
import { useMetamask, useWalletConnect, useWalletLink } from "../../hooks";
import { SELECTED_CHAIN_ID } from "../../utils";

export default function WalletModal({ context, id }: ContextModalProps) {
    function connectWrapper(connect: () => Promise<void>) {
        return async () => {
            try {
                await connect();
                context.closeModal(id);
            } catch (e: any) {
                showNotification({
                    title: "Wallet Error",
                    message: e.message,
                    color: "red",
                });
            }
        };
    }

    const connectMetamask = useMetamask(SELECTED_CHAIN_ID);
    const connectWalletConnect = useWalletConnect(SELECTED_CHAIN_ID);
    const connectWalletLink = useWalletLink(SELECTED_CHAIN_ID);

    const cards: { name: string; imgURL: string; onClick: () => any }[] = [
        {
            name: "Metamask",
            imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png",
            onClick: connectWrapper(async () => await connectMetamask()),
        },
        {
            name: "WalletConnect",
            imgURL: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/bftsslxvhe2yaih6nyl9",
            onClick: connectWrapper(async () => await connectWalletConnect()),
        },
        {
            name: "WalletLink",
            imgURL: "https://play-lh.googleusercontent.com/wrgUujbq5kbn4Wd4tzyhQnxOXkjiGqq39N4zBvCHmxpIiKcZw_Pb065KTWWlnoejsg",
            onClick: connectWrapper(async () => await connectWalletLink()),
        },
    ];

    return (
        <>
            {cards.map((card, index) => (
                <WalletCard key={index} {...card} />
            ))}
        </>
    );
}
