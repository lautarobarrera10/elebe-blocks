import { RichText } from '@wordpress/block-editor';

const Edit = (props) => {
    const { className, attributes, setAttributes } = props;
    const { text } = attributes;
    return(
        <div className={className}>
            <i className="fa-solid fa-check"></i>
            <RichText
            tagName='p'
            placeholder='Escribe tu párrafo'
            className='parrafo-check'
            value={text}
            onChange={(newValue) => setAttributes({text: newValue})}
            />
        </div>
    );
}

export default Edit;