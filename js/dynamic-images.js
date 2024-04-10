// Inside dynamic-images.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('proofOfConcepts');
    for (let i = 1; i <= 24; i++) {
      const img = document.createElement('img');
      img.src = `htb_${i}.jpg`; // Ensure the path is correct
      img.alt = `HTB ${i}`;
      img.className = 'shadow-lg rounded max-w-full h-auto align-middle border-none';
      container.appendChild(img);
    }
  });
  