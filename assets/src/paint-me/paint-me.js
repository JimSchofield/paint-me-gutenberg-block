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
        },
        lineColor: {
            type: String,
            default: "black"
        },
        lineWidth: {
            type: Number,
            default: 1
        }
    },

    edit(props) {
        const { className, setAttributes } = props;
        const { backgroundColor, linesList, lineColor, lineWidth } = props.attributes;

        function clearLines() {
            setAttributes({ linesList: []});
        }

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

        function onLineColorChange(change) {
            setAttributes({
                lineColor: change
            })
        }
        
        function onLineWidthChange(event) {
            setAttributes({
                lineWidth: event.target.value
            })
        }

        const data = {
            backgroundColor,
            linesList,
        };

        return [
            <InspectorControls>
                <div style={{ padding: '1em 0' }}>
                    <div style={{'margin-bottom': '.5em'}}>Clear lines:</div>
                    <button onClick={clearLines}>Clear lines</button>
                </div>
                <div style={{ padding: '1em 0' }}>
                    <div style={{'margin-bottom': '.5em'}}>Select line color:</div>
                    <ColorPalette
                        value={lineColor}
                        onChange={onLineColorChange}
                    />
                </div>
                <div style={{ padding: '1em 0' }}>
                    <div style={{'margin-bottom': '.5em'}}>Select line width:</div>
                    <select onChange={onLineWidthChange} value={lineWidth}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="8">8</option>
                        <option value="12">12</option>
                        <option value="16">16</option>
                        <option value="24">24</option>
                    </select>
                </div>
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
                    lineColor={lineColor}
                    lineWidth={lineWidth}
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
