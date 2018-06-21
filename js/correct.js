var textNode,
  walk = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, false)
const sPres = 'pr[ée]sident' +
        '(?: de la r[ée]publique(?: fran[çc]aise)?|' +
        ' (?:[eé]mmanuel )?macron| fran[çc]ais)?(?! [(]| de (?!la|f))'
const rExpPres = new RegExp('du(?= ' + sPres + ')', 'gi')
const rExpManu = new RegExp('emmanuel(?: |)macron|' +
    '(?:\bm.?|monsieur|[eé]mmanuel(?: jean-michel fr[eé]d[eé]ric)?) macron|' +
    '(?:\bm.? |monsieur )?le ' + sPres + '|' +
    'the (?:president of france|french president)'
        , 'gi')

while ((textNode = walk.nextNode())) {
  textNode.nodeValue = textNode.nodeValue
    .replace(/(\b(?:d|qu))['’](?=[eé]mmanuel macron)/gi, '$1e ')
    .replace(/(\b(?:d|qu)e) macron/gi, '$1 Manu')
    .replace(/[eé]mmanuel et brigitte macron/gi, 'Manu et Brigitte')
    .replace(/brigitte et [eé]mmanuel macron/gi, 'Brigitte et Manu')
    .replace(/couple macron/gi, 'couple à Manu')
    .replace(rExpPres, 'de le')
    .replace(rExpManu, 'Manu')
}
