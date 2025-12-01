export const getDateDiffrenceFromNew = (formData) => {
  let diffrence = new Date().getTime() - new Date(formData).getTime();

  diffrence = diffrence / 1000;
  let hourDiffrence = Math.floor(diffrence / 3600);
  diffrence -= hourDiffrence * 3600;
  let minuteDiffrence = Math.floor(diffrence / 60);
  diffrence -= minuteDiffrence * 60;
  let dayDiffrence = Math.floor(diffrence / 24);
  diffrence -= dayDiffrence* 24

  let message;
  if(dayDiffrence > 0){
    message = `${dayDiffrence} day`
  }
  if (hourDiffrence > 0) {
    message = message ? `${message} ${hourDiffrence} hour` : `${hourDiffrence} hour`;
  }
  if (minuteDiffrence > 0) {
    message = message
      ? `${message} ${minuteDiffrence} minutes`
      : `${minuteDiffrence} minutes`;
  }
  if (diffrence) {
    message = message
      ? `${message} ${Math.floor(diffrence)} seconds`
      : `${Math.floor(diffrence)} seconds`;
  }
  return message;
};
