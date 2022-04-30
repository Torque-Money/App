import { Box, Button, Group } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { ethers } from "ethers";

import { Token, vaultDeposit } from "../../../utils";
import { VaultInput } from "../../../components";
import { useDepositData, useVaultDeposit } from "../../../hooks";
import DepositData from "./DepositData";

export default function Deposit({ token, vault, library }: { token: Token[]; vault: string; library: ethers.providers.JsonRpcSigner }) {
    const { tokenAmount, setTokenAmount } = useVaultDeposit(token);
    const { total, breakdown } = useDepositData(tokenAmount);

    return (
        <Group grow direction="column">
            <Box>
                {token.map((tkn, index) => (
                    <Box key={index} mb="md">
                        <VaultInput token={tkn} vault={vault} library={library} onChange={(value) => setTokenAmount(tkn, value)} />
                    </Box>
                ))}
            </Box>

            <DepositData total={total} breakdown={breakdown} />

            <Button
                variant="gradient"
                mt="lg"
                size="lg"
                gradient={{ from: "pink", to: "grape", deg: 45 }}
                onClick={async () => {
                    try {
                        await vaultDeposit(vault, tokenAmount, library);
                    } catch (e: any) {
                        showNotification({
                            title: "Error",
                            message: e.data?.message || e.message,
                            color: "red",
                        });
                    }
                }}
            >
                Deposit
            </Button>
        </Group>
    );
}