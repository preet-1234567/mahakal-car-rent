// ===================================
// MAHAKAL CAR RENTALS
// ===================================

// IMPORTANT: Replace with your WhatsApp number.
// India country code + mobile number, without + sign.
const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";

// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");

  menuToggle.textContent =
    navbar.classList.contains("active") ? "✕" : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// Set minimum pickup date to today
const pickupDate = document.getElementById("pickupDate");

const today = new Date();
const localToday = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0")
].join("-");

pickupDate.min = localToday;

// WhatsApp Function
function openWhatsApp(message) {
  if (!/^[0-9]{10,15}$/.test(WHATSAPP_NUMBER)) {
    alert("Please add your correct WhatsApp number in script.js first.");
    return;
  }

  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}

// Individual Car Booking
document.querySelectorAll(".book-btn").forEach(button => {

  button.addEventListener("click", () => {

    const car = button.dataset.car;
    const price = button.dataset.price;

    const message =
      "Hello Mahakal Car Rentals! 🚘\n\n" +
      "I want to book a car.\n" +
      "Car: " + car + "\n" +
      "Price: ₹" + price + " per day\n\n" +
      "Please share availability and booking details.";

    openWhatsApp(message);
  });

});

// Booking Form
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name =
    document.getElementById("customerName").value.trim();

  const phone =
    document.getElementById("customerPhone").value.trim();

  const car =
    document.getElementById("carSelect").value;

  const date =
    document.getElementById("pickupDate").value;

  const days =
    Number(document.getElementById("days").value);

  const extraMessage =
    document.getElementById("message").value.trim();

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10 digit mobile number.");
    return;
  }

  if (!car  !date  !days  days < 1  days > 30) {
    alert("Please check your booking details.");
    return;
  }

  const prices = {
    "Maruti Swift": 2990,
    "Maruti Fronx": 3590,
    "Mahindra Thar": 3990,
    "Mahindra Scorpio": 4990,
    "Toyota Fortuner": 8990
  };

  const total = prices[car] * days;

  const message =
    "🚘 NEW BOOKING REQUEST\n\n" +
    "Business: Mahakal Car Rentals\n\n" +
    "Customer Name: " + name + "\n" +
    "Customer Mobile: " + phone + "\n" +
    "Selected Car: " + car + "\n" +
    "Pickup Date: " + date + "\n" +
    "Number of Days: " + days + "\n" +
    "Price Per Day: ₹" + prices[car] + "\n" +
    "Estimated Total: ₹" + total + "\n" +
    "Additional Message: " + (extraMessage || "None") +
    "\n\nPlease confirm availability and final charges.";

  openWhatsApp(message);

});


// Floating WhatsApp Button
document.getElementById("whatsappFloat").addEventListener("click", function(event) {
  event.preventDefault();

  openWhatsApp(
    "Hello Mahakal Car Rentals! I want to enquire about car rental."
  );
});
