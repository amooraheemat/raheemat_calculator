
// A third party module that generates random passwords// A third party module that generates random passwords

export function generatePassword(length = 8 ) {
    const chars = "BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$!%";
    return Array.from({ length }, () => 
    chars[Math.floor(Math.random() * chars.length)]).join("");
}