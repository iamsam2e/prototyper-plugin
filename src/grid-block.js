import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";
import "./style.scss";

registerBlockType("prototyper/grid-block", {
  title: "Grid Block",
  icon: "grid-view",
  category: "layout",
  attributes: {
    columns: {
      type: "number",
      default: 3,
    },
  },
  edit: (props) => {
    const { attributes, setAttributes } = props;
    const { columns } = attributes;

    return (
      <div className={`grid-block columns-${columns}`}>
        <InspectorControls>
          <PanelBody title="Grid Settings">
            <RangeControl
              label="Columns"
              value={columns}
              onChange={(newColumns) => setAttributes({ columns: newColumns })}
              min={1}
              max={6}
            />
          </PanelBody>
        </InspectorControls>
        <InnerBlocks allowedBlocks={["core/paragraph", "core/image"]} />
      </div>
    );
  },
  save: (props) => {
    const { attributes } = props;
    const { columns } = attributes;

    return (
      <div className={`grid-block columns-${columns}`}>
        <InnerBlocks.Content />
      </div>
    );
  },
});
