davis=
{
random:function (x){return (Math.floor(Math.random()*x));},

randomArray:function(length,r1,r2){
	var a=[];
	for (var i=0;i<length;i++){
		a.push((r1+(this.random(((r2+1)-r1)))));
		}
	return a;
	},

bell: function (x)
	{
		var i=Math.round((davis.random(x)+davis.random(x)+davis.random(x))/3);
		return i;
	},

randomColor:function (x){
	if (x){	x=x.toLowerCase();}
	else{x=="none"}

	var red=davis.random(255);
	var green=davis.random(255);
	var blue=davis.random(255);
	if (x=="grey" || x=="gray" || x=="fullgrey" || x=="fullgray"){
		blue=red;
		green=red;
		}
	if (x=='warm' || x=='hot'){
		red=200+davis.random(55);
		blue=davis.random(30);
	}
	if (x=='cool' || x=='cold'){
		blue=100+davis.random(155);
		red=davis.random(50);
	}
	if (x=="mammal" || x=="mammalian"){
		red=160+davis.random(85);
		green=red-40;
		blue=green/2;
	}
	var color="rgb("+red+","+green+","+blue+")";

	if (x=="full"){
		var text="#eee";
		if ((red+green+blue)>400){text="#111";}
		return {red:red,green:green,blue:blue,rgb:color,text:text};
		}
	else if (x=="fullgrey"){
		var text="#eee";
		if ((red*3)>400){text="#111";}
		return {red:red,green:red,blue:red,rgb:color,text:text};
		}
	else{
		return color;
		}	
	},

randomWord:function(x){
	if (!x){x=1;}
	var vo=["a","e","i","o","u"];
	var con=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
	var phrase=[];
	for (var j=0;j<x;j++){
		var word="";
		for (var i=0;i<(1+davis.random(3));i++){
			word+=davis.pick(con)+davis.pick(vo);
			}	
		if (davis.random(5)>2){
			word+=davis.pick(con);
			}
		phrase.push(word);
	}
	word=phrase.join(" ");
	return word;
},
	
pick: function (x)
	{return x[davis.random(x.length)];},

sumTo:function(x){
	if (!x){return false;}
	var y=[];
	while (x>0){
		var redux=1+davis.random(x);
		y.push(redux);
		x=x-redux;
	}
	return y;
	},

//this takes two arrays - one the source of new material, the other saved material from the past, and decides which to return an element from, then selects a random element from the ancestral or mutational array.
darwin:function(mutation,ancestry)
	{
	var anar=ancestry.length;
	var m=(9*anar*anar)/((anar*anar)+100);
	var d=1+this.random(10);
	if (m>d){ return this.pick(ancestry);}
	else{ return this.pick(mutation);}
	},

style:function(selector,values){
		if (!jQuery){return false};
		if ($("head style#dynamic").get().length==0){
			$("head").append("<style id='dynamic'></style>");
		}
		if (selector=="clear" || !selector){$("head style#dynamic").html("");}

		var s=selector+"{";
		for (i in values){
			s+=i+":"+values[i]+";";
		}
		s+="}";

		$("head style#dynamic").append(s);
	},

grid:function(xSteps,ySteps,bounds){
	var grid=[];
	var b=bounds;
	var xInterval=(bounds.right-bounds.left)/xSteps;
	var yInterval=(bounds.bottom-bounds.top)/ySteps;
	for (var i=0;i<xSteps;i++){
		grid.push([]);
		for (var j=0;j<ySteps;j++){
			var tb={};
			tb.top=yInterval*j;
			tb.bottom=yInterval*(j+1);
			tb.left=xInterval*i;
			tb.right=xInterval*(i+1);
			tb.centerX=(tb.right+tb.left)/2;
			tb.centerY=(tb.bottom+tb.top)/2;
			grid[i].push(tb);
			}
		}

	return grid;
	},

maybe:function(n,d,f){
	var d=davis.random(d);
	if (d<n){
		f.call();
	}
	else{return false;}
}

};
