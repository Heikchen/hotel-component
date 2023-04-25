import classNames from 'classnames';
import { ReactComponent as StarIcon } from 'src/icons/icon-star.svg';

interface StarsProps {
  number: number;
  name: string;
}

const starsHotel = (number: number, name: string) =>
  Array.from({ length: number }, (_, index) => (
    <StarIcon
      className={classNames('text-gray-dark')}
      key={`stars-${name}-${index}`}
    />
  ));

const Stars = ({ number, name }: StarsProps) => {
  return <div className={classNames('flex')}>{starsHotel(number, name)}</div>;
};

export default Stars;
