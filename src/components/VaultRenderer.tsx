import { useEffect, useState } from "react";

import { Token, TokenData } from "../utils";
import { Vault } from ".";
import { useBreakpoint } from "../hooks";
import { SimpleGrid } from "@mantine/core";

export default function VaultRenderer() {
    const { ltSm, ltMd } = useBreakpoint();
    const [cols, setCols] = useState<number>(3);

    useEffect(() => {
        if (ltSm) setCols(1);
        else if (ltMd) setCols(2);
        else setCols(3);
    }, [ltSm, ltMd]);

    const vaults: {
        vault: string;
        name: string;
        token: Token[];
        aggregator: Token;
        aggregated: Token[];
        tags: string[];
        color: string;
        wrapper?: string;
        disabled?: boolean;
    }[] = [
        {
            vault: "0x242e9e75dea7fd2ba2e55783b79e76648178145d",
            wrapper: "0x5d7b57e4554cd40141b50bb165ba9ba0de290ca7",
            name: "Beefy FTM-USDC LP",
            token: [TokenData.FTM, TokenData.USDC],
            aggregator: TokenData.BIFI,
            aggregated: [TokenData.BOO, TokenData.SPIRIT, TokenData.SUSHI, TokenData.WIGO],
            tags: ["New", "Blue Chip"],
            color: "blue",
        },
        {
            vault: "",
            name: "Beefy CRV-FTM LP",
            token: [TokenData.CRV, TokenData.FTM],
            aggregator: TokenData.BIFI,
            aggregated: [TokenData.BOO, TokenData.SPIRIT, TokenData.WIGO],
            tags: ["New", "Blue Chip"],
            color: "green",
            disabled: true,
        },
        {
            vault: "",
            name: "Beefy ETH-FTM LP",
            token: [TokenData.ETH, TokenData.FTM],
            aggregator: TokenData.BIFI,
            aggregated: [TokenData.BOO, TokenData.SUSHI, TokenData.WIGO],
            tags: ["New", "Blue Chip"],
            color: "dark",
            disabled: true,
        },
    ];

    return (
        <SimpleGrid cols={cols} spacing="xl">
            {vaults.map((vault, index) => (
                <Vault key={index} {...vault} />
            ))}
        </SimpleGrid>
    );
}