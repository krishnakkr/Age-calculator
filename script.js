let userInput = document.getElementById("date");
userInput.max = moment().format("YYYY-MM-DD");
let result = document.getElementById("result");
function calculateAge() {
    let birthDate = moment(userInput.value, "YYYY-MM-DD");
    let today = moment();

    let years = today.diff(birthDate, "years");
    birthDate.add(years, "years");

    let months = today.diff(birthDate, "months");
    birthDate.add(months, "months");

    let days = today.diff(birthDate, "days");

    result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months,<span>${days}</span> days old`;
}
