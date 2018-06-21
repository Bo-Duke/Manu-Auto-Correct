function textReplaceManu(str) {
    /* Here we build a string to detect the "*du* président ..." formula */
    const strPres = 'pr[ée]sident de la r[ée]publique|'+
        'pr[ée]sident de la r[ée]publique fran[cç]aise|'+
        'pr[ée]sident fran[cç]ais|'+
        'pr[ée]sident emmanuel macron|'+
        'pr[ée]sident macron'
    /* This is just "catch *DU* if followed by "président etc..." formula */
    const rExpDuPres = new RegExp('du(?=\\s+' + strPres.replace(/ /g, '\\s+') + ')', 'gi')
    /* Build replacement regex */
    const strManu = 'EmmanuelMacron|'+
		'M[\\.r] le Pr[eé]sident de la R[eé]publique fran[cç]aise|'+ // Keep the dot in case of "Mr" or "M."
		'M[\\.r] le Pr[eé]sident de la R[eé]publique|'+
		'M[\\.r] le Pr[eé]sident fran[cç]ais|'+
		'M[\\.r] le Pr[eé]sident emmanuel macron|'+
		'M[\\.r] le Pr[eé]sident macron|'+
		'M[\\.r] le Pr[eé]sident|'+
		'Monsieur le Pr[eé]sident de la R[eé]publique fran[cç]aise|'+
		'Monsieur le Pr[eé]sident de la R[eé]publique|'+
		'Monsieur le Pr[eé]sident fran[cç]ais|'+
		'Monsieur le Pr[eé]sident emmanuel macron|'+
		'Monsieur le Pr[eé]sident macron|'+
		'Monsieur le Pr[eé]sident|'+
		'le Pr[eé]sident de la R[eé]publique fran[cç]aise|'+ // Put this one after, so that the one above matches first
		'le Pr[eé]sident de la R[eé]publique|'+
		'Le Pr[eé]sident fran[cç]ais|'+
		'Le Pr[eé]sident emmanuel Macron|'+
		'Le Pr[eé]sident Macron|'+
		'Pr[eé]sident de la R[eé]publique fran[cç]aise|'+
		'Pr[eé]sident de la R[eé]publique|'+
		'Emmanuel Macron|'+
		'Emmanuel Jean-Michel Fr[eé]d[eé]ric Macron|'+
		'M[\\.r] emmanuel Macron|'+
		'M[\\.r] Macron|'+
		'french president|'+
		'president of france'
    /* before creating RegEx, change all ' ' in the string by '\s+' to it can detect all double spaces,
     * or unbreakable spaces in the text as well.
     */
    const rExpManu = new RegExp(strManu.replace(/ /g,'\\s+'),  'gi');

	/* Apply replacement in the text */
	/* 1) replace "d'Emmanuel Macron" with "de Manu". Same with "qu'Emmanuel macron"
	 * 2) replace "de Macron" or "que Macron" with "de Manu" or "que Manu" respectively
     * 3) replace "Emmanuel et Brigitte Macron" with "Manu et Brigitte'
     * 4) same as 3), but with Brigitte first
     * 5) replace "couple macron" and "couple présidentiel" with "couple à Manu"
     * 6) replace "du président etc" with "de le prédisent etc...", in order to have
     *      "le président etc..." replace with "Manu" next
     * 7) replace all references to "président de la republique etc..." by "Manu"
	 */
	return str.replace(/(\b(?:d|qu))['’][eé]mmanuel macron/gi, '$1e Manu')
		.replace(/(\b(?:d|qu)e) macron/gi, '$1 Manu')
		.replace(/[eé]mmanuel et brigitte macron/gi, 'Manu et Brigitte')
		.replace(/brigitte et [eé]mmanuel macron/gi, 'Brigitte et Manu')
		.replace(/couple macron|couple pr[eé]sidentiel/gi, 'couple à Manu')
		.replace(rExpDuPres, 'de le')
		.replace(rExpManu, 'Manu')
}

var textNode
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT,null,false);
while ((textNode = walk.nextNode())) {
    /* Apply all the replacement to each text node content */
    textNode.nodeValue = textReplaceManu(textNode.nodeValue)
}

/* Apply all the same replacement as for the text. */
document.title = textReplaceManu(document.title)
