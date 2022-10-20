import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import './styles.scss';

registerBlockType('elebe/parrafo-check', {
    title: 'Parrafo Check',
    category: 'widgets',
    icon: 'yes',
    edit,
    save: () => <h2>hola</h2>
});