import axios from "axios";
<<<<<<< HEAD
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
=======

const Requests = {
	DAILY_FORM_REQUEST: "http://127.0.0.1:8000/api/v1/medical-daily-form",
	RED_EVAT_REQUEST: "http://127.0.0.1:8000/api/v1/red-evat",
	PATIENT_REQUEST: "http://192.168.100.120:8000/api/v1/patient",
	RECORD_REQUEST: "http://127.0.0.1:8000/api/v1/record",
	DOCTOR_REQUEST: "http://127.0.0.1:8000/api/v1/doctor",
	NURSE_REQUEST: "http://127.0.0.1:8000/api/v1/nurse",
	QA_REQUEST: "http://127.0.0.1:8000/api/v1/qa",
	RESIDENT_REQUEST: "http://127.0.0.1:8000/api/v1/resident",
	LOGIN_REQUEST: "http://127.0.0.1:8000/api/v1/login",
};

const useFetch = () => {
	const patientRequest = async data => {
		try {
			await axios.post(Requests.PATIENT_REQUEST, {
				...data,
			});
			console.log("Paciente Registrado");
		} catch (err) {
			console.log("Paciente no registrado");
		}
	};

	const loginRequest = async data => {
		console.log(data);
		try {
			await axios.post(Requests.LOGIN_REQUEST, {
				...data,
			});

			console.log("te has logeado");
		} catch (err) {
			const message = err.response.data.msg;
			throw new Error(message);
		}
	};

	return { patientRequest, loginRequest };
};

>>>>>>> develop
export default useFetch;
