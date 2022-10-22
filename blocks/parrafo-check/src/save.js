import { RichText } from '@wordpress/block-editor';

const Save = (props) => {
    const { className, attributes, setAttributes } = props;
    const { text } = attributes;
    return(
        <div className={className}>
            <i className="fa-solid fa-check"></i>
            <RichText.Content
            tagName='p'
            className='parrafo-check'
            value={text}
            />
        </div>
    );
}

export default Save;