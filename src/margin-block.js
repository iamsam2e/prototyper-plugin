import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, InnerBlocks } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "./style.scss";

registerBlockType("prototyper/margin-block", {
  title: "Margin Block",
  icon: "editor-contract",
  category: "layout",
  attributes: {
    margin: {
      type: "string",
      default: "0px",
    },
  },
  edit: (props) => {
    const { attributes, setAttributes } = props;
    const { margin } = attributes;

    return (
      <div className="margin-block" style={{ margin }}>
        <InspectorControls>
          <PanelBody title="Margin Settings">
            <TextControl
              label="Margin"
              value={margin}
              onChange={(newMargin) => setAttributes({ margin: newMargin })}
            />
          </PanelBody>
        </InspectorControls>
        <InnerBlocks />
      </div>
    );
  },
  save: (props) => {
    const { attributes } = props;
    const { margin } = attributes;

    return (
      <div className="margin-block" style={{ margin }}>
        <InnerBlocks.Content />
      </div>
    );
  },
});
