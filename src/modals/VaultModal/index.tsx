import { Tabs } from "@mantine/core";
import { ContextModalProps } from "@mantine/modals";
import { useWeb3React } from "@web3-react/core";
import { ArrowsMaximize, ArrowsMinimize } from "tabler-icons-react";

import { Token } from "../../utils";
import { Deposit, Withdraw } from "./components";

export default function VaultModal({ context, id, innerProps: { token, vault, wrapper } }: ContextModalProps<{ token: Token[]; vault: string; wrapper: string }>) {
    const { account, library } = useWeb3React();

    if (library && account)
        return (
            <Tabs grow mt="xl" color="indigo">
                <Tabs.Tab label="Deposit" icon={<ArrowsMinimize size={14} />}>
                    <Deposit token={token} vault={vault} wrapper={wrapper} library={library.getSigner()} context={context} id={id} />
                </Tabs.Tab>
                <Tabs.Tab label="Withdraw" icon={<ArrowsMaximize size={14} />}>
                    <Withdraw token={token} vault={vault} wrapper={wrapper} account={account} library={library.getSigner()} context={context} id={id} />
                </Tabs.Tab>
            </Tabs>
        );

    return null;
}
