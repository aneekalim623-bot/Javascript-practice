function outerFunction() {
    function innerFunction() {
        console.log("hello world");
    }
    return innerFunction;
}

const ans = outerFunction();
ans();