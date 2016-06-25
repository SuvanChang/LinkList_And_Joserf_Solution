var link = require('./link')
var linkobj = new link.LoopLinkList()
for(var i=1;i<=41;i++){
	var man = {
		name:'man: '+ i,
		index:i
		}
		linkobj.append(man)
	}
var num = 1
var node = linkobj.node(0);
var rp = function(node){
	if(num===3){
		console.log(linkobj.find(linkobj.indexOf(node.ele)));
		linkobj.removeAt(linkobj.indexOf(node.ele))
		num = 0
	}
	num++
	if(linkobj.length()>0)return rp(node.next)
}
rp(node)
