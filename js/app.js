const getWeatherData = async () => {
  const inp = document.getElementById("getCity").value.trim();

  if (!inp) {
    document.getElementById("inperror").textContent = "Please enter city name";
    return;
  }

  const apiKey = "6de11ef9bee043cd87b103645250205";

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inp}`;

  try {
    const req = await fetch(url);
    if (!req.ok) {
      document.getElementById("error").textContent =
        "No matching location found";
      return;
    }
    const res = await req.json();
    console.log(res);

    document.getElementById("icon").src = "https:" + res.current.condition.icon;

    document.getElementById("temp").textContent = res.current.temp_c + " °C";
    document.getElementById("country").textContent = res.location.country;
    document.getElementById(
      "region"
    ).textContent = `${res.location.name},${res.location.region}`;
    document.getElementById("condition").textContent =
      res.current.condition.text;
    document.getElementById("humiditry").textContent =
      res.current.humidity + " %";
  } catch (error) {
    console.log(error.message);
  }

  document.getElementById("getCity").value = "";
};
