import { Box, Button, Modal, Text } from "@mantine/core";
import { useState } from "react";

import { useWeb3React } from "@web3-react/core";
import WalletSelector from "./WalletSelector";
import { SupportedChainId } from "../../utils/ChainData";

export default function ConnectWallet() {
    const { active, chainId } = useWeb3React();

    const [opened, setOpened] = useState<boolean>(false);

    const selectedChainId: SupportedChainId = 250;

    return (
        <>
            <Modal padding="xl" opened={opened} onClose={() => setOpened(false)}>
                <Box
                    pb="sm"
                    sx={(theme) => ({
                        borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
                    })}
                >
                    <Text size="md">Choose A Wallet</Text>
                </Box>
                <WalletSelector chainId={selectedChainId} closeModal={() => setOpened(false)} />
            </Modal>

            <Button onClick={() => setOpened(true)} variant="gradient" gradient={{ from: "indigo", to: "grape", deg: 45 }}>
                Connect
            </Button>

            {/* **** Now I need some option that checks if the correct card has been selected */}
        </>
    );
}