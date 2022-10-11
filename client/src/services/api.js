import Client from "./request";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNotification } from "../hooks/Notification";

function useGetUser() {
  const { auth } = useAuth();
  const [userData, setUserData] = useState();
  const { errorNotification } = useNotification();
  useEffect(() => {
    (async function () {
      if (auth.currentUser) {
        const data = (await Client.get(auth.currentUser, "/user/get")).data;
        if (data.error) {
          errorNotification(data.error);
        } else {
          setUserData(data);
        }
      }
    })();
  }, [auth.currentUser]);
  return userData;
}

function useGetClasses() {
  const { auth } = useAuth();
  const [classData, setClassData] = useState();
  const { errorNotification } = useNotification();
  useEffect(() => {
    (async function () {
      if (auth.currentUser) {
        const data = (await Client.get(auth.currentUser, "/class/get")).data;
        if (data.error) {
          errorNotification(data.error);
        } else {
          setClassData(data);
        }
      }
    })();
  }, [auth.currentUser]);
  return classData;
}

function useGetAllClasses() {
  const { auth } = useAuth();
  const [classData, setClassData] = useState();
  const { errorNotification } = useNotification();
  useEffect(() => {
    (async function () {
      if (auth.currentUser) {
        const data = (await Client.get(auth.currentUser, "/class/getall")).data;
        if (data.error) {
          errorNotification(data.error);
        } else {
          setClassData(data);
        }
      }
    })();
  }, [auth.currentUser]);
  return classData;
}

function useGetTeacherClasses() {
  const { auth } = useAuth();
  const [classData, setClassData] = useState();
  const { errorNotification } = useNotification();
  useEffect(() => {
    (async function () {
      if (auth.currentUser) {
        const data = (await Client.get(auth.currentUser, "/class/getall")).data;
        if (data.error) {
          errorNotification(data.error);
        } else {
          setClassData(data);
        }
      }
    })();
  }, [auth.currentUser]);
  return classData;
}

function useCreateClass() {
  return function (classInformation) {
    const { name } = classInformation;
    return name;
  };
}

export {
  useCreateClass,
  useGetUser,
  useGetClasses,
  useGetAllClasses,
  useGetTeacherClasses,
};
