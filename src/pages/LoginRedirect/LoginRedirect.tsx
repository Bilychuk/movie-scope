import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { createSessionId } from '../../redux/auth/operations';

export default function LoginRedirect() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = params.get('request_token');
    const approved = params.get('approved');

    if (token && approved === 'true') {
      dispatch(createSessionId(token)).then(() => navigate('/'));
    } else {
      navigate('/login');
    }
  }, [dispatch, params, navigate]);

  return null;
}
