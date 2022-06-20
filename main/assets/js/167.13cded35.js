(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{599:function(g,C,A){"use strict";A.r(C);var I=A(1),v=Object(I.a)({},(function(){var g=this,C=g.$createElement,A=g._self._c||C;return A("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[A("h1",{attrs:{id:"委托人指南-cli"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#委托人指南-cli"}},[g._v("#")]),g._v(" 委托人指南 (CLI)")]),g._v(" "),A("p",[g._v("本文介绍了如何使用Cosmos Hub的命令行交互（CLI）程序实现通证委托的相关知识和操作步骤。")]),g._v(" "),A("p",[g._v("同时，本文也介绍了如何管理账户，如何从筹款人那里恢复账户，以及如何使用一个硬件钱包的相关知识。")]),g._v(" "),A("p",[g._v("::: 风险提示")]),g._v(" "),A("p",[A("strong",[g._v("重要提示")]),g._v("：请务必按照下面的操作步骤谨慎操作，过程中发生任何错误都有可能导致您永远失去所拥有的通证。因此，请在开始操作之前先仔细阅读全文，如果有任何问题可以联系我们获得支持。")]),g._v(" "),A("p",[g._v("另请注意，您即将要与Cosmos Hub进行交互，Cosmos Hub仍然是一个试验型的区块链技术软件。虽然Cosmos Hub区块链是应用现有最新技术开发并经过审核的，但我们仍然可能会在运行时遇到问题，需要不断更新和修复漏洞。此外，使用区块链技术仍然要求有很高的技术能力，并且有可能遇到我们无法预知和控制的风险。使用Cosmos Hub前，您需要充分了解与加密软件相关的潜在风险（请参考"),A("a",{attrs:{href:"https://github.com/cosmos/cosmos/blob/master/fundraiser/Interchain%20Cosmos%20Contribution%20Terms%20-%20FINAL.pdf",target:"_blank",rel:"noopener noreferrer"}},[g._v("Cosmos跨链贡献条款"),A("OutboundLink")],1),g._v("中关于风险的部分条款），并且我们跨链基金会和(或)Tendermint团队对于因为使用本产品而可能产生的损失不承担任何责任。使用Cosmos Hub需要遵守Apache 2.0开源软件授权条款，用户需要自己承担所有责任，所使用的软件按“现状”提供且不提供任何形式的保障或条件。\n:::")]),g._v(" "),A("p",[g._v("请务必谨慎行事！")]),g._v(" "),A("h2",{attrs:{id:"目录"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[g._v("#")]),g._v(" 目录")]),g._v(" "),A("ul",[A("li",[A("a",{attrs:{href:"#%E5%AE%89%E8%A3%85-gaiad"}},[g._v("安装 "),A("code",[g._v("gaiad")])])]),g._v(" "),A("li",[A("a",{attrs:{href:"#Cosmos%E8%B4%A6%E6%88%B7"}},[g._v("Cosmos账户")]),g._v(" "),A("ul",[A("li",[A("a",{attrs:{href:"#%E9%80%9A%E8%BF%87%E5%8B%9F%E8%B5%84%E4%BA%BA%E6%81%A2%E5%A4%8D%E4%B8%80%E4%B8%AA%E8%B4%A6%E6%88%B7"}},[g._v("通过募资人恢复一个账户")])]),g._v(" "),A("li",[A("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E8%B4%A6%E6%88%B7"}},[g._v("创建一个账户")])])])]),g._v(" "),A("li",[A("a",{attrs:{href:"#%E8%AE%BF%E9%97%AECosmos-Hub%E7%BD%91%E7%BB%9C"}},[g._v("访问Cosmos Hub网络")]),g._v(" "),A("ul",[A("li",[A("a",{attrs:{href:"#%E8%BF%90%E8%A1%8C%E6%82%A8%E8%87%AA%E5%B7%B1%E7%9A%84%E5%85%A8%E8%8A%82%E7%82%B9"}},[g._v("运行您自己的全节点")])]),g._v(" "),A("li",[A("a",{attrs:{href:"#%E8%BF%9E%E6%8E%A5%E5%88%B0%E4%B8%80%E4%B8%AA%E8%BF%9C%E7%A8%8B%E5%85%A8%E8%8A%82%E7%82%B9"}},[g._v("连接到一个远程全节点")])])])]),g._v(" "),A("li",[A("a",{attrs:{href:"#%E8%AE%BE%E7%BD%AE-gaiad"}},[g._v("设置"),A("code",[g._v("gaiad")])])]),g._v(" "),A("li",[A("a",{attrs:{href:"#%E7%8A%B6%E6%80%81%E6%9F%A5%E8%AF%A2"}},[g._v("状态查询")])]),g._v(" "),A("li",[A("a",{attrs:{href:"#%E5%8F%91%E8%B5%B7%E4%BA%A4%E6%98%93"}},[g._v("发起交易")]),g._v(" "),A("ul",[A("li",[A("a",{attrs:{href:"#%E5%85%B3%E4%BA%8Egas%E8%B4%B9%E5%92%8C%E6%89%8B%E7%BB%AD%E8%B4%B9"}},[g._v("关于gas费和手续费")])]),g._v(" "),A("li",[A("a",{attrs:{href:"#%E6%8A%B5%E6%8A%BCatom%E9%80%9A%E8%AF%81--%E6%8F%90%E5%8F%96%E5%A5%96%E5%8A%B1"}},[g._v("抵押Atom通证 & 提取奖励")])]),g._v(" "),A("li",[A("a",{attrs:{href:"#%E5%8F%82%E4%B8%8E%E9%93%BE%E4%B8%8A%E6%B2%BB%E7%90%86"}},[g._v("参与链上治理")])]),g._v(" "),A("li",[A("a",{attrs:{href:"#%E4%BB%8E%E4%B8%80%E5%8F%B0%E7%A6%BB%E7%BA%BF%E7%94%B5%E8%84%91%E4%B8%8A%E7%AD%BE%E7%BD%B2%E4%BA%A4%E6%98%93"}},[g._v("从一台离线电脑上签署交易")])])])])]),g._v(" "),A("h2",{attrs:{id:"安装-gaiad"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#安装-gaiad"}},[g._v("#")]),g._v(" 安装 "),A("code",[g._v("gaiad")])]),g._v(" "),A("p",[A("code",[g._v("gaiad")]),g._v(": 与"),A("code",[g._v("gaiad")]),g._v("全节点交互的命令行用户界面。")]),g._v(" "),A("p",[g._v("::: 安全提示")]),g._v(" "),A("p",[A("strong",[g._v("请检查并且确认你下载的"),A("code",[g._v("gaiad")]),g._v("是可获得的最新稳定版本")]),g._v("\n:::")]),g._v(" "),A("p",[g._v("["),A("strong",[g._v("下载已编译代码")]),g._v("]暂不提供")]),g._v(" "),A("p",[A("a",{attrs:{href:"https://cosmos.network/docs/gaia/installation.html",target:"_blank",rel:"noopener noreferrer"}},[A("strong",[g._v("通过源代码安装")]),A("OutboundLink")],1)]),g._v(" "),A("div",{staticClass:"custom-block tip"},[A("p",{staticClass:"custom-block-title"},[g._v("提示")]),g._v(" "),A("p",[A("code",[g._v("gaiad")]),g._v(" 需要通过操作系统的终端窗口使用，打开步骤如下所示：")]),g._v(" "),A("ul",[A("li",[A("strong",[g._v("Windows")]),g._v(": "),A("code",[g._v("开始")]),g._v(" > "),A("code",[g._v("所有程序")]),g._v(" > "),A("code",[g._v("附件")]),g._v(" > "),A("code",[g._v("终端")])]),g._v(" "),A("li",[A("strong",[g._v("MacOS")]),g._v(": "),A("code",[g._v("访达")]),g._v(" > "),A("code",[g._v("应用程序")]),g._v(" > "),A("code",[g._v("实用工具")]),g._v(" > "),A("code",[g._v("终端")])]),g._v(" "),A("li",[A("strong",[g._v("Linux")]),g._v(": "),A("code",[g._v("Ctrl")]),g._v(" + "),A("code",[g._v("Alt")]),g._v(" + "),A("code",[g._v("T")])])])]),g._v(" "),A("h2",{attrs:{id:"cosmos账户"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#cosmos账户"}},[g._v("#")]),g._v(" Cosmos账户")]),g._v(" "),A("p",[g._v("每个Cosmos账户的核心基础是一个包含12或24个词的助记词组，通过这个助记词可以生成无数个Cosmos账户，例如，一组私钥/公钥对。这被称为一个硬件钱包（跟多硬件钱包相关说明请参见"),A("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[g._v("BIP32"),A("OutboundLink")],1),g._v("）")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICAgICDotKbmiLcgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICDotKbmiLcgMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi0puaItyAyCgorLS0tLS0tLS0tLS0tLS0tLS0tKyAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tKwp8ICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgfAp8ICAgICAgIOWcsOWdgCAwICAgICAgfCAgICAgICAgICAgICAgfCAgICAgIOWcsOWdgCAxICAgICAgfCAgICAgICAgICAgICAgIHwgICAgICAg5Zyw5Z2AIDIgICAgICB8CnwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICB8ICAgICAgICBeICAgICAgICAgfCAgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8CnwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICB8ICAgICAgICB8ICAgICAgICAgfCAgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8CnwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICB8ICAgICAgICB8ICAgICAgICAgfCAgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8CnwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICB8ICAgICAgICB8ICAgICAgICAgfCAgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8CnwgICAgICAgICsgICAgICAgICB8ICAgICAgICAgICAgICB8ICAgICAgICArICAgICAgICAgfCAgICAgICAgICAgICAgIHwgICAgICAgICsgICAgICAgICB8CnwgICAgICAg5YWs6ZKlIDAgICAgICB8ICAgICAgICAgICAgICB8ICAgICAg5YWs6ZKlIDEgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICDlhazpkqUgMiAgICAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgKyAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICsgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgKyAgICAgICAgIHwKfCAgICAgICDnp4HpkqUgMCAgICAgIHwgICAgICAgICAgICAgIHwgICAgICDnp4HpkqUgMSAgICAgIHwgICAgICAgICAgICAgICB8ICAgICAgIOengemSpSAyICAgICAgfAp8ICAgICAgICBeICAgICAgICAgfCAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgICB8ICAgICAgICBeICAgICAgICAgfAorLS0tLS0tLS0tLS0tLS0tLS0tKyAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tKwogICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tLS0tLS0rLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAg5Yqp6K6w6K+NIChTZWVkKSAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0rCg=="}}),g._v(" "),A("p",[g._v("私钥是控制一个账户中所存资产的钥匙。私钥是通过助记词单向产生的。如果您不小心丢失了私钥，你可以通过助记词恢复。 然而，如果你丢失了助记词，那么你就有可能失去对由这个助记词产生的所有私钥的控制。同样，如果有人获得了你的助记词，他们就可以操作所有相关账户。")]),g._v(" "),A("p",[g._v("::: 警告")]),g._v(" "),A("p",[A("strong",[g._v("谨慎保管并不要告诉他人你的助记词。 为了防止资产被盗或者丢失，您最好多备份几份助记词， 并且把它们存放在只有您知道的安全地方，这样做将有助于保障您的私钥以及相关账户的安全。")]),g._v("\n:::")]),g._v(" "),A("p",[g._v("Cosmos地址是一个以可读词开头的字符串(比如"),A("code",[g._v("cosmos10snjt8dmpr5my0h76xj48ty80uzwhraqalu4eg")]),g._v(") 如果有人想给你转账通证，他们就往这个地址转账。根据给定地址来推算私钥是不可行的。")]),g._v(" "),A("h3",{attrs:{id:"通过募资人恢复一个账户"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#通过募资人恢复一个账户"}},[g._v("#")]),g._v(" 通过募资人恢复一个账户")]),g._v(" "),A("p",[g._v("::: 提示")]),g._v(" "),A("p",[A("em",[g._v("注：这部分内容仅适用于众筹活动参与者")]),g._v("\n:::")]),g._v(" "),A("p",[g._v("如果您是众筹的参与者，你应该有一个助记词。新产生的助记词用24个词，但是12个词的助记词组也兼容所有Cosmos工具。")]),g._v(" "),A("h4",{attrs:{id:"通过硬件钱包设备进行操作"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#通过硬件钱包设备进行操作"}},[g._v("#")]),g._v(" 通过硬件钱包设备进行操作")]),g._v(" "),A("p",[g._v("一个数字钱包设备的核心是通过一个助记词在多个区块链上创建账户（包括Cosmos hub）。通常，您会在初始化您的数字钱包设备时创建一个新的助记词,也可以通过已有的助记词进行导入。让我们一起来看如何将您在参与众筹时获得的助记词设定为一个数字钱包设备的seed。")]),g._v(" "),A("p",[g._v("::: 警告")]),g._v(" "),A("p",[A("em",[g._v("注意："),A("strong",[g._v("最好使用一个新的钱包设备")]),g._v("来恢复您的Cosmos账户。确实，每个数字钱包设备只能有一个助记词。 当然，您可以通过 "),A("code",[g._v("设置")]),g._v(">"),A("code",[g._v("设备")]),g._v(">"),A("code",[g._v("重置所有")]),g._v(" 将一个已经有助记词的（用过的）数字钱包重新初始化。"),A("strong",[g._v("但请注意，这样会清空您设备中现有的助记词，如果您没有做好备份的话，有可能会丢失您的资产")])]),g._v("\n:::")]),g._v(" "),A("p",[g._v("对于一个没有初始化的数字钱包设备，您需要做如下操作。")]),g._v(" "),A("ol",[A("li",[g._v("将您的数字钱包设备通过USB与电脑链接")]),g._v(" "),A("li",[g._v("同时按下两个按钮")]),g._v(" "),A("li",[A("strong",[g._v("不要")]),g._v("选择“配置一个新设备”选项，而是选择“恢复配置”")]),g._v(" "),A("li",[g._v("选择一个PIN")]),g._v(" "),A("li",[g._v("选择12个词选项")]),g._v(" "),A("li",[g._v("逐个按顺序输入您在众筹时获得的12个助记词")])]),g._v(" "),A("p",[g._v("现在，您的钱包已经正确地设置好您在众筹时获得的助记词，切勿丢失！任何时候您的钱包设备出现问题，您都可以通过助记词在一个新的钱包设备上恢复所有账户。")]),g._v(" "),A("p",[g._v("接下来，请点击"),A("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E7%A1%AC%E4%BB%B6%E9%92%B1%E5%8C%85%E8%AE%BE%E5%A4%87%E8%BF%9B%E8%A1%8C%E6%93%8D%E4%BD%9C"}},[g._v("这里")]),g._v("来学习如何生成一个账户。")]),g._v(" "),A("h4",{attrs:{id:"在电脑上操作"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#在电脑上操作"}},[g._v("#")]),g._v(" 在电脑上操作")]),g._v(" "),A("p",[g._v("::: 警告")]),g._v(" "),A("p",[A("strong",[g._v("注意： 在一台没有联网的计算机上执行以下操作会更加安全")]),g._v("\n:::")]),g._v(" "),A("p",[g._v("如果您希望通过众筹时获得的助记词恢复账户并保存相关私钥，请按以下步骤操作：")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBhZGQgJmx0O3lvdXJLZXlOYW1lJmd0OyAtLXJlY292ZXIK"}}),g._v(" "),A("p",[g._v("首先，您需要输入一个密码来对您硬盘上账户"),A("code",[g._v("0")]),g._v("的私钥进行加密。每次您发出一笔交易时都将需要输入这个密码。如果您丢失了密码，您可以通过助记词来恢复您的私钥。")]),g._v(" "),A("p",[g._v("-"),A("code",[g._v("<yourKeyName>")]),g._v(" 是账户名称，用来指代用助记词生成私钥/公钥对的Cosmos账户。在您发起交易时，这个账户名称被用来识别您的账户。")]),g._v(" "),A("ul",[A("li",[g._v("您可以通过增加 "),A("code",[g._v("--account")]),g._v(" 标志来指定您账户生成的路径 ("),A("code",[g._v("0")]),g._v(", "),A("code",[g._v("1")]),g._v(", "),A("code",[g._v("2")]),g._v(", ...)， "),A("code",[g._v("0")]),g._v(" 是缺省值。")])]),g._v(" "),A("h3",{attrs:{id:"创建一个账户"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#创建一个账户"}},[g._v("#")]),g._v(" 创建一个账户")]),g._v(" "),A("p",[g._v("前，您需要先安装"),A("code",[g._v("gaiad")]),g._v("，同时，您需要知道你希望在哪里保存和使用您的私钥。 最好的办法是把他们保存在一台没有上网的电脑或者一个硬件钱包设备里面。 将私钥保存在一台联网的电脑里面比较危险，任何人通过网络攻击都有可能获取您的私钥，进而盗取您的资产。")]),g._v(" "),A("h4",{attrs:{id:"使用硬件钱包设备进行操作"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#使用硬件钱包设备进行操作"}},[g._v("#")]),g._v(" 使用硬件钱包设备进行操作")]),g._v(" "),A("p",[g._v("::: 警告")]),g._v(" "),A("p",[A("strong",[g._v("建议仅使用您新买的钱包设备或者您足够信任的设备")]),g._v("\n:::")]),g._v(" "),A("p",[g._v("当您初始化钱包设备时，设备会产生一个24个词的助记词组。这个助记词组和Cosmos是兼容的，我们可以通过这个助记词组创建Cosmos账户。所以，您需要做的是确认您的钱包设备兼容"),A("code",[g._v("gaiad")]),g._v("，通过下面的步骤可以帮助您确认您的设备是否兼容：")]),g._v(" "),A("ol",[A("li",[g._v("下载"),A("a",{attrs:{href:"https://www.ledger.com/pages/ledger-live",target:"_blank",rel:"noopener noreferrer"}},[g._v("Ledger Live应用"),A("OutboundLink")],1),g._v(".")]),g._v(" "),A("li",[g._v("通过USB将钱包与计算机连接，并且将钱包固件升级到最新版本。")]),g._v(" "),A("li",[g._v("到Ledger Live钱包的应用商店下载”Cosmos“应用（这可能需要花些时间）。"),A("strong",[g._v("下载”Cosmos“应用程序需要在Ledger Live钱包"),A("code",[g._v("Settings")]),g._v("选项中激活"),A("code",[g._v("Dev Mode")])])]),g._v(" "),A("li",[g._v("在你的钱包设备上操作Cosmos APP。")])]),g._v(" "),A("p",[g._v("然后，通过以下命令创建账户：")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBhZGQgJmx0O3lvdXJBY2NvdW50TmFtZSZndDsgLS1sZWRnZXIgCg=="}}),g._v(" "),A("p",[g._v("::: 注意： 该命令仅在硬件钱包已导入并在解锁状态时才有效:::")]),g._v(" "),A("ul",[A("li",[A("p",[A("code",[g._v("<yourKeyName>")]),g._v(" 是账户名称，用来指代用助记词生成私钥/公钥对的Cosmos账户。在您发起交易时，这个账户名称被用来识别您的账户。")])]),g._v(" "),A("li",[A("p",[g._v("您可以通过增加 "),A("code",[g._v("--account")]),g._v(" 标志来指定您账户生成的路径 ("),A("code",[g._v("0")]),g._v(", "),A("code",[g._v("1")]),g._v(", "),A("code",[g._v("2")]),g._v(", ...)， "),A("code",[g._v("0")]),g._v(" 是缺省值。")])])]),g._v(" "),A("h4",{attrs:{id:"使用电脑设备进行操作"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#使用电脑设备进行操作"}},[g._v("#")]),g._v(" 使用电脑设备进行操作")]),g._v(" "),A("p",[g._v("::: 警告")]),g._v(" "),A("p",[A("strong",[g._v("注意：在一台没有联网的电脑上操作会更加安全")]),g._v("\n:::")]),g._v(" "),A("p",[g._v("然后，通过以下命令创建账户：")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBhZGQgJmx0O3lvdXJLZXlOYW1lJmd0Owo="}}),g._v(" "),A("p",[g._v("这个命令会产生一个24个词的助记词组，并且同时保存账户 "),A("code",[g._v("0")]),g._v(" 的私钥和公钥。 另外，您还需要输入一个密码来对您硬盘上账户"),A("code",[g._v("0")]),g._v("的私钥进行加密。 每次您发出一笔交易时都将需要输入这个密码。如果您丢失了密码，您可以通过助记词来恢复您的私钥。")]),g._v(" "),A("p",[g._v("::: 危险提示")]),g._v(" "),A("p",[A("strong",[g._v("千万不要丢失或者告诉其他人你的12个词的助记词组。 为了防止资产被盗或者丢失，您最好多备份几份助记词， 并且把它们存放在只有您知道的安全地方，如果有人取得您的助记词，那么他也就取得了您的私钥并且可以控制相关账户。")]),g._v("\n:::")]),g._v(" "),A("p",[g._v("::: 警告\n在确认已经安全保存好您的助记词以后（至少3遍！），你可以用如下命令清除终端窗口中的命令历史记录，以防有人通过历史记录获得您的助记词。")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGlzdG9yeSAtYwpybSB+Ly5iYXNoX2hpc3RvcnkK"}}),g._v(" "),A("p",[g._v(":::")]),g._v(" "),A("p",[g._v("你可以用以下命令使用助记词生成多个账户：")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBhZGQgJmx0O3lvdXJLZXlOYW1lJmd0OyAtLXJlY292ZXIgLS1hY2NvdW50IDEK"}}),g._v(" "),A("ul",[A("li",[A("ul",[A("li",[A("code",[g._v("<yourKeyName>")]),g._v(" 是账户名称，用来指代用助记词生成私钥/公钥对的Cosmos账户。在您发起交易时，这个账户名称用来识别您的账户。")])])]),g._v(" "),A("li",[A("p",[g._v("您可以通过增加 "),A("code",[g._v("--account")]),g._v(" 标志来指定您账户生成的路径 ("),A("code",[g._v("0")]),g._v(", "),A("code",[g._v("1")]),g._v(", "),A("code",[g._v("2")]),g._v(", ...)， "),A("code",[g._v("0")]),g._v(" 是缺省值。")])])]),g._v(" "),A("p",[g._v("这条命令需要您输入一个密码。改变账号就代表生成了一个新的账户。")]),g._v(" "),A("h2",{attrs:{id:"访问cosmos-hub网络"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#访问cosmos-hub网络"}},[g._v("#")]),g._v(" 访问Cosmos Hub网络")]),g._v(" "),A("p",[g._v("为了查询网络状态和发起交易，你需要通过自建一个全节点，或者连接到其他人的全节点访问Cosmos Hub网络")]),g._v(" "),A("p",[g._v("::: 警告")]),g._v(" "),A("p",[A("strong",[g._v("注意： 请不要与任何人分享您的助记词，您是唯一需要知道这些助记词的人。如果任何人通过邮件或者其他社交媒体向您要求您提供您的助记词，那就需要警惕了。 请记住，Cosmos/Tendermint团队，或跨链基金会永远不会通过邮件要求您提供您的账户密码或助记词。")]),g._v("\n:::")]),g._v(" "),A("h3",{attrs:{id:"运行您自己的全节点"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#运行您自己的全节点"}},[g._v("#")]),g._v(" 运行您自己的全节点")]),g._v(" "),A("p",[g._v("这是最安全的途径，但需要相当多的资源。您需要有较大的带宽和至少1TB的磁盘容量来运行一个全节点。")]),g._v(" "),A("p",[A("code",[g._v("gaia")]),g._v("的安装教程在"),A("RouterLink",{attrs:{to:"/zh/getting-started/installation.html"}},[g._v("这里")]),g._v("， 如何运行一个全节点指导在"),A("RouterLink",{attrs:{to:"/zh/hub-tutorials/join-mainnet.html"}},[g._v("这里")])],1),g._v(" "),A("h3",{attrs:{id:"连接到一个远程全节点"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#连接到一个远程全节点"}},[g._v("#")]),g._v(" 连接到一个远程全节点")]),g._v(" "),A("p",[g._v("如果您不想或没有能力运行一个全节点，您也可以连接到其他人的全节点。您需要谨慎的选择一个可信的运营商，因为恶意的运营商往往会向您反馈错误的查询结果，或者对您的交易进行监控。 然而，他们永远也无法盗取您的资产，因为您的私钥仅保持在您的本地计算机或者钱包设备中。 验证人，钱包供应商或者交易所是可以提供全节点的运营商。")]),g._v(" "),A("p",[g._v("连接到其他人提供的全节点，你需要一个全节点地址，如"),A("code",[g._v("https://77.87.106.33:26657")]),g._v("。这个地址是您的供应商提供的一个可信的接入地址。你会在下一节中用到这个地址。")]),g._v(" "),A("h2",{attrs:{id:"设置-gaiad"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#设置-gaiad"}},[g._v("#")]),g._v(" 设置 "),A("code",[g._v("gaiad")])]),g._v(" "),A("p",[g._v("::: 提示")]),g._v(" "),A("p",[A("strong",[g._v("在开始设置 "),A("code",[g._v("gaiad")]),g._v("前，请确认你已经可以"),A("a",{attrs:{href:"#%E8%AE%BF%E9%97%AEcosmos-hub%E7%BD%91%E7%BB%9C"}},[g._v("访问Cosmos Hub网络")])]),g._v("\n:::")]),g._v(" "),A("p",[g._v("::: 警告")]),g._v(" "),A("p",[A("strong",[g._v("请确认您使用的"),A("code",[g._v("gaiad")]),g._v("是最新的稳定版本")]),g._v("\n:::")]),g._v(" "),A("p",[g._v("无论您是否在自己运行一个节点，"),A("code",[g._v("gaiad")]),g._v(" 都可以帮您实现与Cosmos Hub网络的交互。让我们来完成对它的配置。")]),g._v(" "),A("p",[g._v("您需要用下面的命令行完成对"),A("code",[g._v("gaiad")]),g._v("的配置：")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgY29uZmlnICZsdDtmbGFnJmd0OyAmbHQ7dmFsdWUmZ3Q7Cg=="}}),g._v(" "),A("p",[g._v("此命名允许您为每个参数设置缺省值。")]),g._v(" "),A("p",[g._v("首先，设置你想要访问的全节点的地址：")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgY29uZmlnIG5vZGUgJmx0O2hvc3QmZ3Q7OiZsdDtwb3J0CgovLyDmoLfkvos6IGdhaWFkIGNvbmZpZyBub2RlIGh0dHBzOi8vNzcuODcuMTA2LjMzOjI2NjU3Cg=="}}),g._v(" "),A("p",[g._v("如果你是自己运行全节点，可以使用 "),A("code",[g._v("tcp://localhost:26657")]),g._v(" 作为地址。")]),g._v(" "),A("p",[g._v("最后，让我们设置需要访问区块链的 "),A("code",[g._v("chain-id")])]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgY29uZmlnIGNoYWluLWlkIGdvcy02Cg=="}}),g._v(" "),A("h2",{attrs:{id:"状态查询"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#状态查询"}},[g._v("#")]),g._v(" 状态查询")]),g._v(" "),A("p",[g._v("::: 提示\n** 准备抵押ATOM通证和取回奖励前，需要先完成 "),A("a",{attrs:{href:"#%E8%AE%BE%E7%BD%AE-gaiad"}},[A("code",[g._v("gaiad")]),g._v(" 配置")]),g._v("**\n:::")]),g._v(" "),A("p",[A("code",[g._v("gaiad")]),g._v(" 可以帮助您获得所有区块链的相关信息， 比如账户余额，抵押通证数量，奖励，治理提案以及其他信息。下面是一组用于委托操作的命令")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Ci8vIOafpeivoui0puaIt+S9memineaIluiAheWFtuS7lui0puaIt+ebuOWFs+S/oeaBrwpnYWlhZCBxdWVyeSBhY2NvdW50CgoKLy8g5p+l6K+i6aqM6K+B5Lq65YiX6KGoCmdhaWFkIHF1ZXJ5IHN0YWtpbmcgdmFsaWRhdG9ycwoKCi8vIOafpeivouaMh+WumuWcsOWdgOeahOmqjOivgeS6uueahOS/oeaBryhlLmcuIGNvc21vc3ZhbG9wZXIxbjVwZXB2bWdzZmQzcDJ0cXFndnQ1MDVqdnltbXN0ZjZzOWd3MjcpCmdhaWFkIHF1ZXJ5IHN0YWtpbmcgdmFsaWRhdG9yICZsdDt2YWxpZGF0b3JBZGRyZXNzJmd0OwoKCi8v5p+l6K+i5oyH5a6a5Zyw5Z2A55qE6aqM6K+B5Lq655u45YWz55qE5omA5pyJ5aeU5omY5L+h5oGvIChlLmcuIGNvc21vczEwc25qdDhkbXByNW15MGg3NnhqNDh0eTgwdXp3aHJhcWFsdTRlZykKZ2FpYWQgcXVlcnkgc3Rha2luZyBkZWxlZ2F0aW9ucyAmbHQ7ZGVsZWdhdG9yQWRkcmVzcyZndDsKCi8vIOafpeivouS7juS4gOS4quaMh+WumuWcsOWdgOeahOWnlOaJmOS6uihlLmcuIGNvc21vczEwc25qdDhkbXByNW15MGg3NnhqNDh0eTgwdXp3aHJhcWFsdTRlZynlkozkuIDkuKrmjIflrprlnLDlnYDnmoTpqozor4HkurooZS5nLiBjb3Ntb3N2YWxvcGVyMW41cGVwdm1nc2ZkM3AydHFxZ3Z0NTA1anZ5bW1zdGY2czlndzI3KSDkuYvpl7TnmoTlp5TmiZjkuqTmmJMKZ2FpYWQgcXVlcnkgc3Rha2luZyBkZWxlZ2F0aW9uICZsdDtkZWxlZ2F0b3JBZGRyZXNzJmd0OyAmbHQ7dmFsaWRhdG9yQWRkcmVzcyZndDsKCi8vIOafpeivouS4gOS4quaMh+WumuWcsOWdgOeahOWnlOaJmOS6uihlLmcuIGNvc21vczEwc25qdDhkbXByNW15MGg3NnhqNDh0eTgwdXp3aHJhcWFsdTRlZynmiYDog73ojrflvpfnmoTlpZblirHmg4XlhrUKZ2FpYWQgcXVlcnkgZGlzdHJpYnV0aW9uIHJld2FyZHMgJmx0O2RlbGVnYXRvckFkZHJlc3MmZ3Q7IAoKLy8g5p+l6K+i5omA5pyJ546w5Zyo5q2j562J5b6F5oq15oq855qE5o+Q5qGICmdhaWFkIHF1ZXJ5IGdvdiBwcm9wb3NhbHMgLS1zdGF0dXMgZGVwb3NpdF9wZXJpb2QKCi8v5p+l6K+i5omA5pyJ546w5Zyo5q2j562J5b6F5oqV56Wo55qE5aGrCmdhaWFkIHF1ZXJ5IGdvdiBwcm9wb3NhbHMgLS1zdGF0dXMgdm90aW5nX3BlcmlvZAoKLy8g5p+l6K+i5LiA5Liq5oyH5a6acHJvcHNhbElE55qE5o+Q5qGI5L+h5oGvCmdhaWFkIHF1ZXJ5IGdvdiBwcm9wb3NhbCAmbHQ7cHJvcG9zYWxJRCZndDsK"}}),g._v(" "),A("p",[g._v("需要了解跟多的命令，只需要用：")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgcXVlcnkK"}}),g._v(" "),A("p",[g._v("对于每条命令，您都可以使用"),A("code",[g._v("-h")]),g._v(" 或 "),A("code",[g._v("--help")]),g._v(" 参数来获得更多的信息。")]),g._v(" "),A("h2",{attrs:{id:"发起交易"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#发起交易"}},[g._v("#")]),g._v(" 发起交易")]),g._v(" "),A("h3",{attrs:{id:"关于gas费和手续费"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#关于gas费和手续费"}},[g._v("#")]),g._v(" 关于gas费和手续费")]),g._v(" "),A("p",[g._v("Cosmos Hub网络上的交易在被执行时需要支付手续费。这个手续费是用于支付执行交易所需的gas。计算公式如下：")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZmVlcyA9IGdhcyAqIGdhc1ByaWNlcwo="}}),g._v(" "),A("p",[A("code",[g._v("gas")]),g._v(" 的多少取决于交易类型，不同的交易类型会收取不同的 "),A("code",[g._v("gas")]),g._v(" 。每个交易的 "),A("code",[g._v("gas")]),g._v(" 费是在实际执行过程中计算的，但我们可以通过设置 "),A("code",[g._v("gas")]),g._v(" 参数中的 "),A("code",[g._v("auto")]),g._v(" 值实现在交易前对 "),A("code",[g._v("gas")]),g._v(" 费的估算，但这只是一个粗略的估计，你可以通过 "),A("code",[g._v("--gas-adjustment")]),g._v(" (缺省值 "),A("code",[g._v("1.0")]),g._v(") 对预估的"),A("code",[g._v("gas")]),g._v(" 值进行调节，以确保为交易支付足够的"),A("code",[g._v("gas")]),g._v(" 。")]),g._v(" "),A("p",[A("code",[g._v("gasPrice")]),g._v(" 用于设置单位 "),A("code",[g._v("gas")]),g._v(" 的价格。每个验证人会设置一个最低gas价"),A("code",[g._v("min-gas-price")]),g._v(", 并只会将"),A("code",[g._v("gasPrice")]),g._v("大于"),A("code",[g._v("min-gas-price")]),g._v("的交易打包。")]),g._v(" "),A("p",[g._v("交易的"),A("code",[g._v("fees")]),g._v(" 是"),A("code",[g._v("gas")]),g._v(" 和 "),A("code",[g._v("gasPrice")]),g._v("的乘积。作为一个用户，你需要输入3个参数中至少2个， "),A("code",[g._v("gasPrice")]),g._v("/"),A("code",[g._v("fees")]),g._v("的值越大，您的交易就越有机会被打包执行。")]),g._v(" "),A("h3",{attrs:{id:"抵押atom通证-提取奖励"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#抵押atom通证-提取奖励"}},[g._v("#")]),g._v(" 抵押Atom通证 & 提取奖励")]),g._v(" "),A("p",[g._v("::: 提示\n"),A("strong",[g._v("在您抵押通证或取回奖励之前，您需要完成"),A("a",{attrs:{href:"#%E8%AE%BE%E7%BD%AE-gaiad"}},[A("code",[g._v("gaiad")]),g._v(" 设置")]),g._v(" 和 "),A("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E8%B4%A6%E6%88%B7"}},[g._v("创建账户")])]),g._v("\n:::")]),g._v(" "),A("p",[g._v("::: 警告\n"),A("strong",[g._v("在抵押通证前，请仔细阅读"),A("a",{attrs:{href:"https://cosmos.network/resources/delegators",target:"_blank",rel:"noopener noreferrer"}},[g._v("委托者常见问题"),A("OutboundLink")],1),g._v(" 并且理解其中的风险和责任")]),g._v("\n:::")]),g._v(" "),A("p",[g._v("::: 警告\n"),A("strong",[g._v("注意：执行以下命令需要在一台联网的计算机。用一个硬件钱包设备执行这些命令会更安全。关于离线交易过程请看"),A("a",{attrs:{href:"#%E4%BB%8E%E4%B8%80%E5%8F%B0%E7%A6%BB%E7%BA%BF%E7%94%B5%E8%84%91%E4%B8%8A%E7%AD%BE%E7%BD%B2%E4%BA%A4%E6%98%93"}},[g._v("这里")]),g._v(".")]),g._v("\n:::")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Ly8g5ZCR5oyH5a6a6aqM6K+B5Lq657uR5a6a5LiA5a6a5pWw6YeP55qEQXRvbemAmuivgQovLyDlj4LmlbDorr7lrprmoLfkvos6ICZsdDt2YWxpZGF0b3JBZGRyZXNzJmd0Oz1jb3Ntb3N2YWxvcGVyMTh0aGFta2huajl3ejhwYTRuaG5wOXJsZHByZ2FudDU3cGsybThzLCAmbHQ7YW1vdW50VG9Cb3VuZCZndDs9MTAwMDAwMDAwMDB1YXRvbSwgJmx0O2dhc1ByaWNlJmd0Oz0xMDAwdWF0b20KCmdhaWFkIHR4IHN0YWtpbmcgZGVsZWdhdGUgJmx0O3ZhbGlkYXRvckFkZHJlc3MmZ3Q7ICZsdDthbW91bnRUb0JvbmQmZ3Q7IC0tZnJvbSAmbHQ7ZGVsZWdhdG9yS2V5TmFtZSZndDsgLS1nYXMgYXV0byAtLWdhcy1wcmljZXMgJmx0O2dhc1ByaWNlJmd0OwoKCi8vIOaPkOWPluaJgOacieeahOWlluWKsQovLyDlj4LmlbDorr7lrprmoLfkvos6ICZsdDtnYXNQcmljZSZndDs9MTAwMHVhdG9tCgpnYWlhZCB0eCBkaXN0cmlidXRpb24gd2l0aGRyYXctYWxsLXJld2FyZHMgLS1mcm9tICZsdDtkZWxlZ2F0b3JLZXlOYW1lJmd0OyAtLWdhcyBhdXRvIC0tZ2FzLXByaWNlcyAmbHQ7Z2FzUHJpY2UmZ3Q7CgoKLy8g5ZCR5oyH5a6a6aqM6K+B5Lq655Sz6K+36Kej57uR5LiA5a6a5pWw6YeP55qEQXRvbemAmuivgQovLyDop6Pnu5HnmoTpgJror4HpnIDopoEz5ZGo5ZCO5omN6IO95a6M5YWo6Kej57uR5bm25Y+v5Lul5Lqk5piT77yMCi8vIOWPguaVsOiuvuWumuagt+S+izogJmx0O3ZhbGlkYXRvckFkZHJlc3MmZ3Q7PWNvc21vc3ZhbG9wZXIxOHRoYW1raG5qOXd6OHBhNG5obnA5cmxkcHJnYW50NTdwazJtOHMsICZsdDthbW91bnRUb1VuYm91bmQmZ3Q7PTEwMDAwMDAwMDAwdWF0b20sICZsdDtnYXNQcmljZSZndDs9MTAwMHVhdG9tCgpnYWlhZCB0eCBzdGFraW5nIHVuYm9uZCAmbHQ7dmFsaWRhdG9yQWRkcmVzcyZndDsgJmx0O2Ftb3VudFRvVW5ib25kJmd0OyAtLWZyb20gJmx0O2RlbGVnYXRvcktleU5hbWUmZ3Q7IC0tZ2FzIGF1dG8gLS1nYXMtcHJpY2VzICZsdDtnYXNQcmljZSZndDsK"}}),g._v(" "),A("p",[g._v("::: 提示\n:::\n如果您是使用一个联网的钱包设备，在交易被广播到网络前您需要在设备上确认交易。")]),g._v(" "),A("p",[g._v("确认您的交易已经发出，可以用以下查询：")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Ly8g5oKo55qE6LSm5oi35L2Z6aKd5Zyo5oKo5oq15oq8QXRvbemAmuivgeaIluiAheWPluWbnuWlluWKseWQjuS8muWPkeeUn+WPmOWMlgpnYWlhZCBxdWVyeSBhY2NvdW50CgovLyDmgqjlnKjmirXmirzlkI7lupTor6Xog73mn6XliLDlp5TmiZjkuqTmmJMKZ2FpYWQgcXVlcnkgc3Rha2luZyBkZWxlZ2F0aW9ucyAmbHQ7ZGVsZWdhdG9yQWRkcmVzcyZndDsKCi8vIOWmguaenOS6pOaYk+W3sue7j+iiq+aJk+WMhe+8jOWwhuS8mui/lOWbnuS6pOaYk+iusOW9le+8iHR477yJCi8vIOWcqOS7peS4i+afpeivouWRveS7pOS4reWPr+S7peS9v+eUqOaYvuekuueahOS6pOaYk+WTiOW4jOWAvOS9nOS4uuWPguaVsApnYWlhZCBxdWVyeSB0eCAmbHQ7dHhIYXNoJmd0OwoK"}}),g._v(" "),A("p",[g._v("如果您是连接到一个可信全节点的话，您可以通过一个区块链浏览器做检查。")]),g._v(" "),A("h2",{attrs:{id:"参与链上治理"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#参与链上治理"}},[g._v("#")]),g._v(" 参与链上治理")]),g._v(" "),A("h4",{attrs:{id:"链上治理入门"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#链上治理入门"}},[g._v("#")]),g._v(" 链上治理入门")]),g._v(" "),A("p",[g._v("Cosmos Hub有一个内建的治理系统，该系统允许抵押通证的持有人参与提案投票。系统现在支持3种提案类型：")]),g._v(" "),A("ul",[A("li",[A("code",[g._v("Text Proposals")]),g._v(": 这是最基本的一种提案类型，通常用于获得大家对某个网络治理意见的观点。")]),g._v(" "),A("li",[A("code",[g._v("Parameter Proposals")]),g._v(": 这种提案通常用于改变网络参数的设定。")]),g._v(" "),A("li",[A("code",[g._v("Software Upgrade Proposal")]),g._v(": 这个提案用于升级Hub的软件。")])]),g._v(" "),A("p",[g._v("任何Atom通证的持有人都能够提交一个提案。为了让一个提案获准公开投票，提议人必须要抵押一定量的通证 "),A("code",[g._v("deposit")]),g._v("，且抵押值必须大于 "),A("code",[g._v("minDeposit")]),g._v(" 参数设定值. 提案的抵押不需要提案人一次全部交付。如果早期提案人交付的 "),A("code",[g._v("deposit")]),g._v(" 不足，那么提案进入 "),A("code",[g._v("deposit_period")]),g._v(" 状态。 此后，任何通证持有人可以通过 "),A("code",[g._v("depositTx")]),g._v(" 交易增加对提案的抵押。")]),g._v(" "),A("p",[g._v("当"),A("code",[g._v("deposit")]),g._v(" 达到 "),A("code",[g._v("minDeposit")]),g._v("，提案进入2周的 "),A("code",[g._v("voting_period")]),g._v(" 。 任何"),A("strong",[g._v("抵押了通证")]),g._v("的持有人都可以参与对这个提案的投票。投票的选项有"),A("code",[g._v("Yes")]),g._v(", "),A("code",[g._v("No")]),g._v(", "),A("code",[g._v("NoWithVeto")]),g._v(" 和 "),A("code",[g._v("Abstain")]),g._v("。投票的权重取决于投票人所抵押的通证数量。如果通证持有人不投票，那么委托人将继承其委托的验证人的投票选项。当然，委托人也可以自己投出与所委托验证人不同的票。")]),g._v(" "),A("p",[g._v("当投票期结束后，获得50%（不包括投"),A("code",[g._v("Abstain")]),g._v("票）以上 "),A("code",[g._v("Yes")]),g._v(" 投票权重且少于33.33% 的"),A("code",[g._v("NoWithVeto")]),g._v("（不包括投"),A("code",[g._v("Abstain")]),g._v("票）提案将被接受，")]),g._v(" "),A("h4",{attrs:{id:"实践练习"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#实践练习"}},[g._v("#")]),g._v(" 实践练习")]),g._v(" "),A("p",[g._v("::: 提示\n"),A("strong",[g._v("在您能够抵押通证或者提取奖励以前，您需要了解"),A("a",{attrs:{href:"#%E6%8A%B5%E6%8A%BCatom%E9%80%9A%E8%AF%81--%E6%8F%90%E5%8F%96%E5%A5%96%E5%8A%B1"}},[g._v("通证抵押")])]),g._v("\n:::")]),g._v(" "),A("p",[g._v("::: 警告")]),g._v(" "),A("p",[A("strong",[g._v("注意：执行以下命令需要一台联网的计算机。用一个硬件钱包设备执行这些命令会更安全。关于离线交易过程请看"),A("a",{attrs:{href:"#%E4%BB%8E%E4%B8%80%E5%8F%B0%E7%A6%BB%E7%BA%BF%E7%94%B5%E8%84%91%E4%B8%8A%E7%AD%BE%E7%BD%B2%E4%BA%A4%E6%98%93"}},[g._v("这里")]),g._v(".")]),g._v("\n:::")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Ly8g5o+Q5Lqk5LiA5Liq5o+Q5qGICi8vICZsdDt0eXBlJmd0Oz10ZXh0L3BhcmFtZXRlcl9jaGFuZ2Uvc29mdHdhcmVfdXBncmFkZQovLyBleCB2YWx1ZSBmb3IgZmxhZzogJmx0O2dhc1ByaWNlJmd0Oz0xMDB1YXRvbQoKZ2FpYWQgdHggZ292IHN1Ym1pdC1wcm9wb3NhbCAtLXRpdGxlICZxdW90O1Rlc3QgUHJvcG9zYWwmcXVvdDsgLS1kZXNjcmlwdGlvbiAmcXVvdDtNeSBhd2Vzb21lIHByb3Bvc2FsJnF1b3Q7IC0tdHlwZSAmbHQ7dHlwZSZndDsgLS1kZXBvc2l0PTEwMDAwMDAwdWF0b20gLS1nYXMgYXV0byAtLWdhcy1wcmljZXMgJmx0O2dhc1ByaWNlJmd0OyAtLWZyb20gJmx0O2RlbGVnYXRvcktleU5hbWUmZ3Q7CgovLyDlop7liqDlr7nmj5DmoYjnmoTmirXmirwKLy8gUmV0cmlldmUgcHJvcG9zYWxJRCBmcm9tICRnYWlhZCBxdWVyeSBnb3YgcHJvcG9zYWxzIC0tc3RhdHVzIGRlcG9zaXRfcGVyaW9kCi8vIOmAmui/hyAkZ2FpYWQgcXVlcnkgZ292IHByb3Bvc2FscyAtLXN0YXR1cyBkZXBvc2l0X3BlcmlvZCDlkb3ku6TojrflvpcgYHByb3Bvc2FsSURgIAovLyDlj4LmlbDorr7lrprmoLfkvos6ICZsdDtkZXBvc2l0Jmd0Oz0xMDAwMDAwdWF0b20KCmdhaWFkIHR4IGdvdiBkZXBvc2l0ICZsdDtwcm9wb3NhbElEJmd0OyAmbHQ7ZGVwb3NpdCZndDsgLS1nYXMgYXV0byAtLWdhcy1wcmljZXMgJmx0O2dhc1ByaWNlJmd0OyAtLWZyb20gJmx0O2RlbGVnYXRvcktleU5hbWUmZ3Q7CgovLyDlr7nkuIDkuKrmj5DmoYjmipXnpagKLy8gUmV0cmlldmUgcHJvcG9zYWxJRCBmcm9tICRnYWlhZCBxdWVyeSBnb3YgcHJvcG9zYWxzIC0tc3RhdHVzIHZvdGluZ19wZXJpb2QgCumAmui/hyAkZ2FpYWQgcXVlcnkgZ292IHByb3Bvc2FscyAtLXN0YXR1cyBkZXBvc2l0X3BlcmlvZCDlkb3ku6TojrflvpcgYHByb3Bvc2FsSURgIAovLyAmbHQ7b3B0aW9uJmd0Oz15ZXMvbm8vbm9fd2l0aF92ZXRvL2Fic3RhaW4KCmdhaWFkIHR4IGdvdiB2b3RlICZsdDtwcm9wb3NhbElEJmd0OyAmbHQ7b3B0aW9uJmd0OyAtLWdhcyBhdXRvIC0tZ2FzLXByaWNlcyAmbHQ7Z2FzUHJpY2UmZ3Q7IC0tZnJvbSAmbHQ7ZGVsZWdhdG9yS2V5TmFtZSZndDsK"}}),g._v(" "),A("h3",{attrs:{id:"从一台离线电脑上签署交易"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#从一台离线电脑上签署交易"}},[g._v("#")]),g._v(" 从一台离线电脑上签署交易")]),g._v(" "),A("p",[g._v("如果你没有数字钱包设备，而且希望和一台存有私钥的没有联网的电脑进行交互，你可以使用如下过程。首先，在"),A("strong",[g._v("联网的电脑上")]),g._v("生成一个没有签名的交易，然后通过下列命令操作（下面以抵押交易为例）：")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Ly8g5oq15oq8QXRvbemAmuivgQovLyDlj4LmlbDorr7lrprmoLfkvos6ICZsdDthbW91bnRUb0JvdW5kJmd0Oz0xMDAwMDAwMDAwMHVhdG9tLCAmbHQ7YmVjaDMyQWRkcmVzc09mVmFsaWRhdG9yJmd0Oz1jb3Ntb3N2YWxvcGVyMTh0aGFta2huajl3ejhwYTRuaG5wOXJsZHByZ2FudDU3cGsybThzLCAmbHQ7Z2FzUHJpY2UmZ3Q7PTEwMDB1YXRvbQoKZ2FpYWQgdHggc3Rha2luZyBkZWxlZ2F0ZSAmbHQ7dmFsaWRhdG9yQWRkcmVzcyZndDsgJmx0O2Ftb3VudFRvQm9uZCZndDsgLS1mcm9tICZsdDtkZWxlZ2F0b3JLZXlOYW1lJmd0OyAtLWdhcyBhdXRvIC0tZ2FzLXByaWNlcyAmbHQ7Z2FzUHJpY2UmZ3Q7IC0tZ2VuZXJhdGUtb25seSAmZ3Q7IHVuc2lnbmVkVFguanNvbgo="}}),g._v(" "),A("p",[g._v("然后，复制 "),A("code",[g._v("unsignedTx.json")]),g._v(" 并且帮它转移到没有联网的电脑上（比如通过U盘）。如果没有在没联网的电脑上建立账户，可先"),A("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E7%94%B5%E8%84%91%E8%AE%BE%E5%A4%87%E8%BF%9B%E8%A1%8C%E6%93%8D%E4%BD%9C"}},[g._v("在没有联网的电脑上建立账户")]),g._v("。为了进一步保障安全，你可以在签署交易前用以下命令对参数进行检查。")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2F0IHVuc2lnbmVkVHguanNvbgo="}}),g._v(" "),A("p",[g._v("现在，通过以下命令对交易签名：")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggc2lnbiB1bnNpZ25lZFR4Lmpzb24gLS1mcm9tLWFkZHIgJmx0O2RlbGVnYXRvckFkZHImZ3Q7Jmd0OyBzaWduZWRUeC5qc29uCg=="}}),g._v(" "),A("p",[g._v("复制 "),A("code",[g._v("signedTx.json")]),g._v(" 并转移回联网的那台电脑。最后，用以下命令向网络广播交易。")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggYnJvYWRjYXN0IHNpZ25lZFR4Lmpzb24K"}})],1)}),[],!1,null,null,null);C.default=v.exports}}]);