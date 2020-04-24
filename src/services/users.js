import axios from 'axios';
// import { api, updateToken } from './api-helper';
const BASE_URL = 'http://localhost:3000'

const loginUser = async (data) => {
  try {
    const loginData = await axios.post(`${BASE_URL}/login`, data);
    // updateToken(loginData.data.token);
    return loginData.data;
  } catch (e) {
    console.error(e);
    return false
  }
}

const getTherapists = async () => {
  try {
    const allTherapists = await axios(`${BASE_URL}/therapists`)
    return allTherapists.data;
  }catch(e){
    console.error(e.message);
  }
}

const getOneTherapist = async (therapistId) => {
  try {
    const therapist = await axios(`${BASE_URL}/therapists/${therapistId}`)
    return therapist.data
  }catch(e){
    console.error(e.message);
  }
}


const registerUser = async (data) => {
  try{
    const resp = await axios.post(`${BASE_URL}/users`, data);
    console.error(resp.data);
    return resp.data;
  }catch(e){
    console.error(e.message);
  }
};

const getUserAppointments = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/users/1/appointments`)
    return resp.data;
  } catch (e) {
    console.error(e.message);
  }
}

const createUserAppointment = async (appointment) => {

  try {
    const resp = await axios.post(`${BASE_URL}/users/1/appointments`, appointment)
    return resp.data
  } catch(e) {
    console.error(e);
    return false;
  }
}

const editUserAppointment = async (appointmentId, appointment) => {
  try {
    const resp = await axios.put(`${BASE_URL}/users/1/appointments/${appointmentId}`, appointment);
    return resp.data
  } catch(e) {
    console.error(e);
    return false;
  }
}

const deleteUserAppointment = async (appointmentId) => {
  try {
    const resp = await axios.delete(`${BASE_URL}/users/1/appointments/${appointmentId}`)
    return resp.data
  } catch(e) {
    console.error(e);
    return false
  }
}


export {
  registerUser,
  loginUser,
  getTherapists,
  getOneTherapist,
  getUserAppointments,
  createUserAppointment,
  editUserAppointment,
  deleteUserAppointment,
}
