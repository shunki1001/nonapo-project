import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const editData = async (newData, data) => {
  // newと言ってるけど編集前のデータ。dataが編集後のデータ
  const { id } = newData;
  const doc_ref = await updateDoc(doc(db, "enterprise", id), data);
  if (newData.numberOfAccount < data.numberOfAccount) {
    // アカウント数を増やした時
    for (let i = 0; i < data.numberOfAccount - newData.numberOfAccount; i++) {
      try {
        const docRef = await addDoc(collection(db, "account"), {
          username: `ユーザー${newData.numberOfAccount + i + 1}`,
          accountIndex: Number(newData.numberOfAccount + i + 1),
          email: "",
          phone: "",
          url: "",
          isGoogleCalendar: true,
          dayOfWeekChoices: {
            mon: true,
            tue: true,
            wed: true,
            thu: true,
            fri: true,
            sat: false,
            sun: false,
          },
          startTime: "",
          endTime: "",
          company: data.enterprise,
          isOneSubButton: true,
          mainButton: "",
          subButtonTitle: "",
          googleId: "",
          mailSubject: "商談依頼ありがとうございます",
          mailContent:
            "この度は、リード獲得自動化Saas「リードダイナミクス」にノンアポ商談依頼誠にありがとうございます。\nいつも大変お世話になっております。<br><br>現在、別件のオンラインMTGに対応中でして、改めてオンラインMTGのお時間頂ければと思います。<br><br>下記日程でご都合いかがでしょうか。<br><br>日程調整URL<br>https://google.com/calendar.app<br><br>こちらMTG URLになります。<br>https://zoom.us/s/0000000（登録一切不要、お時間になりましたらアクセスお願いします）<br><br>当日は営業が対応致します。<br><br>緊急連絡先：090-0000-0000<br><br>ご返信お待ちしております。",
          enterprise: id,
        });
        const userId = docRef.id;
        // button collection added
        for (let j = 0; j < 5; j++) {
          if (j === 0) {
            try {
              await addDoc(collection(db, "account", userId, "button"), {
                isOnly: true,
                title: "",
                url: "",
              });
            } catch (error) {
              console.log("アカウントのボタンコレクションでエラー");
              console.log(error);
            }
          } else {
            try {
              await addDoc(collection(db, "account", userId, "button"), {
                isOnly: false,
                title: "",
                url: "",
              });
            } catch (error) {
              console.log("アカウントのボタンコレクションでエラー");
              console.log(error);
            }
          }
        }
      } catch (error) {
        console.log("アカウントの登録でエラー");
        console.log(error);
      }
    }
  } else if (newData.numberOfAccount > data.numberOfAccount) {
    // アカウント数を減らした時
    const q = query(collection(db, "account"), where("enterprise", "==", id));
    const result = await getDocs(q);
    let accountList = [];
    let temp;
    result.forEach((doc) => {
      temp = doc.data();
      temp.id = doc.id;
      accountList.push(temp);
    });
    for (let i = 0; i < newData.numberOfAccount - data.numberOfAccount; i++) {
      const deleteAccount = accountList.filter((item) => {
        return item.accountIndex === newData.numberOfAccount - i;
      })[0];
      await deleteDoc(doc(db, "account", deleteAccount.id));
    }
  }
  return doc_ref;
};

export default editData;
