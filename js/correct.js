var textNode;
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false)

function textReplaceManu(str) {
  const sPres = 'pr[ée]sident' +
          '(?:\\s+de\\s+la\\s+r[ée]publique(?:\\s+fran[çc]aise)?|' +
          '\\s+(?:[eé]mmanuel\\s+)?macron|\\s+fran[çc]ais)?(?!\\s+[(]|\\s+de\\s+(?!la|f))'
  const rExpDuPres = new RegExp('\\bdu(?=\\s+' + sPres + ')', 'gi')
  const rExpDuPres = new RegExp('\\bau(?=\\s+' + sPres + ')', 'gi')
  const rExpManu = new RegExp('[eé]mmanuel\\s*macron|' +
      '(?:\\bm.?|monsieur|[eé]mmanuel(?:\\s+jean-michel\\s+fr[eé]d[eé]ric)?)\\s+macron|' +
      '(?:\\bm.?\\s+|monsieur\\s+)?le\\s+' + sPres + '|' +
      '\\bthe\\s+(?:president\\s+of\\s+france|french\\s+president)'
          , 'gi')
  return str.replace(/(\b(?:d|qu))['’](?=[eé]mmanuel\s+macron)/gi, '$1e ')
      .replace(/(\b(?:d|qu)e)\s+macron/gi, '$1 Manu')
      .replace(/[eé]mmanuel\s+et\s+brigitte\s+macron/gi, 'Manu et Brigitte')
      .replace(/brigitte\s+et\s+[eé]mmanuel\s+macron/gi, 'Brigitte et Manu')
      .replace(/couple\s+macron/gi, 'couple à Manu')
      .replace(rExpDuPres, 'de le')
      .replace(rExpAuPres, 'à le')
      .replace(rExpManu, 'Manu')
}

while ((textNode = walk.nextNode())) {
  textNode.nodeValue = textReplaceManu(textNode.nodeValue)
}

document.title = textReplaceManu(document.title)
