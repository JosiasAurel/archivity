
const ipfs = window.IpfsCore;

async function publishContent(content) {
    const { cid } = await ipfs.add(content);
    return cid;
}

export {
    publishContent
};