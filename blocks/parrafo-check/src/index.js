import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import save from './save';
import './styles.scss';

registerBlockType('elebe/parrafo-check', {
    title: 'Parrafo Check',
    category: 'widgets',
    icon: 'yes',
    attributes: {
        text: {
            source: 'html',
            selector: 'p'
        }
    },
    edit,
    save
});