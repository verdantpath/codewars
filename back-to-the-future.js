function backToTheFuture(str) {
  let arr = str.split(" ");
  let day = "I'm leaving here on " + arr[0] + " " + arr[1] ;
  let month = arr[2];
  if (arr[1] == "31" && month == "March") {
    return "Doc, I can't get back to the future!";
  } else if (month == "January") {
    return day + " October!";
  } else if (month == "April") {
    return day + " July!";
  } else if (month == "September") {
    return day + " December!";
  } else if (month == "February") {
    return day + " March!";
  } else if (month == "March") {
    return day + " November!";
  } else {
    return "Doc, I can't get back to the future!";
  } 
}