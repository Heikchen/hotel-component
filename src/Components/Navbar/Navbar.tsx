import classNames from 'classnames';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <div className={classNames('bg-primary', 'h-fit', 'py-5', 'mb-20')}>
      <h1
        className={classNames(
          'text-white',
          'hidden',
          'lg:block',
          'container',
          'xl:px-40',
          'lg:px-8'
        )}
      >
        Desktop
      </h1>
      <h1
        className={classNames(
          'text-white',
          'lg:hidden',
          'block',
          'container',
          'px-4'
        )}
      >
        Mobile
      </h1>
    </div>
  );
};

export default Navbar;
