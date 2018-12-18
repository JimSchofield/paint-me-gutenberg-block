/**
 * WordPress dependencies
 */

import Canvas from "./components/Canvas";

const { registerBlockType } = wp.blocks;

const { RichText, InspectorControls, ColorPalette } = wp.editor;

registerBlockType("guty2/paint-me", {
    title: "Paint me",
    icon: "admin-customizer",
    category: "common",

    attributes: {
        backgroundColor: {
            type: String,
            default: "blue"
        },
        linesList: {
            type: Array,
            default: []
        }
    },

    edit(props) {
        const { className, setAttributes } = props;
        const { backgroundColor, linesList } = props.attributes;

        function onBackgroundColorChange(change) {
            setAttributes({
                backgroundColor: change
            });
        }

        function onLineAdded(line) {
            setAttributes({
                linesList: [...linesList, line]
            })
        }

        const data = {
            backgroundColor,
            linesList
        };

        return [
            <InspectorControls>
                <div style={{ padding: '1em 0' }}>
                    <div style={{'margin-bottom': '.5em'}}>Select a background color:</div>
                    <ColorPalette
                        value={backgroundColor}
                        onChange={onBackgroundColorChange}
                    />
                </div>
            </InspectorControls>,
            <div className={className} data-react-props={JSON.stringify(data)}>
                <Canvas
                    backgroundColor={backgroundColor}
                    onLineAdded={onLineAdded}
                    linesList={linesList}
                />
            </div>
        ];
    },

    save(props) {
        const { className } = props;
        const { backgroundColor, linesList } = props.attributes;

        const data = {
            backgroundColor,
            linesList
        };

        return (
            <div
                className={className}
                data-react-props={JSON.stringify(data)}
            />
        );
    }
});
