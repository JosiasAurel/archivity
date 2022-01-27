import { ThirdwebSDK } from "@3rdweb/sdk";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import { JsonRpcProvider } from "@ethersproject/providers";

async function fetchNFTs(library: JsonRpcProvider | undefined) {

    // Argument of type 'JsonRpcSigner | undefined' is not assignable to parameter of type 'ValidProviderInput'
    // use any to remove squiggles
    const sdk = new ThirdwebSDK(library?.getSigner() as any);

    // instance NFT modules
    const nft = sdk.getNFTModule("0x42c06b2d137b9f5C921e6aaD9720e6e92ff4F93E");

    // get NFTs owned by user
    const ownerNFTs = await nft.getAllWithOwner();

    return ownerNFTs;
}

async function mintNFT(account: string|null|undefined, name: string, description: string, content: string) {
    const response = await fetch("/api/");
}

export {
    fetchNFTs
};