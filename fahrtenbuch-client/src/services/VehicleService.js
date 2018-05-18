import Api from '@/services/Api';

export default {
  fetchVehicles() {
    return Api().get('vehicles');
  },
};
