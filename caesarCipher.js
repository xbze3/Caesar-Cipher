let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let compareArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let myString = "My name is Ezra Minty and this i4s a Caesar Cipher";
let shiftNumber = 3;

function caesarCipher(list, num, userString)
{
    let numberCipher = [];

    for(let i = 0; i < userString.length; i++)
    {
        
        if(/^[a-z]+$/.test(userString[i]))
        {
            numberCipher.push(list.indexOf(userString[i].toLowerCase()));
        }

        else if(/^[A-Z]+$/.test(userString[i]))
        {
            numberCipher.push(`${list.indexOf(userString[i].toLowerCase())}.`);
        }

        else
        {
            numberCipher.push(list.indexOf(userString[i]));
        }
    }

    console.log(numberCipher);

    userString = "";

    for(let i = 0; i < num; i++)
    {
        currentElement = list[0];
        list.shift();
        list.push(currentElement);
    }

    for(let i = 0; i < numberCipher.length; i++)
    {
        if(numberCipher[i] == -1)
        {
            userString += " ";
        }

        else if(numberCipher[i][0])
        {           
            userString += list[Number(numberCipher[i])].toUpperCase();
        }

        else
        {
            userString += list[numberCipher[i]];
        }
    }

    console.log(userString);

}

caesarCipher(alphabetArray, shiftNumber, myString);