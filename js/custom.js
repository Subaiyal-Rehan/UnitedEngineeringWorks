// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();


// owl carousel slider js
var owl = $('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    center: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        576: {
            items: 2
        },
        991: {
            center: true,
            items: 3
        }
    }
})

/** google_map js **/
// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(40.712775, -74.005973),
//         zoom: 18,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});



// Location PopUp:

const locationLinks = document.querySelectorAll(".locationLink");
locationLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    openPopupWithLocation();
  });
});

function openPopupWithLocation() {
    const locationInfo = `
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d553.5447474636277!2d67.00473250546028!3d24.939527099009766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3418e8544fb5b%3A0x6cba99eafcd4c61b!2sUnited%20Engineering%20Works!5e0!3m2!1sen!2s!4v1709099021657!5m2!1sen!2s" class="locationIframe" style="border:0;" allowfullscreen="" loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"></iframe>`;

    const popup = document.createElement("div");
    popup.classList.add("popup");

    popup.innerHTML = `
    <div class="popup-content">
      <h2>Our Location</h2>
      <p>${locationInfo}</p>
      <button class="btn2" onclick="closePopup()">Close</button>
    </div>
  `;
    document.body.appendChild(popup);

    void popup.offsetWidth;
    popup.classList.add("active");
}
function closePopup() {
    const popup = document.querySelector(".popup");
    popup.classList.remove("active");
    popup.addEventListener("transitionend", function () {
        popup.parentNode.removeChild(popup);
    });
}


// Call function
function openModal(modalId, content) {
    var modal = document.getElementById(modalId);
    var modalBody = modal.querySelector('.modal-body');
    modalBody.innerHTML = content;
    $('#' + modalId).modal('show');
}
function performAction() {
    var phoneNumber = "+01123455678990";
    window.location.href = "tel:" + phoneNumber;

    $('.modal').modal('hide');
}