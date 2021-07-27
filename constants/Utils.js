import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const widthToDp = (number) => {
  let givenWidth = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const heightToDp = (number) => {
  let givenHeight = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

const listenToOrientationChanges = (ref) => {
  Dimensions.addEventListener('change', (e) => {
    width = e.screen.width;
    height = e.screen.height;
  });

  ref.setState({
    orientation: height > width ? 'portrait' : 'landscape',
  });
};

const removeOrientationChanges = () => {
  Dimensions.removeEventListener('change');
};

export {
  widthToDp,
  heightToDp,
  listenToOrientationChanges,
  removeOrientationChanges,
};
