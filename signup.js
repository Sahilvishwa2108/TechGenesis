function typeText(elementId, text, typeSpeed = 10) {
    return new Promise((resolve) => {
        var typed = new Typed(elementId, {
            strings: [text],
            typeSpeed,
            showCursor: false,
            onComplete: () => {
                resolve();
            },
        });
    });
}

async function startTyping() {
    await typeText("#element1", "<h2>Sign Up</h2>");
    await typeText("#element2", "Email:");
    await typeText("#element3", "Password:");
    await typeText("#element4", "Confirm Password?");
    await typeText("#element5", "Already have an account?");
    await typeText("#element6", "Login", 10);
}

startTyping();
