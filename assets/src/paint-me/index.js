/**
 * WordPress dependencies
 */

 import Canvas from './components/Canvas';

const { registerBlockType } = wp.blocks;

const { RichText } = wp.editor;

registerBlockType('guty2/paint-me', {
    title: 'Paint me',
    icon: 'admin-customizer',
    category: 'common',

    attributes: { // Somewhat like setting initial state in a react app
    },

    // The editor "render" function
    edit(props) {
        const { className, setAttributes } = props;
        const { text } = props.attributes;

        return (
            <div className={className}>
                <Canvas />
            </div>
        );
    },

    // The save "render" function
    save(props) {
        const { className } = props;
        const { text } = props.attributes;

        return (
            <div className={className}>
                <Canvas />
            </div>
        );
    }

});
