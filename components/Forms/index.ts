import Textarea from './Textarea';
import TextField from './TextField';
import dynamic from 'next/dynamic';

const SelectField = dynamic(() => import('./SelectField'), {ssr: false});

export * from './FormControl';
export * from './FieldLabel';
export * from './Upload/UploadImage';
export {Textarea, TextField, SelectField};
