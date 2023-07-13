let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");
function calculateAge() {
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;
    m3 = m2 - m1;
    d3 = d2 - d1;

    if (d3 < 0) {
        m3--;
        const daysInPrevMonth = getDaysInMonth(y1, m1);
        d3 = daysInPrevMonth + d3;
    }

    if (m3 < 0) {
        y3--;
        m3 = 12 + m3;
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months,<span>${d3}</span> days old`;
}