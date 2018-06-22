var textNode,
  walk = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, false)
const sPres = 'pr[ée]sident' +
        '(?:\\s+de\\s+la\\s+r[ée]publique(?:\\s+fran[çc]aise)?|' +
        '\\s+(?:[eé]mmanuel\\s+)?macron|\\s+fran[çc]ais)?(?!\\s+[(]|\\s+de\\s+(?!la|f))'
const rExpDuPres = new RegExp('du(?=\\s+' + sPres + ')', 'gi')
const rExpManu = new RegExp('[eé]mmanuel\\s*macron|' +
    '(?:\\bm.?|monsieur|[eé]mmanuel(?:\\s+jean-michel\\s+fr[eé]d[eé]ric)?)\\s+macron|' +
    '(?:\\bm.?\\s+|monsieur\\s+)?le\\s+' + sPres + '|' +
    'the\\s+(?:president\\s+of\\s+france|french\\s+president)'
        , 'gi')

while ((textNode = walk.nextNode())) {
  textNode.nodeValue = textNode.nodeValue
    .replace(/(\b(?:d|qu))['’](?=[eé]mmanuel macron)/gi, '$1e ')
    .replace(/(\b(?:d|qu)e)\s+macron/gi, '$1 Manu')
    .replace(/[eé]mmanuel\s+et\s+brigitte macron/gi, 'Manu et Brigitte')
    .replace(/brigitte\s+et\s+[eé]mmanuel\s+macron/gi, 'Brigitte et Manu')
    .replace(/couple\s+macron/gi, 'couple à Manu')
    .replace(rExpDuPres, 'de le')
    .replace(rExpManu, 'Manu')
}
