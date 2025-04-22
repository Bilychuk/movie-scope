import { useEffect, useRef} from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { createSessionId } from '../../redux/auth/operations';

export default function LoginRedirect() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const hasRunRef = useRef(false);

  useEffect(() => {
     if (hasRunRef.current) return;
  hasRunRef.current = true;
    const token = params.get('request_token');
    const approved = params.get('approved');

    const existingSession = localStorage.getItem('session_id');

    if (token && approved === 'true') {
      if (existingSession) {
        navigate('/');
        return;
      }

      dispatch(createSessionId(token))
        .unwrap()
        .then(() => {
          navigate('/');
        })
        .catch(error => {
          navigate('/login');
        });
    } else {
      navigate('/login');
    }
  }, [dispatch, params, navigate]);

  return null;
}