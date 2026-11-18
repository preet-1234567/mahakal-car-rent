const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuBtn.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
});

// Close mobile menu after clicking a link
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

// Set minimum pickup date to today
const today = new Date();
const localToday = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

const pickupDate = document.getElementById("pickupDate");
const returnDate = document.getElementById("returnDate");

pickupDate.min = localToday;
returnDate.min = localToday;

pickupDate.addEventListener("change", () => {
  returnDate.min = pickupDate.value || localToday;

  if (returnDate.value && returnDate.value < pickupDate.value) {
    returnDate.value = "";
  }
});

// Select car from car cards
document.querySelectorAll(".book-car").forEach(button => {
  button.addEventListener("click", () => {
    const carName = button.dataset.car;
    document.getElementById("carSelect").value = carName;

    document.getElementById("booking").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// WhatsApp booking form
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const car = document.getElementById("carSelect").value;
  const rentalType = document.getElementById("rentalType").value;
  const pickup = pickupDate.value;
  const returning = returnDate.value;
  const location = document.getElementById("pickupLocation").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!/^[6-9][0-9]{9}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  if (returning < pickup) {
    alert("Return date cannot be before pickup date.");
    return;
  }

  const text = *NEW BOOKING - MAHAKAL CAR RENTALS*

Hello, I want to book a car.

*Customer Name:* ${name}
*Mobile Number:* ${phone}
*Car:* ${car}
*Rental Type:* ${rentalType}
*Pickup Date:* ${pickup}
*Return Date:* ${returning}
*Pickup Location:* ${location}
*Additional Message:* ${message || "Not provided"}

Please confirm car availability and final rental charges.

Thank you!
MAHAKAL CAR RENTALS;

  const whatsappNumber = "917023245984";

  const whatsappURL =
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(text);

  window.open(whatsappURL, "_blank");
});
