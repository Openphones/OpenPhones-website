var currencySelector = document.getElementById("currency") as HTMLSelectElement;
currencySelector.value = sessionStorage.getItem("currency") || "USD";
currencySelector!.addEventListener("change", () => {
    sessionStorage.setItem("currency", currencySelector!.value);
    location.reload();
});
