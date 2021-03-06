import { ethers } from "ethers";

import { IERC20ABI, IVaultABI, IVaultETHWrapperABI } from "../../../abi";
import { IERC20, IVault, IVaultETHWrapper } from "../../../types";

export function loadERC20(token: string, signer: ethers.providers.JsonRpcSigner) {
    return new ethers.Contract(token, IERC20ABI.abi, signer) as IERC20;
}

export function loadContractVault(address: string, signer: ethers.providers.JsonRpcSigner) {
    return new ethers.Contract(address, IVaultABI.abi, signer) as IVault;
}

export function loadContractVaultETHWrapper(address: string, signer: ethers.providers.JsonRpcSigner) {
    return new ethers.Contract(address, IVaultETHWrapperABI.abi, signer) as IVaultETHWrapper;
}
