window.axios = require('axios');
import env from '../../env';

axios.defaults.baseURL = env.HOST_API;
