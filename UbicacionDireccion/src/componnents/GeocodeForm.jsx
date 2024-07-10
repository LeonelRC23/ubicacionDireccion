import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const GeocodeForm = ({ onCoordinatesFetched }) => {
  const formik = useFormik({
    initialValues: {
      address: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            values.address
          )}&format=json&limit=1`
        );
        if (response.data && response.data.length > 0) {
          console.log(response.data[0]);
          const { lat, lon } = response.data[0];
          onCoordinatesFetched({ lat, lon });
        } else {
          alert('No se encuentra la direccion');
        }
      } catch (error) {
        console.log('Error', error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='address'>Ingresa una direccion</label>
      <input
        type='text'
        id='address'
        name='address'
        onChange={formik.handleChange}
        value={formik.values.address}
      />
      <button type='submit'>Obtener coordenadas</button>
    </form>
  );
};

export default GeocodeForm;
