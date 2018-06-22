var textNode, walk=document.createTreeWalker(document,NodeFilter.SHOW_TEXT,null,false);
var rManu = new RegExp('Emmanuel( |)Macron|'+
	'le Pr[eé]sident de la R[eé]publique fran[cç]aise|'+
	'Pr[eé]sident de la R[eé]publique fran[cç]aise|'+
	'le Pr[eé]sident de la R[eé]publique|'+
	'du Pr[eé]sident de la R[eé]publique|'+
	'M. le Pr[eé]sident de la R[eé]publique|'+
	'Monsieur le Pr[eé]sident de la R[eé]publique|'+
	'Monsieur le Pr[eé]sident|'+
	'Emmanuel Jean-Michel Frédéric Macron|'+
	'M. Macron', 'gi')
	
var rBoth = new RegExp('Emmanuel et Brigitte Macron|'+
	'Brigitte et Emmanuel Macron|'+
	'Emmanuel Macron et Brigitte Macron|'+
	'M. et Mme Macron|'+
	'Mme et M. Macron', 'gi')
	
while(textNode=walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue.replace(rManu, 'Manu')
	textNode.nodeValue = textNode.nodeValue.replace(rBoth, 'Manu et Brigitte')
}
