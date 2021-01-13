(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(n),b=a,u=h["".concat(c,".").concat(b)]||h[b]||d[b]||o;return n?r.a.createElement(u,i(i({ref:t},l),{},{components:n})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(106)),c={title:"Working with Smart Contracts",author:"Jev Bjorsell"},i={unversionedId:"smartcontracts",id:"smartcontracts",isDocsHomePage:!1,title:"Working with Smart Contracts",description:'Taquito allows developers to interact with Smart Contracts as if they are "Plain Old Javascript Objects".',source:"@site/../docs/smartcontracts.md",slug:"/smartcontracts",permalink:"/docs/smartcontracts",version:"current",sidebar:"docs",previous:{title:"Set delegate",permalink:"/docs/set_delegate"},next:{title:"Estimate Operations",permalink:"/docs/estimate"}},s=[{value:"Taquito&#39;s Smart Contract Abstraction",id:"taquitos-smart-contract-abstraction",children:[]},{value:"The Counter Contract",id:"the-counter-contract",children:[{value:"Counter Contract in CameLIGO",id:"counter-contract-in-cameligo",children:[]},{value:"Counter Contract Michelson source code",id:"counter-contract-michelson-source-code",children:[]}]},{value:"Loading the contract in Taquito",id:"loading-the-contract-in-taquito",children:[]},{value:"Calling the Increment function",id:"calling-the-increment-function",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Taquito allows developers to interact with Smart Contracts as if they are "Plain Old Javascript Objects".'),Object(o.b)("p",null,'The "Machine Language" of Tezos Smart Contracts is named ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://tezos.gitlab.io/whitedoc/michelson.html"}),"Michelson"),". Michelson is a stack-based language that is human-readable. It's possible to author Smart-Contracts directly in Michelson. However, developers can use High-Level Languages (such as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://ligolang.org/"}),"Ligo")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://smartpy.io/"}),"SmartPy"),") to write smart contracts."),Object(o.b)("p",null,'Taquito makes developing applications (dApps or traditional programs) around a Tezos Smart Contract easy. Taquito can also "originate" (create) a new Smart Contract to the Tezos Blockchain.'),Object(o.b)("p",null,"Michelson is a somewhat specialized language that isn't typical in Javascript or Typescript development contexts. Taquito helps to bridge the gap between the Tezos blockchain and a typical Javascript or Typescript development environment."),Object(o.b)("h2",{id:"taquitos-smart-contract-abstraction"},"Taquito's Smart Contract Abstraction"),Object(o.b)("p",null,"Taquito assists developers by reading the Michelson code for a given contract from the blockchain. Based on the retrieved Michelson code, Taquito generates a ",Object(o.b)("inlineCode",{parentName:"p"},"contract")," javascript object with methods and storage that correspond to the contract's Michelson entrypoints, storage definitions and values."),Object(o.b)("h2",{id:"the-counter-contract"},"The Counter Contract"),Object(o.b)("p",null,'In this guide, we use a straightforward "counter" smart contract to illustrate how Taquito works.'),Object(o.b)("p",null,"The counter contract has two entrypoints named ",Object(o.b)("inlineCode",{parentName:"p"},"increment")," and ",Object(o.b)("inlineCode",{parentName:"p"},"decrement"),". These entrypoints are used by Taquito to generate corresponding javascript methods that are available to the developer."),Object(o.b)("p",null,"The counter contracts storage is a simple integer that gets increased or decreased based on the calls to the entrypoints."),Object(o.b)("h3",{id:"counter-contract-in-cameligo"},"Counter Contract in CameLIGO"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"type storage = int\n\n(* variant defining pseudo multi-entrypoint actions *)\n\ntype action =\n| Increment of int\n| Decrement of int\n\nlet add (a,b: int * int) : int = a + b\nlet sub (a,b: int * int) : int = a - b\n\n(* real entrypoint that re-routes the flow based on the action provided *)\n\nlet main (p,s: action * storage) =\n let storage =\n   match p with\n   | Increment n -> add (s, n)\n   | Decrement n -> sub (s, n)\n in ([] : operation list), storage\n\n")),Object(o.b)("p",null,"You can view this contract and deploy it to a testnet using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://ide.ligolang.org/p/839HdMaflPsQSA6k1Ce0Wg"}),"Ligo WebIDE")),Object(o.b)("h3",{id:"counter-contract-michelson-source-code"},"Counter Contract Michelson source code"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"{ parameter (or (int %decrement) (int %increment)) ;\n  storage int ;\n  code { DUP ;\n         CDR ;\n         DIP { DUP } ;\n         SWAP ;\n         CAR ;\n         IF_LEFT\n           { DIP { DUP } ;\n             SWAP ;\n             DIP { DUP } ;\n             PAIR ;\n             DUP ;\n             CAR ;\n             DIP { DUP ; CDR } ;\n             SUB ;\n             DIP { DROP 2 } }\n           { DIP { DUP } ;\n             SWAP ;\n             DIP { DUP } ;\n             PAIR ;\n             DUP ;\n             CAR ;\n             DIP { DUP ; CDR } ;\n             ADD ;\n             DIP { DROP 2 } } ;\n         NIL operation ;\n         PAIR ;\n         DIP { DROP 2 } } }\n")),Object(o.b)("h2",{id:"loading-the-contract-in-taquito"},"Loading the contract in Taquito"),Object(o.b)("p",null,"To load the contract from the Tezos Blockchain, we use the ",Object(o.b)("inlineCode",{parentName:"p"},"Tezos.contract.at")," method.\nWe can inspect the contract methods and data types using the ",Object(o.b)("inlineCode",{parentName:"p"},"c.parameterSchema.ExtractSignatures()")," method."),Object(o.b)("p",null,"The following example shows how to load the contract, and view the methods on that contract."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"// const Tezos = new TezosToolkit('https://api.tez.ie/rpc/delphinet');\n\nTezos.contract\n  .at('KT1NGihnotUbt8C1WsKfsUg1E2D7UPYzAn2N')\n  .then((c) => {\n    let methods = c.parameterSchema.ExtractSignatures();\n    println(JSON.stringify(methods, null, 2));\n  })\n  .catch((error) => console.log(`Error: ${error}`));\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"at()"),' method causes Taquito to query a Tezos nodes RPC API for the contracts "script" and "entrypoints". From these two inputs, Taquito builds an ordinary JavaScript object with methods that correspond to the Smart Contracts entrypoints.'),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"at")," method returns a representation of the contract as a plain old javascript object. Taquito dynamically creates an ",Object(o.b)("inlineCode",{parentName:"p"},"increment")," and ",Object(o.b)("inlineCode",{parentName:"p"},"decrement")," method that the developer can call as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"contract.methods.increment()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"contract.methods.decrement()"))),Object(o.b)("p",null,"In Tezos, to call an entrypoint on a contract, one must send a transfer operation. In the case of the counter contract, the transfer value can be ",Object(o.b)("inlineCode",{parentName:"p"},"0")," as the contract does not expect to receive any tokens. To call the ",Object(o.b)("inlineCode",{parentName:"p"},"increment"),' entrypoint, the transfer must have the appropriate Michelson values specified as "params".'),Object(o.b)("p",null,"We can inspect the transfer params produced by Taquito using the ",Object(o.b)("inlineCode",{parentName:"p"},"toTransferParams()")," method as follows."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"// const Tezos = new TezosToolkit('https://api.tez.ie/rpc/delphinet');\n\nTezos.contract\n  .at('KT1NGihnotUbt8C1WsKfsUg1E2D7UPYzAn2N')\n  .then((c) => {\n    let incrementParams = c.methods.increment(2).toTransferParams();\n    println(JSON.stringify(incrementParams, null, 2));\n  })\n  .catch((error) => console.log(`Error: ${error}`));\n")),Object(o.b)("h2",{id:"calling-the-increment-function"},"Calling the Increment function"),Object(o.b)("p",null,"In the next example, we call the ",Object(o.b)("inlineCode",{parentName:"p"},"send()")," method. This example requires an additional ceremony for getting a temporary key for signing."),Object(o.b)("p",null,"We call the ",Object(o.b)("inlineCode",{parentName:"p"},"send()")," method on the ",Object(o.b)("inlineCode",{parentName:"p"},"increment()")," method. Taquito then forges this operation into a transfer operation (with a transfer value of zero), signs the operation with our testing key, and injects or broadcast the operation to the Tezos RPC node."),Object(o.b)("p",null,"Then we wait for the ",Object(o.b)("inlineCode",{parentName:"p"},"confirmation(3)")," to complete. The ",Object(o.b)("inlineCode",{parentName:"p"},"3")," number tells Taquito how many confirmations to wait for before resolving the promise. ",Object(o.b)("inlineCode",{parentName:"p"},"3")," is a good value for this type of demonstration, but we recommend a higher value if you are dealing with mainnet transactions."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"// const Tezos = new TezosToolkit('https://api.tez.ie/rpc/delphinet');\n\nTezos.contract\n  .at('KT1NGihnotUbt8C1WsKfsUg1E2D7UPYzAn2N')\n  .then((contract) => {\n    const i = 7;\n\n    println(`Incrementing storage value by ${i}...`);\n    return contract.methods.increment(i).send();\n  })\n  .then((op) => {\n    println(`Awaiting for ${op.hash} to be confirmed...`);\n    return op.confirmation(3).then(() => op.hash);\n  })\n  .then((hash) => println(`Operation injected: https://delphi.tzstats.com/${hash}`))\n  .catch((error) => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")))}p.isMDXComponent=!0}}]);