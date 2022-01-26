
import * as IPFS from "ipfs-core";
import { CID } from "ipfs-core/src/block-storage";

const ipfs = await IPFS.create();

async function publishContent(content: string): Promise<CID> {
    const { cid } = await ipfs.add(content);
    return cid;
}

export {
    publishContent
};