import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";

const registAccount = async (
  account,
  isFirst,
  isGoogleCalendar,
  email,
  dayOfWeekChoices,
  startTime,
  endTime,
  phone,
  company,
  url,
  mainButton,
  isOneSubButton,
  googleId,
  mailSubject,
  mailContent,
  avatar,
  thumbnail,
  onlySubButton,
  multiSubButton,
  setErrorSnackOpen
) => {
  const docRef2 = doc(db, "account", localStorage.getItem("userId"));
  try {
    await updateDoc(docRef2, {
      username: account,
      email: email,
      phone: phone,
      url: url,
      isGoogleCalendar: isGoogleCalendar,
      dayOfWeekChoices: dayOfWeekChoices,
      startTime: startTime,
      endTime: endTime,
      company: company,
      isOneSubButton: isOneSubButton,
      mainButton: mainButton,
      googleId: googleId,
      mailSubject: mailSubject,
      mailContent: mailContent,
      enterprise: localStorage.getItem("id"),
    });
    setErrorSnackOpen({
      open: true,
      message: "更新しました",
    });
  } catch (error) {
    console.log(error);
    setErrorSnackOpen({ open: true, message: "ユーザーの更新に失敗しました" });
  }

  try {
    multiSubButton.forEach(element);
    await updateDoc((db, "account", localStorage.getItem("userId"), "button"), {
      title: onlySubButton.title,
      url: onlySubButton.url,
    });
  } catch (error) {
    console.log(error);
  }

  try {
    multiSubButton.forEach(async (element) => {
      await updateDoc(doc(db, "multibutton", element.id), {
        title: element.title,
        url: element.url,
      });
    });
  } catch (error) {
    console.log(error);
  }

  const docId = localStorage.getItem("id");
  const docRef = doc(db, "enterprise", docId);

  if (isFirst === true) {
    try {
      await updateDoc(docRef, {
        isFirst: localStorage.getItem("userId"),
      });
    } catch (error) {
      console.log(error);
      setErrorSnackOpen({
        open: true,
        message: "ユーザーの先頭配置の設定に失敗しました",
      });
    }
  }

  const storageRef = ref(storage, `avatar/${localStorage.getItem("userId")}`);

  const uploadTask1 = uploadBytesResumable(storageRef, avatar);
  uploadTask1.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
    },
    (error) => {
      console.log(error);
      setErrorSnackOpen({
        open: true,
        message: "画像の更新に失敗しました",
      });
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask1.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        updateDoc(docRef2, {
          avatar: downloadURL,
        });
      });
    }
  );

  const storageRef2 = ref(
    storage,
    `thumbnail/${localStorage.getItem("userId")}`
  );
  const uploadTask2 = uploadBytesResumable(storageRef2, thumbnail);
  uploadTask2.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
    },
    (error) => {
      console.log(error);
      setErrorSnackOpen({
        open: true,
        message: "画像の更新に失敗しました",
      });
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask2.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        updateDoc(docRef2, {
          thumbnail: downloadURL,
        });
      });
    }
  );

  return true;
};

export default registAccount;
