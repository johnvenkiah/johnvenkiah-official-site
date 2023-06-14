import { useEffect, useRef } from 'react';
import { WidgetInstance } from 'friendly-challenge';

const FriendlyCaptcha = () => {
  const container = useRef();
  const widget = useRef();

  const doneCallback = (solution) => {
    console.log('Captcha was solved. The form can be submitted.');
    console.log(solution);
  };

  const errorCallback = (err) => {
    console.log('There was an error when trying to solve the Captcha.');
    console.log(err);
  };

  useEffect(() => {
    if (!widget.current && container.current) {
      widget.current = new WidgetInstance(container.current, {
        startMode: 'auto',
        doneCallback: doneCallback,
        errorCallback: errorCallback,
      });
    }

    return () => {
      if (widget.current !== undefined) widget.current.reset();
    };
  }, [container]);

  return (
    <div
      ref={container}
      className="frc-captcha dark"
      data-sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
    />
  );
};

export default FriendlyCaptcha;
