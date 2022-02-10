"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const vscode_1 = require("vscode");
const vscode_2 = require("vscode");
const MATCHER = /(\s)(.*)(\.omt)/;
// Geeft een set zogenaamde DocumentLinks terug die VSCode in de editor toont.
class OMTLinkProvider {
    provideDocumentLinks(document) {
        const DocumentLinks = findOMTUrl(document);
        return Promise.resolve(DocumentLinks ? DocumentLinks : []);
    }
}
exports.default = OMTLinkProvider;
// Loop door de regels van een OMT bestand en zoek links naar andere OMT bestanden
// TODO: Loop alleen door de import regels heen.
function findOMTUrl(document) {
    let _DocumentLinks = [];
    for (let l = 0; l <= document.lineCount - 1; l++) {
        const line = document.lineAt(l);
        const match = MATCHER.exec(line.text);
        if (match) {
            const link = match[0].replace(/\'/, '').trim();
            const start = new vscode_2.Position(line.lineNumber, match[0].length - match[0].trim().length);
            const end = start.translate(0, match[0].length - 1);
            // Maak een lege Uri aan om later een relative path in te stoppen.
            let url = vscode_2.Uri.file('');
            url = url.with({
                scheme: 'file',
                path: path.resolve(path.dirname(document.fileName), link)
            });
            _DocumentLinks.push(new vscode_1.DocumentLink(new vscode_2.Range(start, end), url));
        }
        if (l === document.lineCount) {
            break;
        }
    }
    return _DocumentLinks;
}
//# sourceMappingURL=provider.js.map