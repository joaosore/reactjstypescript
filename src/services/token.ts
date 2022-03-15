const getToken = localStorage.getItem('token');

const token = {
  headers: {
    Authorization: `Bearer ${getToken}`,
  },
};

export default token;
