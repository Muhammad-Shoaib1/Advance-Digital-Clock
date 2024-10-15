const styles = [
  { clock: 'style-1', body: '#ffffff' },
  { clock: 'style-2', body: '#f0f0f0' },
  { clock: 'style-3', body: '#dbe5e5' },
  { clock: 'style-4', body: '#e0f7fa' },
  { clock: 'style-5', body: '#ffffff' }
];
let currentStyleIndex = 0;

// Function to update the clock based on the selected time zone
function updateClock() {
  const timezone = document.getElementById('timezone').value;
  const now = new Date().toLocaleString('en-US', { timeZone: timezone });
  const date = new Date(now);

  let h = date.getHours();
  const m = String(date.getMinutes()).padStart(2, '0');
  const s = String(date.getSeconds()).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  // Convert to 12-hour format and determine AM/PM
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  h = h ? h : 12; // the hour '0' should be '12'

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dayName = daysOfWeek[day];
  const monthName = monthsOfYear[month];

  const timeString = `${String(h).padStart(2, '0')}:${m}:${s} ${ampm}`;
  const dateString = `${dayName}, ${monthName} ${d}, ${year}`;

  document.getElementById('time').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();

document.getElementById('style-toggle').addEventListener('click', () => {
  const clock = document.getElementById('clock');
  const body = document.body;

  clock.classList.remove(styles[currentStyleIndex].clock);
  body.style.backgroundColor = '';
  currentStyleIndex = (currentStyleIndex + 1) % styles.length;
  clock.classList.add(styles[currentStyleIndex].clock);
  body.style.backgroundColor = styles[currentStyleIndex].body;
});

document.getElementById('timezone').addEventListener('change', updateClock);
