export function closePopup(id: string) {
    (document.getElementById(id) as HTMLElement).style.display = "none";
}
