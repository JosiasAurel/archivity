


const ipfs = (window as any).IpfsCore;

async function publishContent(content: string) {
    const { cid } = await ipfs.add(content);
    return cid;
}

export {
    publishContent
};