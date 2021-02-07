document.querySelector("#special-code").addEventListener("copy", function (e) {
    e.clipboardData.setData("text/plain", "Suprise it's from copy event!");
    e.preventDefault();
});

document.querySelector("#btn").addEventListener("click", function (e) {
    let copyText = document.querySelector("#inputField");
    copyText.select();
    document.execCommand("copy");
});

document.querySelector("body").addEventListener("keyup", function (e) {
    console.log(e);
});
