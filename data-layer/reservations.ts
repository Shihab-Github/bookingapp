import axios from "axios";
import { GET_RESERVATIONS_API, CREATE_RESERVATIONS_API } from "./API";
import { IReservation } from "@/interface/Reservation";

export const getReservations = (): Promise<IReservation[]> => {
  return new Promise((resolve, reject) => {
    let url = GET_RESERVATIONS_API;
    axios
      .get(url)
      .then((response) => {
        const data = response.data.map((item: any) => {
          return {
            ...item,
            id: item._id,
          };
        });

        return resolve(data);
      })
      .catch((err) => reject(err));
  });
};

export const getReservationById = (id: string): Promise<IReservation> => {
  return new Promise((resolve, reject) => {
    let url = GET_RESERVATIONS_API + "/" + id;

    axios
      .get(url)
      .then((response) => {
        const data: IReservation = {
          ...response.data,
          id: response.data._id,
        };
        return resolve(data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

export const createBooking = (data: IReservation) => {
  return new Promise((resolve, reject) => {
    axios
      .post(CREATE_RESERVATIONS_API, data)
      .then((response) => resolve(response.data))
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteBooking = (id: string) => {
  return new Promise((resolve, reject) => {
    let url = GET_RESERVATIONS_API + "/" + id;
    axios
      .delete(url)
      .then((response) => resolve(response.data))
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateBooking = (id: string, data: any) => {
  return new Promise((resolve, reject) => {
    let url = GET_RESERVATIONS_API + "/" + id;
    axios
      .patch(url, data)
      .then((response) => resolve(response.data))
      .catch((err) => {
        reject(err);
      });
  });
};
