//GitHub Url: https://github.com/rhsumonDev/assignment.js


//Convert Kilomiter to Meter
function kilometerToMeter(km){
   // 1km = 1000
    var meter = 1000;
     meter = km * meter;

     //Bonus assignment Error message show 
     if (km == (null || undefined) || km < 0) {
        return " Dont't Use Negetive value";
    }
    return meter;
}

//Budget Calculator
function budgetCalculator(Watch, Phone, Laltop) {

    // Cost of Electric Items
    var watchCost = 50;
    var phoneCost = 100;
    var laptopCost = 500;
    var total = (watchCost * Watch) + (phoneCost * Phone) + (laptopCost * Laltop);
    
    //Bonus assignment Error message show 
    if (Watch < 0 || Phone < 0 || Laltop < 0) {
        return " Please assign Positive Numbers";
    }
    return total;
}

// HotelCost problem solved
function hotelCost(stays){

    /* tenDaysCost = 100;
     twentyDaysCost = 80;
     overtwentyDays = 50*/

    var totalCost = 0;

    if(stays <= 10){
        totalCost = stays * 100;
    } else if (stays <= 20) {
        var tenDaysCost = 10 * 100;
        var remaining = stays - 10;
        var twentyDaysCost = remaining * 80;
        totalCost = tenDaysCost + twentyDaysCost;
    } else {
        var tenDaysCost = 10 * 100;
        var twentyDaysCost = 10 * 80;
        var remaining = stays - 20;
        var overTwentyDaysCost = remaining * 50;
        totalCost = tenDaysCost + twentyDaysCost + overTwentyDaysCost;
    }

    //Bonus assignment Error message show 
    if (stays < 1) {
        return "Please Enter 1 to 100 days";
    }

    return totalCost;
}

// MegaFriend Problem Solve
  function megaFriend(friendsName) {
    var longestName = friendsName[0];
        for (i = 0; i < friendsName.length; i++) {
            if (friendsName[i].length > longestName.length) {
                longestName = friendsName[i];
        }
    }
    return longestName;
  }
