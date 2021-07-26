import react from "react";
import crypto3 from "./crypto3.jpg"
import crypto2 from "./crypto2.jpg"
function About(){
  return(
        <div>
         <h1 id="head">About</h1>
         <img src={crypto2}/>
         <p><h3>A cryptocurrency, crypto-currency, or crypto is a digital asset designed to work as a medium of exchange wherein individual coin ownership records are stored in a ledger existing in a form of a computerized database using strong cryptography to secure transaction records, to control the creation of additional coins, and to verify the transfer of coin ownership.Cryptocurrency does not exist in physical form (like paper money) and is typically not issued by a central authority. Cryptocurrencies typically use decentralized control as opposed to a central bank digital currency (CBDC). When a cryptocurrency is minted or created prior to issuance or issued by a single issuer, it is generally considered centralized. When implemented with decentralized control, each cryptocurrency works through distributed ledger technology, typically a blockchain, that serves as a public financial transaction database.</h3></p>
         <h2 id="gc2"> BITCOIN</h2>
         <img src={crypto3}  />
         <p><h3>Bitcoin is the world’s first decentralized cryptocurrency – a type of digital asset that uses public-key cryptography to record, sign and send transactions over the Bitcoin blockchain.


Launched on Jan. 3, 2009, by an anonymous computer programmer (or group of programmers) under the pseudonym “Satoshi Nakamoto”, the Bitcoin network (with an uppercase “B”) is a peer-to-peer electronic payment system that uses a native cryptocurrency called bitcoin (lower case “b”) to transfer value over the internet or act as a store of value like gold and silver.</h3></p>
         </div>
  )

}
export default About;

