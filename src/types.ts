export type Hotel = {
  image: string;
  stars: number;
  name: string;
  city: string;
  distance: number;
  capacities: {
    rooms: number;
    meetingRoom: number;
  };
  hygiene: boolean;
  grade: number;
  price: number;
};
