export function writeDescription(description: string) {
    const formattedDescription = description.replaceAll("\n", "<br />")
        .replaceAll("[b]", "<span class='bold'>")
        .replaceAll("[i]", "<span class='italic'>")
        .replaceAll("[u]", "<span class='underline'>")
        .replaceAll("[im]", "<a class='imei'>")
        .replaceAll("[eol", "<time class='eol'>")
        .replaceAll("[/b]", "</span>")
        .replaceAll("[/i]", "</span>")
        .replaceAll("[/u]", "</span>")
        .replaceAll("[/im]", "</a>")
        .replaceAll("[/eol]", "</time>");
    
    const imeis = document.querySelectorAll(".imei") as NodeListOf<HTMLAnchorElement>;
    for (const imei of imeis) {
        imei.href = `https://imei.info/?imei=${imei.innerText}`;
    }

    const eols = document.querySelectorAll(".eol") as NodeListOf<HTMLTimeElement>;
    for (const eol of eols) {
        const date = new Date(eol.innerHTML);
        eol.dateTime = date.toISOString();
        eol.innerHTML = new Intl.DateTimeFormat(navigator.language, { dateStyle: "long" }).format(date);
    }
    
    return formattedDescription;
}