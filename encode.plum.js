javascript:(function(){
    const _0x2ec60e=_0x240a;(function(_0x127881,_0x8f553c){const _0xb6a118=_0x240a,_0x32592a=_0x127881();while(!![]){try{const _0x2be1f2=parseInt(_0xb6a118(0x8c))/0x1+-parseInt(_0xb6a118(0x9a))/0x2*(-parseInt(_0xb6a118(0x91))/0x3)+-parseInt(_0xb6a118(0x7b))/0x4*(parseInt(_0xb6a118(0x86))/0x5)+parseInt(_0xb6a118(0x7e))/0x6+-parseInt(_0xb6a118(0x9b))/0x7+-parseInt(_0xb6a118(0x8f))/0x8*(-parseInt(_0xb6a118(0x8d))/0x9)+parseInt(_0xb6a118(0x92))/0xa*(-parseInt(_0xb6a118(0x93))/0xb);if(_0x2be1f2===_0x8f553c)break;else _0x32592a['push'](_0x32592a['shift']());}catch(_0x488728){_0x32592a['push'](_0x32592a['shift']());}}}(_0x4f54,0x77236));let ptGUI,menu,afkStatus,isDragging=![],dragOffsetX,dragOffsetY;menu='\x0a\x20\x20\x20\x20<div\x20id=\x22ptGUI-title\x22\x20class=\x22ptGUI-title\x22\x20style=\x22text-align:\x20center;\x20margin-bottom:\x2020px;\x22>Plum\x20GUI</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<!--\x20toggle\x20anim\x20loop\x20-->\x0a\x20\x20\x20\x20<button\x20id=\x22ptGUI-button-1\x22\x20class=\x22ptGUI-button\x20ptGUI-anim-button\x22\x20style=\x22display:\x20block;\x20width:\x20100%;\x20padding:\x2010px;\x20margin-bottom:\x2010px;\x20border:\x20none;\x20border-radius:\x205px;\x20cursor:\x20pointer;\x20transition:\x20background-color\x200.3s\x20ease;\x20background-color:\x20green;\x22>Anim\x20Loop</button>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<!--\x20toggle\x20anti\x20afk\x20-->\x0a\x20\x20\x20\x20<div\x20class=\x22ptGUI-checkbox\x22\x20style=\x22margin-bottom:\x2010px;\x20background-color:\x20red;\x20text-align:\x20center;\x20border-radius:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22ptGUI-checkbox-1\x22\x20id=\x22anti_afk\x22\x20style=\x22display:\x20inline-block;\x20text-align:\x20center;\x20position:\x20relative;\x20cursor:\x20pointer;\x22>Anti\x20afk\x20toggle\x20:\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+(afkStatus===undefined?_0x2ec60e(0x80):afkStatus)+_0x2ec60e(0x8a),ptGUI=_0x2ec60e(0xa4)+menu+_0x2ec60e(0x76),document[_0x2ec60e(0x8b)]['insertAdjacentHTML'](_0x2ec60e(0x79),ptGUI),document['getElementById']('destroyButton')[_0x2ec60e(0x97)](_0x2ec60e(0x95),function(){const _0x434718=_0x2ec60e,_0x1e7981=document[_0x434718(0x85)](_0x434718(0x78));_0x1e7981&&_0x1e7981[_0x434718(0x8e)]();}),document['getElementById'](_0x2ec60e(0x9c))[_0x2ec60e(0x97)](_0x2ec60e(0x95),function(){const _0x1b5bd1=_0x2ec60e;var _0x59da5b=document[_0x1b5bd1(0x83)](_0x1b5bd1(0xa7)),_0x5ab1ad=prompt(_0x1b5bd1(0x9e)),_0x5d660a=prompt(_0x1b5bd1(0x84)),_0xc8f48f=prompt(_0x1b5bd1(0x7a));if(_0x59da5b['length']>=0x5){var _0x58ca37=setInterval(function(){const _0x2a705b=_0x1b5bd1;_0x59da5b[_0x5ab1ad][_0x2a705b(0x95)](),setTimeout(function(){_0x59da5b[_0x5d660a]['click'](),_0x59da5b[_0xc8f48f]['click']();},0x1f4);},0x1f4);setTimeout(function(){const _0x3dea6b=_0x1b5bd1;clearInterval(_0x58ca37),_0x59da5b[0x2][_0x3dea6b(0x95)]();},0x7530);}}),document['getElementById'](_0x2ec60e(0x90))['addEventListener']('click',function(){const _0x431a28=_0x2ec60e;let _0xb7085c,_0x47a113=function(){const _0x25e114=_0x240a;return document['getElementById'](_0x25e114(0x90))[_0x25e114(0xa2)]=_0x25e114(0x7d)+afkStatus;};if(afkStatus==='on')afkStatus='off',_0xb7085c&&(clearInterval(_0xb7085c),console['log'](_0x431a28(0x99)));else{afkStatus='on';let _0x2af9f4=document[_0x431a28(0x85)](_0x431a28(0x87)),_0x5db0e8=document['querySelector'](_0x431a28(0x77));if(_0x5db0e8)alert(_0x431a28(0x89)),afkStatus=_0x431a28(0x80),console[_0x431a28(0x81)](_0x431a28(0xa1));else{let _0x479094=prompt(_0x431a28(0x96)),_0x248849=prompt('afk\x20duration\x20using\x20ms\x20(milliseconds)');if(_0x479094===null)alert(_0x431a28(0x82)),console[_0x431a28(0x81)](_0x431a28(0x7f));else _0x248849===null?(alert(_0x431a28(0x7c)),console[_0x431a28(0x81)](_0x431a28(0x7f))):(_0xb7085c&&(clearInterval(_0xb7085c),console[_0x431a28(0x81)]('Old\x20interval\x20stopped\x20before\x20creating\x20new\x20one')),_0xb7085c=setInterval(()=>{const _0x76bd17=_0x431a28;_0x2af9f4[_0x76bd17(0x95)](),console[_0x76bd17(0x81)]('Canvas\x20clicked');},parseInt(_0x479094)),setTimeout(()=>{const _0x1b73f6=_0x431a28;clearInterval(_0xb7085c),afkStatus='off',document['getElementById'](_0x1b73f6(0x90))[_0x1b73f6(0xa2)]='Anti\x20afk\x20toggle\x20:\x20'+afkStatus,console[_0x1b73f6(0x81)](_0x1b73f6(0x88)+_0x248849+_0x1b73f6(0x98)),console[_0x1b73f6(0x81)]('Auto-click\x20stopped\x20after\x20'+_0x248849+_0x1b73f6(0x98)),console[_0x1b73f6(0x81)]('Auto-click\x20stopped\x20after\x20'+_0x248849+_0x1b73f6(0x98));},parseInt(_0x248849)));}}_0x47a113();});const ptGUIElement=document[_0x2ec60e(0x85)]('ptGUI');function _0x240a(_0x1f5e9e,_0x199199){const _0x4f54bf=_0x4f54();return _0x240a=function(_0x240a8b,_0x19636c){_0x240a8b=_0x240a8b-0x76;let _0xdb3de4=_0x4f54bf[_0x240a8b];return _0xdb3de4;},_0x240a(_0x1f5e9e,_0x199199);}ptGUIElement['addEventListener']('mousedown',function(_0x286c0a){const _0x30d3bc=_0x2ec60e;isDragging=!![],dragOffsetX=_0x286c0a['clientX']-ptGUIElement[_0x30d3bc(0xa3)],dragOffsetY=_0x286c0a[_0x30d3bc(0xa6)]-ptGUIElement[_0x30d3bc(0x9d)],_0x286c0a['preventDefault']();}),document[_0x2ec60e(0x97)](_0x2ec60e(0x94),function(_0x2a7d39){const _0x4063f5=_0x2ec60e;isDragging&&(ptGUIElement[_0x4063f5(0xa5)][_0x4063f5(0x9f)]=_0x2a7d39['clientX']-dragOffsetX+'px',ptGUIElement[_0x4063f5(0xa5)]['top']=_0x2a7d39[_0x4063f5(0xa6)]-dragOffsetY+'px');}),document[_0x2ec60e(0x97)](_0x2ec60e(0xa0),function(){isDragging=![];});function _0x4f54(){const _0x34b97=['addEventListener','\x20ms','Interval\x20stopped\x20because\x20anti\x20afk\x20is\x20turned\x20off','20222zuInZU','6582009UNYtiI','ptGUI-button-1','offsetTop','Masukkan\x20exp\x201','left','mouseup','Script\x20stopped\x20because\x20canvas\x20is\x20missing','textContent','offsetLeft','\x0a\x20\x20\x20\x20<div\x20id=\x22ptGUI\x22\x20class=\x22ptGUI-container\x22\x20style=\x22position:\x20absolute;\x20top:\x2020px;\x20left:\x2020px;\x20width:\x20300px;\x20padding:\x2020px;\x20background-color:\x20rgba(0,\x200,\x200,\x200.8);\x20color:\x20white;\x20border-radius:\x2010px;\x20box-shadow:\x200\x204px\x208px\x20rgba(0,\x200,\x200,\x200.3);\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','style','clientY','.action-button','\x0a\x20\x20\x20\x20</div>\x0a','p.text-muted.list-rules[_ngcontent-ywe-c98]','ptGUI','beforeend','Masukkan\x20exp\x203','20lpyNgc','duration\x20milliseconds\x20cannot\x20be\x20null','Anti\x20afk\x20toggle\x20:\x20','1519530LPsxza','canceled\x20anti\x20afk','off','log','on\x20active\x20milliseconds\x20cannot\x20be\x20null','querySelectorAll','Masukkan\x20exp\x202','getElementById','521695TCppJf','canvas','Auto-click\x20stopped\x20after\x20','Canvas\x20element\x20is\x20not\x20found','</label>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<!--\x20toggle\x20destroy\x20GUI\x20-->\x0a\x20\x20\x20\x20<button\x20id=\x22destroyButton\x22\x20class=\x22ptGUI-button\x20ptGUI-destroy-button\x22\x20style=\x22background-color:\x20rgba(0,\x200,\x20128,\x200.8);\x20display:\x20block;\x20width:\x20100%;\x20padding:\x2010px;\x20margin-bottom:\x2010px;\x20border:\x20none;\x20border-radius:\x205px;\x20cursor:\x20pointer;\x20transition:\x20background-color\x200.3s\x20ease;\x22>Destroy</button>\x0a','body','782393dFGmKA','504QNLnXf','remove','20480ALLOCb','anti_afk','261fMNFLp','130sXXfGb','91971RqbGvN','mousemove','click','on\x20active\x20anti\x20afk\x20per\x20milliseconds'];_0x4f54=function(){return _0x34b97;};return _0x4f54();}
})();