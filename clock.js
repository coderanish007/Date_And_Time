function displayDateTime() {
    let curDateObj = new Date();
  
    // 24 Hour Format
    let curhours = curDateObj.getHours();
    let curmin = curDateObj.getMinutes();
    let cursec = curDateObj.getSeconds();
  
    let time_24 = curhours + " : " + curmin + " : " + cursec 
    document.getElementById("clock_24").innerText = time_24
  
    // 12 Hour Format
    let curperiod = "AM";
    if (curhours == 0)
    {
      curhours = 12;
    } 
    else if (curhours > 12)
    {
      curhours = hours - 12;
      curperiod = "PM";
    }
  
    let time_12 = curhours + " : " + curmin + " " + curperiod;
    document.getElementById("clock_12").innerText = time_12;
  
    // Calender
    let curdate = curDateObj.getDate();
    let curmonth = curDateObj.getMonth() + 1;
    let curyear = curDateObj.getFullYear();
  
    if (curdate < 10 || curmonth < 10)
    {
      curdate = "0" + curdate
      curmonth = "0" + curmonth
    }
  
    let date = curdate + " - " + curmonth + " - " + curyear
    document.getElementById("date").innerText = date
  
    // Day
    let curday = curDateObj.getDay();
  
    switch (curday) {
      case 0: curday = "SUNDAY";
        break;
      case 1: curday = "MONDAY";
        break;
      case 2: curday = "TUESDAY";
        break;
      case 3: curday = "WEDNESDAY";
        break;
      case 4: curday = "THURSDAY";
        break;
      case 5: curday = "FRIDAY";
        break;
      case 6:
        curday = "SATURDAY";
        break;
    }
    document.getElementById("day").innerText = curday;
  }