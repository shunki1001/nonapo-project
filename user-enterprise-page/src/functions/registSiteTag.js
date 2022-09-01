import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const registSiteTag = async (
  issueAccountList,
  userSite,
  setErrorSnackOpen,
  domain
) => {
  try {
    await addDoc(collection(db, "site"), {
      account: issueAccountList.map((item) => item.id),
      userSite: userSite,
      domain: domain,
    });
  } catch (error) {
    setErrorSnackOpen({
      open: true,
      message: "商談タグの発行に失敗。更新してやり直してください。",
    });
    console.log(error);
  }

  return <div>registSiteTag</div>;
};

export default registSiteTag;
