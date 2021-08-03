//	HYPE.documents["trail_animals"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="trail_animals.hyperesources",f="trail_animals",g="trailanimals_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/trailanimals_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_728F||null!=window.HYPE_dtl_728F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-728.full.min.js":"HYPE-728.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_728"+c,"HYPE_dtl_728"+c,a,d),false==!0&&(a=a||k("HYPE_w_728","HYPE_wdtl_728","HYPE-728.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_728","HYPE-728.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"initGame",source:"function(hypeDocument, element, event) {\twindow.animals = [\n\t\t{name: 'bighorn_sheep', description: 'Bighorn sheep prints have straighter edges and are less pointed than a deer. They are more blocky and less shaped like a heart.'},\n\t\t{name: 'black_bear', description: 'Black bears have smaller front tracks and rear tracks. Their tracks will show five toes and you can sometimes see claw marks.'},\n\t\t{name: 'canyon_wren', description: 'Canyon Wren tracks are considered \u201cClassic Bird Tracks\u201d. They are very small and have three distinct toes.'},\n\t\t{name: 'chipmunk', description: 'Like most rodents, chipmunk tracks show four widely spread toes about the size of a penny.'},\n\t\t{name: 'great_basin_rattlesnake', description: 'Snake tracks can usually be seen in the sand, mud, dirt, and soil. It\u2019s tracks can be long and wavy or straight.'},\n\t\t{name: 'moose', description: 'Moose tracks are 5 to 7 inches large. They have two toes that curve together into a point forming almost a heart shape print.'},\n\t\t{name: 'mountain_lion', description: 'Mountain lion footprints are 3 to 4 inches and are generally round with four toes, normally without claws.'},\n\t\t{name: 'mule_deer', description: 'Mule deer tracks look like upside-down hearts with the rounded bottom. Usually the outside toe is slightly larger than the inside toe.'},\n\t\t{name: 'sagebrush_lizard', description: 'Lizard tracks can be tricky to spot. They have long tail drags with blurry feet marks on either side.'}\n\n\t];\n\twindow.currentAnimalIndex = 0;\n}",identifier:"51"},{name:"setupRound",source:"function(hypeDocument, element, event) {\tconst seen = [window.currentAnimalIndex];\n\tconst getRandomInt = (max) => {\n\t\tdo {\n\t\t\tconst randomInt = Math.floor(Math.random() * max);\n\t\t\tif (seen.includes(randomInt)) {\n\t\t\t\tcontinue;\n\t\t\t} else {\n\t\t\t\tseen.push(randomInt);\n\t\t\t\treturn randomInt;\n\t\t\t}\n\t\t} while(true);\n\t}\n\t\n\tconst intToString = (int) => {\n\t\tswitch(int) {\n\t\t\tcase 0: return 'one';\n\t\t\tcase 1: return 'two';\n\t\t\tcase 2: return 'three';\n\t\t\tcase 3: return 'four';\n\t\t}\n\t}\n\t\n\tconst timelineToReset = window.currentCorrectPosition + '_correct';\n\thypeDocument.pauseTimelineNamed(timelineToReset)\n\thypeDocument.goToTimeInTimelineNamed(0, timelineToReset)\n\n\t\n\tconst correctIndex = Math.floor(Math.random() * 4);\n\twindow.currentCorrectPosition = intToString(correctIndex);\n\n\tfor(let i = 0; i < 4; i++) {\n\t\tconst imageElement = hypeDocument.getElementById(intToString(i));\n\t\tlet animal;\n\t\tif(i === correctIndex) {\n\t\t\tanimal = window.animals[window.currentAnimalIndex];\n\t\t\t\n\t\t\tconst printsElement = hypeDocument.getElementById(\"prints\");\n\t\t\thypeDocument.setElementProperty(printsElement, 'background-image', \"trail_animals.hyperesources/\" + animal.name + \"_prints.svg\");\n\t\t\t\n\t\t\tconst descriptionElement = hypeDocument.getElementById('description');\n\t\t\tdescriptionElement.innerHTML = animal.description;\n\t\t} else {\n\t\t\tconst animalIndex = getRandomInt(window.animals.length);\n\t\t\tanimal = window.animals[animalIndex];\n\t\t}\n\t\thypeDocument.setElementProperty(imageElement, 'background-image', \"trail_animals.hyperesources/\" + animal.name + \".svg\");\n\t}\t\n}",identifier:"52"},{name:"untitledFunction",source:"function(hypeDocument, element, event) {\tconst position = element.getAttribute('position');\n\t\n\tif (position === window.currentCorrectPosition) {\t\t\n\t\twindow.currentAnimalIndex++;\n\t\thypeDocument.startTimelineNamed('correct', hypeDocument.kDirectionForward)\n\t\thypeDocument.startTimelineNamed(position + '_correct', hypeDocument.kDirectionForward)\n\t} else {\n\t\thypeDocument.startTimelineNamed('wrong', hypeDocument.kDirectionForward)\n\t}\n}",identifier:"57"},{name:"disableAnimalsPointerEvents",source:"function(hypeDocument, element, event) {\thypeDocument.getElementById(\"one\").style.pointerEvents = \"none\";\n\thypeDocument.getElementById(\"two\").style.pointerEvents = \"none\";\n\thypeDocument.getElementById(\"three\").style.pointerEvents = \"none\";\n\thypeDocument.getElementById(\"four\").style.pointerEvents = \"none\";\n\n}",identifier:"87"},{name:"enableAnimalsPointerEvents",source:"function(hypeDocument, element, event) {\n\thypeDocument.getElementById(\"one\").style.pointerEvents = \"auto\";\n\thypeDocument.getElementById(\"two\").style.pointerEvents = \"auto\";\n\thypeDocument.getElementById(\"three\").style.pointerEvents = \"auto\";\n\thypeDocument.getElementById(\"four\").style.pointerEvents = \"auto\";\n}",identifier:"88"},{name:"nextRound",source:"function(hypeDocument, element, event) {\tif ((window.currentAnimalIndex + 1) === window.animals.length) {\n\t\thypeDocument.showNextScene(hypeDocument.kSceneTransitionInstant);\n\t} else {\n\t\thypeDocument.startTimelineNamed('next_round', hypeDocument.kDirectionForward)\n\t\thypeDocument.startTimelineNamed(window.currentCorrectPosition + '_next_round', hypeDocument.kDirectionForward)\n\t}\n}",identifier:"100"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_728"+c](f,g,{"3":{p:1,n:"canyon_wren.svg",g:"23",t:"image/svg+xml"},"12":{p:1,n:"canyon_wren_prints.svg",g:"65",t:"image/svg+xml"},"21":{p:1,n:"PastedVector-6.svg",g:"103",t:"image/svg+xml"},"4":{p:1,n:"chipmunk.svg",g:"58",t:"image/svg+xml"},"30":{p:1,n:"PastedVector.svg",g:"112",t:"image/svg+xml"},"13":{p:1,n:"chipmunk_prints.svg",g:"66",t:"image/svg+xml"},"5":{p:1,n:"great_basin_rattlesnake.svg",g:"59",t:"image/svg+xml"},"22":{p:1,n:"PastedVector-5.svg",g:"104",t:"image/svg+xml"},"6":{p:1,n:"moose.svg",g:"60",t:"image/svg+xml"},"31":{p:1,n:"PastedVector-1.svg",g:"113",t:"image/svg+xml"},"14":{p:1,n:"great_basin_rattlesnake_prints.svg",g:"67",t:"image/svg+xml"},"7":{p:1,n:"mountain_lion.svg",g:"61",t:"image/svg+xml"},"23":{p:1,n:"PastedVector-11.svg",g:"105",t:"image/svg+xml"},"40":{p:1,n:"next-arrow.svg",g:"140",t:"image/svg+xml"},"32":{p:1,n:"PastedVector-7.svg",g:"114",t:"image/svg+xml"},"15":{p:1,n:"mountain_lion_prints.svg",g:"69",t:"image/svg+xml"},"8":{p:1,n:"mule_deer.svg",g:"25",t:"image/svg+xml"},"24":{p:1,n:"grass.svg",g:"106",t:"image/svg+xml"},"9":{p:1,n:"sagebrush_lizard.svg",g:"62",t:"image/svg+xml"},"33":{p:1,n:"NPS-Transparent-Logo__1598367821603.png",g:"115",o:true,t:"@1x"},"16":{p:1,n:"sagebrush_lizard_prints.svg",g:"71",t:"image/svg+xml"},"41":{p:1,n:"check%201.svg",g:"151",t:"image/svg+xml"},"25":{p:1,n:"PastedVector-13.svg",g:"107",t:"image/svg+xml"},"42":{p:1,n:"PastedVector-4.svg",g:"152",t:"image/svg+xml"},"34":{p:1,n:"NPS-Transparent-Logo__1598367821603_2x.png",g:"115",o:true,t:"@2x"},"17":{p:1,n:"moose_prints.svg",g:"74",t:"image/svg+xml"},"43":{p:1,n:"PastedVector-14.svg",g:"168",t:"image/svg+xml"},"26":{p:1,n:"PastedVector-2.svg",g:"108",t:"image/svg+xml"},"35":{p:1,n:"PastedVector-12.svg",g:"116",t:"image/svg+xml"},"18":{p:1,n:"mule_deer_prints.svg",g:"75",t:"image/svg+xml"},"44":{n:"FrutigerLTStd-Roman.woff"},"27":{p:1,n:"rocks.svg",g:"109",t:"image/svg+xml"},"36":{p:1,n:"welcome%20screen_2.svg",g:"137",t:"image/svg+xml"},"19":{p:1,n:"PastedVector-3.svg",g:"101",t:"image/svg+xml"},"45":{n:"FrutigerLTStd-Roman.woff2"},"28":{p:1,n:"PastedVector-8.svg",g:"110",t:"image/svg+xml"},"-1":{n:"PIE.htc"},"37":{p:1,n:"moose-1.svg",g:"138",t:"image/svg+xml"},"46":{n:"FrutigerLTStd-Bold.woff"},"29":{p:1,n:"PastedVector-9.svg",g:"111",t:"image/svg+xml"},"-2":{n:"blank.gif"},"38":{p:1,n:"latino.png",g:"139",o:true,t:"@1x"},"47":{n:"FrutigerLTStd-Bold.woff2"},"39":{p:1,n:"latino_2x.png",g:"139",o:true,t:"@2x"},"10":{p:1,n:"bighorn_sheep_prints.svg",g:"63",t:"image/svg+xml"},"0":{p:1,n:"bear_tracks.svg",g:"34",t:"image/svg+xml"},"1":{p:1,n:"bighorn_sheep.svg",g:"19",t:"image/svg+xml"},"11":{p:1,n:"black_bear_prints.svg",g:"64",t:"image/svg+xml"},"2":{p:1,n:"black_bear.svg",g:"21",t:"image/svg+xml"},"20":{p:1,n:"PastedVector-10.svg",g:"102",t:"image/svg+xml"}},l,["<style>\n@font-face {\n    font-family: 'Frutiger LT Std';\n    src: url('trail_animals.hyperesources/FrutigerLTStd-Bold.woff2') format('woff2'),\n        url('trail_animals.hyperesources/FrutigerLTStd-Bold.woff') format('woff');\n    font-weight: bold;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Frutiger LT Std';\n    src: url('trail_animals.hyperesources/FrutigerLTStd-Roman.woff2') format('woff2'),\n        url('trail_animals.hyperesources/FrutigerLTStd-Roman.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n</style>"],e,[{n:"title",o:"118",X:[0]},{n:"Untitled Scene",o:"142",X:[1]},{n:"Untitled Scene 2",o:"13",X:[2]},{n:"Untitled Scene 3",o:"154",X:[3]}],
[{o:"136",p:"600px",a:100,Y:428,Z:926,b:100,cA:false,c:"#CFECFF",L:[],bY:1,d:428,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:10,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:3.27,i:"a",e:9,s:-282,o:"206"},{f:"c",y:0,z:3.27,i:"b",e:15,s:2,o:"206"},{f:"c",y:0,z:0.18,i:"cR",e:0.8,s:1,o:"203"},{f:"c",y:0,z:0.18,i:"cQ",e:0.8,s:1,o:"203"},{f:"c",y:0,z:4,i:"a",e:222,s:582,o:"213"},{f:"c",y:0,z:4,i:"b",e:116,s:96,o:"213"},{f:"c",y:0,z:3.25,i:"a",e:-77,s:-319,o:"202"},{f:"c",y:0,z:3.25,i:"b",e:162,s:165,o:"202"},{f:"c",y:0.18,z:0.2,i:"cR",e:1,s:0.8,o:"203"},{f:"c",y:0.18,z:0.2,i:"cQ",e:1,s:0.8,o:"203"},{f:"c",y:1.08,z:0,i:"cR",e:1,s:1,o:"203"},{f:"c",y:1.08,z:0,i:"cQ",e:1,s:1,o:"203"},{f:"c",y:1.08,z:0.18,i:"cR",e:0.8,s:1,o:"203"},{f:"c",y:1.08,z:0.18,i:"cQ",e:0.8,s:1,o:"203"},{f:"c",y:1.26,z:0.19,i:"cR",e:1,s:0.8,o:"203"},{f:"c",y:1.26,z:0.19,i:"cQ",e:1,s:0.8,o:"203"},{f:"c",y:2.15,z:0,i:"cR",e:1,s:1,o:"203"},{f:"c",y:2.15,z:0,i:"cQ",e:1,s:1,o:"203"},{f:"c",y:2.15,z:0.18,i:"cR",e:0.8,s:1,o:"203"},{f:"c",y:2.15,z:0.18,i:"cQ",e:0.8,s:1,o:"203"},{f:"c",y:3.03,z:0.2,i:"cR",e:1,s:0.8,o:"203"},{f:"c",y:3.03,z:0.2,i:"cQ",e:1,s:0.8,o:"203"},{f:"c",y:3.23,z:0,i:"cR",e:1,s:1,o:"203"},{f:"c",y:3.23,z:0,i:"cQ",e:1,s:1,o:"203"},{f:"c",y:3.23,z:0.18,i:"cR",e:0.8,s:1,o:"203"},{f:"c",y:3.23,z:0.18,i:"cQ",e:0.8,s:1,o:"203"},{y:3.25,i:"b",s:162,z:0,o:"202",f:"c"},{y:3.25,i:"a",s:-77,z:0,o:"202",f:"c"},{y:3.27,i:"b",s:15,z:0,o:"206",f:"c"},{y:3.27,i:"a",s:9,z:0,o:"206",f:"c"},{y:4,i:"b",s:116,z:0,o:"213",f:"c"},{y:4,i:"a",s:222,z:0,o:"213",f:"c"},{f:"c",y:4.11,z:0.19,i:"cR",e:1,s:0.8,o:"203"},{f:"c",y:4.11,z:0.19,i:"cQ",e:1,s:0.8,o:"203"},{f:"c",y:5,z:0,i:"cR",e:1,s:1,o:"203"},{f:"c",y:5,z:0,i:"cQ",e:1,s:1,o:"203"},{f:"c",y:5,z:0.18,i:"cR",e:0.8,s:1,o:"203"},{f:"c",y:5,z:0.18,i:"cQ",e:0.8,s:1,o:"203"},{f:"c",y:5.18,z:0.2,i:"cR",e:1,s:0.8,o:"203"},{f:"c",y:5.18,z:0.2,i:"cQ",e:1,s:0.8,o:"203"},{f:"c",y:6.08,z:0,i:"cR",e:1,s:1,o:"203"},{f:"c",y:6.08,z:0,i:"cQ",e:1,s:1,o:"203"},{f:"c",y:6.08,z:0.18,i:"cR",e:0.8,s:1,o:"203"},{f:"c",y:6.08,z:0.18,i:"cQ",e:0.8,s:1,o:"203"},{f:"c",y:6.26,z:0.19,i:"cR",e:1,s:0.8,o:"203"},{f:"c",y:6.26,z:0.19,i:"cQ",e:1,s:0.8,o:"203"},{f:"c",y:7.15,z:0,i:"cR",e:1,s:1,o:"203"},{f:"c",y:7.15,z:0,i:"cQ",e:1,s:1,o:"203"},{f:"c",y:7.15,z:0.18,i:"cR",e:0.8,s:1,o:"203"},{f:"c",y:7.15,z:0.18,i:"cQ",e:0.8,s:1,o:"203"},{f:"c",y:8.03,z:0.2,i:"cR",e:1,s:0.8,o:"203"},{f:"c",y:8.03,z:0.2,i:"cQ",e:1,s:0.8,o:"203"},{f:"c",y:8.23,z:0,i:"cR",e:1,s:1,o:"203"},{f:"c",y:8.23,z:0,i:"cQ",e:1,s:1,o:"203"},{f:"c",y:8.23,z:0.18,i:"cR",e:0.8,s:1,o:"203"},{f:"c",y:8.23,z:0.18,i:"cQ",e:0.8,s:1,o:"203"},{f:"c",y:9.11,z:0.19,i:"cR",e:1,s:0.8,o:"203"},{f:"c",y:9.11,z:0.19,i:"cQ",e:1,s:0.8,o:"203"},{y:10,i:"cR",s:1,z:0,o:"203",f:"c"},{y:10,i:"cQ",s:1,z:0,o:"203",f:"c"}],f:30,b:[]}},bZ:180,O:["206","200","213","202","204","209","205","198","201","211","210","208","207","203","212","199"],n:"Untitled Layout","_":0,v:{"205":{h:"101",p:"no-repeat",x:"visible",a:177,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:10,b:286,dB:"img",d:118.62,k:"div",c:141.98,bD:"none"},"200":{h:"115",p:"no-repeat",x:"visible",a:156,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:8,b:69,dB:"img",d:144,k:"div",c:116,bD:"none"},"198":{h:"112",p:"no-repeat",x:"visible",a:333,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:12,b:290,dB:"img",d:129,k:"div",c:80,bD:"none"},"211":{h:"114",p:"no-repeat",x:"visible",a:214,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:15,b:415,dB:"img",d:123,k:"div",c:92,bD:"none"},"208":{h:"110",p:"no-repeat",x:"visible",a:309,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:16,b:435,dB:"img",d:129,k:"div",c:82,bD:"none"},"203":{h:"102",p:"no-repeat",x:"visible",a:35,q:"100% 100%",bS:45,j:"absolute",r:"inline",b:679,z:22,dB:"img",d:177.55,aA:{a:[{d:1.1,p:1,g:1,f:1}]},cQ:1,k:"div",c:377,aP:"pointer",cR:1,bD:"none"},"206":{w:"",h:"105",p:"no-repeat",x:"visible",a:-282,q:"100% 100%",b:2,j:"absolute",r:"inline",bS:45,z:6,dB:"img",d:100.9,k:"div",c:253.96,bD:"none"},"199":{h:"109",p:"no-repeat",x:"visible",a:205,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:19,b:815,dB:"img",d:155,k:"div",c:470,bD:"none"},"201":{h:"104",p:"no-repeat",x:"visible",a:36,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:13,b:424,dB:"img",d:151,k:"div",c:96,bD:"none"},"212":{w:"",h:"106",p:"no-repeat",x:"visible",a:-146,q:"100% 100%",b:695,j:"absolute",r:"inline",bS:45,z:18,dB:"img",d:245,k:"div",c:444,bD:"none"},"209":{h:"108",p:"no-repeat",x:"visible",a:130,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:9,b:275,dB:"img",d:135.05,k:"div",c:31.81,bD:"none"},"204":{h:"113",p:"no-repeat",x:"visible",a:29,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:7,b:266,dB:"img",d:143.52,k:"div",c:91,bD:"none"},"210":{h:"103",p:"no-repeat",x:"visible",a:135,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:14,b:431,dB:"img",d:137,k:"div",c:90,bD:"none"},"207":{h:"111",p:"no-repeat",x:"visible",a:95,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:17,b:609,dB:"img",d:55.85,k:"div",c:243.14,bD:"none"},"202":{h:"107",p:"no-repeat",x:"visible",a:-319,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:4,b:165,dB:"img",d:100.9,k:"div",c:253.96,bD:"none"},"213":{h:"116",p:"no-repeat",x:"visible",a:582,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:5,b:96,dB:"img",d:112.65,k:"div",c:243,bD:"none"}}},{o:"150",p:"600px",a:100,Y:428,Z:926,b:100,cA:false,c:"#FFF",L:[],bY:1,d:428,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:10,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:0.18,i:"cR",e:0.8,s:1,o:"216"},{f:"c",y:0,z:0.18,i:"cQ",e:0.8,s:1,o:"216"},{f:"c",y:0.18,z:0.2,i:"cR",e:1,s:0.8,o:"216"},{f:"c",y:0.18,z:0.2,i:"cQ",e:1,s:0.8,o:"216"},{f:"c",y:1.08,z:0,i:"cR",e:1,s:1,o:"216"},{f:"c",y:1.08,z:0,i:"cQ",e:1,s:1,o:"216"},{f:"c",y:1.08,z:0.18,i:"cR",e:0.8,s:1,o:"216"},{f:"c",y:1.08,z:0.18,i:"cQ",e:0.8,s:1,o:"216"},{f:"c",y:1.26,z:0.19,i:"cR",e:1,s:0.8,o:"216"},{f:"c",y:1.26,z:0.19,i:"cQ",e:1,s:0.8,o:"216"},{f:"c",y:2.15,z:0,i:"cR",e:1,s:1,o:"216"},{f:"c",y:2.15,z:0,i:"cQ",e:1,s:1,o:"216"},{f:"c",y:2.15,z:0.18,i:"cR",e:0.8,s:1,o:"216"},{f:"c",y:2.15,z:0.18,i:"cQ",e:0.8,s:1,o:"216"},{f:"c",y:3.03,z:0.2,i:"cR",e:1,s:0.8,o:"216"},{f:"c",y:3.03,z:0.2,i:"cQ",e:1,s:0.8,o:"216"},{f:"c",y:3.23,z:0,i:"cR",e:1,s:1,o:"216"},{f:"c",y:3.23,z:0,i:"cQ",e:1,s:1,o:"216"},{f:"c",y:3.23,z:0.18,i:"cR",e:0.8,s:1,o:"216"},{f:"c",y:3.23,z:0.18,i:"cQ",e:0.8,s:1,o:"216"},{f:"c",y:4.11,z:0.19,i:"cR",e:1,s:0.8,o:"216"},{f:"c",y:4.11,z:0.19,i:"cQ",e:1,s:0.8,o:"216"},{f:"c",y:5,z:0,i:"cR",e:1,s:1,o:"216"},{f:"c",y:5,z:0,i:"cQ",e:1,s:1,o:"216"},{f:"c",y:5,z:0.18,i:"cR",e:0.8,s:1,o:"216"},{f:"c",y:5,z:0.18,i:"cQ",e:0.8,s:1,o:"216"},{f:"c",y:5.18,z:0.2,i:"cR",e:1,s:0.8,o:"216"},{f:"c",y:5.18,z:0.2,i:"cQ",e:1,s:0.8,o:"216"},{f:"c",y:6.08,z:0,i:"cR",e:1,s:1,o:"216"},{f:"c",y:6.08,z:0,i:"cQ",e:1,s:1,o:"216"},{f:"c",y:6.08,z:0.18,i:"cR",e:0.8,s:1,o:"216"},{f:"c",y:6.08,z:0.18,i:"cQ",e:0.8,s:1,o:"216"},{f:"c",y:6.26,z:0.19,i:"cR",e:1,s:0.8,o:"216"},{f:"c",y:6.26,z:0.19,i:"cQ",e:1,s:0.8,o:"216"},{f:"c",y:7.15,z:0,i:"cR",e:1,s:1,o:"216"},{f:"c",y:7.15,z:0,i:"cQ",e:1,s:1,o:"216"},{f:"c",y:7.15,z:0.18,i:"cR",e:0.8,s:1,o:"216"},{f:"c",y:7.15,z:0.18,i:"cQ",e:0.8,s:1,o:"216"},{f:"c",y:8.03,z:0.2,i:"cR",e:1,s:0.8,o:"216"},{f:"c",y:8.03,z:0.2,i:"cQ",e:1,s:0.8,o:"216"},{f:"c",y:8.23,z:0,i:"cR",e:1,s:1,o:"216"},{f:"c",y:8.23,z:0,i:"cQ",e:1,s:1,o:"216"},{f:"c",y:8.23,z:0.18,i:"cR",e:0.8,s:1,o:"216"},{f:"c",y:8.23,z:0.18,i:"cQ",e:0.8,s:1,o:"216"},{f:"c",y:9.11,z:0.19,i:"cR",e:1,s:0.8,o:"216"},{f:"c",y:9.11,z:0.19,i:"cQ",e:1,s:0.8,o:"216"},{y:10,i:"cR",s:1,z:0,o:"216",f:"c"},{y:10,i:"cQ",s:1,z:0,o:"216",f:"c"}],f:30,b:[]}},bZ:180,O:["215","214","220","219","217","218","216"],n:"Untitled Layout","_":1,v:{"216":{h:"140",p:"no-repeat",x:"visible",a:331,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:8,b:822,dB:"img",d:62,aA:{a:[{d:1.1,p:1,g:1,f:1}]},cQ:1,k:"div",c:62,aP:"pointer",cR:1},"219":{aU:8,G:"#000",c:361,bS:45,aV:8,r:"inline",d:95,s:"'Frutiger LT Std'",t:18,Z:"break-word",w:"There are so many animals in this canyon. Each animal has their own unique footprint or \u201ctrack\u201d. Let\u2019s try to identify them!",bF:"220",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:9,F:"center",b:10},"215":{h:"137",p:"no-repeat",x:"visible",a:-65,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:2,bS:45,b:-6,d:933,k:"div",c:559},"218":{w:"",h:"139",p:"no-repeat",x:"visible",a:45,q:"100% 100%",b:407,j:"absolute",r:"inline",z:4,bS:45,dB:"img",d:482,k:"div",c:155},"214":{k:"div",aI:11,c:400,bS:45,d:121,I:"Solid",J:"Solid",gg:"0",K:"Solid",g:"#FFF",L:"Solid",M:0,bF:"220",N:0,j:"absolute",O:0,x:"visible",B:"#D8DDE4",P:0,A:"#D8DDE4",C:"#D8DDE4",z:1,Q:1,D:"#D8DDE4",R:"#C0C0C0",aK:11,aJ:11,S:1,a:0,aL:11,T:0,b:0},"217":{h:"138",p:"no-repeat",x:"visible",a:217,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:3,b:370,dB:"img",d:364,k:"div",aY:180,c:421},"220":{x:"visible",k:"div",c:400,d:121,z:5,a:17,bS:45,j:"absolute",b:144}}},{o:"15",p:"600px",a:100,Y:428,Z:926,b:100,cA:false,c:"#CEEBFF",L:[],bY:1,d:428,U:{},T:{"89":{q:false,z:1,i:"89",n:"one_correct",a:[{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"223"},{f:"c",y:0,z:1,i:"a",e:118,s:95,o:"222"},{f:"c",y:0,z:1,i:"b",e:4,s:8,o:"222"},{f:"c",y:0,z:1,i:"c",e:191,s:80,o:"222"},{f:"c",y:0,z:1,i:"d",e:184,s:80,o:"222"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"226"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"225"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"228"},{f:"c",y:0.15,z:0.15,i:"e",e:0.0000000000,s:1,o:"226"},{y:1,i:"e",s:0,z:0,o:"223",f:"c"},{y:1,i:"a",s:118,z:0,o:"222",f:"c"},{y:1,i:"b",s:4,z:0,o:"222",f:"c"},{y:1,i:"c",s:191,z:0,o:"222",f:"c"},{y:1,i:"d",s:184,z:0,o:"222",f:"c"},{y:1,i:"e",s:0,z:0,o:"226",f:"c"},{y:1,i:"e",s:0,z:0,o:"225",f:"c"},{y:1,i:"e",s:0,z:0,o:"228",f:"c"}],f:30,b:[]},"91":{q:false,z:1,i:"91",n:"three_correct",a:[{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"223"},{f:"c",y:0,z:1,i:"a",e:118,s:89,o:"228"},{f:"c",y:0,z:1,i:"b",e:4,s:104,o:"228"},{f:"c",y:0,z:1,i:"c",e:191,s:80,o:"228"},{f:"c",y:0,z:1,i:"d",e:184,s:80,o:"228"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"222"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"225"},{y:1,i:"e",s:0,z:0,o:"223",f:"c"},{y:1,i:"a",s:118,z:0,o:"228",f:"c"},{y:1,i:"b",s:4,z:0,o:"228",f:"c"},{y:1,i:"c",s:191,z:0,o:"228",f:"c"},{y:1,i:"d",s:184,z:0,o:"228",f:"c"},{y:1,i:"e",s:0,z:0,o:"222",f:"c"},{y:1,i:"e",s:0,z:0,o:"225",f:"c"}],f:30,b:[]},"96":{q:false,z:0.18,i:"96",n:"one_next_round",a:[{f:"c",y:0,z:0.15,i:"e",e:0,s:1,o:"222"},{f:"c",y:0.15,z:0.03,i:"e",e:1,s:0,o:"222"},{y:0.18,i:"e",s:1,z:0,o:"222",f:"c"}],f:30,b:[]},"86":{q:false,z:1,i:"86",n:"correct",a:[{f:"c",y:0,z:1,i:"b",e:735,s:926,o:"232"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:4,h:"87"}]},o:"86"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0.0000000000,o:"226"},{f:"c",y:0.15,z:0.15,i:"e",e:0,s:1,o:"226"},{y:1,i:"b",s:735,z:0,o:"232",f:"c"},{y:1,i:"e",s:0,z:0,o:"226",f:"c"}],f:30,b:[]},"92":{q:false,z:1,i:"92",n:"four_correct",a:[{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"222"},{f:"c",y:0,z:1,i:"a",e:118,s:259,o:"223"},{f:"c",y:0,z:1,i:"b",e:4,s:104,o:"223"},{f:"c",y:0,z:1,i:"c",e:191,s:80,o:"223"},{f:"c",y:0,z:1,i:"d",e:184,s:80,o:"223"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"225"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"228"},{y:1,i:"a",s:118,z:0,o:"223",f:"c"},{y:1,i:"b",s:4,z:0,o:"223",f:"c"},{y:1,i:"c",s:191,z:0,o:"223",f:"c"},{y:1,i:"d",s:184,z:0,o:"223",f:"c"},{y:1,i:"e",s:0,z:0,o:"222",f:"c"},{y:1,i:"e",s:0,z:0,o:"225",f:"c"},{y:1,i:"e",s:0,z:0,o:"228",f:"c"}],f:30,b:[]},"50":{q:false,z:1,i:"50",n:"next_round",a:[{f:"c",y:0,z:0.15,i:"e",e:0,s:1,o:"239"},{y:0,i:"b",s:0,z:0,o:"235",f:"c"},{y:0,i:"a",s:0,z:0,o:"235",f:"c"},{f:"c",y:0,z:1,i:"b",e:926,s:735,o:"232"},{f:"c",p:2,y:0.15,z:0.15,i:"ActionHandler",e:{a:[{p:4,h:"88"}]},s:{a:[{p:4,h:"52"}]},o:"50"},{f:"c",y:0.15,z:0.15,i:"e",e:1,s:0,o:"239"},{f:"c",p:2,y:1,z:0,i:"ActionHandler",s:{a:[{p:4,h:"88"}]},o:"50"},{y:1,i:"b",s:926,z:0,o:"232",f:"c"},{y:1,i:"e",s:1,z:0,o:"239",f:"c"}],f:30,b:[]},"97":{q:false,z:0.18,i:"97",n:"two_next_round",a:[{f:"c",y:0,z:0.15,i:"e",e:0,s:1,o:"225"},{f:"c",y:0.15,z:0.03,i:"e",e:1,s:0,o:"225"},{y:0.18,i:"e",s:1,z:0,o:"225",f:"c"}],f:30,b:[]},"98":{q:false,z:0.18,i:"98",n:"three_next_round",a:[{f:"c",y:0,z:0.15,i:"e",e:0,s:1,o:"228"},{f:"c",y:0.15,z:0.03,i:"e",e:1,s:0,o:"228"},{y:0.18,i:"e",s:1,z:0,o:"228",f:"c"}],f:30,b:[]},"77":{q:false,z:2,i:"77",n:"wrong",a:[{f:"c",p:2,y:0,z:2,i:"ActionHandler",e:{a:[{p:4,h:"88"}]},s:{a:[{p:4,h:"87"}]},o:"77"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"225"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"228"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"222"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"223"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"224"},{f:"c",y:0.15,z:1.15,i:"e",e:0,s:1,o:"224"},{f:"c",y:1,z:1,i:"e",e:1,s:0,o:"225"},{f:"c",y:1,z:1,i:"e",e:1,s:0,o:"228"},{f:"c",y:1,z:1,i:"e",e:1,s:0,o:"222"},{f:"c",y:1,z:1,i:"e",e:1,s:0,o:"223"},{f:"c",p:2,y:2,z:0,i:"ActionHandler",s:{a:[{p:4,h:"88"}]},o:"77"},{y:2,i:"e",s:1,z:0,o:"225",f:"c"},{y:2,i:"e",s:1,z:0,o:"228",f:"c"},{y:2,i:"e",s:1,z:0,o:"222",f:"c"},{y:2,i:"e",s:1,z:0,o:"223",f:"c"},{y:2,i:"e",s:0,z:0,o:"224",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0.02,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0.02,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:4,h:"51"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:0,z:0.02,i:"cY",e:"0",s:"0",o:"222"},{f:"c",y:0,z:0.02,i:"cY",e:"0",s:"0",o:"225"},{f:"c",y:0,z:0.02,i:"cY",e:"0",s:"0",o:"223"},{f:"c",y:0,z:0.02,i:"cY",e:"0",s:"0",o:"228"},{f:"c",y:0,z:0.02,i:"cY",e:"0",s:"1",o:"239"},{f:"c",p:2,y:0.02,z:0,i:"ActionHandler",s:{a:[{p:4,h:"52"}]},o:"kTimelineDefaultIdentifier"},{y:0.02,i:"cY",s:"0",z:0,o:"222",f:"c"},{y:0.02,i:"cY",s:"0",z:0,o:"225",f:"c"},{y:0.02,i:"cY",s:"0",z:0,o:"223",f:"c"},{y:0.02,i:"cY",s:"0",z:0,o:"228",f:"c"},{y:0.02,i:"cY",s:"0",z:0,o:"239",f:"c"}],f:30,b:[]},"99":{q:false,z:0.18,i:"99",n:"four_next_round",a:[{f:"c",y:0,z:0.15,i:"e",e:0,s:1,o:"223"},{f:"c",y:0.15,z:0.03,i:"e",e:1,s:0,o:"223"},{y:0.18,i:"e",s:1,z:0,o:"223",f:"c"}],f:30,b:[]},"90":{q:false,z:1,i:"90",n:"two_correct",a:[{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"223"},{f:"c",y:0,z:1,i:"a",e:118,s:260,o:"225"},{f:"c",y:0,z:1,i:"b",e:4,s:8,o:"225"},{f:"c",y:0,z:1,i:"c",e:191,s:80,o:"225"},{f:"c",y:0,z:1,i:"d",e:184,s:80,o:"225"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"222"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"228"},{y:1,i:"e",s:0,z:0,o:"223",f:"c"},{y:1,i:"a",s:118,z:0,o:"225",f:"c"},{y:1,i:"b",s:4,z:0,o:"225",f:"c"},{y:1,i:"c",s:191,z:0,o:"225",f:"c"},{y:1,i:"d",s:184,z:0,o:"225",f:"c"},{y:1,i:"e",s:0,z:0,o:"222",f:"c"},{y:1,i:"e",s:0,z:0,o:"228",f:"c"}],f:30,b:[]}},bZ:180,O:["227","221","222","225","226","224","228","223","237","238","239","235","232","230","229","233","231","234","236"],n:"Untitled Layout","_":2,v:{"222":{p:"no-repeat",c:80,q:"100% 100%",bS:45,d:80,r:"inline",cY:"0",e:1,bD:"none",aP:"pointer",h:"19",i:"one",bF:"221",dY:[["position","one"]],j:"absolute",x:"visible",aA:{a:[{p:4,h:"57"}]},k:"div",dB:"img",z:6,cN:"auto",a:95,b:8},"233":{aU:8,G:"#000",c:339,bS:45,aV:8,r:"inline",d:60,s:"'Frutiger LT Std'",bD:"none",t:18,Z:"break-word",i:"description",w:"Fact",bF:"232",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:36,F:"center",b:20},"236":{h:"168",p:"no-repeat",x:"visible",a:188,q:"100% 100%",b:139,j:"absolute",r:"inline",z:4,bF:"232",dB:"img",d:23,aA:{a:[{p:4,h:"100"}]},k:"div",c:52,aP:"pointer",bD:"none"},"225":{p:"no-repeat",c:80,q:"100% 100%",bS:45,d:80,r:"inline",cY:"0",e:1,bD:"none",aP:"pointer",h:"21",i:"two",bF:"221",dY:[["position","two"]],j:"absolute",x:"visible",aA:{a:[{p:4,h:"57"}]},k:"div",dB:"img",z:4,cN:"auto",a:260,b:8},"231":{aU:8,G:"#000",c:339,bS:45,aV:8,r:"inline",d:67,s:"Futura,Verdana,sans-serif",bD:"none",t:24,Z:"break-word",w:"Which animial to these tracks blong to?",bF:"229",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:37,F:"center",b:44},"239":{h:"34",p:"no-repeat",a:37,bS:45,q:"100% 100%",x:"visible",j:"absolute",cY:"1",bF:"237",r:"inline",b:60,d:184,z:2,dB:"img",e:1,i:"prints",k:"div",c:222,bD:"none"},"228":{p:"no-repeat",c:80,q:"100% 100%",bS:45,d:80,r:"inline",cY:"0",e:1,bD:"none",aP:"pointer",h:"23",i:"three",bF:"221",dY:[["position","three"]],j:"absolute",x:"visible",aA:{a:[{p:4,h:"57"}]},k:"div",dB:"img",z:5,cN:"auto",a:89,b:104},"223":{p:"no-repeat",c:80,q:"100% 100%",bS:45,d:80,r:"inline",cY:"0",e:1,bD:"none",aP:"pointer",h:"25",i:"four",bF:"221",dY:[["position","four"]],j:"absolute",x:"visible",aA:{a:[{p:4,h:"57"}]},k:"div",dB:"img",z:7,cN:"auto",a:259,b:104},"234":{b:131,z:3,K:"Solid",c:132,L:"Solid",d:29,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#2A491A",aU:6,P:1,bF:"232",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:24,F:"center",aA:{a:[{p:4,h:"100"}]},G:"#000",aP:"pointer",w:"<br>",x:"visible",I:"Solid",a:141,y:"preserve",J:"Solid"},"237":{bD:"none",x:"visible",k:"div",c:295,d:303,z:10,a:67,bS:45,j:"absolute",b:311},"226":{aU:8,G:"#0DBA0E",c:401,bS:45,aV:8,r:"inline",cY:"0",d:95,s:"Futura,Verdana,sans-serif",e:0.0000000000,bD:"none",t:48,Z:"break-word",v:"bold",w:"<font>Good Job</font>",bF:"221",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:5,F:"center",b:61},"232":{bD:"none",x:"visible",k:"div",c:428,d:191,z:13,a:0,bS:13,j:"absolute",b:926},"221":{bD:"none",x:"visible",k:"div",c:427,d:191,z:1,a:1,bS:37,j:"absolute",b:0},"229":{bD:"none",x:"visible",k:"div",c:428,d:191,z:11,a:0,bS:13,j:"absolute",b:735},"224":{aU:8,G:"#F30000",c:401,bS:45,aV:8,r:"inline",cY:"0",d:95,s:"Futura,Verdana,sans-serif",e:0,bD:"none",t:48,Z:"break-word",v:"bold",w:"<font color=\"#ff0000\">Try Again</font>",bF:"221",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:5,F:"center",b:61},"230":{c:426,bS:45,d:189,I:"Solid",J:"Solid",bD:"none",K:"Solid",f:180,g:"#FFF",L:"Solid",M:1,aY:0,bF:"229",N:1,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",P:1,O:1,C:"#D8DDE4",z:1,aJ:25,D:"#D8DDE4",k:"div",aI:25,a:0,b:0},"235":{c:426,bS:45,d:189,I:"Solid",J:"Solid",bD:"none",K:"Solid",f:180,g:"#FFF",L:"Solid",M:1,aY:0,bF:"232",N:1,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",P:1,O:1,C:"#D8DDE4",z:1,aJ:25,D:"#D8DDE4",k:"div",aI:25,a:0,b:0},"238":{b:30,z:1,K:"None",c:238,L:"None",d:244,gg:"1",M:0,bD:"none",N:0,bS:45,O:0,g:"#FFF",P:0,bF:"237",Q:2,R:"#D6D6D6",j:"absolute",S:1,k:"div",aI:"50%",T:0,aJ:"50%",aK:"50%",aL:"50%",A:"#F90000",B:"#F90000",C:"#F90000",D:"#F90000",x:"visible",I:"None",a:29,J:"None"},"227":{c:427,bS:45,d:191,I:"None",J:"None",gg:"1",bD:"none",K:"None",g:"#FFF",L:"None",M:0,bF:"221",N:0,j:"absolute",x:"visible",O:0,B:"#D8DDE4",P:0,A:"#D8DDE4",C:"#D8DDE4",z:1,Q:2,D:"#D8DDE4",R:"#919191",aJ:25,k:"div",S:2,a:0,aI:25,T:0,b:0}}},{o:"164",p:"600px",a:100,Y:428,Z:926,b:100,cA:false,c:"#CFECFF",L:[],bY:1,d:428,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]}},bZ:180,O:["247","244","240","242","241","243","245","246"],n:"Untitled Layout","_":3,v:{"242":{b:30,z:1,K:"None",c:238,L:"None",d:244,gg:"1",M:0,bD:"auto",N:0,bS:45,O:0,g:"#FFF",P:0,bF:"240",Q:2,R:"#D6D6D6",j:"absolute",S:1,k:"div",aI:"50%",T:0,aJ:"50%",aK:"50%",aL:"50%",A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",x:"visible",I:"None",a:29,J:"None"},"245":{b:807,z:8,K:"Solid",c:163,L:"Solid",d:33,aS:6,M:1,bD:"auto",N:1,aT:6,bS:45,O:1,g:"#2C491B",aU:6,P:1,dB:"button",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"1"}]},G:"#FFF",aP:"pointer",w:"<br>",x:"visible",I:"Solid",a:124,y:"preserve",J:"Solid"},"241":{w:"",h:"151",p:"no-repeat",x:"visible",a:40,q:"100% 100%",bS:45,j:"absolute",bF:"240",r:"inline",b:50,z:2,d:216,dB:"img",k:"div",c:216,bD:"auto"},"244":{aU:8,G:"#000",c:319,bS:45,aV:8,r:"inline",d:83,s:"'Frutiger LT Std'",bD:"auto",t:18,Y:38,Z:"break-word",w:"<span style=\"font-size: 36px;\">Great job! </span><br><font size=\"5\">You identified all the tracks!</font><br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:8,E:0.214286,aT:8,a:44,F:"center",b:66},"247":{c:427,bS:45,d:232,I:"None",J:"None",gg:"1",bD:"auto",K:"None",g:"#FFF",L:"None",M:0,N:0,aI:25,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:4,Q:2,D:"#D8DDE4",R:"#919191",aJ:25,k:"div",S:2,a:0,T:0,b:0},"240":{x:"visible",k:"div",c:295,d:303,z:1,a:67,bS:45,j:"absolute",b:311},"243":{c:426,bS:45,d:189,I:"Solid",J:"Solid",bD:"auto",K:"Solid",f:180,g:"#FFF",L:"Solid",M:1,aY:0,N:1,aI:25,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",P:1,O:1,C:"#D8DDE4",z:6,aJ:25,D:"#D8DDE4",k:"div",a:0,b:735},"246":{h:"152",p:"no-repeat",x:"visible",a:159,q:"100% 100%",bS:45,j:"absolute",r:"inline",z:9,b:816,dB:"img",d:29.92,aA:{a:[{d:1.1,p:1,g:1,f:2}]},k:"div",c:104.82,aP:"pointer",bD:"auto"}}}],{},h,{},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
