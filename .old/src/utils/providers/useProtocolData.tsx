import {ethers} from "ethers";
import {createContext, useContext, useEffect, useState} from "react";
import useContracts from "./useContracts";
import {parseDecimals, ROUND_CONSTANT} from "../parseNumber";
import {loadERC20} from "../ERC20Utils";
import {Approved} from "./useChainData";
import getApproved from "../getApproved";

interface ProtocolData {
    totalPoolPrice: () => Promise<ethers.BigNumber | undefined>;
    totalBorrowedPrice: () => Promise<ethers.BigNumber | undefined>;
    totalCollateralPrice: () => Promise<ethers.BigNumber | undefined>;

    totalTokenAmountLiquidity: (token: Approved) => Promise<ethers.BigNumber | undefined>;
    totalTokenAmountLocked: (token: Approved) => Promise<ethers.BigNumber | undefined>;
    totalTokenPriceLocked: (token: Approved) => Promise<ethers.BigNumber | undefined>;
    totalTokenAmountBorrowed: (token: Approved) => Promise<ethers.BigNumber | undefined>;
    totalTokenPriceBorrowed: (token: Approved) => Promise<ethers.BigNumber | undefined>;

    provideLiquidityAPY: (token: Approved) => Promise<number | undefined>;
    borrowAPR: (token: Approved) => Promise<number | undefined>;

    availableTokenAmount: (token: Approved) => Promise<ethers.BigNumber | undefined>;
    availableTokenPrice: (token: Approved) => Promise<ethers.BigNumber | undefined>;

    LPTokenAmount: (token: Approved) => Promise<ethers.BigNumber | undefined>;
    liquidityProvidedTokenAmount: (token: Approved) => Promise<ethers.BigNumber | undefined>;
    redeemLiquidityTokenAmount: (token: Approved) => Promise<ethers.BigNumber | undefined>;
    redeemLiquidityTokenPrice: (token: Approved) => Promise<ethers.BigNumber | undefined>;

    minMarginLevel: () => Promise<number | undefined>;
    maxLeverage: () => Promise<ethers.BigNumber | undefined>;
    minCollateralPrice: () => Promise<ethers.BigNumber | undefined>;

    accountCollateralAmount: (token: Approved) => Promise<ethers.BigNumber | undefined>;
    accountCollateralPrice: (token: Approved) => Promise<ethers.BigNumber | undefined>;
    accountCollateralTotalPrice: () => Promise<ethers.BigNumber | undefined>;
    accountTotalPrice: () => Promise<ethers.BigNumber | undefined>;

    accountBorrowedAmount: (token: Approved) => Promise<ethers.BigNumber | undefined>;
    accountBorrowedPrice: (token: Approved) => Promise<ethers.BigNumber | undefined>;
    accountBorrowedTotalPrice: () => Promise<ethers.BigNumber | undefined>;

    marginLevel: () => Promise<number | undefined>;
    currentLeverage: () => Promise<number | undefined>;
    totalInterest: () => Promise<ethers.BigNumber | undefined>;
    initialBorrowedPrice: (token: Approved) => Promise<ethers.BigNumber | undefined>;
    totalInitialBorrowedPrice: () => Promise<ethers.BigNumber | undefined>;

    nativeCoin: () => Approved | undefined;
    nativeCoinWrapped: () => Approved | undefined;
    availableNativeCoinAmount: () => Promise<ethers.BigNumber | undefined>;
    availableWrappedTokenAmount: () => Promise<ethers.BigNumber | undefined>;
}

const protocolDataCtx = createContext<ProtocolData | null>(undefined as any);

export const SAFETY_THRESHOLD = [20, 100] as const;

export default function useProtocolData() {
    return useContext(protocolDataCtx);
}

const updateProtocolDataCtx = createContext<[number, (update: (num: number) => number) => void]>(undefined as any);

export function useUpdateProtocolData() {
    const [, setUpdate] = useContext(updateProtocolDataCtx);

    return function updateProtocolData() {
        setUpdate((data) => data + 1);
    };
}

export function ProtocolDataProvider({children}: {children: any}) {
    const contracts = useContracts();

    const [protocolData, setProtocolData] = useState<ProtocolData | null>(null);
    const [updateData, setUpdateData] = useState<number>(0);

    async function totalPoolPrice() {
        if (contracts) {
            let totalPoolPrice = ethers.BigNumber.from(0);

            const assets = contracts.config.approved.filter((approved) => approved.oracle && approved.leveragePool).map((approved) => approved.address);
            for (const asset of assets) {
                const totalLocked = await contracts.lPool.tvl(asset);
                const price = await contracts.oracle.priceMax(asset, totalLocked);
                totalPoolPrice = totalPoolPrice.add(price);
            }

            return parseDecimals(totalPoolPrice, (await contracts.oracle.priceDecimals()).toNumber());
        }
    }

    async function totalBorrowedPrice() {
        if (contracts) {
            let totalBorrowedPrice = ethers.BigNumber.from(0);

            const assets = contracts.config.approved.filter((approved) => approved.oracle && approved.marginLongBorrow).map((approved) => approved.address);
            for (const asset of assets) {
                const totalBorrowed = await contracts.lPool.utilized(asset);
                const price = await contracts.oracle.priceMax(asset, totalBorrowed);
                totalBorrowedPrice = totalBorrowedPrice.add(price);
            }

            return parseDecimals(totalBorrowedPrice, (await contracts.oracle.priceDecimals()).toNumber());
        }
    }

    async function totalCollateralPrice() {
        if (contracts) {
            let totalPrice = ethers.BigNumber.from(0);

            const assets = contracts.config.approved.filter((approved) => approved.oracle && approved.marginLongCollateral).map((approved) => approved.address);
            for (const asset of assets) {
                const totalCollateral = await contracts.marginLong.totalCollateral(asset);
                const price = await contracts.oracle.priceMax(asset, totalCollateral);
                totalPrice = totalPrice.add(price);
            }

            return parseDecimals(totalPrice, (await contracts.oracle.priceDecimals()).toNumber());
        }
    }

    async function totalTokenAmountLiquidity(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const liquidity = await contracts.lPool.liquidity(token.address);

            return parseDecimals(liquidity, token.decimals);
        }
    }

    async function totalTokenAmountLocked(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const totalLocked = await contracts.lPool.tvl(token.address);

            return parseDecimals(totalLocked, token.decimals);
        }
    }

    async function totalTokenPriceLocked(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const totalLocked = await contracts.lPool.tvl(token.address);
            const price = await contracts.oracle.priceMax(token.address, totalLocked);

            return parseDecimals(price, (await contracts.oracle.priceDecimals()).toNumber());
        }
    }

    async function totalTokenAmountBorrowed(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const borrowed = await contracts.marginLong.totalBorrowed(token.address);

            return parseDecimals(borrowed, token.decimals);
        }
    }

    async function totalTokenPriceBorrowed(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const borrowed = await contracts.marginLong.totalBorrowed(token.address);
            const price = await contracts.oracle.priceMax(token.address, borrowed);

            return parseDecimals(price, (await contracts.oracle.priceDecimals()).toNumber());
        }
    }

    async function provideLiquidityAPY(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const [utilizationNumerator, utilizationDenominator] = await contracts.lPool.utilizationRate(token.address);
            if (utilizationDenominator.eq(0)) return 0;

            const [interestNumerator, interestDenominator] = await contracts.lPool.interestRate(token.address);

            const provideLiquidityAPR =
                interestNumerator.mul(utilizationNumerator).mul(100).mul(ROUND_CONSTANT).div(utilizationDenominator).div(interestDenominator).toNumber() / ROUND_CONSTANT;
            return provideLiquidityAPR;
        }
    }

    async function borrowAPR(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const [numerator, denominator] = await contracts.lPool.interestRate(token.address);

            return numerator.mul(100).mul(ROUND_CONSTANT).div(denominator).toNumber() / ROUND_CONSTANT;
        }
    }

    async function availableTokenAmount(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const signerAddress = await contracts.signer.getAddress();

            const tokenContract = loadERC20(token.address, contracts.signer);
            const rawBalance = await tokenContract.balanceOf(signerAddress);

            return parseDecimals(rawBalance, token.decimals);
        }
    }

    async function availableTokenPrice(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const signerAddress = await contracts.signer.getAddress();

            const tokenContract = loadERC20(token.address, contracts.signer);
            const rawBalance = await tokenContract.balanceOf(signerAddress);
            const value = await contracts.oracle.priceMax(token.address, rawBalance);

            return parseDecimals(value, (await contracts.oracle.priceDecimals()).toNumber());
        }
    }

    async function LPTokenAmount(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const signerAddress = await contracts.signer.getAddress();

            const tokenContract = loadERC20(token.address, contracts.signer);
            const rawBalance = await tokenContract.balanceOf(signerAddress);
            const LPAmount = await contracts.lPool.addLiquidityOutLPTokens(token.address, rawBalance);

            return parseDecimals(LPAmount, token.decimals);
        }
    }

    async function liquidityProvidedTokenAmount(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const signerAddress = await contracts.signer.getAddress();

            const LPTokenAddress = await contracts.lPool.LPFromPT(token.address);
            const LPToken = loadERC20(LPTokenAddress, contracts.signer);
            const rawBalance = await LPToken.balanceOf(signerAddress);

            return parseDecimals(rawBalance, token.decimals);
        }
    }

    async function redeemLiquidityTokenAmount(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const signerAddress = await contracts.signer.getAddress();

            const LPTokenAddress = await contracts.lPool.LPFromPT(token.address);
            const LPToken = loadERC20(LPTokenAddress, contracts.signer);
            const rawBalance = await LPToken.balanceOf(signerAddress);

            const redeemAmount = await contracts.lPool.removeLiquidityOutPoolTokens(LPTokenAddress, rawBalance);

            return parseDecimals(redeemAmount, token.decimals);
        }
    }

    async function redeemLiquidityTokenPrice(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const signerAddress = await contracts.signer.getAddress();

            const LPTokenAddress = await contracts.lPool.LPFromPT(token.address);
            const LPToken = loadERC20(LPTokenAddress, contracts.signer);
            const rawBalance = await LPToken.balanceOf(signerAddress);

            const redeemAmount = await contracts.lPool.removeLiquidityOutPoolTokens(LPTokenAddress, rawBalance);

            const value = await contracts.oracle.priceMax(token.address, redeemAmount);

            return parseDecimals(value, (await contracts.oracle.priceDecimals()).toNumber());
        }
    }

    async function minMarginLevel() {
        if (contracts) {
            const [numerator, denominator] = await contracts.marginLong.minMarginLevel();
            const level = numerator.mul(ROUND_CONSTANT).div(denominator).toNumber() / ROUND_CONSTANT;

            return level;
        }
    }

    async function maxLeverage() {
        if (contracts) {
            const [leverageNumerator, leverageDenominator] = await contracts.marginLong.maxLeverage();

            return leverageNumerator.mul(SAFETY_THRESHOLD[1]).div(ethers.BigNumber.from(SAFETY_THRESHOLD[1]).add(SAFETY_THRESHOLD[0])).div(leverageDenominator);
        }
    }

    async function minCollateralPrice() {
        if (contracts) {
            const minCollateral = await contracts.marginLong.minCollateralPrice();
            const parsedPrice = parseDecimals(minCollateral, (await contracts.oracle.priceDecimals()).toNumber());

            return parsedPrice.mul(SAFETY_THRESHOLD[1]).div(ethers.BigNumber.from(SAFETY_THRESHOLD[1]).sub(SAFETY_THRESHOLD[0]));
        }
    }

    async function accountCollateralAmount(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const signerAddress = await contracts.signer.getAddress();

            const collateralAmount = await contracts.marginLong.collateral(token.address, signerAddress);

            return parseDecimals(collateralAmount, token.decimals);
        }
    }

    async function accountCollateralPrice(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const signerAddress = await contracts.signer.getAddress();

            const collateralAmount = await contracts.marginLong.collateral(token.address, signerAddress);
            const collateralPrice = await contracts.oracle.priceMin(token.address, collateralAmount);

            return parseDecimals(collateralPrice, (await contracts.oracle.priceDecimals()).toNumber());
        }
    }

    async function accountCollateralTotalPrice() {
        if (contracts) {
            const signerAddress = await contracts.signer.getAddress();

            const price = await contracts.marginLong.collateralPrice(signerAddress);

            return parseDecimals(price, (await contracts.oracle.priceDecimals()).toNumber());
        }
    }

    async function accountTotalPrice() {
        if (contracts) {
            const signerAddress = await contracts.signer.getAddress();

            const balance = await contracts.marginLong.accountPrice(signerAddress);

            return parseDecimals(balance, (await contracts.oracle.priceDecimals()).toNumber());
        }
    }

    async function accountBorrowedAmount(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const signerAddress = await contracts.signer.getAddress();

            const amount = await contracts.marginLong.borrowed(token.address, signerAddress);

            return parseDecimals(amount, token.decimals);
        }
    }

    async function accountBorrowedPrice(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const signerAddress = await contracts.signer.getAddress();

            const amount = await contracts.marginLong.borrowed(token.address, signerAddress);
            const price = await contracts.oracle.priceMin(token.address, amount);

            return parseDecimals(price, (await contracts.oracle.priceDecimals()).toNumber());
        }
    }

    async function accountBorrowedTotalPrice() {
        if (contracts) {
            const signerAddress = await contracts.signer.getAddress();

            const value = await contracts.marginLong.borrowedPrice(signerAddress);

            return parseDecimals(value, (await contracts.oracle.priceDecimals()).toNumber());
        }
    }

    async function marginLevel() {
        if (contracts) {
            const signerAddress = await contracts.signer.getAddress();

            const [numerator, denominator] = await contracts.marginLong.marginLevel(signerAddress);
            if (denominator.eq(0)) return 999;
            const level = numerator.mul(ROUND_CONSTANT).div(denominator).toNumber() / ROUND_CONSTANT;

            return level;
        }
    }

    async function currentLeverage() {
        if (contracts) {
            const signerAddress = await contracts.signer.getAddress();

            const [leverageNumerator, leverageDenominator] = await contracts.marginLong.currentLeverage(signerAddress);

            return leverageNumerator.mul(ROUND_CONSTANT).div(leverageDenominator).toNumber() / ROUND_CONSTANT;
        }
    }

    async function totalInterest() {
        if (contracts) {
            const signerAddress = await contracts.signer.getAddress();

            const interest = await contracts.marginLong["interest(address)"](signerAddress);

            return parseDecimals(interest, (await contracts.oracle.priceDecimals()).toNumber());
        }
    }

    async function initialBorrowedPrice(token: Approved) {
        if (contracts && getApproved(contracts.config, token.address)) {
            const signerAddress = await contracts.signer.getAddress();

            const initialPrice = await contracts.marginLong["initialBorrowPrice(address,address)"](token.address, signerAddress);

            return parseDecimals(initialPrice, (await contracts.oracle.priceDecimals()).toNumber());
        }
    }

    async function totalInitialBorrowedPrice() {
        if (contracts) {
            const signerAddress = await contracts.signer.getAddress();

            const initialPrice = await contracts.marginLong["initialBorrowPrice(address)"](signerAddress);

            return parseDecimals(initialPrice, (await contracts.oracle.priceDecimals()).toNumber());
        }
    }

    function nativeCoin() {
        if (contracts) return contracts.config.nativeCoin;
    }

    function nativeCoinWrapped() {
        if (contracts) return contracts.config.wrappedCoin;
    }

    async function availableNativeCoinAmount() {
        if (contracts) return parseDecimals(await contracts.signer.getBalance(), contracts.config.nativeCoin.decimals);
    }

    async function availableWrappedTokenAmount() {
        if (contracts) {
            const signerAddress = await contracts.signer.getAddress();

            const wrapped = loadERC20(contracts.config.wrappedCoin.address, contracts.signer);

            return parseDecimals(await wrapped.balanceOf(signerAddress), contracts.config.wrappedCoin.decimals);
        }
    }

    useEffect(() => {
        if (!contracts) setProtocolData(null);
        else {
            setProtocolData({
                totalPoolPrice,
                totalBorrowedPrice,
                totalCollateralPrice,
                totalTokenAmountLiquidity,
                totalTokenAmountLocked,
                totalTokenPriceLocked,
                totalTokenAmountBorrowed,
                totalTokenPriceBorrowed,
                provideLiquidityAPY,
                borrowAPR,
                availableTokenAmount,
                availableTokenPrice,
                LPTokenAmount,
                liquidityProvidedTokenAmount,
                redeemLiquidityTokenAmount,
                redeemLiquidityTokenPrice,
                minMarginLevel,
                maxLeverage,
                minCollateralPrice,
                accountCollateralAmount,
                accountCollateralPrice,
                accountCollateralTotalPrice,
                accountTotalPrice,
                accountBorrowedAmount,
                accountBorrowedPrice,
                accountBorrowedTotalPrice,
                marginLevel,
                currentLeverage,
                totalInterest,
                initialBorrowedPrice,
                totalInitialBorrowedPrice,
                nativeCoin,
                nativeCoinWrapped,
                availableNativeCoinAmount,
                availableWrappedTokenAmount,
            });
        }
    }, [contracts, updateData]);

    return (
        <updateProtocolDataCtx.Provider value={[updateData, setUpdateData]}>
            <protocolDataCtx.Provider value={protocolData}>{children}</protocolDataCtx.Provider>{" "}
        </updateProtocolDataCtx.Provider>
    );
}