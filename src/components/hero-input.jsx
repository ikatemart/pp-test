'use client';
import cx from 'clsx';
import { useRef, useState } from 'react';

const HeroInput = () => {
  const inputRef = useRef();
  const [value, setValue] = useState('');
  const [validationErrorCode, setValidationErrorCode] = useState(null); // null | 'empty' | 'invalid'
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();

    // error? -> reset and focus input
    if (status === 'error') {
      setValue('');
      setStatus(null);
      setTimeout(() => inputRef.current.focus());
      return;
    }

    // validate email
    if (!value.trim()) {
      setValidationErrorCode('empty');
      return;
    }
    if (!isValidEmail(value.trim())) {
      setValidationErrorCode('invalid');
      return;
    }

    // set "loading" status
    setStatus('loading');

    // simulate server response
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        setStatus('success');
      } else {
        setStatus('error');
        setValue('Oops! Something went wrong');
      }
    }, 1000);
  };

  const handleInput = (e) => {
    setValue(e.target.value);
    setStatus(null);
    setValidationErrorCode(null);
  };

  return (
    <form className="relative" noValidate onSubmit={handleSubmit} aria-label="Free Trial Sign Up">
      <div className="flex justify-between p-6 relative">
        <Background />
        <Border />
        <Input
          value={value}
          disabled={status === 'loading' || status === 'error'}
          invalid={!!validationErrorCode}
          inputRef={inputRef}
          onInput={handleInput}
        />
        <Button status={status} />
      </div>
      <ValidationError errorCode={validationErrorCode} />
    </form>
  );
};

const Border = () => {
  return (
    <div
      className={cx(
        'absolute inset-0 rounded-full pointer-events-none mix-blend-overlay',
        'border-image-[linear-gradient(to_bottom,_#fff_0%,_rgba(255,255,255,0.5)_100%)]'
      )}
    />
  );
};

const Background = () => {
  return (
    <div className="absolute inset-0 rounded-full overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(267deg,_#fff_15.5%,_rgba(255,255,255,0.17)_78.1%)] mix-blend-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(122deg,_#fff_-2.6%,_rgba(255,255,255,0.50)_60.8%)] mix-blend-overlay" />
    </div>
  );
};

const Input = ({ value, disabled, invalid, inputRef, onInput }) => {
  return (
    <input
      className={cx(
        'grow pr-16 pl-26 relative outline-none opacity-80 bg-transparent',
        'text-white text-16 font-light leading-125 tracking-p2',
        'placeholder:bg-clip-text placeholder:text-transparent',
        'placeholder:bg-[linear-gradient(90deg,_#eac8f2_0%,_#e6adec_32.4%,_#d49ee8_72%,_#ca97e6_100%)]'
      )}
      ref={inputRef}
      value={value}
      aria-invalid={invalid}
      type="email"
      placeholder="Your business email..."
      disabled={disabled}
      spellCheck={false}
      required={true}
      onInput={onInput}
    />
  );
};

const Button = ({ status }) => {
  return (
    <button
      className={cx(
        'h-48 rounded-full relative transition-all duration-300',
        'text-16 font-medium leading-100 tracking-0',
        !status && 'w-[168px]',
        status && 'w-48',
        !status && 'bg-purple',
        status === 'loading' && 'bg-purple',
        status === 'success' && 'bg-positive',
        status === 'error' && 'bg-pink'
      )}
      disabled={status === 'loading' || status === 'success'}
    >
      <ButtonContent show={!status}>Free Trial</ButtonContent>
      <ButtonContent show={status === 'loading'}>
        <Spinner />
      </ButtonContent>
      <ButtonContent show={status === 'success'}>
        <SuccessIcon />
      </ButtonContent>
      <ButtonContent show={status === 'error'}>
        <ErrorIcon />
      </ButtonContent>
    </button>
  );
};

const ButtonContent = ({ show = false, children }) => {
  return (
    <div
      className={cx(
        'absolute inset-0 flex justify-center items-center',
        'transition-all duration-300',
        !show && 'opacity-0 scale-50'
      )}
      aria-hidden={!show}
    >
      {children}
    </div>
  );
};

const ValidationError = ({ errorCode }) => {
  const message =
    {
      empty: 'Email is a required field',
      invalid: 'Please provide a valid email address',
    }[errorCode] || null;

  return (
    <div
      className={cx(
        'absolute top-full left-0 ml-32 mt-12 transition-opacity duration-200',
        'text-negative leading-125 tracking-p2',
        !message && 'opacity-0'
      )}
      role="alert"
    >
      {message}
    </div>
  );
};

const Spinner = () => {
  return (
    <svg
      className="animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 34 34"
      fill="none"
      aria-label="Loading..."
    >
      <circle className="stroke-[#b9f]" cx="17" cy="17" r="15" strokeWidth="4" />
      <path
        className="stroke-white"
        strokeLinecap="round"
        strokeWidth="4"
        d="M32 17c0-8.284-6.716-15-15-15"
      />
    </svg>
  );
};

const SuccessIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="14"
      viewBox="0 0 24 18"
      fill="none"
      aria-label="Success"
    >
      <path
        className="stroke-white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="m2.143 9.762 6.495 6.095 13.22-13.714"
      />
    </svg>
  );
};

const ErrorIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 18 18"
      fill="none"
      aria-label="Error"
    >
      <path
        className="stroke-white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M15.857 2.143 2.143 15.857M2.143 2.143l13.714 13.714"
      />
    </svg>
  );
};

const isValidEmail = (email) => {
  const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexPattern.test(email);
};

export default HeroInput;
