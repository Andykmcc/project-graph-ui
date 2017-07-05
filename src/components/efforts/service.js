import api from '../../services/api';

function getEfforts () {
  return api.get(`/efforts`);
}

export default {
  getEfforts
};
