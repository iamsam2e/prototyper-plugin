import { registerShortcut } from "@wordpress/keyboard-shortcuts";
import { dispatch } from "@wordpress/data";
import { select } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";

const groupShortcut = {
  category: "block",
  description: "Group selected blocks",
  keyCombination: { modifier: "primary", character: "g" },
};

registerShortcut(groupShortcut, () => {
  const { clientIds } = select(blockEditorStore).getSelectedBlockClientIds();
  if (clientIds.length) {
    dispatch(blockEditorStore).multiSelect(clientIds);
    dispatch(blockEditorStore).replaceInnerBlocks(clientIds[0], [], null);
  }
});
