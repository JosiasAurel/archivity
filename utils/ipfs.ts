

async function publishContent(IPFS: any, content: string): Promise<string> {
    const ipfs = await IPFS.create();
    const { cid } = await ipfs.add(content);
    return cid;
}

async function getContent(IPFS: any, cid: string): Promise<string> {
    const ipfs = await IPFS.create();
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