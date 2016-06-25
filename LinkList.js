function CreateSingleLinkList(){
	var Node = function(ele){
		this.ele = ele;
		this.next = null;
	}
	var head = null,length = 0
	this.append = function(ele){
		var node = new Node(ele)
		if(head === null){
			node.next = null
			head = node
		}else{
			var current = head
			while(current.next){
				current = current.next
			}
			current.next = node
		}
		length++
	}
	this.insert = function(ele,position){
		if(position<0){position = 0}
		if(position>length){return this.append(ele)}
		var node = new Node(ele),index = 0
		if(position == 0){
			node.next = head
			head = node
		}else{
			var current = head,previous = head
			while(index++ < position){
				previous = current
				current = current.next		
			}
			previous.next = node
			node.next = current
		}
		length++
	}
	this.removeAt = function(position){
		var index = 0,current = head,previous = head
		if(position>=0&&position<=length){
			if(position==0){
			head = current.next
		}else{
			while(index++ < position){
				previous = current
				current = current.next
			}
			previous.next = current.next
		}}else{
			return -1
		}
		length--
	}
	this.find = function(position){
		var index = 0
		if(position>=0&&position<=length){
			if(position == 0){
				return head.ele
			}else{
				var current = head
				while(index++ < position){
					current = current.next
				}
				return current.ele
			}
		}else{
			return -1
		}
	}
	this.indexOf = function(ele){
		var index = 0,current = head
		while(current){
			if(current.ele.valueOf() == ele.valueOf()){
				return index
			}
			index++
			current = current.next
		}
		return "not found or uncompatible"
	}
	this.length = function(){
		return length
	}
	this.node = function(i){
		var index = 0,current = head
		if(i==0){
			return head
		}else{
			while(index++ < i){
				current = current.next	
			}
			return current
		}
	}
	this.getAll = function(){
		var all = []
		for(var i=0;i<this.length();i++){
			all.push(this.find(i));
		}
		return all
	}
}


function CreateDoubleLinkList(){
	var Node = function(ele){
		this.ele = ele;
		this.next = null;
		this.prev = null;
	}
	var head = null,tail = null,length = 0;
	this.append = function(ele){
		var node = new Node(ele)
		if(head === null){
			head = node
		}else{
			var current = head
			while(current.next){
				current = current.next
			}
			current.next = node
			node.prev = current
			tail = node
		}
		length++
	}
	this.insert =function(ele,position){
		if(position<0){position = 0}
		if(position>length){return this.append(ele)}
		var node = new Node(ele)
		var current = this.node(position),pre = this.prevNode(position)
		node.next = current
		node.prev = pre
		pre.next = node
		current.prev = node
		length++ 
	}
	this.removeAt = function(position){
		if(position==0){
			head = head.next;
			head.prev = null;
		}else{
			var pre = this.prevNode(position),nex = this.nextNode(position)
			pre.next = nex
			nex.prev = pre
		}
		length--
	}
	this.node = function(i){
		if(i<length/2){
			if(i == 0){
				return head
			}else{
				var index = 0,current = head
				while(index++ < i){
					current = current.next
				}
				return current
		}}else{
			var index = length-1,current = tail
			while(index-- > i){
				current = current.prev
			}
			return current
		}
	}

	this.find = function(i){
		if(i<0||i>length){return -1}
		return this.node(i).ele
	}
	this.prev = function(i){
		return this.node(i).prev.ele
	}
	this.next = function(i){
		return this.node(i).next.ele
	}
	this.prevNode = function(i){
		return this.node(i).prev
	}
	this.nextNode = function(i){
		return this.node(i).next
	}
	this.length = function(){
		return length
	}
	this.indexOf = function(ele){
		var current = head,index = 0
		while(current.next){
			if(current.ele == ele){
				return index
			}
			index++
			current = current.next
		}
		return "not found or uncompatible"
	}
	this.getAll = function(){
		var all = []
		for(var i=0;i<this.length();i++){
			all.push(this.find(i))
		}
		return all
	}
}

function CreateLoopLinkList(){
	var Node = function(ele){
		this.ele = ele;
		this.next = null;
	}
	var head = null,length = 0,tail = null;
	this.append = function(ele){
		var node = new Node(ele)
		if(head === null){
			head = node
			tail = node
			tail.next = head
		}else{
			var current = head
			while(current.next !== head){
				current = current.next
			}
			current.next = node
			tail = node
			tail.next = head
		}
		length++
	}
	this.insert = function(ele,position){
		if(position<0){position = 0}
		if(position>=length){return this.append(ele)}
		var node = new Node(ele),index = 0
		if(position == 0){
			node.next = head
			head = node
			tail.next = head
		}else{
			var current = head,previous = head
			while(index++ < position){
				previous = current
				current = current.next		
			}
			previous.next = node
			node.next = current
		}
		length++
	}
	this.removeAt = function(position){
		var index = 0,current = head,previous = head
		if(position>=0&&position<=length){
			if(position==0){
			head = current.next
			tail.next = head
		}else{
			while(index++ < position){
				previous = current
				current = current.next
			}
			previous.next = current.next
		}}else{
			return -1
		}
		length--
	}
	this.find = function(position){
		if(position>=0&&position<=length){
			return this.node(position).ele
		}else{
			return -1
		}
	}
	this.indexOf = function(ele){
		var index = 0,current = head
		while(current){
			if(current.ele.valueOf() == ele.valueOf()){
				return index
			}
			index++
			current = current.next
		}
		return "not found or uncompatible"
	}
	this.length = function(){
		return length
	}
	this.node = function(i){
		var index = 0,current = head
		if(i==0){
			return head
		}else{
			while(index++ < i){
				current = current.next	
			}
			return current
		}
	}
	this.next = function(pos){
		return this.node(pos).next.ele
	}
	this.nextNode = function(pos){
		return this.node(pos).next
	}
	this.getAll = function(){
		var all = []
		for(var i=0;i<this.length();i++){
			all.push(this.find(i));
		}
		return all
	}
}


function CreateDoubleLoopLinkList(){
	var Node = function(ele){
		this.ele = ele;
		this.next = null;
		this.prev = null;
	}
	var head = null,tail = null,length = 0;
	this.append = function(ele){
		var node = new Node(ele)
		if(head === null){
			head = node
			tail = node 
		}else{
			var current = head
			while(current.next !== head){
				current = current.next
			}
			current.next = node
			node.prev = current
			tail = node
			tail.next = head
			head.prev = tail
		}
		length++
	}
	this.insert =function(ele,position){
		if(position<0){position = 0}
		if(position>length){return this.append(ele)}
		var node = new Node(ele)
		if(position === 0){
			node.next = head
			head.prev = node
			head = node
			head.prev = tail
			tail.next = head
		}else{
			var current = this.node(position),pre = this.prevNode(position)
			node.next = current
			node.prev = pre
			pre.next = node
			current.prev = node
		}
		length++ 
	}
	this.removeAt = function(position){
		if(position==0){
			head = head.next
			head.prev = tail
			tail.next = head
		}else{
			var pre = this.prevNode(position),nex = this.nextNode(position)
			pre.next = nex
			nex.prev = pre
	}
		length--
	}
	this.node = function(i){
		if(i<length/2){
			if(i == 0){
				return head
			}else{
				var index = 0,current = head
				while(index++ < i){
					current = current.next
				}
				return current
		}}else{
			var index = length-1,current = tail
			while(index-- > i){
				current = current.prev
			}
			return current
		}
	}

	this.find = function(i){
		if(i<0||i>length){return -1}
		return this.node(i).ele
	}
	this.prev = function(i){
		return this.node(i).prev.ele
	}
	this.next = function(i){
		return this.node(i).next.ele
	}
	this.prevNode = function(i){
		return this.node(i).prev
	}
	this.nextNode = function(i){
		return this.node(i).next
	}
	this.length = function(){
		return length
	}
	this.indexOf = function(ele){
		var current = head,index = 0
		while(current.next){
			if(current.ele == ele){
				return index
			}
			index++
			current = current.next
		}
		return "not found or uncompatible"
	}
	this.getAll = function(){
		var all = []
		for(var i=0;i<this.length();i++){
			all.push(this.find(i))
		}
		return all
	}
}


var link = {
	SingleLinkList:CreateSingleLinkList,
	DoubleLinkList:CreateDoubleLinkList,
	LoopLinkList:CreateLoopLinkList,
	DoubleLoopLinkList:CreateDoubleLoopLinkList
}
module.exports = link
// var list = new CreateDoubleLoopLinkList()
// list.append({name:'A',age:'11'})
// list.append({name:'B',age:'12'})
// list.append({name:'C',age:'13'})
// list.append({name:'D',age:'14'})
// list.insert({name:'I inserted',age:'12'},2)
// console.log(list.length());
// console.log(list.find(2));
// console.log(list.next(4));
// console.log(list.find(0));
// console.log(list.prev(0));
// console.log(list.getAll());
