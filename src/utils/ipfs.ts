


const IPFS = (window as any).Ipfs;

const ipfs = await IPFS.create();

async function publishContent(content: string): Promise<string> {
    const { cid } = await ipfs.add(content);
    return cid;
}

async function getContent(cid: string): Promise<string> {

    const stream = ipfs.cat(cid);
    let data: string = "";

    for await (const chunk of stream) {
        data += chunk.toString();
    }

    return data;
}

export {
    publishContent,
    getContent
};