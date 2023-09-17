// @author Naman khandelwal


const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the target data attribute for the clicked button
    const target = this.getAttribute("data-target");
    const targetSelector = `li[data-target="${target}"]`;

    // Toggle the visibility of the corresponding <li> element
    const li = document.querySelector(targetSelector);
    li.classList.toggle("hide");

    // Hide the text under the other buttons if it's visible
    const otherLis = document.querySelectorAll(
      `li[data-target]:not(${targetSelector})`
    );
    otherLis.forEach((otherLi) => {
      otherLi.classList.add("hide");
    });
  });
});
