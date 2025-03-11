function copyEmail(){
  const copyText = "callummarkjones@gmail.com";

  navigator.clipboard.writeText(copyText);

  alert("Copied Email to clipboard: " + copyText)
}