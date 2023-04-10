var response = await fetch("/OpenPhones-website/phones.json");
export var jsonLinks = await response.json();
