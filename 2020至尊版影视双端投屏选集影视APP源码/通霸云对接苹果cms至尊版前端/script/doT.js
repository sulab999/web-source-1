(function(){var doT={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
varname:"it",strip:true,append:true,selfcontained:false,doNotSkipEncoded:false},template:undefined,compile:undefined,log:true},_globals;doT.encodeHTMLSource=function(doNotSkipEncoded){var encodeHTMLRules={"\x26":"\x26#38;","\x3c":"\x26#60;","\x3e":"\x26#62;",'"':"\x26#34;","'":"\x26#39;","/":"\x26#47;"},matchHTML=doNotSkipEncoded?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(code){return code?code.toString().replace(matchHTML,function(m){return encodeHTMLRules[m]||m}):""}};_globals=function(){return this||
(0,eval)("this")}();if(typeof module!=="undefined"&&module.exports)module.exports=doT;else if(typeof define==="function"&&define.amd)define(function(){return doT});else _globals.doT=doT;var startend={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+\x3d(",end:");out+\x3d'",startencode:"';out+\x3dencodeHTML("}},skip=/$^/;function resolveDefs(c,block,def){return(typeof block==="string"?block:block.toString()).replace(c.define||skip,function(m,code,assign,value){if(code.indexOf("def.")===
0)code=code.substring(4);if(!(code in def))if(assign===":"){if(c.defineParams)value.replace(c.defineParams,function(m,param,v){def[code]={arg:param,text:v}});if(!(code in def))def[code]=value}else(new Function("def","def['"+code+"']\x3d"+value))(def);return""}).replace(c.use||skip,function(m,code){if(c.useParams)code=code.replace(c.useParams,function(m,s,d,param){if(def[d]&&def[d].arg&&param){var rw=(d+":"+param).replace(/'|\\/g,"_");def.__exp=def.__exp||{};def.__exp[rw]=def[d].text.replace(new RegExp("(^|[^\\w$])"+
def[d].arg+"([^\\w$])","g"),"$1"+param+"$2");return s+"def.__exp['"+rw+"']"}});var v=(new Function("def","return "+code))(def);return v?resolveDefs(c,v,def):v})}function unescape(code){return code.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}doT.template=function(tmpl,c,def){c=c||doT.templateSettings;var cse=c.append?startend.append:startend.split,needhtmlencode,sid=0,indv,str=c.use||c.define?resolveDefs(c,tmpl,def||{}):tmpl;str=("var out\x3d'"+(c.strip?str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g,
" ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):str).replace(/'|\\/g,"\\$\x26").replace(c.interpolate||skip,function(m,code){return cse.start+unescape(code)+cse.end}).replace(c.encode||skip,function(m,code){needhtmlencode=true;return cse.startencode+unescape(code)+cse.end}).replace(c.conditional||skip,function(m,elsecase,code){return elsecase?code?"';}else if("+unescape(code)+"){out+\x3d'":"';}else{out+\x3d'":code?"';if("+unescape(code)+"){out+\x3d'":"';}out+\x3d'"}).replace(c.iterate||skip,function(m,
iterate,vname,iname){if(!iterate)return"';} } out+\x3d'";sid+=1;indv=iname||"i"+sid;iterate=unescape(iterate);return"';var arr"+sid+"\x3d"+iterate+";if(arr"+sid+"){var "+vname+","+indv+"\x3d-1,l"+sid+"\x3darr"+sid+".length-1;while("+indv+"\x3cl"+sid+"){"+vname+"\x3darr"+sid+"["+indv+"+\x3d1];out+\x3d'"}).replace(c.evaluate||skip,function(m,code){return"';"+unescape(code)+"out+\x3d'"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,
"$1").replace(/\+''/g,"");if(needhtmlencode){if(!c.selfcontained&&_globals&&!_globals._encodeHTML)_globals._encodeHTML=doT.encodeHTMLSource(c.doNotSkipEncoded);str="var encodeHTML \x3d typeof _encodeHTML !\x3d\x3d 'undefined' ? _encodeHTML : ("+doT.encodeHTMLSource.toString()+"("+(c.doNotSkipEncoded||"")+"));"+str}try{return new Function(c.varname,str)}catch(e){if(typeof console!=="undefined")console.log("Could not create a template function: "+str);throw e;}};doT.compile=function(tmpl,def){return doT.template(tmpl,
null,def)}})();