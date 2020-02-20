const getData = async function() {
  const apiUrl = "https://www.tronalddump.io/random/quote";
  try {
    const res = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    console.log("The data in getData function ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

getData().then(henk => {
  const quotes = henk;
  getQuote(quotes);
});

const getQuote = function(quoteData) {
  const quote = quoteData.value;
  console.log(quote);

  document.getElementById("demo").addEventListener("click", myFunction);
  function myFunction() {
    document.getElementById("demo").innerHTML = quote;
  }
};

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});
