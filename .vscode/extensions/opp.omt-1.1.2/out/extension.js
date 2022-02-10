"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const provider_1 = require("./provider");
function activate(context) {
    const provider = new provider_1.default();
    // register document link provider for 'omt' files
    const providerRegistrations = vscode_1.Disposable.from(vscode_1.languages.registerDocumentLinkProvider({ scheme: 'file', language: 'omt' }, provider));
    context.subscriptions.push(providerRegistrations);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map