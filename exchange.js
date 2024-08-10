const getAmount = document.getElementById("amount");
const getCurrency = document.getElementById("currency");
const convertButton = document.getElementById("convert");
const result = document.getElementById("result");

const API_KEY = `${process.env.API_KEY}`;
const API_URL = "https://api.api-ninjas.com/v1/exchangerate?pair=GBP_";

convertButton.addEventListener("click", () => {
  console.log("clicked");
  const totalAmount = getAmount.value;
  const totalCurrency = getCurrency.value;
  const url = API_URL + totalCurrency;

  fetch(url, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const exchangeRate = data.exchange_rate;
      const resultPrice = totalAmount * exchangeRate;
      result.innerHTML = `${totalAmount} ${totalCurrency}: ${resultPrice.toFixed(
        2
      )} GBP`;
    })
    .catch((err) => {
      console.error("Request failed: ", err);
      result.innerHTML = "Error occurred, please try again later";
    });
});
