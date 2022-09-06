const availableChecker = (account, setOnline) => {
  const today = new Date();
  const todayOfWeekStr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][
    today.getDay()
  ];
  const startHour = account.startTime.substr(0, account.startTime.indexOf(":"));
  const startMinute = account.startTime.substr(
    account.startTime.indexOf(":") + 1
  );
  const startTime = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
    startHour,
    startMinute,
    0
  );
  const endHour = account.endTime.substr(0, account.endTime.indexOf(":"));
  const endMinute = account.endTime.substr(account.endTime.indexOf(":") + 1);
  const endTime = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
    endHour,
    endMinute,
    0
  );
  if (account.dayOfWeekChoices[todayOfWeekStr]) {
    if (startTime < today && today < endTime) {
      if(setOnline === undefined){
        return true
      }else{
        setOnline(true);
      }
      
    } else {
      if(setOnline === undefined){
        return false
      }else{
        setOnline(false);
      }
    }
  } else {
    if(setOnline === undefined){
      return false
    }else{
      setOnline(false);
    }
  }
};

export default availableChecker;
