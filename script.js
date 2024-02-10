function nextPalindrome(num) {
  //your JS code here.
	num = Number(num)
	function isPalindrome(num) {
        return num.toString() === num.toString().split('').reverse().join('');
    }

    // Start checking from the next number
    let nextNumber = num + 1;

    // Loop until a palindrome number is found
    while (!isPalindrome(nextNumber)) {
        nextNumber++;
    }

    return nextNumber;
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
