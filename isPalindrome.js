export default function isPalindrome(s) {
    if (s == null) return false;
    let b = true;
    for (let i in s) {
        if (s[i] != s[s.size-i]) b = false;
    }
    return b;
}