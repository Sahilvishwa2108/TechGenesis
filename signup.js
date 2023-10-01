var typed = new Typed("#element1", {
    strings: ["<h2>Sign Up</h2>"],
    typeSpeed: 10,
    showCursor: false,
    onComplete: function () {
        var typed = new Typed("#element2", {
            strings: ["Email:"],
            typeSpeed: 10,
            showCursor: false,
            onComplete: function () {
                var typed = new Typed("#element3", {
                    strings: ["Password:"],
                    typeSpeed: 10,
                    showCursor: false,
                    onComplete: function () {
                        var typed = new Typed("#element4", {
                            strings: ["Confirm Password?"],
                            typeSpeed: 10,
                            showCursor: false,
                            onComplete: function () {
                                var typed = new Typed("#element5", {
                                    strings: ["Already have an account?"],
                                    typeSpeed: 10,
                                    showCursor: false,
                                    onComplete: function () {
                                        var typed = new Typed("#element6", {
                                            strings: ["Login"],
                                            typeSpeed: 10,
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});