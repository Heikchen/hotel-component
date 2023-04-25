import classNames from 'classnames';
import { FC } from 'react';
import Button from 'src/Components/Button/Button';
import Stars from 'src/Components/Stars/Stars';
import { useHotelContext } from 'src/Context/HotelContext';
import { ReactComponent as CheckIcon } from 'src/icons/icon-check.svg';
import { ReactComponent as HygieneIcon } from 'src/icons/icon-hygiene.svg';
import { Hotel } from 'src/types';

const mapGradeToString = (grade: number) => {
  if (grade <= 7) return 'Ansprechend';
  if (grade <= 8) return 'Gut';
  if (grade <= 9) return 'Sehr gut';
};

type HotelComponentProps = {
  hotels: Hotel[];
};

const HotelComponent: FC<HotelComponentProps> = (props) => {
  const { hotels } = props;
  const { selected, setSelected } = useHotelContext();

  const handleClick = (id: string) => {
    const isSelected = selected.find((selected) => selected === id);
    if (!isSelected) {
      setSelected([...selected, id]);
    } else {
      const deleteSelection = selected.filter((selected) => selected !== id);
      setSelected(deleteSelection);
    }
  };

  return (
    <div className={classNames('container', 'sm:px-4', 'lg:px-8', 'xl:px-40')}>
      {hotels.map((hotel) => (
        <div
          key={`key-${hotel.name}`}
          className={classNames(
            'w-full',
            'border-y',
            'border-gray-light',
            'p-6',
            'mb-10',
            'h-fit',
            'grid',
            'flex',
            'flex-col',
            'sm:border',
            'lg:grid-cols-[253px_1.5fr_1fr]',
            'lg:gap-6'
          )}
        >
          <img
            src={hotel.image}
            alt={hotel.name}
            className={classNames(
              'h-28',
              'w-full',
              'object-cover',
              'object-center',
              'rounded-lg',
              'mb-6',
              'lg:mb-0',
              'lg:h-full'
            )}
          />
          <div>
            <div
              className={classNames(
                'border-b',
                'border-b-gray-light',
                'pb-3',
                'mb-3'
              )}
            >
              <div className={classNames('lg:pr-20')}>
                <Stars number={hotel.stars} name={hotel.name} />
                <h1 className={classNames('mb-3', 'mt-1')}>{hotel.name}</h1>
                <p className={classNames('whitespace-nowrap')}>{`${
                  hotel.city
                } - ${hotel.distance
                  .toString()
                  .replace('.', ',')} km entfernt vom Stadtzentrum`}</p>
              </div>
            </div>
            <div>
              <p className={classNames('text-xl', 'text-black')}>
                {hotel.capacities.rooms} Zimmer &#183;{' '}
                {hotel.capacities.meetingRoom} Tagungsräume
              </p>
              <div
                className={classNames(
                  'flex',
                  'gap-4',
                  'mb-6',
                  'mt-3',
                  'lg:mb-10'
                )}
              >
                {hotel.hygiene && (
                  <div
                    className={classNames(
                      'border-r',
                      'border-r-gray-light',
                      'flex',
                      'pr-4',
                      'items-center',
                      'gap-2'
                    )}
                  >
                    <HygieneIcon className={classNames('text-secondary')} />
                    <p>Hygiene-Zertifikat</p>
                  </div>
                )}
                <div className={classNames('flex', 'gap-2', 'items-center')}>
                  <p
                    className={classNames(
                      'text-white',
                      'font-semibold',
                      'text-lg',
                      'bg-primary',
                      'rounded',
                      'px-2',
                      'py-0.5'
                    )}
                  >
                    {hotel.grade.toString().replace('.', ',')}
                  </p>
                  <p>{mapGradeToString(hotel.grade)}</p>
                </div>
              </div>
              <a
                href="/#"
                className={classNames(
                  'text-secondary',
                  'underline',
                  'font-bold',
                  'text-lg'
                )}
              >
                Details ansehen
              </a>
            </div>
          </div>
          <div
            className={classNames(
              'flex',
              'mt-5',
              'justify-end',
              'items-end',
              'w-full',
              'lg:mt-0',
              'lg:h-full'
            )}
          >
            <div
              className={classNames(
                'w-full',
                'lg:w-fit',
                'lg:flex',
                'lg:flex-col',
                'lg:items-end',
                'lg:gap-5'
              )}
            >
              <h2
                className={classNames(
                  'font-semibold',
                  'text-3xl',
                  'text-right',
                  'mb-5',
                  'lg:mb-0'
                )}
              >
                ab {hotel.price} €
              </h2>
              <Button
                id={hotel.name}
                handleClick={() => {
                  handleClick(hotel.name);
                }}
                className={classNames(
                  selected.includes(hotel.name) && [
                    '!border-none',
                    '!text-white',
                    '!bg-primary',
                    'flex',
                    'gap-2',
                    'justify-center',
                    'items-center',
                  ]
                )}
              >
                {selected.includes(hotel.name) ? (
                  <span
                    className={classNames(
                      'inline-flex',
                      'justify-center',
                      'items-center'
                    )}
                  >
                    <CheckIcon className={classNames('text-white')} />
                    &nbsp; Ausgewählt
                  </span>
                ) : (
                  'Auswählen'
                )}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelComponent;
