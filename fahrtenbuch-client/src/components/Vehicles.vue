<template>
   <div class="vehicles">
     <h1>Vehicles</h1>
     This file will list all the vehicles.

      <div
      v-for="vehicle in vehicles"
      :key="vehicle.id">
        <p>
          <span><b>{{ vehicle.title }}</b></span><br />
          <span>{{ vehicle.description }}</span>
        </p>
      </div>
   </div>
</template>

<script>
import VehicleService from '@/services/VehicleService';

export default {
  name: 'vehicles',
  data() {
    return {
      vehicles: [],
    };
  },
  mounted() {
    this.getVehicles();
  },
  methods: {
    async getVehicles() {
      const response = await VehicleService.fetchVehicles();
      this.vehicles = response.data;
    },
  },
};
</script>
