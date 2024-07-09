import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  ColorPalette,
  InnerBlocks,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "./style.scss";

registerBlockType("prototyper/section-block", {
  title: "Section Block",
  icon: "columns",
  category: "layout",
  attributes: {
    backgroundColor: {
      type: "string",
      default: "#ffffff",
    },
    padding: {
      type: "string",
      default: "20px",
    },
  },
  edit: (props) => {
    const { attributes, setAttributes } = props;
    const { backgroundColor, padding } = attributes;

    return (
      <div className="section-block" style={{ backgroundColor, padding }}>
        <InspectorControls>
          <PanelBody title="Section Styles">
            <ColorPalette
              value={backgroundColor}
              onChange={(newColor) =>
                setAttributes({ backgroundColor: newColor })
              }
            />
            <TextControl
              label="Padding"
              value={padding}
              onChange={(newPadding) => setAttributes({ padding: newPadding })}
            />
          </PanelBody>
        </InspectorControls>
        <InnerBlocks />
      </div>
    );
  },
  save: (props) => {
    const { attributes } = props;
    const { backgroundColor, padding } = attributes;

    return (
      <div className="section-block" style={{ backgroundColor, padding }}>
        <InnerBlocks.Content />
      </div>
    );
  },
});
