import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

type ButtonProps = {
  handleClick?: (id: string) => void;
  className: string;
  id: string;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  handleClick,
  children,
  id,
  className,
}) => {
  return (
    <button
      onClick={() => {
        handleClick && handleClick(id);
      }}
      className={classNames(
        'px-6',
        'py-2',
        'w-full',
        'rounded-lg',
        'font-semibold',
        'text-xl',
        'h-12',
        'border',
        'border-primary',
        'text-primary',
        'bg-white',
        'text-center',
        'lg:w-fit',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
