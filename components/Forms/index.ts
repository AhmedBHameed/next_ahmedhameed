import dynamic from 'next/dynamic';

import Textarea from './Textarea';
import TextField from './TextField';

const SelectField = dynamic(() => import('./SelectField'), {ssr: false});
const MultiSelectField = dynamic(() => import('./MultiSelectField'), {ssr: false});

export * from './FormControl';
export * from './FieldLabel';
export * from './Upload/UploadImage';
export * from './models/SelectOption';
export {Textarea, TextField, SelectField, MultiSelectField};
