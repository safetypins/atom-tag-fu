'use babel';

import AtomTagFu from '../lib/atom-tag-fu';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('AtomTagFu', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('atom-tag-fu');
  });

  describe('when the atom-tag-fu:insert event is triggered', () => {
    it('inserts an HTML tag for easier editing', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      // expect(workspaceElement.querySelector('.atom-tag-fu')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      // atom.commands.dispatch(workspaceElement, 'atom-tag-fu:toggle');

      // waitsForPromise(() => {
      //   return activationPromise;
      // });

      runs(() => {
        // expect(workspaceElement.querySelector('.atom-tag-fu')).toExist();
        //
        // let atomTagFuElement = workspaceElement.querySelector('.atom-tag-fu');
        // expect(atomTagFuElement).toExist();
        //
        // let atomTagFuPanel = atom.workspace.panelForItem(atomTagFuElement);
        // expect(atomTagFuPanel.isVisible()).toBe(true);
        // atom.commands.dispatch(workspaceElement, 'atom-tag-fu:toggle');
        // expect(atomTagFuPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      // jasmine.attachToDOM(workspaceElement);

      // expect(workspaceElement.querySelector('.atom-tag-fu')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      // atom.commands.dispatch(workspaceElement, 'atom-tag-fu:toggle');

      // waitsForPromise(() => {
      //   return activationPromise;
      // });

      runs(() => {
        // Now we can test for view visibility
        // let atomTagFuElement = workspaceElement.querySelector('.atom-tag-fu');
        // expect(atomTagFuElement).toBeVisible();
        // atom.commands.dispatch(workspaceElement, 'atom-tag-fu:toggle');
        // expect(atomTagFuElement).not.toBeVisible();
      });
    });
  });
});
