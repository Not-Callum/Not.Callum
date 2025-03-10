var showcaseImages = document.getElementsByClassName("showcase-images");



function DisplayModal(image){
  const modalDiv = document.getElementById("images-modal")

  const newModal = document.createElement("img", {is: "modal-image"})
  const modalButton = document.createElement("button", {is: "close"})


  try{
    console.log(image)
    newModal.src = image;
    newModal.id = "the-modal-image"
    modalButton.innerHTML = 'Close Me';
    modalButton.id = "close";
    modalDiv.append(newModal);
    modalDiv.append(modalButton);
    document.getElementById("images-modal-container").style.display = "flex";
    
  }
  catch{
    console.log("Display Modal Failed.")
  }

  document.getElementById("close").addEventListener("click", function(){ closeModal(event)})
  
}

function closeModal(e){
  console.log("something")
  if (e == window.event){
    e.cancelBubble = true;
  }
  if (e.stopPropagation){
    e.stopPropagation();
  }
  const modalImage = document.getElementById("the-modal-image");
  const modalButton = document.getElementById("close");

  modalButton.remove();
  modalImage.remove();
  document.getElementById("images-modal-container").style.display = "none";
}