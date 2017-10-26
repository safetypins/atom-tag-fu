'use babel';

import packageConfig from './config-schema.json';
import { CompositeDisposable, Point, Range } from 'atom';

export default {

  config: packageConfig,
  subscriptions: null,
  tag: null,
  closingTag: /<\/([A-Z|a-z|0-9]*)>/,

  activate() {
    this.tag = atom.config.get('atom-tag-fu.tag');
    this.tagLength = this.tag.length
    this.html = '<' + this.tag + '></' + this.tag + '>';
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(
      atom.config.onDidChange('atom-tag-fu.tag', ({oldValue, newValue}) => {
        this.tag = newValue;
      })
    );
    this.subscriptions.add(atom.commands.add('atom-text-editor:not([mini])', {
      'atom-tag-fu:insert': () => this.insertTag(),
      'atom-tag-fu:escape': () => this.escape()
    }));
    // this.subscriptions.add(atom.commands.add('atom-text-editor:not([mini])', {
    //   'atom-tag-fu:escape': () => this.escape()
    // }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  escape() {
    console.log("escape()");
    const editor = atom.workspace.getActiveTextEditor();
    cursors = editor.getCursorScreenPositions();
    if (cursors.length == 2) {
      cursor = cursors[0];
      searchRange = [cursor, [cursor.row, Infinity]];

      found = false;
      editor.scanInBufferRange(this.closingTag, searchRange, function(arg) {
        var position, range, stop;
        range = arg.range, stop = arg.stop;
        found = true;
        position = range.start;
        position = [position.row, position.column];
        editor.setCursorBufferPosition(position);
        return stop();
      });
      return found;
    } else {
      editor.scanInBufferRange(this.closingTag, searchRange, function(arg) {
        var position, range, stop;
        range = arg.range, stop = arg.stop;
        found = true;
        position = range.end;
        position = [position.row, position.column];
        editor.setCursorBufferPosition(position);
        return stop();
      });
    }
  },

  insertTag() {
    console.log("insertTag()");
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      let cursor = editor.getCursorScreenPosition();
      // let cursorStart = new Point(cursor1.row,cursor1.column);
      // alert(cursor1);
      let openTagStart = new Point(cursor.row, cursor.column+1);
      let openTagEnd = new Point(cursor.row, cursor.column+1+this.tagLength);
      let openTag = new Range(openTagStart, openTagEnd);
      let closeTagStart = new Point(cursor.row, cursor.column+4+this.tagLength);
      let closeTagEnd = new Point(cursor.row, cursor.column+4+this.tagLength*2);
      let closeTag = new Range(closeTagStart, closeTagEnd);

      editor.insertText(this.html);
      editor.setSelectedScreenRanges([openTag,closeTag]);
    }
  }

};
