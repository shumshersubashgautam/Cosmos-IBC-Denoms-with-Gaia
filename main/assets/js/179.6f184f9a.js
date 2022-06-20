(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{640:function(v,a,_){"use strict";_.r(a);var t=_(1),l=Object(t.a)({},(function(){var v=this,a=v.$createElement,_=v._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"验证人安全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#验证人安全"}},[v._v("#")]),v._v(" 验证人安全")]),v._v(" "),_("p",[v._v("我们鼓励每一个验证人候选者独立运行其操作，因为不同的设置增加了网络的抵抗能力。为了能按时启动主网，验证人候选者现在就应该开始设置了。")]),v._v(" "),_("h2",{attrs:{id:"密钥管理-hsm"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#密钥管理-hsm"}},[v._v("#")]),v._v(" 密钥管理 - HSM")]),v._v(" "),_("p",[v._v("让攻击者无法盗取验证人的密钥是至关重要的任务。如果可能发生盗取，这将会使委托给抵抗力脆弱的验证人的所有股权都处于风险之中。硬件安全模块是防范该风险的一个重要策略。")]),v._v(" "),_("p",[v._v("为了支持Cosmos Hub，HSM模块必须要支持"),_("code",[v._v("ed25519")]),v._v("签名。YubiHSM2支持了"),_("code",[v._v("ed25519")]),v._v("，我们期望在2017年12月时，能有一个可以使用的库。YubiHSM可以保护私钥但是不能确保它不会去重复签署一个区块。")]),v._v(" "),_("p",[v._v("Tendermint团队也在为拓展Ledger Nano S应用以支持验证人签名做贡献。这个应用将会储存最近的区块，并能降低双重签名攻击的风险。")]),v._v(" "),_("p",[v._v("我们会在有更多关于密钥保存安全的可行的解决方案出现时更新这个文档。")]),v._v(" "),_("h2",{attrs:{id:"哨兵节点-ddos防御"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#哨兵节点-ddos防御"}},[v._v("#")]),v._v(" 哨兵节点（DDOS防御）")]),v._v(" "),_("p",[v._v("验证人有责任确保网络能够经受住DDOS攻击。")]),v._v(" "),_("p",[v._v("降低这种风险的一个推荐方案是验证人要在成为哨兵节点的网络拓扑结构上去精心搭建他们的网络结构。")]),v._v(" "),_("p",[v._v("因为验证人节点可以操作自身，也可以被其熟知的其它验证人运行，验证人节点应该只连接到其所信任的全节点上。一个验证人节点通常会运行在一个数据中心。大部分数据中心提供对主流云服务提供商的直接网络连接服务。验证人可以去连接云服务中上的哨兵节点。验证人节点直接连接到其哨兵节点，减缓了DDOS攻击带来的压力，还可以添加多个新的哨兵节点用以轮换来减轻已存在哨兵节点所遭受到的攻击。")]),v._v(" "),_("p",[v._v("哨兵节点能够迅速轮换或者改变它们的IP地址。因为与哨兵节点的连接是在私有的IP网段，基于因特网的攻击不可能直接骚扰到验证人节点。这将确保验证人区块的提交和投票总是能广播至网络中的其余节点。")]),v._v(" "),_("p",[v._v("你可以按照下面的指令去设置你的哨兵节点架构：")]),v._v(" "),_("p",[v._v("验证人节点必须编辑它们的config.toml文件：")]),v._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBub2RlcyB0byBrZWVwIHBlcnNpc3RlbnQgY29ubmVjdGlvbnMgdG8KIyBEbyBub3QgYWRkIHByaXZhdGUgcGVlcnMgdG8gdGhpcyBsaXN0IGlmIHlvdSBkb24ndCB3YW50IHRoZW0gYWR2ZXJ0aXNlZApwZXJzaXN0ZW50X3BlZXJzID1bbGlzdCBvZiBzZW50cnkgbm9kZXNdCgojIFNldCB0cnVlIHRvIGVuYWJsZSB0aGUgcGVlci1leGNoYW5nZSByZWFjdG9yCnBleCA9IGZhbHNlCg=="}}),v._v(" "),_("p",[v._v("哨兵节点应该编辑它们的config.toml文件:")]),v._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBwZWVyIElEcyB0byBrZWVwIHByaXZhdGUgKHdpbGwgbm90IGJlIGdvc3NpcGVkIHRvIG90aGVyIHBlZXJzKQpwcml2YXRlX3BlZXJfaWRzID0gJnF1b3Q7aXBhZGRyZXNzIG9mIHZhbGlkYXRvciBub2RlcyZxdW90Owo="}}),v._v(" "),_("h2",{attrs:{id:"环境变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[v._v("#")]),v._v(" 环境变量")]),v._v(" "),_("p",[v._v("默认情况下，具有以下前缀的大写环境变量将替换小写命令行标志：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("GA")]),v._v("（对应Gaia的标识）")]),v._v(" "),_("li",[_("code",[v._v("TM")]),v._v("（对应Tendermint的标识）")]),v._v(" "),_("li",[_("code",[v._v("BC")]),v._v("（对应democli或basecli的标识）")])]),v._v(" "),_("p",[v._v("例如，环境变量"),_("code",[v._v("GA_CHAIN_ID")]),v._v("将映射到命令行标识"),_("code",[v._v("--chain-id")]),v._v("。注意，虽然显式命令行标识优先于环境变量，但环境变量优先于任何配置文件。因此，必须锁定环境，以便在CLI上将任何关键参数定义为标识或防止修改任何环境变量。\n")])],1)}),[],!1,null,null,null);a.default=l.exports}}]);