/**
 * CANVA-STYLE KASHI WEDDING INVITATION - SCRIPT
 * Canva Motion Edition with Live Images, Multi-Layer Motion Graphics,
 * Particle Shower (Petals + Diyas + Sparkles), and Audio Visualizer
 */

// ==========================================================================
// 1. CONFIGURATION DATA (Easily edit couple details, events, and venues here)
// ==========================================================================
const WEDDING_CONFIG = {
  couple: {
    groom: "Deepak",
    bride: "Sapna",
    tagline: "Two Souls • A Thousand Blessings • A Lifetime Together",
    whatsappNumber: "919876543210" // Destination WhatsApp for RSVPs
  },
  weddingDate: new Date("2026-12-03T19:00:00+05:30"), // Target for countdown

  // 5 Signature Ceremonies
  events: [
    {
      id: "engagement",
      title: "The Royal Engagement",
      subTitle: "सगाई एवं मुद्रिका संस्कार",
      dateStr: "Thursday, 30th October 2026",
      timeStr: "7:00 PM Onwards",
      startIso: "20261030T190000",
      endIso: "20261030T220000",
      venueName: "Golden Apple Mansion - Banquet Hall",
      venueAddress: "Road no 43, near Hotel LA, Phase 2, Pocket D, Industrial Area, Pitampura, New Delhi, Delhi, 110034",
      mapsQuery: "Golden Apple Mansion - Banquet Hall",
      dressCode: "Royal Pastels & Traditional",
      description: "Join us as Deepak & Sapna exchange rings and embark on their sacred journey together under the starlit Kashi sky.",
      posterImg: "assets/engagement.jpg"
    },
    {
      id: "haldi",
      title: "Mangal Haldi & Ubtan",
      subTitle: "हल्दी एवं उबटन रस्म",
      dateStr: "Monday, 2nd December 2026",
      timeStr: "10:30 AM Onwards",
      startIso: "20261203T103000",
      endIso: "20261203T140000",
      venueName: "Surya Kunj Pavilion, Assi Ghat Road",
      venueAddress: "Near Assi Ghat, Shivala, Varanasi, Uttar Pradesh 221005",
      mapsQuery: "Assi Ghat, Varanasi",
      dressCode: "Shades of Sunflower & Turmeric Yellow",
      description: "An auspicious morning filled with aromatic ubtan, yellow marigold petals, dhol beats, and lots of laughter.",
      posterImg: "assets/haldi.jpg"
    },
    {
      id: "mehendi",
      title: "Vibrant Mehendi Celebration",
      subTitle: "मेंहदी की रात",
      dateStr: "Sunday, 2nd December 2026",
      timeStr: "3:30 PM Onwards",
      startIso: "20261202T153000",
      endIso: "20261202T193000",
      venueName: "Gulab Bagh Heritage Lawns",
      venueAddress: "Cantonment, Varanasi, Uttar Pradesh 221002",
      mapsQuery: "Gulab Bagh, Varanasi",
      dressCode: "Lush Green & Floral Bohemian",
      description: "Intricate henna stories, fragrant jasmine blooms, traditional folk songs, and delightful Banarasi chaat counters.",
      posterImg: "assets/mehendi.jpg"
    },
    {
      id: "sangeet",
      title: "The Grand Sangeet & DJ Night",
      subTitle: "संगीत संध्या एवं डीजे नाइट",
      dateStr: "Thursday, 2nd December 2026",
      timeStr: "7:30 PM Onwards",
      startIso: "20261202T193000",
      endIso: "20261203T010000",
      venueName: "The Royal Ballroom, Clarks Grand",
      venueAddress: "The Mall Road, Cantonment, Varanasi, Uttar Pradesh 221002",
      mapsQuery: "Hotel Clarks Varanasi",
      dressCode: "Indo-Western Glitz & Sparkle",
      description: "Put on your dancing shoes! An electric evening of family dance-offs, Bollywood anthems, and midnight DJ beats.",
      posterImg: "assets/sangeet.jpg"
    },
    {
      id: "wedding",
      title: "The Sacred Vivah Sanskar",
      subTitle: "शुभ विवाह एवं सप्तपदी",
      dateStr: "Thursday, 3rd December 2026",
      timeStr: "7:00 PM (Baraat) | 11:30 PM (Pheras)",
      startIso: "20261203T190000",
      endIso: "20261204T020000",
      venueName: "Green Lounge North Banquet",
      venueAddress: "C93, Ring Rd, Block B, Wazirpur Industrial Area, Ashok Vihar, New Delhi, Delhi, 110052",
      mapsQuery: "Green Lounge North Banquet",
      dressCode: "Traditional Banarasi & Regal Ethnic",
      description: "Witness the sacred seven vows as Deepak & Sapna unite beside the eternal holy river Ganga amidst Vedic chants & Ganga Aarti.",
      posterImg: "assets/wedding.jpg"
    }
  ]
};

// ==========================================================================
// 2. DOM INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderEvents();
  renderVenues();
  initCountdown();
  initParallaxEngine();
  initParticles();
  initAudio();
  initScrollAnimations();
  initRSVP();
  initWishes();
});

// ==========================================================================
// 3. RENDER EVENT CARDS (With Live Motion Overlays, Calendar & Maps)
// ==========================================================================
function renderEvents() {
  const container = document.getElementById("eventsContainer");
  if (!container) return;

  container.innerHTML = WEDDING_CONFIG.events.map((event, index) => {
    // Generate Google Calendar Link
    const gCalUrl = createGoogleCalendarUrl(event);

    // Generate Google Maps URL
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.mapsQuery + " " + event.venueAddress)}`;

    // Alternating reveal directions for visual dynamism
    const isEven = index % 2 === 0;
    const posterRevealClass = isEven ? "reveal-slide-left" : "reveal-slide-right";
    const infoRevealClass = isEven ? "reveal-slide-right" : "reveal-slide-left";

    return `
      <div class="event-card-container" id="event-${event.id}">
        <article class="event-card">
          <!-- Canva Poster Showcase with Live Image Ken Burns & Motion Graphics -->
          <div class="event-poster-wrap ${posterRevealClass}">
            <span class="event-badge-tag">Ceremony ${index + 1} of 5</span>
            
            <!-- Live Light Sheen & Diya Flame Flicker -->
            <div class="motion-sheen-overlay"></div>
            <div class="diya-flame-flicker"></div>

            <img 
              src="${event.posterImg}" 
              alt="${event.title} - ${event.subTitle}" 
              class="event-poster-img parallax-card-img live-image-zoom"
              loading="lazy"
            />
          </div>

          <!-- Information Panel -->
          <div class="event-info-panel ${infoRevealClass}">
            <div class="event-header-row">
              <div>
                <h3 class="event-name gold-foil-shine">${event.title}</h3>
                <span class="event-theme-sub">${event.subTitle}</span>
              </div>
              <span class="event-dresscode-pill">${event.dressCode}</span>
            </div>

            <p class="event-desc-text">“${event.description}”</p>

            <!-- Details Grid -->
            <div class="event-details-grid">
              <!-- Date & Time -->
              <div class="detail-item">
                <div class="detail-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/></svg>
                </div>
                <div>
                  <div class="detail-meta-title">Date & Auspicious Timing</div>
                  <div class="detail-meta-val">${event.dateStr}</div>
                  <div class="detail-meta-desc">${event.timeStr}</div>
                </div>
              </div>

              <!-- Venue -->
              <div class="detail-item">
                <div class="detail-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                </div>
                <div>
                  <div class="detail-meta-title">Venue Location</div>
                  <div class="detail-meta-val">${event.venueName}</div>
                  <div class="detail-meta-desc">${event.venueAddress}</div>
                </div>
              </div>
            </div>

            <!-- Action Buttons: Google Calendar & Google Maps -->
            <div class="event-actions-row">
              <a 
                href="${gCalUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn-primary" 
                title="Save ceremony to Google Calendar"
              >
                <svg viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
                Add to Calendar
              </a>

              <a 
                href="${mapsUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn-secondary" 
                title="Get driving directions in Google Maps"
              >
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Google Maps
              </a>
            </div>

            <!-- Secondary Calendar / Copy options -->
            <div class="extra-calendar-links">
              <button class="link-subtle" onclick="downloadIcsFile('${event.id}')">
                📥 Apple / Outlook (.ics)
              </button>
              <button class="link-subtle" onclick="copyAddress('${encodeURIComponent(event.venueAddress)}')">
                📋 Copy Venue Address
              </button>
            </div>
          </div>
        </article>
      </div>
    `;
  }).join("");
}

// Generate Google Calendar render URL
function createGoogleCalendarUrl(event) {
  const baseUrl = "https://calendar.google.com/calendar/render";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${event.title} - ${WEDDING_CONFIG.couple.groom} & ${WEDDING_CONFIG.couple.bride}`,
    dates: `${event.startIso}/${event.endIso}`,
    details: `${event.description}\n\nVenue: ${event.venueName}, ${event.venueAddress}`,
    location: `${event.venueName}, ${event.venueAddress}`,
    sf: "true",
    output: "xml"
  });
  return `${baseUrl}?${params.toString()}`;
}

// Download .ICS calendar event (native for Apple Calendar, Outlook, Android)
window.downloadIcsFile = function (eventId) {
  const event = WEDDING_CONFIG.events.find(e => e.id === eventId);
  if (!event) return;

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Kashi Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${event.title} - ${WEDDING_CONFIG.couple.groom} & ${WEDDING_CONFIG.couple.bride}`,
    `DTSTART:${event.startIso}`,
    `DTEND:${event.endIso}`,
    `DESCRIPTION:${event.description.replace(/\n/g, "\\n")}`,
    `LOCATION:${event.venueName}, ${event.venueAddress}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${event.id}_invitation.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast("📅 Calendar invite (.ics) downloaded!");
};

// Copy address utility
window.copyAddress = function (encodedAddr) {
  const addr = decodeURIComponent(encodedAddr);
  navigator.clipboard.writeText(addr).then(() => {
    showToast("📍 Address copied to clipboard!");
  }).catch(() => {
    showToast("📍 " + addr);
  });
};

// ==========================================================================
// 4. MULTI-LAYER PARALLAX ENGINE
// ==========================================================================
function initParallaxEngine() {
  const heroParallaxBg = document.getElementById("heroParallaxBg");
  const storyParallaxBg = document.getElementById("storyParallaxBg");
  const storySection = document.getElementById("storySection");
  const cardImgs = document.querySelectorAll(".parallax-card-img");

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        // 1. Hero Parallax: shifts slower than scroll (0.32 speed)
        if (heroParallaxBg && scrollY <= window.innerHeight * 1.5) {
          const heroY = scrollY * 0.32;
          document.documentElement.style.setProperty("--hero-parallax-y", `${heroY}px`);
        }

        // 2. Story Section Parallax
        if (storySection && storyParallaxBg) {
          const rect = storySection.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            const storyY = (window.innerHeight - rect.top) * 0.18;
            document.documentElement.style.setProperty("--story-parallax-y", `${storyY}px`);
          }
        }

        // 3. Event Cards Inner Image Parallax
        cardImgs.forEach(img => {
          const wrap = img.parentElement;
          if (!wrap) return;
          const rect = wrap.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            const cardY = (progress - 0.5) * 45;
            img.style.setProperty("--card-parallax-y", `${cardY}px`);
          }
        });

        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Gentle Mouse Parallax on Desktop
  if (window.innerWidth > 900) {
    document.addEventListener("mousemove", (e) => {
      const mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 20;

      const heroMiddle = document.querySelector(".hero-middle");
      if (heroMiddle && window.scrollY < 400) {
        heroMiddle.style.transform = `translate3d(${mouseX * 0.5}px, ${mouseY * 0.5}px, 0)`;
      }
    });
  }
}

// ==========================================================================
// 5. RENDER VENUES LIST SECTION
// ==========================================================================
function renderVenues() {
  const container = document.getElementById("venuesList");
  if (!container) return;

  const uniqueVenues = [];
  const seenNames = new Set();

  WEDDING_CONFIG.events.forEach(e => {
    if (!seenNames.has(e.venueName)) {
      seenNames.add(e.venueName);
      uniqueVenues.push({
        name: e.venueName,
        address: e.venueAddress,
        events: [e.title],
        mapsQuery: e.mapsQuery
      });
    } else {
      const existing = uniqueVenues.find(v => v.name === e.venueName);
      if (existing) existing.events.push(e.title);
    }
  });

  container.innerHTML = uniqueVenues.map((v, i) => `
    <div class="venue-item-box reveal-fade-up" style="transition-delay: ${i * 100}ms">
      <div>
        <div class="venue-title-text gold-foil-shine">${v.name}</div>
        <div class="venue-events-associated">${v.events.join(" • ")}</div>
        <div class="venue-address-text">${v.address}</div>
      </div>
      <div class="venue-dir-btn-wrap">
        <a 
          href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.mapsQuery + " " + v.address)}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="venue-dir-btn" 
          title="Open in Google Maps"
        >
          <svg viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
          Get Directions
        </a>
      </div>
    </div>
  `).join("");
}

// ==========================================================================
// 6. LIVE COUNTDOWN TIMER
// ==========================================================================
function initCountdown() {
  const daysEl = document.getElementById("countDays");
  const hoursEl = document.getElementById("countHours");
  const minsEl = document.getElementById("countMins");
  const secsEl = document.getElementById("countSecs");

  function update() {
    const now = new Date().getTime();
    const distance = WEDDING_CONFIG.weddingDate.getTime() - now;

    if (distance < 0) {
      if (daysEl) daysEl.innerText = "00";
      if (hoursEl) hoursEl.innerText = "00";
      if (minsEl) minsEl.innerText = "00";
      if (secsEl) secsEl.innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.innerText = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.innerText = String(hours).padStart(2, "0");
    if (minsEl) minsEl.innerText = String(minutes).padStart(2, "0");
    if (secsEl) secsEl.innerText = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

// ==========================================================================
// 7. AMBIENT AUDIO SYNTHESIZER & LIVE WAVE VISUALIZER
// ==========================================================================
let audioCtx = null;
let isAudioPlaying = false;
let audioGain = null;
let oscillators = [];

function initAudio() {
  const musicToggle = document.getElementById("musicToggleBtn");
  const tapEnterBtn = document.getElementById("tapEnterBtn");

  function toggleAudio() {
    if (!audioCtx) {
      startAmbientSynth();
      isAudioPlaying = true;
      updateAudioState(true);
      showToast("🎵 Playing sacred Varanasi morning ragas");
    } else if (audioCtx.state === "suspended") {
      audioCtx.resume();
      isAudioPlaying = true;
      updateAudioState(true);
      showToast("🎵 Music resumed");
    } else if (audioCtx.state === "running") {
      audioCtx.suspend();
      isAudioPlaying = false;
      updateAudioState(false);
      showToast("🔇 Music muted");
    }
  }

  if (musicToggle) {
    musicToggle.addEventListener("click", toggleAudio);
  }

  // Auto-play when guest taps "Tap to Enter" button on hero screen
  if (tapEnterBtn) {
    tapEnterBtn.addEventListener("click", () => {
      if (!isAudioPlaying) {
        toggleAudio();
      }
      const storyEl = document.getElementById("storySection");
      if (storyEl) {
        storyEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

function updateAudioState(playing) {
  const musicToggle = document.getElementById("musicToggleBtn");
  const visualizer = document.getElementById("audioVisualizer");

  if (visualizer) {
    if (playing) {
      visualizer.classList.add("audio-playing");
    } else {
      visualizer.classList.remove("audio-playing");
    }
  }

  if (!musicToggle) return;
  if (playing) {
    musicToggle.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`;
    musicToggle.style.color = "var(--gold-light)";
  } else {
    musicToggle.innerHTML = `<svg viewBox="0 0 24 24"><path d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73l4.27 4.27c-.4.29-.86.51-1.37.62v2.06c1.07-.22 2.05-.72 2.87-1.41L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2V7z"/></svg>`;
    musicToggle.style.color = "rgba(255,255,255,0.4)";
  }
}

// Synthesizes a soothing tanpura root chord (Sa-Pa drone in C# / D)
function startAmbientSynth() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    audioGain = audioCtx.createGain();
    audioGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    audioGain.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 3);
    audioGain.connect(audioCtx.destination);

    // Tanpura Root & Fifth frequencies (C#3: 138.59, G#3: 207.65, C#4: 277.18, 554.37)
    const freqs = [138.59, 207.65, 277.18, 554.37];
    freqs.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const oscGain = audioCtx.createGain();

      osc.type = idx % 2 === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      const lfo = audioCtx.createOscillator();
      lfo.frequency.value = 0.2 + idx * 0.1;
      const lfoGain = audioCtx.createGain();
      lfoGain.gain.value = 1.2;
      lfo.connect(osc.frequency);
      lfo.start();

      oscGain.gain.value = 0.25 / (idx + 1);
      osc.connect(oscGain);
      oscGain.connect(audioGain);
      osc.start();
      oscillators.push(osc);
    });
  } catch (e) {
    console.warn("Web Audio not permitted automatically:", e);
  }
}

// ==========================================================================
// 8. MOTION GRAPHICS PARTICLES (Diyas + Golden Sparkles + Floating Petals)
// ==========================================================================
function initParticles() {
  const canvas = document.getElementById("particlesCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const count = window.innerWidth > 900 ? 60 : 35;

  for (let i = 0; i < count; i++) {
    const type = Math.random();
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 1.5,
      // Diyas drift upward, petals drift gently downward with swing
      speedY: type < 0.35 ? -Math.random() * 0.8 - 0.3 : Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.5,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.03,
      opacity: Math.random() * 0.6 + 0.3,
      type: type < 0.35 ? "diya" : (type < 0.7 ? "petal" : "sparkle")
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.y * 0.015) * 0.4;
      p.rotation += p.rotSpeed;

      // Wrap around top or bottom
      if (p.speedY < 0 && p.y < -15) {
        p.y = height + 15;
        p.x = Math.random() * width;
      } else if (p.speedY > 0 && p.y > height + 15) {
        p.y = -15;
        p.x = Math.random() * width;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);

      if (p.type === "diya") {
        // Glowing Diya Ember
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 3);
        gradient.addColorStop(0, `rgba(255, 235, 150, ${p.opacity})`);
        gradient.addColorStop(0.4, `rgba(243, 156, 18, ${p.opacity * 0.7})`);
        gradient.addColorStop(1, "rgba(212, 175, 55, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 3, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === "petal") {
        // Falling Marigold/Rose Petal Motion
        ctx.fillStyle = `rgba(235, 140, 30, ${p.opacity * 0.75})`;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 1.6, p.size * 0.9, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Twinkling Star / Sparkle
        ctx.fillStyle = `rgba(252, 246, 186, ${Math.abs(p.opacity)})`;
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================================================
// 9. SCROLL DIRECTIONAL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
// ==========================================================================
function initScrollAnimations() {
  const revealClasses = [
    ".reveal-fade-up",
    ".reveal-slide-left",
    ".reveal-slide-right",
    ".reveal-scale-up"
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  document.querySelectorAll(revealClasses.join(", ")).forEach(el => observer.observe(el));
}

// ==========================================================================
// 10. RSVP & WHATSAPP INTEGRATION
// ==========================================================================
function initRSVP() {
  const form = document.getElementById("rsvpForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const guestName = document.getElementById("rsvpName").value.trim() || "Guest";
    const guestCount = document.getElementById("rsvpCount").value;
    const eventsAttending = document.getElementById("rsvpEvent").value;

    const message = `Namaste Deepak & Sapna! 🙏✨\n\nI am delighted to accept your wedding invitation!\n\n👤 *Guest Name:* ${guestName}\n👥 *Total Guests:* ${guestCount}\n🎉 *Attending:* ${eventsAttending}\n\nLooking forward to celebrating with you in sacred Kashi! 🌸`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://api.whatsapp.com/send?phone=${WEDDING_CONFIG.couple.whatsappNumber}&text=${encoded}`;

    window.open(waUrl, "_blank");
    showToast("🎉 Opening WhatsApp to send your RSVP...");
  });
}

// Share wedding invitation link via WhatsApp
window.shareOnWhatsApp = function () {
  const text = `🌸 *Wedding Invitation: Deepak & Sapna* 🕉️\n\nWith the divine blessings of Har Har Mahadev, we warmly invite you to celebrate our wedding ceremonies in sacred Kashi!\n\nView our wedding card, ceremony schedule, add events to calendar & get Google map directions:\n${window.location.href}`;
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
};

// ==========================================================================
// 11. GUESTBOOK WISHES & BLESSINGS
// ==========================================================================
function initWishes() {
  const wishesStream = document.getElementById("wishesStream");
  const wishForm = document.getElementById("wishForm");
  if (!wishesStream) return;

  const defaultWishes = [
    { text: "May Mahadev and Maa Annapurna bless Deepak and Sapna with eternal love, harmony, and prosperity!", author: "Sharma & Pandey Family" },
    { text: "Super excited for the Banarasi Sangeet and Pheras on the holy Ganga ghats! Can't wait!", author: "Pooja & Friends" },
    { text: "Heartiest congratulations to both the families. Beautiful invitation!", author: "Dr. R. K. Verma" }
  ];

  let storedWishes = JSON.parse(localStorage.getItem("kashi_wedding_wishes") || "null");
  if (!storedWishes) {
    storedWishes = defaultWishes;
    localStorage.setItem("kashi_wedding_wishes", JSON.stringify(storedWishes));
  }

  function renderWishesList() {
    wishesStream.innerHTML = storedWishes.map(w => `
      <div class="wish-card-item">
        <div class="wish-text">“${w.text}”</div>
        <span class="wish-author">— ${w.author}</span>
      </div>
    `).join("");
  }

  renderWishesList();

  if (wishForm) {
    wishForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = document.getElementById("wishText").value.trim();
      const author = document.getElementById("wishAuthor").value.trim() || "Well Wisher";

      if (!text) return;

      storedWishes.unshift({ text, author });
      localStorage.setItem("kashi_wedding_wishes", JSON.stringify(storedWishes));
      renderWishesList();

      document.getElementById("wishText").value = "";
      document.getElementById("wishAuthor").value = "";
      showToast("🌸 Thank you for your warm blessings!");
    });
  }
}

// ==========================================================================
// 12. TOAST NOTIFICATION UTILITY
// ==========================================================================
function showToast(message) {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }

  toast.innerText = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
