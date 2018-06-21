var textNode,
  walk = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, false)
const rExpManu = new RegExp('emmanuelmacron|' +
    '(?:m.?|monsieur|[eé]mmanuel(?: jean-michel fr[eé]d[eé]ric)?) macron|' +
    '(?:m.? |monsieur )?le pr[ée]sident(?: de la r[ée]publique' +
        '(?: fran[çc]aise| macron| fran[çc]ais)?)?|' +
    'the (?:president of france|french president)|' +
    'macron' /* à garder en dernière regex */
        , 'gi')

while ((textNode = walk.nextNode())) {
  textNode.nodeValue = textNode.nodeValue
    .replace(/d['’][eé]mmanuel macron/gi, 'de Manu')
    .replace(/[eé]mmanuel et brigitte macron/gi, 'Manu et Brigitte')
    .replace(/brigitte et [eé]mmanuel macron/gi, 'Brigitte et Manu')
    .replace(/couple macron/gi, 'couple à Manu')
    .replace(rExpManu, 'Manu')
}
