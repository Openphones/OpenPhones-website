export function writeDescription(description: string) {
  const formattedDescription = description
    .replaceAll("\n", "<br />")
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

  return formattedDescription;
}
