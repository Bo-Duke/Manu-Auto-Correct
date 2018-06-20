var textNode, walk = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, false);
while (textNode = walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue
        .replace(/^(?=.*\Emmanuel\b)(?=.*\bMacron\b).*$/gi, 'Manu')
        .replace(/^(?=.*\Le\b)(?=.*\bprésident\b)(?=.*\bde\b)(?=.*\bla\b)(?=.*\bRépublique\b).*$/gi, 'Manu')
        .replace(/^(?=.*\Monsieur\b)(?=.*\ble\b)(?=.*\bprésident\b).*$/gi, 'Manu')
}
