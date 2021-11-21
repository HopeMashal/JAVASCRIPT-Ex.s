/* Create a JS function to determine whether or not a given year is a leap year.
The function should take a year as an argument:
1) Determine whether or not it is a leap year
* If the given year is a leap year, the program should print "It is indeed a
leap year", otherwise the program will print "This is not a leap year."
Help:
every year that is divisible by 4 is a leap year except for the ones that are
also divisible by 100, unless it is divisible by 400. Example: 2012 is a leap
year 2100 is not But 2400 is. */

function Leapyear(years){
    if(((years%4==0)&&(years%100!=0))||(years%400==0)) return "It is indeed a leap year.";
    else return "This is not a leap year.";

}
