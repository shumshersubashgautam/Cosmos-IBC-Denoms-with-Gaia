(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{620:function(t,a,s){"use strict";s.r(a);var v=s(1),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"퍼블릭-테스트넷에서-밸리데이터-운영하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#퍼블릭-테스트넷에서-밸리데이터-운영하기"}},[t._v("#")]),t._v(" 퍼블릭 테스트넷에서 밸리데이터 운영하기")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("현재 테스트넷을 참가하는 방법은 "),s("a",{attrs:{href:"https://github.com/cosmos/testnets/tree/master/latest",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("testnet")]),t._v(" repo"),s("OutboundLink")],1),t._v("에 있습니다. 최신 테스트넷에 대한 정보를 확인하시려면 해당 링크를 확인해주세요.")])]),t._v(" "),s("p",[s("strong",[t._v("Note")]),t._v(": 이 문서는 "),s("strong",[t._v("퍼블릭 테스트넷")]),t._v(" 검증인들을 위해서만 작성되었습니다.")]),t._v(" "),s("p",[t._v("밸리데이터 노드를 세팅하기 전, "),s("RouterLink",{attrs:{to:"/ko/join-testnet.html"}},[t._v("풀노드 세팅")]),t._v(" 가이드를 먼저 확인해주세요.")],1),t._v(" "),s("h2",{attrs:{id:"밸리데이터란-무엇인가"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#밸리데이터란-무엇인가"}},[t._v("#")]),t._v(" 밸리데이터란 무엇인가?")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ko/validators/overview.html"}},[t._v("밸리데이터")]),t._v("는 블록체인의 투표를 통해서 새로운 블록은 생성하는 역할을 합니다. 만약 특정 밸리데이터가 오프라인이 되거나, 같은 블록높이에서 중복 사이닝을 한 경우 해당 밸리데이터의 지분은 삭감(슬래싱, slashing) 됩니다. 노드를 DDOS 공격에서 보호하고 높은 접근성을 유지하기 위해서는 "),s("RouterLink",{attrs:{to:"/ko/validators/validator-faq.html#how-can-validators-protect-themselves-from-denial-of-service-attacks"}},[t._v("센트리노드 아키텍쳐")]),t._v("에 대해서 읽어보세요.")],1),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("경고")]),t._v(" "),s("p",[t._v("코스모스 허브의 검증인이 되는 것을 검토하신다면, "),s("RouterLink",{attrs:{to:"/ko/validators/security.html"}},[t._v("보안에 대한 분석")]),t._v("을 사전에 하시기를 바랍니다.")],1)]),t._v(" "),s("p",[t._v("만약 "),s("RouterLink",{attrs:{to:"/ko/join-testnet.html"}},[t._v("풀노드")]),t._v("를 이미 운영중이시다면, 다음 항목을 건너뛰셔도 좋습니다.")],1),t._v(" "),s("h2",{attrs:{id:"밸리데이터-생성하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#밸리데이터-생성하기"}},[t._v("#")]),t._v(" 밸리데이터 생성하기")]),t._v(" "),s("p",[t._v("토큰 스테이킹을 통해 "),s("code",[t._v("cosmosvalconspub")]),t._v("로 새로운 밸리데이터를 생성할 수 있습니다. 본인의 밸리데이터 pubkey를 확인하기 위해서는 다음 명령어를 입력하세요:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdGVuZGVybWludCBzaG93LXZhbGlkYXRvcgo="}}),t._v(" "),s("p",[t._v("다음은 "),s("code",[t._v("gaiad gentx")]),t._v(" 명령을 입력하세요:")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("참고")]),t._v(" "),s("p",[t._v("보유하고 있는 "),s("code",[t._v("STAKE")]),t._v("이상을 이용하지 마십시오. 언제나 "),s("a",{attrs:{href:"https://faucet.cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Faucet"),s("OutboundLink")],1),t._v("을 통해서 추가 "),s("code",[t._v("STAKE")]),t._v("를 받으실 수 있습니다.")])]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggc3Rha2luZyBjcmVhdGUtdmFsaWRhdG9yIFwKICAtLWFtb3VudD01MDAwMDAwdWF0b20gXAogIC0tcHVia2V5PSQoZ2FpYWQgdGVuZGVybWludCBzaG93LXZhbGlkYXRvcikgXAogIC0tbW9uaWtlcj0mcXVvdDtjaG9vc2UgYSBtb25pa2VyJnF1b3Q7IFwKICAtLWNoYWluLWlkPSZsdDtjaGFpbl9pZCZndDsgXAogIC0tZnJvbT0mbHQ7a2V5X25hbWUmZ3Q7IFwKICAtLWNvbW1pc3Npb24tcmF0ZT0mcXVvdDswLjEwJnF1b3Q7IFwKICAtLWNvbW1pc3Npb24tbWF4LXJhdGU9JnF1b3Q7MC4yMCZxdW90OyBcCiAgLS1jb21taXNzaW9uLW1heC1jaGFuZ2UtcmF0ZT0mcXVvdDswLjAxJnF1b3Q7IAo="}}),t._v(" "),s("p",[s("strong",[t._v("참고")]),t._v(": 커미션 값을 설정하실 때, "),s("code",[t._v("commission-max-change-rate")]),t._v("는 기존 "),s("code",[t._v("commission-rate")]),t._v("에서의 "),s("em",[t._v("퍼센트 포인트")]),t._v(" 변경을 기준으로 측정됩니다. 예) 커미션이 1%에서 2%로 변경되는 것은 100% 상승되는 것이지만, 1%p 변경.")]),t._v(" "),s("p",[s("strong",[t._v("참고")]),t._v(": "),s("code",[t._v("consensus_pubkey")]),t._v(" 값이 지정되지 않은 경우, 기본적으로 "),s("code",[t._v("gaiad tendermint show-validator")]),t._v(" 의 값으로 설정됩니다. "),s("code",[t._v("key_name")]),t._v("은 트랙잭션을 서명할때 이용되는 프라이빗키의 명칭입니다.")]),t._v(" "),s("h2",{attrs:{id:"밸리데이터로써-제네시스-참가하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#밸리데이터로써-제네시스-참가하기"}},[t._v("#")]),t._v(" 밸리데이터로써 제네시스 참가하기")]),t._v(" "),s("p",[s("strong",[t._v("참고")]),t._v(": 이 문항은 제네시스 파일에 참가하려는 밸리데이터에게만 해당됩니다. 만약 검증을 하려는 체인이 이미 작동되고 있는 상태라면 이 항목을 건너뛰셔도 좋습니다.")]),t._v(" "),s("p",[t._v("밸리데이터로써 제네시스에 참가하고 싶으시다면 우선 본인(또는 위임자)가 stake를 보유하고 있다는 것을 증명해야 합니다. 스테이크를 검증인에게 본딩하는 하나 이상의 트랜잭션을 발생하신 후, 해당 트랜잭션을 제네시스 파일에 추가하시기 바랍니다.")]),t._v(" "),s("p",[t._v("이런 경우에는 "),s("code",[t._v("gentx")]),t._v("를 생성하셔야 합니다:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZ2VudHggXAogIC0tYW1vdW50ICZsdDthbW91bnRfb2ZfZGVsZWdhdGlvbiZndDsgXAogIC0tY29tbWlzc2lvbi1yYXRlICZsdDtjb21taXNzaW9uX3JhdGUmZ3Q7IFwKICAtLWNvbW1pc3Npb24tbWF4LXJhdGUgJmx0O2NvbW1pc3Npb25fbWF4X3JhdGUmZ3Q7IFwKICAtLWNvbW1pc3Npb24tbWF4LWNoYW5nZS1yYXRlICZsdDtjb21taXNzaW9uX21heF9jaGFuZ2VfcmF0ZSZndDsgXAogIC0tcHVia2V5ICZsdDtjb25zZW5zdXNfcHVia2V5Jmd0OyBcCiAgLS1uYW1lICZsdDtrZXlfbmFtZSZndDsK"}}),t._v(" "),s("p",[s("strong",[t._v("참고")]),t._v(": 이 명령어는 제네시스에서의 처리를 위해 "),s("code",[t._v("gentx")]),t._v("를 "),s("code",[t._v("~/.gaia/config/gentx")]),t._v("에 저장합니다.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("명령어 플래그에 대한 정보는 "),s("code",[t._v("gaiad gentx --help")]),t._v("를 사용에 확인하십시오.")])]),t._v(" "),s("p",[s("code",[t._v("gentx")]),t._v("는 자체위임 정보가 포함된 JSON 파일입니다. 모든 제네시스 트랜잭셕은 "),s("code",[t._v("genesis coordinator")]),t._v("에 의하여 모아진 후 최초 "),s("code",[t._v("genesis.json")]),t._v("파일과 대치하여 검증합니다. 최초 "),s("code",[t._v("genesis.json")]),t._v("에는 계정 리스트와 각 계정이 보유하고 있는 코인 정보가 포함되어있습니다. 트랜잭션이 처리되었다면 해당 정보는 "),s("code",[t._v("genesis.json")]),t._v("의 "),s("code",[t._v("gentx")]),t._v(" 항목에 머지(merge)됩니다.")]),t._v(" "),s("h3",{attrs:{id:"제네시스-파일-복사-제네시스-트랜잭션-처리하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#제네시스-파일-복사-제네시스-트랜잭션-처리하기"}},[t._v("#")]),t._v(" 제네시스 파일 복사, 제네시스 트랜잭션 처리하기")]),t._v(" "),s("p",[t._v("우선 "),s("code",[t._v("genesis.json")]),t._v("파일을 "),s("code",[t._v("gaiad")]),t._v("의 config 디렉토리로 가져옵니다.")]),t._v(" "),s("p",[t._v("Fetch the "),s("code",[t._v("genesis.json")]),t._v(" file into "),s("code",[t._v("gaiad")]),t._v("'s config directory.")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgLXAgJEhPTUUvLmdhaWEvY29uZmlnCmN1cmwgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Nvc21vcy90ZXN0bmV0cy9tYXN0ZXIvbGF0ZXN0L2dlbmVzaXMuanNvbiAmZ3Q7ICRIT01FLy5nYWlhL2NvbmZpZy9nZW5lc2lzLmpzb24K"}}),t._v(" "),s("p",[s("strong",[t._v("참고:")]),t._v(" 이 항목에서는 최신 테스트넷 관련 정보가 있는 "),s("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("테스트넷 repo"),s("OutboundLink")],1),t._v("의 "),s("code",[t._v("latest")]),t._v(" 디렉토리를 사용합니다. 만약 다른 테스트넷에 연결하신다면 이용하시는 파일을 확인하시기 바랍니다.")]),t._v(" "),s("p",[t._v("이제 다른 제네시스 밸리데이터들의 제네시스 트랜잭션을 가져옵니다. 현재 밸리데이터들이 본인들의 제네시스 트랜잭션을 제공할 수 있는 리포지토리가 없는 상태이나, 추후 테스트넷에서 검증 후 추가될 예정입니다.")]),t._v(" "),s("p",[t._v("모든 제네시스 트랜잭션을 받으시고 "),s("code",[t._v("~/.gaia/config/gentx")]),t._v("에 저장하셨다면 다음 명령어를 실행하십시오:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgY29sbGVjdC1nZW50eHMK"}}),t._v(" "),s("p",[s("strong",[t._v("참고:")]),t._v(" "),s("code",[t._v("gentx")]),t._v("에서 위임을 하는 계정에 스테이크(stake) 토큰이 있는 것을 확인하세요. 만약 해당 계정에 토큰이 없다면 "),s("code",[t._v("collect-gentx")]),t._v("가 실패하게 됩니다.")]),t._v(" "),s("p",[t._v("이전에 실행하신 명령어는 모든 제네시스 트랜잭션을 모으고 "),s("code",[t._v("genesis.json")]),t._v("을 파이널라이즈(finalize)합니다. 설정이 올바르게 되었는지 확인하기 위해서는 노드를 시작하십시오:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),t._v(" "),s("h2",{attrs:{id:"검증인-설명-수정하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#검증인-설명-수정하기"}},[t._v("#")]),t._v(" 검증인 설명 수정하기")]),t._v(" "),s("p",[t._v("검증인의 공개 설명 문구와 정보는 수정이 가능합니다. 이 정보는 위임자들이 어떤 검증인에게 위임을 할지 결정할때 이용될 수 있습니다. 각 플래그에 대해서 정보를 꼭 입력하시기 바랍니다. 만약 비어있는 항목이 있다면 해당 값은 빈 상태로 유지됩니다 ("),s("code",[t._v("--moniker")]),t._v("의 경우 머신 이름 값이 사용됩니다).")]),t._v(" "),s("p",[s("code",[t._v("--identity")]),t._v(" 값은 Keybase 또는 UPort 같은 시스템을 이용해서 신분(identity)를 검증하는데 이용될 수 있습니다. Keybase를 사용하시는 경우 "),s("code",[t._v("--identity")]),t._v("는 "),s("a",{attrs:{href:"https://keybase.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("keybase.io"),s("OutboundLink")],1),t._v(" 계정으로 생성하신 16자리 string 값이 입력되어야 합니다. 이런 절차는 다수의 온라인 네트워크에서 본인의 신분을 증명하는데 이용될 수 있습니다. 또한 Keybase API를 이용해서 Keybase 아바타를 가져와 밸리데이터 프로파일에 이용하실 수 있습니다.")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggc3Rha2luZyBlZGl0LXZhbGlkYXRvcgogIC0tbW9uaWtlcj0mcXVvdDtjaG9vc2UgYSBtb25pa2VyJnF1b3Q7IFwKICAtLXdlYnNpdGU9JnF1b3Q7aHR0cHM6Ly9jb3Ntb3MubmV0d29yayZxdW90OyBcCiAgLS1pZGVudGl0eT02QTBENjVFMjlBNENCQzhFIFwKICAtLWRldGFpbHM9JnF1b3Q7VG8gaW5maW5pdHkgYW5kIGJleW9uZCEmcXVvdDsgXAogIC0tY2hhaW4taWQ9Jmx0O2NoYWluX2lkJmd0OyBcCiAgLS1mcm9tPSZsdDtrZXlfbmFtZSZndDsgXAogIC0tY29tbWlzc2lvbi1yYXRlPSZxdW90OzAuMTAmcXVvdDsK"}}),t._v(" "),s("p",[s("strong",[t._v("참고")]),t._v(": "),s("code",[t._v("commission-rate")]),t._v(" 값은 다음의 규칙을 따라야 합니다:")]),t._v(" "),s("ul",[s("li",[t._v("0 과 "),s("code",[t._v("commission-max-rate")]),t._v(" 값의 사이")]),t._v(" "),s("li",[t._v("검증인의 "),s("code",[t._v("commission-max-change-rate")]),t._v(" 값을 초과할 수 없습니다. "),s("code",[t._v("commission-max-change-rate")]),t._v("는 하루에 최대 커미션 값을 변경할 수 있는 한도입니다. 밸리데이터는 하루에 한번 "),s("code",[t._v("commission-max-change-rate")]),t._v("의 한도 안에서만 커미션을 변경할 수 있습니다.")])]),t._v(" "),s("h2",{attrs:{id:"밸리데이터-설명-확인하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#밸리데이터-설명-확인하기"}},[t._v("#")]),t._v(" 밸리데이터 설명 확인하기")]),t._v(" "),s("p",[t._v("검증인의 정보는 다음 명령어로 확인이 가능합니다:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgcXVlcnkgc3Rha2luZyB2YWxpZGF0b3IgJmx0O2FjY291bnRfY29zbW9zJmd0Owo="}}),t._v(" "),s("h2",{attrs:{id:"밸리데이터-서명-정보-추적하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#밸리데이터-서명-정보-추적하기"}},[t._v("#")]),t._v(" 밸리데이터 서명 정보 추적하기")]),t._v(" "),s("p",[t._v("특정 검증인의 과거 서명 정보를 확인하기 위해서는 "),s("code",[t._v("signing-info")]),t._v(" 명령어를 이용하실 수 있습니다:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgcXVlcnkgc2xhc2hpbmcgc2lnbmluZy1pbmZvICZsdDt2YWxpZGF0b3ItcHVia2V5Jmd0O1wKICAtLWNoYWluLWlkPSZsdDtjaGFpbl9pZCZndDsK"}}),t._v(" "),s("h2",{attrs:{id:"밸리데이터-석방-unjail-하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#밸리데이터-석방-unjail-하기"}},[t._v("#")]),t._v(" 밸리데이터 석방(Unjail)하기")]),t._v(" "),s("p",[t._v("특정 검증인이 과도한 다운타임으로 '구속(jailed)' 상태로 전환되면 운영자의 계정에서 '석방(unjail)' 요청 트랜잭션을 전송해야만 다시 블록 생성 리워드를 받을 수 있습니다(각 존의 리워드 분배 정책에 따라 다를 수 있음).")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggc2xhc2hpbmcgdW5qYWlsIFwKCS0tZnJvbT0mbHQ7a2V5X25hbWUmZ3Q7IFwKCS0tY2hhaW4taWQ9Jmx0O2NoYWluX2lkJmd0Owo="}}),t._v(" "),s("h2",{attrs:{id:"밸리데이터-작동상태-확인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#밸리데이터-작동상태-확인"}},[t._v("#")]),t._v(" 밸리데이터 작동상태 확인")]),t._v(" "),s("p",[t._v("다음 명령어가 반응을 준다면 당신의 밸리데이터는 작동하고 있습니다:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgcXVlcnkgdGVuZGVybWludC12YWxpZGF0b3Itc2V0IHwgZ3JlcCAmcXVvdDskKGdhaWFkIHRlbmRlcm1pbnQgc2hvdy12YWxpZGF0b3IpJnF1b3Q7Cg=="}}),t._v(" "),s("p",[t._v("코스모스 테스트넷의 경우 코스모스 "),s("a",{attrs:{href:"https://explorecosmos.network/validators",target:"_blank",rel:"noopener noreferrer"}},[t._v("익스플로러"),s("OutboundLink")],1),t._v("를 통해서 밸리데이터가 운영되고 있는지 확인하실 수 있습니다. "),s("code",[t._v("~/.gaia/config/priv_validator.json")]),t._v(" 파일의 "),s("code",[t._v("bech32")]),t._v(" 인코딩이된 "),s("code",[t._v("address")]),t._v(" 항목을 참고하세요.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("참고")]),t._v(" "),s("p",[t._v("검증인 세트에 포함되시기 원하신다면 125등 밸리데이터보다 보팅 파워(voting power)가 높아야 합니다.")])]),t._v(" "),s("h2",{attrs:{id:"흔히-발생하는-문제들"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#흔히-발생하는-문제들"}},[t._v("#")]),t._v(" 흔히 발생하는 문제들")]),t._v(" "),s("h3",{attrs:{id:"문제-1-내-검증인의-보팅-파워가-0-입니다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#문제-1-내-검증인의-보팅-파워가-0-입니다"}},[t._v("#")]),t._v(" 문제 #1: 내 검증인의 보팅 파워가 0 입니다")]),t._v(" "),s("p",[t._v("밸리데이터가 자동 언본딩 되었습니다. "),s("code",[t._v("gaia-8000")]),t._v("의 경우, 100개 블록 중 50개의 블록에 투표하지 않을 경우 언본딩 됩니다. 블록은 대략 ~2초 마다 생성되기 때문에 ~100초 이상 비활성화 상태를 유지하는 밸리데이터는 언본딩 될 수 있습니다. 가장 흔한 이유는 "),s("code",[t._v("gaiad")]),t._v(" 프로세스가 멈춘 경우입니다.")]),t._v(" "),s("p",[t._v("보팅 파워를 다시 밸리데이터에게 되돌리기 위해서, 우선 "),s("code",[t._v("gaiad")]),t._v("가 실행되고 있는지 확인하십시오. 만약 실행되고 있지 않은 경우 다음 명령어를 실행하십시오:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),t._v(" "),s("p",[t._v("당신의 풀노드가 최신 블록높이에 싱크될때까지 기다리십시오. 이후, 다음 명령어를 실행하십시오. 참고로 "),s("code",[t._v("<cosmos>")]),t._v(" 항목은 밸리데이터 계정의 주소이며, "),s("code",[t._v("<name>")]),t._v("은 밸리데이터 계정의 이름입니다. 해당 정보는 "),s("code",[t._v("gaiad keys list")]),t._v(" 명령어를 통해 확인하실 수 있습니다.")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggc2xhc2hpbmcgdW5qYWlsICZsdDtjb3Ntb3MmZ3Q7IC0tY2hhaW4taWQ9Jmx0O2NoYWluX2lkJmd0OyAtLWZyb209Jmx0O2Zyb20mZ3Q7Cg=="}}),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("경고")]),t._v(" "),s("p",[s("code",[t._v("gaiad")]),t._v("가 싱크되지 않은 상태에서 "),s("code",[t._v("unjail")]),t._v(" 명령을 실행하실 경우, 검증인이 아직 '구속' 상태라는 메시지를 받게 됩니다.")])]),t._v(" "),s("p",[t._v("마지막으로 밸리데이터의 보팅파워가 복구 되었는지 확인하십시오.")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhdHVzCg=="}}),t._v(" "),s("p",[t._v("만약 보팅 파워가 예전보다 감소되었다면 다운타임에 대한 슬래싱이 이유일 수 있습니다.")]),t._v(" "),s("h3",{attrs:{id:"문제-2-too-many-open-files때문에-gaiad가-강제-종료됩니다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#문제-2-too-many-open-files때문에-gaiad가-강제-종료됩니다"}},[t._v("#")]),t._v(" 문제 #2: "),s("code",[t._v("too many open files")]),t._v("때문에 "),s("code",[t._v("gaiad")]),t._v("가 강제 종료됩니다")]),t._v(" "),s("p",[t._v("리눅스가 각 프로세스당 열 수 있는는 파일 수는 최대 "),s("code",[t._v("1024")]),t._v("개입니다. "),s("code",[t._v("gaiad")]),t._v("는 1024개 이상의 열게될 수 있음으로 프로세스가 중단될 수 있습니다. 가장 간편한 해결책은 "),s("code",[t._v("ulimit -n 4096")]),t._v(" (열 수 있는 최대 파일 수)명령어를 입력하고 프로세스를 "),s("code",[t._v("gaiad start")]),t._v("로 재시작하는 것입니다. 만약 "),s("code",[t._v("systemd")]),t._v(" 또는 다른 프로세스 매니저로 "),s("code",[t._v("gaiad")]),t._v("를 실행하신다면 해당 레벨에서 몇가지 설정을 해야합니다. 문제 해결 샘플 "),s("code",[t._v("systemd")]),t._v(" 파일은 다음과 같습니다:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyAvZXRjL3N5c3RlbWQvc3lzdGVtL2dhaWFkLnNlcnZpY2UKW1VuaXRdCkRlc2NyaXB0aW9uPUNvc21vcyBHYWlhIE5vZGUKQWZ0ZXI9bmV0d29yay50YXJnZXQKCltTZXJ2aWNlXQpUeXBlPXNpbXBsZQpVc2VyPXVidW50dQpXb3JraW5nRGlyZWN0b3J5PS9ob21lL3VidW50dQpFeGVjU3RhcnQ9L2hvbWUvdWJ1bnR1L2dvL2Jpbi9nYWlhZCBzdGFydApSZXN0YXJ0PW9uLWZhaWx1cmUKUmVzdGFydFNlYz0zCkxpbWl0Tk9GSUxFPTQwOTYKCltJbnN0YWxsXQpXYW50ZWRCeT1tdWx0aS11c2VyLnRhcmdldAo="}})],1)}),[],!1,null,null,null);a.default=e.exports}}]);