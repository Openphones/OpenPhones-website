var currencySelector = document.getElementById("currency") as HTMLSelectElement;
currencySelector.value = localStorage.getItem("currency") || "USD";
currencySelector!.addEventListener("change", () => {
    localStorage.setItem("currency", currencySelector!.value);
    location.reload();
});
