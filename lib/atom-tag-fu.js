'use babel';
import packageConfig from './config-schema.json';
import { CompositeDisposable } from 'atom';

export default {

  config: packageConfig,
  subscriptions: null,
  tag: null,

  activate() {
    this.tag = atom.config.get('atom-tag-fu.tag');
    this.html = '<' + this.tag + '></' + this.tag + '>';
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(
      atom.config.onDidChange('atom-tag-fu.tag', ({oldValue, newValue}) => {
        this.tag = newValue;
      })
    );
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-tag-fu:insert': () => this.insertTag()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  insertTag() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      editor.insertText(this.html);
    }
  }
};
