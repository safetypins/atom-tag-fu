'use babel';

import AtomTagFuView from './atom-tag-fu-view';
import { CompositeDisposable } from 'atom';

export default {

  atomTagFuView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomTagFuView = new AtomTagFuView(state.atomTagFuViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomTagFuView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-tag-fu:insert': () => this.insert()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomTagFuView.destroy();
  },

  serialize() {
    return {
      atomTagFuViewState: this.atomTagFuView.serialize()
    };
  },

  insert() {
    
  }

};
