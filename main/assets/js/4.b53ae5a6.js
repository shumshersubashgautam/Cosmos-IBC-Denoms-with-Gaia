(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{527:function(e,t,o){e.exports=o.p+"assets/img/ledger-tuto-manager.ebc7a475.png"},528:function(e,t,o){e.exports=o.p+"assets/img/ledger-tuto-search.bb886e41.png"},529:function(e,t,o){e.exports=o.p+"assets/img/ledger-tuto-dev-mode.9eb97345.png"},612:function(e,t,o){"use strict";o.r(t);var a=o(1),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ledger-nano-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ledger-nano-support"}},[e._v("#")]),e._v(" Ledger Nano Support")]),e._v(" "),a("p",[e._v("Using a hardware wallet to store your keys greatly improves the security of your crypto assets. The Ledger device acts as an enclave of the seed and private keys, and the process of signing transaction takes place within it. No private information ever leaves the Ledger device. The following is a short tutorial on using the Cosmos Ledger app with the Gaia CLI or the "),a("a",{attrs:{href:"https://www.keplr.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keplr"),a("OutboundLink")],1),e._v(" wallet extension.")]),e._v(" "),a("p",[e._v("At the core of a Ledger device there is a mnemonic seed phrase that is used to generate private keys. This phrase is generated when you initialize you Ledger. The mnemonic is compatible with Cosmos and can be used to seed new accounts.")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",[e._v("Do not lose or share your 24 words with anyone. To prevent theft or loss of funds, it is best to keep multiple copies of your mnemonic stored in safe, secure places. If someone is able to gain access to your mnemonic, they will fully control the accounts associated with them.")])]),e._v(" "),a("h2",{attrs:{id:"install-the-cosmos-ledger-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-cosmos-ledger-application"}},[e._v("#")]),e._v(" Install the Cosmos Ledger application")]),e._v(" "),a("p",[e._v("Installing the "),a("code",[e._v("Cosmos")]),e._v(" application on your ledger device is required before you can use either "),a("a",{attrs:{href:"#keplr-+-ledger-nano"}},[e._v("Keplr")]),e._v(" or "),a("a",{attrs:{href:"#gaia-cli-+-ledger-nano"}},[a("code",[e._v("gaiad")])]),e._v(". To do so, you need to:")]),e._v(" "),a("ol",[a("li",[e._v("Install "),a("a",{attrs:{href:"https://shop.ledger.com/pages/ledger-live",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ledger Live"),a("OutboundLink")],1),e._v(" on your machine.\n")]),e._v(" "),a("li",[e._v("Using Ledger Live, "),a("a",{attrs:{href:"https://support.ledger.com/hc/en-us/articles/360002731113?docs=true",target:"_blank",rel:"noopener noreferrer"}},[e._v("update your Ledger Nano S with the latest firmware"),a("OutboundLink")],1),e._v(".\n")]),e._v(" "),a("li",[e._v("On the Ledger Live application, navigate to the "),a("code",[e._v("Manager")]),e._v(" menu .\n"),a("img",{attrs:{src:o(527),alt:"manager"}})]),e._v(" "),a("li",[e._v("Connect your Ledger Nano device and allow Ledger Manager from it.")]),e._v(" "),a("li",[e._v("On the Ledger Live application, Search for "),a("code",[e._v("Cosmos")]),e._v(".\n"),a("img",{attrs:{src:o(528),alt:"search"}})]),e._v(" "),a("li",[e._v("Install the Cosmos application by clicking on "),a("code",[e._v("Install")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("To see the "),a("code",[e._v("Cosmos")]),e._v(" application when you search for it, you might need to activate the "),a("code",[e._v("Developer Mode")]),e._v(", located in the Experimental features tab of the Ledger Live application.")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(529),alt:"Devmode"}})]),e._v(" "),a("h2",{attrs:{id:"keplr-ledger-nano"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keplr-ledger-nano"}},[e._v("#")]),e._v(" Keplr + Ledger Nano")]),e._v(" "),a("p",[a("strong",[e._v("Note: You need to "),a("a",{attrs:{href:"#install-the-cosmos-ledger-application"}},[e._v("install the Cosmos app")]),e._v(" on your Ledger Nano before following this section")])]),e._v(" "),a("ol",[a("li",[e._v("Connect your Ledger device to your computer, unlock it with the PIN and open the Cosmos app.")]),e._v(" "),a("li",[e._v("Install the "),a("a",{attrs:{href:"https://www.keplr.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keplr browser extension"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Click on the Keplr extension icon and select "),a("code",[e._v("Import Ledger")]),e._v(" and choose an account name and password.")]),e._v(" "),a("li",[e._v("Make sure your Ledger device is unlocked and has the Cosmos app open and then follow the instructions on the Keplr pop-up.")])]),e._v(" "),a("p",[e._v("That's it! You can now use Keplr with your Ledger Nano S. You can use the "),a("a",{attrs:{href:"https://wallet.keplr.app/#/dashboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keplr web app"),a("OutboundLink")],1),e._v(" to get a more detailed overview of your Cosmos account.")]),e._v(" "),a("p",[a("strong",[e._v("Note: Each time you will send a transaction, you will need to confirm it on your Ledger device. Indication will be prompted from the Keplr interface")])]),e._v(" "),a("h3",{attrs:{id:"optional-confirm-your-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-confirm-your-address"}},[e._v("#")]),e._v(" (Optional) Confirm your address")]),e._v(" "),a("p",[e._v("You can double check that Keplr is displaying the correct address directly on your Ledger Nano device. To do so:")]),e._v(" "),a("ol",[a("li",[e._v("Connect your Ledger to your computer and open the Cosmos application on the device.")]),e._v(" "),a("li",[e._v("Once the Cosmos app is open, click on the right button to access the "),a("code",[e._v("Show Address")]),e._v(" option.")]),e._v(" "),a("li",[e._v("Click on both button, then select "),a("code",[e._v("Account 0")]),e._v(" and "),a("code",[e._v("Index 0")]),e._v(".")])]),e._v(" "),a("p",[e._v("You should now see the same address that is displayed on the Keplr extension.")]),e._v(" "),a("p",[e._v("To learn more about using Keplr, we suggest you have a look at their "),a("a",{attrs:{href:"https://keplr.crunch.help",target:"_blank",rel:"noopener noreferrer"}},[e._v("support documentation"),a("OutboundLink")],1),e._v(".\n"),e._v("\nYou can also have a look at the "),a("a",{attrs:{href:"https://support.ledger.com/hc/en-us/articles/4411149814417?docs=true",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ledger support page"),a("OutboundLink")],1),e._v(" for more details.\n")]),e._v(" "),a("h2",{attrs:{id:"gaia-cli-ledger-nano"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gaia-cli-ledger-nano"}},[e._v("#")]),e._v(" Gaia CLI + Ledger Nano")]),e._v(" "),a("p",[a("strong",[e._v("Note: You need to "),a("a",{attrs:{href:"#install-the-cosmos-ledger-application"}},[e._v("install the Cosmos app")]),e._v(" on your Ledger Nano before using following this section")])]),e._v(" "),a("p",[e._v("The tool used to generate addresses and transactions on the Cosmos Hub network is "),a("code",[e._v("gaiad")]),e._v(". Here is how to get started. If using a CLI tool is unfamiliar to you, scroll down and follow instructions for using the Keplr wallet instead.")]),e._v(" "),a("h3",{attrs:{id:"before-you-begin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-you-begin"}},[e._v("#")]),e._v(" Before you Begin")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Golang"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/getting-started/installation.html"}},[e._v("Install Gaia")])],1)]),e._v(" "),a("p",[e._v("Verify that gaiad is installed correctly with the following command")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdmVyc2lvbiAtLWxvbmcKCuKenCBjb3Ntb3Mtc2RrOiAwLjM0LjMKZ2l0IGNvbW1pdDogNjdhYjBiMWUxZDFlNWI4OThjOGNiZGVkZTM1YWQ1MTk2ZGJhMDFiMgp2ZW5kb3IgaGFzaDogMDM0MWIzNTZhZDcxNjgwNzQzOTFjYTc1MDdmNDBiMDUwZTY2NzcyMgpidWlsZCB0YWdzOiBuZXRnbyBsZWRnZXIKZ28gdmVyc2lvbiBnbzEuMTEuNSBkYXJ3aW4vYW1kNjQK"}}),e._v(" "),a("h3",{attrs:{id:"add-your-ledger-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-your-ledger-key"}},[e._v("#")]),e._v(" Add your Ledger key")]),e._v(" "),a("ul",[a("li",[e._v("Connect and unlock your Ledger device.")]),e._v(" "),a("li",[e._v("Open the Cosmos app on your Ledger.")]),e._v(" "),a("li",[e._v("Create an account in gaiad from your ledger key.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("Be sure to change the "),a("em",[e._v("keyName")]),e._v(" parameter to be a meaningful name. The "),a("code",[e._v("ledger")]),e._v(" flag tells "),a("code",[e._v("gaiad")]),e._v(" to use your Ledger to seed the account.")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBhZGQgJmx0O2tleU5hbWUmZ3Q7IC0tbGVkZ2VyCgrinpwgTkFNRTogVFlQRTogQUREUkVTUzogICAgIFBVQktFWToKJmx0O2tleU5hbWUmZ3Q7IGxlZGdlciBjb3Ntb3MxLi4uIGNvc21vc3B1YjEuLi4K"}}),e._v(" "),a("p",[e._v("Cosmos uses "),a("RouterLink",{attrs:{to:"/resources/hd-wallets.html"}},[e._v("HD Wallets")]),e._v(". This means you can setup many accounts using the same Ledger seed. To create another account from your Ledger device, run (change the integer i to some value >= 0 to choose the account for HD derivation):")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBhZGQgJmx0O3NlY29uZEtleU5hbWUmZ3Q7IC0tbGVkZ2VyIC0tYWNjb3VudCAmbHQ7aSZndDsK"}}),e._v(" "),a("h3",{attrs:{id:"confirm-your-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#confirm-your-address"}},[e._v("#")]),e._v(" Confirm your address")]),e._v(" "),a("p",[e._v("Run this command to display your address on the device. Use the "),a("code",[e._v("keyName")]),e._v(" you gave your ledger key. The "),a("code",[e._v("-d")]),e._v(" flag is supported in version "),a("code",[e._v("1.5.0")]),e._v(" and higher.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBzaG93ICZsdDtrZXlOYW1lJmd0OyAtZAo="}}),e._v(" "),a("p",[e._v("Confirm that the address displayed on the device matches that displayed when you added the key.")]),e._v(" "),a("h3",{attrs:{id:"connect-to-a-full-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-a-full-node"}},[e._v("#")]),e._v(" Connect to a full node")]),e._v(" "),a("p",[e._v("Next, you need to configure gaiad with the URL of a Cosmos full node and the appropriate "),a("code",[e._v("chain_id")]),e._v(". In this example we connect to the public load balanced full node operated by Chorus One on the "),a("code",[e._v("cosmoshub-2")]),e._v(" chain. But you can point your "),a("code",[e._v("gaiad")]),e._v(" to any Cosmos full node. Be sure that the "),a("code",[e._v("chain-id")]),e._v(" is set to the same chain as the full node.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgY29uZmlnIG5vZGUgaHR0cHM6Ly9jb3Ntb3MuY2hvcnVzLm9uZToyNjY1NwpnYWlhZCBjb25maWcgY2hhaW5faWQgY29zbW9zaHViLTIK"}}),e._v(" "),a("p",[e._v("Test your connection with a query such as:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:" bash",base64:"Z2FpYWQgcXVlcnkgc3Rha2luZyB2YWxpZGF0b3JzCg=="}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("To run your own full node locally "),a("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html"}},[e._v("read more here.")]),e._v(".")],1)]),e._v(" "),a("h3",{attrs:{id:"sign-a-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-a-transaction"}},[e._v("#")]),e._v(" Sign a transaction")]),e._v(" "),a("p",[e._v("You are now ready to start signing and sending transactions. Send a transaction with gaiad using the "),a("code",[e._v("tx send")]),e._v(" command.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:" bash",base64:"Z2FpYWQgdHggYmFuayBzZW5kIC0taGVscCAjIHRvIHNlZSBhbGwgYXZhaWxhYmxlIG9wdGlvbnMuCg=="}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("Be sure to unlock your device with the PIN and open the Cosmos app before trying to run these commands")])]),e._v(" "),a("p",[e._v("Use the "),a("code",[e._v("keyName")]),e._v(" you set for your Ledger key and gaia will connect with the Cosmos Ledger app to then sign your transaction.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggYmFuayBzZW5kICZsdDtrZXlOYW1lJmd0OyAmbHQ7ZGVzdGluYXRpb25BZGRyZXNzJmd0OyAmbHQ7YW1vdW50Jmd0OyZsdDtkZW5vbWluYXRpb24mZ3Q7Cg=="}}),e._v(" "),a("p",[e._v("When prompted with "),a("code",[e._v("confirm transaction before signing")]),e._v(", Answer "),a("code",[e._v("Y")]),e._v(".")]),e._v(" "),a("p",[e._v("Next you will be prompted to review and approve the transaction on your Ledger device. Be sure to inspect the transaction JSON displayed on the screen. You can scroll through each field and each message. Scroll down to read more about the data fields of a standard transaction object.")]),e._v(" "),a("p",[e._v("Now, you are all set to start "),a("RouterLink",{attrs:{to:"/delegators/delegator-guide-cli.html#sending-transactions"}},[e._v("sending transactions on the network")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"receive-funds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#receive-funds"}},[e._v("#")]),e._v(" Receive funds")]),e._v(" "),a("p",[e._v("To receive funds to the Cosmos account on your Ledger device, retrieve the address for your Ledger account (the ones with "),a("code",[e._v("TYPE ledger")]),e._v(") with this command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBsaXN0CgrinpwgTkFNRTogVFlQRTogQUREUkVTUzogICAgIFBVQktFWToKJmx0O2tleU5hbWUmZ3Q7IGxlZGdlciBjb3Ntb3MxLi4uIGNvc21vc3B1YjEuLi4K"}}),e._v(" "),a("h3",{attrs:{id:"further-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-documentation"}},[e._v("#")]),e._v(" Further documentation")]),e._v(" "),a("p",[e._v("Not sure what "),a("code",[e._v("gaiad")]),e._v(" can do? Simply run the command without arguments to output documentation for the commands in supports.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("The "),a("code",[e._v("gaiad")]),e._v(" help commands are nested. So "),a("code",[e._v("$ gaiad")]),e._v(" will output docs for the top level commands (status, config, query, and tx). You can access documentation for sub commands with further help commands.")]),e._v(" "),a("p",[e._v("For example, to print the "),a("code",[e._v("query")]),e._v(" commands:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgcXVlcnkgLS1oZWxwCg=="}}),e._v(" "),a("p",[e._v("Or to print the "),a("code",[e._v("tx")]),e._v(" (transaction) commands:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggLS1oZWxwCg=="}})],1),e._v(" "),a("h2",{attrs:{id:"the-cosmos-standard-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-cosmos-standard-transaction"}},[e._v("#")]),e._v(" The Cosmos Standard Transaction")]),e._v(" "),a("p",[e._v("Transactions in Cosmos embed the "),a("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/x/auth#StdTx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Standard Transaction type"),a("OutboundLink")],1),e._v(" from the Cosmos SDK. The Ledger device displays a serialized JSON representation of this object for you to review before signing the transaction. Here are the fields and what they mean:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("chain-id")]),e._v(": The chain to which you are broadcasting the tx, such as the "),a("code",[e._v("gaia-13003")]),e._v(" testnet or "),a("code",[e._v("cosmoshub-2")]),e._v(": mainnet.")]),e._v(" "),a("li",[a("code",[e._v("account_number")]),e._v(": The global id of the sending account assigned when the account receives funds for the first time.")]),e._v(" "),a("li",[a("code",[e._v("sequence")]),e._v(": The nonce for this account, incremented with each transaction.")]),e._v(" "),a("li",[a("code",[e._v("fee")]),e._v(": JSON object describing the transaction fee, its gas amount and coin denomination")]),e._v(" "),a("li",[a("code",[e._v("memo")]),e._v(": optional text field used in various ways to tag transactions.")]),e._v(" "),a("li",[a("code",[e._v("msgs_<index>/<field>")]),e._v(": The array of messages included in the transaction. Double click to drill down into nested fields of the JSON.")])]),e._v(" "),a("h2",{attrs:{id:"support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support"}},[e._v("#")]),e._v(" Support")]),e._v(" "),a("p",[e._v("For further support, start by looking over the posts in our "),a("a",{attrs:{href:"https://forum.cosmos.network/search?q=ledger",target:"_blank",rel:"noopener noreferrer"}},[e._v("forum"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Feel welcome to reach out in our "),a("a",{attrs:{href:"https://t.me/cosmosproject",target:"_blank",rel:"noopener noreferrer"}},[e._v("Telegram channel"),a("OutboundLink")],1),e._v(" to ask for help.")]),e._v(" "),a("p",[e._v("Here are a few relevant and helpful tutorials from the wonderful Cosmos community:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://catdotfish.medium.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Catdotfish"),a("OutboundLink")],1),e._v(" - "),a("a",{attrs:{href:"https://medium.com/chainapsis/how-to-use-keplr-wallet-40afc80907f6",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use the Keplr Wallet"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/cryptium",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cryptium Labs"),a("OutboundLink")],1),e._v(" - "),a("a",{attrs:{href:"https://medium.com/cryptium-cosmos/how-to-store-your-cosmos-atoms-on-your-ledger-and-delegate-with-the-command-line-929eb29705f",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to store your ATOMS on your Ledger and delegate with the command line"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);