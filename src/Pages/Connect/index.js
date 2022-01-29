import React, {useState} from 'react'
// import './style.css'

const Wallet = () => {

    const [accountAddress, setAccountAddress] = useState("");

    async function getAccount () {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
        const account = accounts[0]
        return account;
    }

    const ConnectMeta = () => {
        if (typeof window !== "undefined") {
            getAccount().then((response) => {
                console.log(response);
                setAccountAddress(response);
            })
        }
    }

    return(

            <div>
                <h1>Connect your Metamask Wallet</h1>

                <button onClick={ConnectMeta}>{!!accountAddress ? accountAddress : "Connect your wallet"}</button>
            </div>

    )
}

export default Wallet;