var textNode,
  walk = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, false)
const rExpManu = new RegExp('emmanuelmacron|' +
    '(?:\bm.?|monsieur|[eé]mmanuel(?: jean-michel fr[eé]d[eé]ric)?) macron|' +
    '(?:\bm.? |monsieur )?le pr[ée]sident' +
        '(?: de la r[ée]publique(?: fran[çc]aise)?|' +
        ' macron| fran[çc]ais)?(?! [(]| de (?!la|f))|' +
    'the (?:president of france|french president)'
        , 'gi')

while ((textNode = walk.nextNode())) {
  textNode.nodeValue = textNode.nodeValue
    .replace(/((?:d|qu))['’][eé]mmanuel macron/gi, '$1e Manu')
    .replace(/((?:d|qu)e) macron/gi, '$1 Manu')
    .replace(/[eé]mmanuel et brigitte macron/gi, 'Manu et Brigitte')
    .replace(/brigitte et [eé]mmanuel macron/gi, 'Brigitte et Manu')
    .replace(/couple macron/gi, 'couple à Manu')
    .replace(rExpManu, 'Manu')
}
