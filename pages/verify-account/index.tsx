import {NextPage} from 'next';
import {useRouter} from 'next/router';
import React, {useState, useEffect, useCallback} from 'react';
import Onboarding from '../../components/Onboarding/Onboarding';
import Typography from '../../components/Typography/Typography';
import ROUTES from '../../config/Routes';
import {countDown} from '../../util/countDown';

const VerifyAccount: NextPage = () => {
  const router = useRouter();
  const [time, setTime] = useState(0);

  const verifyAccount = useCallback(() => {
    // console.log(router.query);
    countDown.start(time => {
      setTime(time / 1000);
    }, 30000);

    countDown.onFinish(() => {
      router.push(ROUTES.login.path);
    });
  }, [router.query, time, setTime]);

  useEffect(() => {
    if (router.query?.userId) verifyAccount();
    return () => countDown.end();
  }, [router.query?.userId]);

  return (
    <Onboarding title="Thank you!" backgroundUrl="/images/keyboard.jpg">
      <Typography className="mb-16 text-center mt-2">
        <p className="md:text-lg text-secondary">Account has been activated.</p>
        {time ? <p className="md:text-lg text-secondary">Return to login in {time}</p> : <p>Verifying...</p>}
      </Typography>
    </Onboarding>
  );
};

export default VerifyAccount;
