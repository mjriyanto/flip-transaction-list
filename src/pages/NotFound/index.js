import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  return (
    <div>
      <p>Page not found.</p>
      <br />
      <br />
      <p
        style={{ textDecoration: 'underline', cursor: 'pointer' }}
        onClick={() => history.push('/')}
      >
        Back to Homepage
      </p>
    </div>
  );
};

export default NotFound;
