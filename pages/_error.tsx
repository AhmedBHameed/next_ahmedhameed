function Error({statusCode}) {
  // eslint-disable-next-line no-console
  console.log('Error -> statusCode', statusCode);
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
}

Error.getInitialProps = ({res, err}) => {
  const status = err ? err.statusCode : 404;
  const statusCode = res ? res.statusCode : status;
  return {statusCode};
};

export default Error;
