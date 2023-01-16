import axios from "axios";
import { Alert } from "react-native";
import { API_BASE_URL as baseUrl } from "@env";

const Requests = {
  DAILY_FORM_REQUEST: `${baseUrl}/api/v1/medical-daily-form`,
  RED_EVAT_REQUEST: `${baseUrl}/api/v1/red-evat`,
  PATIENT_REQUEST: `${baseUrl}/api/v1/patient`,
  RECORD_REQUEST: `${baseUrl}/api/v1/record`,
  DOCTOR_REQUEST: `${baseUrl}/api/v1/doctor`,
  NURSE_REQUEST: `${baseUrl}/api/v1/nurse`,
  QA_REQUEST: `${baseUrl}/api/v1/qa`,
  RESIDENT_REQUEST: `${baseUrl}/api/v1/resident`,
  LOGIN_REQUEST: `${baseUrl}/api/v1/auth`,
};
const useFetch = () => {
  const patientRequest = async (data) => {
    try {
      await axios.post(Requests.PATIENT_REQUEST, {
        ...data,
      });
      console.log("Paciente Registrado");
    } catch (err) {
      console.log("Paciente no registrado");
    }
  };

  const loginRequest = async (data) => {
    try {
      const user = await axios.post(Requests.LOGIN_REQUEST, {
        ...data,
      });
      Alert.alert("Bienvenido");
    } catch (err) {
      console.log(err);
      throw new Error(err.response.data.msg);
    }
  };
  return { patientRequest, loginRequest };
};
export default useFetch;
