async function main() {
    let debug = true;
//  This recalls the current year from the computer.
    const currentYear = new Date().getFullYear();
//  Declaring blank arrays
    let customer = [];
    let recall = [];
//  Declare the array with some contents.
    let carMake = ["Dodge", "Chevrolet", "Ford", "Buick", "Ram", "Lincoln", "Mitsubishi",
        "Subaru", "Mercedes", "BMW", "Audi", "Renault", "Lada", "Saab", "Lamborghini", "Ferrari",
        "Toyota", "Honda", "Land Rover"
    ];
//  Simple title.
    output("Welcome To Slap Happy's Car Inquiries!!" + "\n" + "\n" + "How can we help you today?");
    output("\n");
//  Declaring menu options.
    let menuOption1 = "Create a New Car Profile;";
    let menuOption2 = "View an Existing Profile;";
    let menuOption3 = "Quit Application";
//  Declaring variables to be used.
    let firstName;
    let lastName;
    let address;
    let purchaseDate;
    let make;
    let model;
    let year;
    let vin;
//  Random things I want to print to the screen:
    let confMess = "You have entered ";
//  Setting menuChoice to -1 so that it has a value within range of what I want it to be.
    let menuChoice = -1;
    while (menuChoice != 3) {
//  While the menuChoice (what the user inputs) is not 3...run the following:
        output("\n" + "Menu:");
        output("1)" + menuOption1 + "\n" + "2)" + menuOption2 + "\n" + "Or" + "\n" + "3)" + menuOption3 + "\n");
        menuChoice = Number(await input("Please choose a Menu Option: (1,2 or 3)"));
        if (menuChoice == 1) {
//      If the menuChoice (user input) is 1...run the following:
//      Declaring the variables that are needed for menuChoice 1 validation.
            customer = [];
//      Setting everything to false, that way, no code blocks will be missed.  A check has to be done to switch
//              the variable to true, before it will move onto the next block of code.
            goodFname = false;
            goodLname = false;
            goodAddress = false;
            goodPurchaseDate = false;
            goodModel = false;
            goodYear = false;
            goodVin = false;
            goodVinFormat = false;
//          Simple courtesy thank you statements.
            output("\n" + "You have chosen " + menuChoice + ".  Thank you!");
            output("\n" + "\n" + "Welcome! Here we are going to CREATE A NEW CAR PROFILE" + "\n");

//                                   First Name Validation "while loop 1"

            while (goodFname == false)
//          The variable is already set to false...so we run this:
            {
                firstName = (await input("Please Enter your FIRST Name: ")).trim();
//                  If the firstName (user input) length is less than 2 or (||) the length is greater than 20
                if (firstName.length < 2 || firstName.length > 20) {
//                  Output this statement, and loop back to the start of "while loop 1"
                    output("Wow, you have a dumb name.  Make one up that is between 2-20 characters!");
                } else {
//                    If the firstName length passes the validation, we will exit the if loop, and move on. 

//                    This is the validation to make sure that the firstName (user input) only contains 
//                    letters, with the exception of a hyphen(-)                   
//                    Declare a variable to set how the name format should look. 
//                    This is done with regular expression, also known as regEx.  I am not sure why some of the characters, 
//                    the end of the Z and doesn't look for something else.
//                    regEx is very set.  Best to google for it, this was found on stackoverflow.
//                    Note: the regEx must be wrapped in brackets ().

//  Declare a variable name for the regEX expression that we are looking for.
                    nameFormat = (/^[A-Z-]+$/);
                    if (nameFormat.test(firstName.toUpperCase()) == false)
//                  Take firstName (user input), convert it to uppercase letters, and test it against the nameFormat,
//                  if it fails, out put this message, and loop back to this code block.
                    {
                        output("Only LETTERS allowed!...okay fine you cn use a hyphen (-) too");
                    }
//                  If it does not fail
                    else {
//                  Set goodFname to true.  Exit the loop.
                        goodFname = true;
                    }
                }
            }
//          Take the firstName, and push it into the customer array.
            customer.push(firstName);
            output(confMess + " " + firstName + " as your FIRST NAME.");
            output("Thank you. Your First Name has been saved.");

//                                     Last Name Validation

//           Since we need to do the exact same validation on the last name, we can simply copy and paste the above code into 
//           place, change anything that says firstName to lastName, and goodFname to goodLname.

            while (goodLname == false) {
                lastName = (await input("Please Enter your LAST Name: ")).trim();
                if (lastName.length < 2 || lastName > 20) {
                    output("Again!! Wow!! You have a dumb name.  Make one up that is between 2-20 characters!");
                } else {
                    nameFormat = (/^[A-Z-]+$/);
                    if (nameFormat.test(lastName.toUpperCase()) == false) {
                        output("Only LETTERS allowed!...okay fine you cn use a hyphen (-) too");
                    } else {
                        goodLname = true;
                    }
                }
            }
//          Take the lastName, and push it into the customer array.           
            customer.push(lastName);
            output(confMess + " " + lastName + " as your LAST NAME.");
            output("Thank you. Your LAST Name has been saved.");
            output("\n");
            output("Your FULL NAME is: " + firstName + " " + lastName);

//                          Address Validation (while loop 2)

            while (goodAddress == false) {
                address = (await input("Please Enter your Address: ")).trim();
                if (address === "") {
//              if address (user input) is "" (a blank string), then output the message, and loop back to the while loop 2.
                    output("Sorry, but your Address can not be left blank!");
                } else {
//              set the goodAddress to true, exit the loop, and move on.
                    goodAddress = true;
                }
            }
//          Take the address, and push it into the customer array.
            customer.push(address);
            output(confMess + " " + address + " as your ADDRESS.");
            output("Thank you.  Your Address has been saved.");

//                         Purchase Date Validation

            while (goodPurchaseDate == false) {
//              goodPurchaseDate is set to false, so...
                purchaseDate = (await input("Please Enter the Date Of Purchase (YYYY-MM-DD): ")).trim();
//             We set the format we are looking for with regEx 

//                              /   ->start of the regEx
//                              \d  -> looking for digits (0-9)
//                              {and counting for 4 digits}
//                              -   ->looking for the hyphen
//                              /   ->closes the regEx rules
//                              and so on....

                dateFormat = (/\d{4}-\d{2}-\d{2}/);
                goodFormat = dateFormat.test(purchaseDate);
                if (purchaseDate === "" || !goodFormat) {
                    output("Purchase Date is required, in format YYYY-MM-DD.");
                } else {
//                  Since we know the purchaseDate (user input) is in the correct format, we
//                  check the year. For the year 1999 index 0 is 1 index 4 is -
//                  we only go to the 4th index. It is not included in the count
                    purchaseYear = purchaseDate.substring(0, 4);
//                  Here we check the month 
                    purchaseMonth = purchaseDate.substring(5, 7);
//                  Here we check the day
                    purchaseDay = purchaseDate.substring(8, 10);
                    if (purchaseYear < 1990 || purchaseYear > currentYear) {
//                  if the purchase year is less than 1940 or greater than the current year, output the error message
                        output("That is not a good purchase year. If you purchased prior to 1990, use 1990 as the year.");
                    } else if (purchaseMonth < 1 || purchaseMonth > 12) {
//                  if the purchase month is less than 1 or greater than 12, output the error message
                        output("There are not more than 12 months, buddy...Try again");
                    } else if (purchaseDay < 1 || purchaseDay > 31) {
//                  if the purchase day is less than 1 or greater than 31, output the error message
                        output("That's bad day. The number's don't line up!");
                    } else {
//                  if all the validation passes the tests, set goodPurchaseDate to true, and exit the loop
                        goodPurchaseDate = true;
                    }
                }
            }
//          Take the purchaseDate, and push it into the customer array.
            customer.push(purchaseDate);
            output(confMess + " " + purchaseDate + " as your purchase date.")
            output("Thank you.  The Purchase Date has been Saved");

//                           Make of vehicle validation

//          First we ask the user for the make of the vehicle. 
            make = (await input("Please Enter the Make of Vehicle: ")).trim();
//          Take the user input and convert it all to lowercase, to ensure the rest of the checks are equal
            lwrMake = make.toLowerCase();
//          Then we take that input, and make sure that the first character is an uppercase letter for proper English.          
            modMake = lwrMake.charAt(0).toUpperCase() + lwrMake.slice(1);
//          Then we check the modified user input, and check it against the carMake array that we built earlier. 
            if (carMake.includes(modMake)) {
//          If the user input (modMake) is found in the carMake array, run the following
                output("Okay, you have entered as your " + modMake + " has been saved to the system, and the database.  Thank You.");
//          If the user input (modMake) is not found in the carMake array, run the following
            } else {
                output("That is not a make on the list. Would you like to add it?");
//          Simple question to see if the user wants to add their input to the carMake array.

                let goodAnswer = false;
                while (goodAnswer == false) {
                    answer = (await input("Yes, or No: ")).trim(); // This is where I lost the 1 mark...I forgot the brackets around the await
//              If the user answers "yes", in almost any way, run the following.
                    if (answer == "yes" || answer == "YES" || answer == "Yes" || answer == "Y" || answer == "y") {
//                    Take the modMake, and push it into the customer array.
                        carMake.push(modMake);
                        goodAnswer = true;
//                  If the user answers "no", in almost any way, run the following.
//                        ***Another way of doing this yes/no would be to take the users answer, and .toUppercase
                    } else if (answer == "NO" || answer == "no" || answer == "No" || answer == "N" || answer == "n") {
                        output("you will not add  your "+modMake+" to the list");
                        goodAnswer = true;
                    } else {
                        output("not yes or no");
                    }
                }
            }
//          Take the modMake, and push it into the customer array.
            customer.push(modMake);
            output(confMess + " " + modMake + " as your vehicle make.");
            output("Your " + modMake + " has been saved.  Thank You.");

//                          Model Validation

            while (goodModel == false) {
                model = (await input("Please Enter the Model of Vehicle: ")).trim();
                if (model === "") {
//              If model (user input) is "" (a blank string), then output the message, and loop back to the while loop.
                    output("Sorry, but your model can not be left blank!");
                } else {
//                  Set the goodModel to true, exit the loop, and move on.
                    goodModel = true;
                }
            }
            customer.push(model);
            output(confMess + " " + model + " as your vehicle model.");
            output("Thank you.  Your model has been saved.");

//                          Vehicle Year Validation

            while (goodYear == false) {
//                      Ask the user for the year of their vehicle.
                year = (await input("Please Enter the Year of Vehicle: ")).trim();
//                      if the year of the user input (year) is less than 1990, output the message
                if (year < 1990) {
                    output("That is too old of a car for our database.  Sorry about your luck, and try again.");
                }
//                      if the year is passes the first check, it will run this check
//                          if the user input (year), is greater that the current year plus 1, output this message.
                else if (year > currentYear + 1) {
                    output("Sorry, there is no way that a vehicle can be more than a year above the current year.  Try again!");
                }
//                      if the user input (year) passes both checks, then run this code block:
                else {
//                         Set goodYear to true, exit the loop, and move on.
                    goodYear = true;
                    output("Your vehicle year has been saved.  Thank you.");
                }
            }
            customer.push(year);
            output(confMess + " " + year + " as your vehicle's year.");
            output("Thank you.  Your model has been saved.");

//                         VIN Validation

            while (goodVin == false) {
//              Ask the user for the next input                
                vin = (await input("Please Enter the VIN of the Vehicle: ")).trim();
//              Declare a variable. Take the user input(vin), and convert it all to upperCase letters               .
                newVin = vin.toUpperCase();
                if (newVin.length != 17) {
//              if the converted VIN (newVin) is not 17 characters in length, output the message.               
                    output("Sorry that is an invalid VIN.  Please try again.  A VIN is 17 characters long")
//              If the newVin is 17 characters in length, then do this:                    
                } else {
//                  Declare a variable for the format that you want to check against.  This again, is regEx.                    
                    vinFormat = (/^[A-Z0-9]+$/);
//                  Declare a variable for a good vinFormat; test newVin against the vinFormat                    
                    goodVinFormat = vinFormat.test(newVin);
                    if (goodVinFormat == false) {
//                  if the vinFormat fails the check, output this message:
                        output("Sorry, that is not a valid VIN.  A VIN can only have numbers and letters");
                    } else {
//                  if the vinFormat passes the check, set goodVin to true, and exit the loop.                        
                        goodVin = true;
                        output("Thank you.  Your VIN has been saved")
                    }
                }
            }
            customer.push(newVin);
            output(confMess + " " + newVin + " as your vehicle's identification number.");
            output("Thank you.  Your vehicle's identification number has been saved.");
            recall.push(customer);
        } else if (menuChoice == 2) {
            output("\n" + "You have chosen " + menuChoice + ".  Thank you!");
            output("\n" + "\n" + "Welcome! Here we are going to VIEW EXISTING vehicle profiles.");
//          If menu choice is 2, then output the recall array. Join each array with a new line, and only
//          output (.slice) the first 3 items in the array.
            output(recall.slice(-3).join("\n"));
        } else if (menuChoice == 3) {
            output("\n" + "You have chosen " + menuChoice + ".  Thank you!");
            output("\n" + "\n" + "Thank you for Visiting!!" + "\n" + "Please visit us again!!");
        } else {
            output("That is an INVALID MENU CHOICE!!");
        }
    }


}