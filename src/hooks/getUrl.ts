const getUrl = () => {
  const hostName = window.location.hostname;
  let url = 'http://localhost:3001';

  switch (hostName) {
    case 'url':
      url = 'https://';
      break;
    case 'url2':
      url = 'https://';
      break;
    default:
      break;
  }
  return url;
};

export { getUrl };
