document.querySelectorAll("a").forEach((link) => {
  const isRelativeUrl = link.getAttribute("href").startsWith("#");

  if (isRelativeUrl) {
    return;
  }

  link.setAttribute("target", "_blank");
});
