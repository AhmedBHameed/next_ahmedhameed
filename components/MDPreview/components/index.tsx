import Typography from '../../Typography/Typography';
import Audio from './Audio';
import Codeblock from './Codeblock';

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
  p: props => <p {...props} className="text-primary" />,
  a: props => <a {...props} />,
  pre: props => <div {...props} />,
  code: props => <Codeblock {...props} />,
};
