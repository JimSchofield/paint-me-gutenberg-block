/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;

const { RichText } = wp.editor;

registerBlockType('guty2/hello-world', {
    title: 'Hello World!',
    icon: 'welcome-write-blog',
    category: 'common',

    attributes: { // Somewhat like setting initial state in a react app
        text: {
            type: 'array',
            selector: 'h2',
            source: 'children'
        }
    },

    // The editor "render" function
    edit(props) {
        const { className, setAttributes } = props;
        const { text } = props.attributes;

        return (
            <div className={className}>
                <RichText
                    tag="h2"
                    placeholder={'Enter title'}
                    value={ text }
                    onChange={(text) => setAttributes({text})}
                    />
            </div>
        );
    },

    // The save "render" function
    save(props) {
        const { className } = props;
        const { text } = props.attributes;

        return (
            <div className={className}>
                <h2>{text}</h2>
            </div>
        );
    }

});
