(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{706:function(a,e,t){"use strict";t.r(e);var s=t(1),o=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"instalacion-de-gaia"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instalacion-de-gaia"}},[a._v("#")]),a._v(" Instalación de Gaia")]),a._v(" "),t("p",[a._v("Esta guía le explicará como instalar los puntos de entrada "),t("code",[a._v("gaiad")]),a._v(" y "),t("code",[a._v("gaiad")]),a._v(" en su sistema. Con esto instalado en su servidor, puede participar en la red principal como un "),t("RouterLink",{attrs:{to:"/es/gaia-tutorials/join-mainnet.html"}},[a._v("Full Node")]),a._v(" o como un "),t("RouterLink",{attrs:{to:"/es/validators/validator-setup.html"}},[a._v("Validador")]),a._v(".")],1),a._v(" "),t("h2",{attrs:{id:"instalacion-de-go"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instalacion-de-go"}},[a._v("#")]),a._v(" Instalación de Go")]),a._v(" "),t("p",[a._v("Instale "),t("code",[a._v("Go")]),a._v(" siguiendo la "),t("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[a._v("documentación oficial"),t("OutboundLink")],1),a._v(".\nRecuerde establecer su variable de entorno en el "),t("code",[a._v("$PATH")]),a._v(" por ejemplo:")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgLXAgJEhPTUUvZ28vYmluCmVjaG8gJnF1b3Q7ZXhwb3J0IFBBVEg9JFBBVEg6JChnbyBlbnYgR09QQVRIKS9iaW4mcXVvdDsgJmd0OyZndDsgfi8uYmFzaF9wcm9maWxlCnNvdXJjZSB+Ly5iYXNoX3Byb2ZpbGUK"}}),a._v(" "),t("p",[a._v(":::consejo\n"),t("strong",[a._v("Go 1.14+")]),a._v(" es necesario para el SDK de Cosmos.\n:::")]),a._v(" "),t("h2",{attrs:{id:"instalacion-de-los-binarios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instalacion-de-los-binarios"}},[a._v("#")]),a._v(" Instalación de los binarios")]),a._v(" "),t("p",[a._v("Siguiente, instalemos la última versión de Gaia. Asegúrese de hacer "),t("code",[a._v("git checkout")]),a._v(" a la "),t("a",{attrs:{href:"https://github.com/cosmos/gaia/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("versión publicada"),t("OutboundLink")],1),a._v(" correcta.")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIC1iICZsdDtsYXRlc3QtcmVsZWFzZS10YWcmZ3Q7IGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvZ2FpYQpjZCBnYWlhICZhbXA7JmFtcDsgbWFrZSBpbnN0YWxsCg=="}}),a._v(" "),t("p",[a._v("Si este comando falla a causa del siguiente mensaje de error, es posible que ya haya establecido "),t("code",[a._v("LDFLAGS")]),a._v(" antes de ejecutar este paso.")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBnaXRodWIuY29tL2Nvc21vcy9nYWlhL2NtZC9nYWlhZApmbGFnIHByb3ZpZGVkIGJ1dCBub3QgZGVmaW5lZDogLUwKdXNhZ2U6IGxpbmsgW29wdGlvbnNdIG1haW4ubwouLi4KbWFrZTogKioqIFtpbnN0YWxsXSBFcnJvciAyCg=="}}),a._v(" "),t("p",[a._v("Elimine esta variable de entorno e inténtelo de nuevo.")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"TERGTEFHUz0mcXVvdDsmcXVvdDsgbWFrZSBpbnN0YWxsCg=="}}),a._v(" "),t("blockquote",[t("p",[t("em",[a._v("NOTA")]),a._v(": Si aún tiene problemas en este paso, por favor compruebe que tiene instalada la última versión estable de GO.")])]),a._v(" "),t("p",[a._v("Esto debería instalar los binarios de "),t("code",[a._v("gaiad")]),a._v("y "),t("code",[a._v("gaiad")]),a._v(". Verifique que todo esta OK:")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnYWlhZCB2ZXJzaW9uIC0tbG9uZwokIGdhaWFkIHZlcnNpb24gLS1sb25nCg=="}}),a._v(" "),t("p",[t("code",[a._v("gaiad")]),a._v(" por su parte, debería dar como resultado algo similar a:")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bmFtZTogZ2FpYQpzZXJ2ZXJfbmFtZTogZ2FpYWQKY2xpZW50X25hbWU6IGdhaWFkCnZlcnNpb246IDIuMC4zCmNvbW1pdDogMmY2NzgzZTI5OGYyNWZmNGUxMmNiODQ1NDk3NzcwNTNhYjg4NzQ5YQpidWlsZF90YWdzOiBuZXRnbyxsZWRnZXIKZ286IGdvIHZlcnNpb24gZ28xLjEyLjUgZGFyd2luL2FtZDY0Cg=="}}),a._v(" "),t("h3",{attrs:{id:"tags-para-la-construccion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tags-para-la-construccion"}},[a._v("#")]),a._v(" Tags para la construcción")]),a._v(" "),t("p",[a._v("Las etiquetas ("),t("em",[a._v("tags")]),a._v(") para la construcción indican opciones especiales que deben ser activadas en el binario.")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("Etiquetas Construcción")]),a._v(" "),t("th",[a._v("Descripción")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("netgo")]),a._v(" "),t("td",[a._v("La resolución del nombre usará código puro de Go")])]),a._v(" "),t("tr",[t("td",[a._v("ledger")]),a._v(" "),t("td",[a._v("Añade compatibilidad de dispositivos hardware (wallets físicas)")])])])]),a._v(" "),t("h3",{attrs:{id:"instalacion-de-los-binarios-via-snap-linux-solamente"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instalacion-de-los-binarios-via-snap-linux-solamente"}},[a._v("#")]),a._v(" Instalación de los binarios via snap (Linux solamente)")]),a._v(" "),t("p",[t("strong",[a._v("No use "),t("em",[a._v("snap")]),a._v(" en este momento para instalar los binarios para producción hasta que tengamos un sistema binario reproducible.")])]),a._v(" "),t("h2",{attrs:{id:"workflow-para-el-desarrollador"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workflow-para-el-desarrollador"}},[a._v("#")]),a._v(" Workflow para el desarrollador")]),a._v(" "),t("p",[a._v("Para probar cualquier cambio hecho en el SDK o Tendermint, se debe agregar una cláusula de "),t("code",[a._v("replace")]),a._v(" en "),t("code",[a._v("go.mod")]),a._v(" proporcionando la ruta de entrada correcta.")]),a._v(" "),t("ul",[t("li",[a._v("Realice los cambios apropiados")]),a._v(" "),t("li",[a._v("Añada "),t("code",[a._v("replace github.com/cosmos/cosmos-sdk => /ruta/a/clon/cosmos-sdk")]),a._v(" en "),t("code",[a._v("go.mod")])]),a._v(" "),t("li",[a._v("Ejecute "),t("code",[a._v("make clean install")]),a._v(" o "),t("code",[a._v("make clean build")])]),a._v(" "),t("li",[a._v("Compruebe sus cambios")])]),a._v(" "),t("h2",{attrs:{id:"siguiente"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#siguiente"}},[a._v("#")]),a._v(" Siguiente")]),a._v(" "),t("p",[a._v("Ahora puede unirse a la "),t("RouterLink",{attrs:{to:"/es/gaia-tutorials/join-mainnet.html"}},[a._v("red principal")]),a._v(", "),t("RouterLink",{attrs:{to:"/es/gaia-tutorials/join-testnet.html"}},[a._v("testnet")]),a._v(" o crear "),t("RouterLink",{attrs:{to:"/es/gaia-tutorials/deploy-testnet.html"}},[a._v("su propia testnet pública")])],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);