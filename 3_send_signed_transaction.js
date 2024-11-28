const {ethers} = require("ethers");
const infura_API = "";
const provider = new ethers.providers.JsonRpcProvider(infura_API);

const account1 = "";
const account2 = "";

const private_key = "";

const wallet = new ethers.Wallet(private_key, provider);
const main = async () => {
    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.025")
    })

    await tx.wait();
    console.log(tx);
    
}


main()