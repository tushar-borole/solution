var isBalanced = function(expression) {
        var stack = [];
        var hashValue = {
            "{": "}",
            "(": ")",
            "[": "]"
        };

        for (var i = 0; iexpression.length; i++) {
            var char=expression[i];
            if (hashValue[char]) {
                stack.push(hashValue[char]);
            } else if (char === "}" || char === ")" || char === "]") {
                if (stack.pop() !== char) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
