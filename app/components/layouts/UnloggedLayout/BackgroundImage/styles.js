import startupPageImg from 'images/startup_page.jpeg';

export default {
  imageContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundImage: `url(${startupPageImg})`,
    backgroundSize: 'cover',
    zIndex: 1,
  },
  imageOpacity: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
};
