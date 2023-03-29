function isValid(s) {
    const stack = [];
    const openBrackets = {'(': ')', '{': '}', '[': ']'};

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (openBrackets[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const lastOpen = stack.pop();
            if (openBrackets[lastOpen] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}