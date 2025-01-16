let globalStyle = document.createElement("style");
globalStyle.innerHTML = `
  * {
    margin: 0;
    padding: 0;
  }
`;
document.head.appendChild(globalStyle);
const onesDiv = document.createElement("div");
onesDiv.classList.add = "ones - div";
onesDiv.style.width = "336px";
onesDiv.style.padding = "24px";
onesDiv.style.backgroundColor = "#ffffff";
onesDiv.style.border = "1px solid var(--Black, #111111)";
onesDiv.style.boxShadow = "8px 8px 0px 0px #000000";
onesDiv.style.borderRadius = "20px";
const img = document.createElement("img");
img.src = "./images/blogimage.svg";
onesDiv.appendChild(img);
img.classList.add = "ones - img";
img.style.marginBottom = "24px";
const body = document.body;
body.classList.add = "body";
body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.backgroundColor = "#f4d04e";

const twosDiv = document.createElement("div");
const btn = document.createElement("button");
btn.classList.add = "ones - btn";
btn.style.padding = "4px 12px 4px 12px";
btn.style.borderRadius = "4px";
btn.style.border = "none";
btn.style.backgroundColor = "#F4D04E";
btn.style.marginBottom = "12px";
const a = document.createElement("a");
a.classList.add = "ones - btn - text";
a.style.fontSize = "14px";
a.style.lineHeight = "21px";
a.style.fontWeight = "800";
a.style.fontFamily = "'Figtree', sans-serif";
a.innerHTML = "Learning";
twosDiv.appendChild(a);
btn.appendChild(a);
twosDiv.appendChild(btn);

const onesP = document.createElement("p");
onesP.innerHTML = "Published 21 Dec 2023";
twosDiv.appendChild(onesP);
onesP.classList.add = "twos - p";
onesP.style.fontSize = "14px";
onesP.style.fontWeight = "500";
onesP.style.lineHeight = "21px";
onesP.style.color = "#111111";
onesP.style.marginBottom = "12px";

const h2 = document.createElement("h2");
h2.innerHTML = "HTML & CSS foundations";
twosDiv.appendChild(h2);
h2.classList.add = "ones - h2";
h2.style.fontSize = "24px";
h2.style.lineHeight = "36px";
h2.style.fontFamily = "'Figtree',sans-serif";
h2.style.marginBottom = "12px";
h2.style.color = "#111111";

const twoP = document.createElement("p");
twoP.innerHTML =
  "These languages are the backbone of every website, defining structure, content, and presentation.";
twosDiv.appendChild(twoP);
twoP.classList.add = "two - p";
twoP.style.fontSize = "16px";
twoP.style.lineHeight = "24px";
twoP.style.fontWeight = "500";
twoP.style.color = "#7F7F7F";
twoP.style.width = "330px";
twoP.style.marginBottom = "24px";

const df = document.createElement("span");
df.classList.add = "ones - span";
df.style.display = "flex";
df.style.gap = "12px";
df.style.alignItems = "center";
const image = document.createElement("img");
image.src = "./images/userpic.svg";
twosDiv.appendChild(image);
df.appendChild(image);
const thereP = document.createElement("p");
thereP.innerHTML = "Greg Hooper";
twosDiv.appendChild(thereP);
df.appendChild(thereP);
twosDiv.appendChild(df);
thereP.classList.add = "there - p";
thereP.style.fontSize = "14px";
thereP.style.lineHeight = "21px";
thereP.style.fontWeight = "800";
thereP.style.fontFamily = "'Figtree', sans-serif";

onesDiv.appendChild(twosDiv);
body.appendChild(onesDiv);
