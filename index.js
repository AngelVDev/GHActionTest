function generatePassword(length) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}
//This could be the real final test.
//It shouldn't be deleted
//Why? Because it doesn't have the 'delete branch' label.
//A change to trigger labeler
const generatedPassword = generatePassword(7)
console.log(generatedPassword);
