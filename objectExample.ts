type ExampleObject = {
  name: string;
  age: number;
  likesCoffee: boolean;
  favoriteCollection: Array<any>;
  petInfo: Object;
};

const Bob: ExampleObject = {
  name: 'Bob',
  age: 20,
  likesCoffee: true,
  favoriteCollection: ['baseball card 1', 'baseball card 2', 'baseball card 3'],
  petInfo: {
    name: 'Phil',
    type: 'cat',
    age: 2,
  },
};

/**
 * Example using function with return type of an interface
 * @interface
 * @function
 */
interface Volume {
  x: number;
  y: number;
  z: number;
}

function returnsInterface(length: number, width: number, height: number): Volume {
  return {
    x: length,
    y: width,
    z: height,
  };
}
