import {ethers} from "ethers";
import {createContext, useContext, useEffect, useState} from "react";
import {useWeb3React} from "@web3-react/core";

import LPool from "../config/LPool.json";
import Oracle from "../config/Oracle.json";
import MarginLong from "../config/MarginLong.json";

import {LPool as LPoolType} from "../typechain-types";
import {Oracle as OracleType} from "../typechain-types";
import {MarginLong as MarginLongType} from "../typechain-types";

import useChainData, {Config} from "./useChainData";

interface Contracts {
    signer: ethers.providers.JsonRpcSigner;
    config: Config;
    lPool: LPoolType;
    oracle: OracleType;
    marginLong: MarginLongType;
}

const contractCtx = createContext<Contracts | null>(undefined as any);

export default function useContracts() {
    return useContext(contractCtx);
}

export function ContractsProvider({children}: {children: any}) {
    const {active, library} = useWeb3React();
    const {config} = useChainData();

    async function getContracts() {
        if (active && config) {
            const provider = new ethers.providers.Web3Provider(library.provider);

            const signer = provider.getSigner();
            const lPool = new ethers.Contract(config.leveragePoolAddress, LPool.abi, signer) as LPoolType;
            const oracle = new ethers.Contract(config.oracleAddress, Oracle.abi, signer) as OracleType;
            const marginLong = new ethers.Contract(config.marginLongAddress, MarginLong.abi, signer) as MarginLongType;

            return {signer, config, lPool, oracle, marginLong};
        }
        return null;
    }

    const [contracts, setContracts] = useState<Contracts | null>(null);

    useEffect(() => {
        (async () => {
            const newContracts = await getContracts();
            setContracts(newContracts);
        })();
    }, [config]);

    return <contractCtx.Provider value={contracts}>{children}</contractCtx.Provider>;
}
