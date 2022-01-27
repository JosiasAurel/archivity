import { ThirdwebSDK } from "@3rdweb/sdk";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";

import { NextApiRequest, NextApiResponse } from "next";
import { config } from "dotenv";

// load .env
config();

export default function mintNFT(req: NextApiRequest, res: NextApiResponse) {

    const mumbaiRPCURL: string = "https://rpc-mumbai.maticvigil.com";
    const {} = useEthers();

    // connect to parent account wallet
    const wallet = new ethers.Wallet(process.env.METAMASK_WALLET_PRIVATE_KEY,
        ethers.getDefaultProvider(mumbaiRPCURL));
    
    const sdk = new ThirdwebSDK(wallet);
    // instance NFT modules
    const nft = sdk.getNFTModule(process.env.THIRDWEB_NFT_MODULE);

    // get minter account
    const { account, name, description, cid } = req.body;

    nft
        .mintTo(account, {
            name,
            description,
            log: cid
        })
        .then(meta => {
            res.status(200).json(meta);
        });
    return;
}