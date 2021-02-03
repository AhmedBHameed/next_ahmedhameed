import Codeblock from './Codeblock';
import Audio from './Audio';
import Typography from '../../Typography/Typography';

export const components = {
  Audio,
  h1: props => (
    <Typography>
      <h1 className="font-bold text-primary" {...props}></h1>
    </Typography>
  ),
  h2: props => (
    <Typography>
      <h2 className="text-primary" {...props}></h2>
    </Typography>
  ),
  pre: props => <div {...props} />,
  code: props => <Codeblock {...props} />,
};
