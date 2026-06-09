/* ═══════════════════════════════════════════
   PORTFOLIO SCRIPT — Abhishek Raj
   Multi-image gallery lightbox + animations
═══════════════════════════════════════════ */

// ── WORK DATA — each site has 3 "screenshot" views ──────────
const WORK_DATA = [
  {
    domain: "IT Company",
    title: "Dreams Technology",
    desc: "A sleek, conversion-driven corporate website for a full-service software firm. Powered by a Laravel CMS, it showcases services, a live project portfolio, and team profiles — backed by a smart inquiry system that turns every visit into a business lead.",
    features: ["Service Showcase", "Portfolio Section", "Team Profiles", "Contact & Inquiry", "Admin Panel"],
    url: "https://www.dreams-technology.com/",
    urlText: "dreams-technology.com",
    tags: ["Laravel", "Corporate", "CMS"],
    bg: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #2563eb 100%)",
    accent: "#3b82f6",
    c: ["#3b82f6", "#1d4ed8", "#2563eb"],
    imgs: [
      "images/dreams/Screenshot (1098).png",
      "images/dreams/Screenshot (1099).png",
      "images/dreams/Screenshot (1100).png",
      "images/dreams/Screenshot (1101).png",
      "images/dreams/Screenshot (1102).png",
      "images/dreams/Screenshot (1103).png",
      "images/dreams/Screenshot (1104).png",
      "images/dreams/Screenshot (1105).png"
    ],
    slides: [
      { label: "Homepage", layout: "hero" },
      { label: "Services Page", layout: "cards" },
      { label: "Portfolio Gallery", layout: "grid" }
    ]
  },
  {
    domain: "Banking & Finance",
    title: "SNCS Sachivalay Gujarat",
    desc: "A battle-tested cooperative banking platform built to bank-grade standards — managing 50,000+ daily transactions. Covers personal, home & vehicle loans, FDs, RDs, membership management, EMI scheduling, and real-time ledger reconciliation.",
    features: ["Loan Management", "Recurring Deposits", "FD & RD System", "Membership Portal", "Ledger & Reports"],
    url: "https://sncsgujarat.org/",
    urlText: "sncsgujarat.org",
    tags: ["Laravel", "Banking", "Fintech"],
    bg: "linear-gradient(135deg, #14532d 0%, #064e3b 55%, #16a34a 100%)",
    accent: "#22c55e",
    c: ["#16a34a", "#15803d", "#166534"],
    imgs: [
      "images/snsc/Screenshot (1106).png",
      "images/snsc/Screenshot (1107).png",
      "images/snsc/Screenshot (1108).png",
      "images/snsc/Screenshot (1109).png",
      "images/snsc/Screenshot (1110).png",
      "images/snsc/Screenshot (1111).png"
    ],
    slides: [
      { label: "Homepage", layout: "hero" },
      { label: "Dashboard", layout: "dashboard" },
      { label: "Loan Portal", layout: "form" }
    ]
  },
  {
    domain: "Job Portal",
    title: "DeiChampion",
    desc: "A full-featured SaaS job portal connecting ambitious recruiters with top talent. Dual dashboards for employers and job seekers, smart candidate filtering, real-time listings, application tracking, subscription plans, and a coin-based access economy.",
    features: ["Job Listings", "Candidate Profiles", "Recruiter Dashboard", "Subscription Plans", "Real-time Chat"],
    url: "https://deichampion.com/",
    urlText: "deichampion.com",
    tags: ["Laravel", "Job Portal", "SaaS"],
    bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 55%, #7c3aed 100%)",
    accent: "#a78bfa",
    c: ["#7c3aed", "#6d28d9", "#4c1d95"],
    imgs: [
      "images/dei/Screenshot (1114).png",
      "images/dei/Screenshot (1115).png",
      "images/dei/Screenshot (1116).png",
      "images/dei/Screenshot (1117).png",
      "images/dei/Screenshot (1118).png",
      "images/dei/Screenshot (1119).png",
      "images/dei/Screenshot (1120).png"
    ],
    slides: [
      { label: "Job Listings", layout: "list" },
      { label: "Candidate Profile", layout: "profile" },
      { label: "Recruiter Dashboard", layout: "dashboard" }
    ]
  },
  {
    domain: "Real Estate",
    title: "Auricity",
    desc: "A high-performance real estate platform built for scale and lead generation. Advanced search by location, budget & property type, agent profiles, virtual tour support, and a CRM-powered lead pipeline — delivering a 40% jump in qualified inquiries.",
    features: ["Property Listings", "Advanced Search & Filters", "Agent Profiles", "Lead CRM", "Admin Dashboard"],
    url: "https://auricity.com/",
    urlText: "auricity.com",
    tags: ["Laravel", "Real Estate", "CRM"],
    bg: "linear-gradient(135deg, #1c1917 0%, #44403c 55%, #d97706 100%)",
    accent: "#f59e0b",
    c: ["#d97706", "#b45309", "#92400e"],
    imgs: [
      "images/auricity/Screenshot (1121).png",
      "images/auricity/Screenshot (1122).png",
      "images/auricity/Screenshot (1123).png",
      "images/auricity/Screenshot (1124).png",
      "images/auricity/Screenshot (1125).png",
      "images/auricity/Screenshot (1126).png",
      "images/auricity/Screenshot (1127).png",
      "images/auricity/Screenshot (1128).png"
    ],
    slides: [
      { label: "Homepage", layout: "hero" },
      { label: "Property Listings", layout: "grid" },
      { label: "Property Detail", layout: "detail" }
    ]
  },
  {
    domain: "IT Company",
    title: "Mustit Services",
    desc: "A sharp B2B website for a growing IT services company. Service showcases, detailed case studies, and client testimonials combined with a built-in lead-capture pipeline — turning every site visit into a qualified business inquiry automatically.",
    features: ["Service Portfolio", "Lead Capture", "Case Studies", "Admin Panel", "Client Testimonials"],
    url: "https://mustitservices.com/",
    urlText: "mustitservices.com",
    tags: ["Laravel", "Corporate", "B2B"],
    bg: "linear-gradient(135deg, #0c1445 0%, #1a237e 55%, #1565c0 100%)",
    accent: "#60a5fa",
    c: ["#1565c0", "#0d47a1", "#1e40af"],
    imgs: [
      "images/mustit/Screenshot (1129).png",
      "images/mustit/Screenshot (1130).png",
      "images/mustit/Screenshot (1131).png",
      "images/mustit/Screenshot (1132).png",
      "images/mustit/Screenshot (1133).png",
      "images/mustit/Screenshot (1134).png",
      "images/mustit/Screenshot (1135).png",
      "images/mustit/Screenshot (1136).png",
      "images/mustit/Screenshot (1137).png"
    ],
    slides: [
      { label: "Homepage", layout: "hero" },
      { label: "Services", layout: "cards" },
      { label: "Contact & Inquiry", layout: "form" }
    ]
  },
  {
    domain: "FoodTech",
    title: "NutritionNook",
    desc: "A Swiggy-grade food delivery ecosystem with multi-restaurant support, GPS real-time order tracking, wallet & payment gateway integration, and push notifications — with dedicated dashboards for restaurants, delivery partners, and admins.",
    features: ["Multi-restaurant", "Real-time Tracking", "GPS Delivery", "Wallet & Payments", "Push Notifications"],
    url: "https://nutritionnook.net/",
    urlText: "nutritionnook.net",
    tags: ["Laravel", "Food Delivery", "Payments"],
    bg: "linear-gradient(135deg, #1a0a00 0%, #7c2d12 55%, #ea580c 100%)",
    accent: "#fb923c",
    c: ["#ea580c", "#c2410c", "#9a3412"],
    imgs: [
      "images/nutrition/Screenshot (1139).png",
      "images/nutrition/Screenshot (1140).png",
      "images/nutrition/Screenshot (1141).png",
      "images/nutrition/Screenshot (1142).png",
      "images/nutrition/Screenshot (1143).png",
      "images/nutrition/Screenshot (1144).png",
      "images/nutrition/Screenshot (1145).png",
      "images/nutrition/Screenshot (1146).png",
      "images/nutrition/Screenshot (1147).png"
    ],
    slides: [
      { label: "Restaurant Listing", layout: "grid" },
      { label: "Order Tracking", layout: "tracking" },
      { label: "Admin Dashboard", layout: "dashboard" }
    ]
  },
  {
    domain: "Food & FMCG",
    title: "Saucy Mahi",
    desc: "A premium D2C brand website and e-commerce platform for a fast-growing sauce brand. Curated product catalog, seamless online ordering, bulk inquiry management, a brand storytelling experience, and a dedicated distributor partner portal.",
    features: ["Product Catalog", "Online Ordering", "Bulk Inquiries", "Brand Story", "Distributor Portal"],
    url: "https://saucymahi.co/",
    urlText: "saucymahi.co",
    tags: ["eCommerce", "FMCG", "Brand"],
    bg: "linear-gradient(135deg, #450a0a 0%, #991b1b 55%, #dc2626 100%)",
    accent: "#f87171",
    c: ["#dc2626", "#b91c1c", "#991b1b"],
    imgs: [
      "images/saucymahi/Screenshot (1148).png",
      "images/saucymahi/Screenshot (1149).png",
      "images/saucymahi/Screenshot (1150).png",
      "images/saucymahi/Screenshot (1151).png",
      "images/saucymahi/Screenshot (1152).png"
    ],
    slides: [
      { label: "Homepage", layout: "hero" },
      { label: "Product Catalog", layout: "grid" },
      { label: "Order Page", layout: "form" }
    ]
  },
  {
    domain: "Solar & Energy",
    title: "Helios Natural",
    desc: "A high-converting solar energy website engineered for lead generation. Covers residential & commercial solutions, a full product catalog, ROI calculator, government subsidy guides, and a backend inquiry pipeline — all in one polished platform.",
    features: ["Solar Products", "ROI Calculator", "Project Gallery", "Subsidy Info", "Lead Management"],
    url: "https://www.heliosnatural.com/",
    urlText: "heliosnatural.com",
    tags: ["Laravel", "Solar", "Lead Gen"],
    bg: "linear-gradient(135deg, #052e16 0%, #14532d 55%, #16a34a 100%)",
    accent: "#86efac",
    c: ["#16a34a", "#15803d", "#14532d"],
    imgs: [
      "images/heliousnatural/Screenshot (1153).png",
      "images/heliousnatural/Screenshot (1154).png",
      "images/heliousnatural/Screenshot (1155).png",
      "images/heliousnatural/Screenshot (1156).png",
      "images/heliousnatural/Screenshot (1157).png",
      "images/heliousnatural/Screenshot (1158).png",
      "images/heliousnatural/Screenshot (1159).png"
    ],
    slides: [
      { label: "Homepage", layout: "hero" },
      { label: "Products", layout: "cards" },
      { label: "ROI Calculator", layout: "form" }
    ]
  },
  {
    domain: "Education",
    title: "Hillwoods School",
    desc: "A feature-rich school platform bringing modern EdTech to traditional schooling. Online admissions, academic calendars, teacher profiles, event management, digital notice boards, and a secure parent-student communication portal — all in one.",
    features: ["Online Admissions", "Academic Calendar", "Teacher Profiles", "Event Management", "Parent Portal"],
    url: "https://www.hillwoodsschool.com/",
    urlText: "hillwoodsschool.com",
    tags: ["Laravel", "Education", "Portal"],
    bg: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 55%, #6366f1 100%)",
    accent: "#818cf8",
    c: ["#6366f1", "#4f46e5", "#4338ca"],
    imgs: [
      "images/hillswood/Screenshot (1160).png",
      "images/hillswood/Screenshot (1161).png",
      "images/hillswood/Screenshot (1162).png",
      "images/hillswood/Screenshot (1163).png",
      "images/hillswood/Screenshot (1164).png",
      "images/hillswood/Screenshot (1165).png",
      "images/hillswood/Screenshot (1166).png",
      "images/hillswood/Screenshot (1167).png"
    ],
    slides: [
      { label: "Homepage", layout: "hero" },
      { label: "Admissions Portal", layout: "form" },
      { label: "Parent Dashboard", layout: "dashboard" }
    ]
  }
];

// ── Generate a single slide mockup HTML ─────────────────────
function buildSlide(data, slideIndex) {
  const { bg, accent, c, slides } = data;

  // Use real screenshot if available
  if (data.imgs && data.imgs[slideIndex]) {
    return `
    <div class="lb-slide" style="">
      <div style="width:100%;height:100%;background:${bg};position:relative;overflow:hidden;display:flex;flex-direction:column;">
        <div class="lb-slide-label">${slides[slideIndex].label}</div>
        <div style="display:flex;align-items:center;padding:10px 16px 0;gap:5px;flex-shrink:0;">
          <div style="width:7px;height:7px;border-radius:50%;background:#ef4444;"></div>
          <div style="width:7px;height:7px;border-radius:50%;background:#f59e0b;"></div>
          <div style="width:7px;height:7px;border-radius:50%;background:#22c55e;"></div>
          <div style="flex:1;height:14px;background:rgba(255,255,255,0.14);border-radius:100px;margin:0 6px;display:flex;align-items:center;padding:0 8px;">
            <div style="height:6px;width:55%;background:rgba(255,255,255,0.25);border-radius:3px;"></div>
          </div>
        </div>
        <div style="flex:1;overflow:hidden;margin:8px 10px 10px;border-radius:8px;">
          <img src="${data.imgs[slideIndex]}"
            style="width:100%;height:100%;object-fit:cover;object-position:top;display:block;"
            alt="${data.title} - ${slides[slideIndex].label}" loading="lazy">
        </div>
      </div>
    </div>`;
  }

  const [c1, c2, c3] = c;
  const layout = slides[slideIndex].layout;

  let bodyHTML = '';

  if (layout === 'hero') {
    bodyHTML = `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
        <div style="height:11px;width:90px;background:rgba(255,255,255,0.3);border-radius:100px;"></div>
        <div style="flex:1;"></div>
        <div style="height:9px;width:32px;background:rgba(255,255,255,0.18);border-radius:100px;"></div>
        <div style="height:9px;width:32px;background:rgba(255,255,255,0.18);border-radius:100px;"></div>
        <div style="height:9px;width:32px;background:rgba(255,255,255,0.18);border-radius:100px;"></div>
        <div style="height:24px;width:60px;background:${accent};border-radius:100px;"></div>
      </div>
      <div style="height:70px;background:rgba(255,255,255,0.12);border-radius:12px;border-left:4px solid ${accent};padding:12px;margin-bottom:12px;">
        <div style="height:10px;width:60%;background:rgba(255,255,255,0.28);border-radius:4px;margin-bottom:8px;"></div>
        <div style="height:8px;width:40%;background:rgba(255,255,255,0.16);border-radius:4px;margin-bottom:6px;"></div>
        <div style="display:flex;gap:6px;margin-top:6px;">
          <div style="height:20px;width:70px;background:${accent};border-radius:100px;"></div>
          <div style="height:20px;width:55px;background:rgba(255,255,255,0.14);border-radius:100px;border:1px solid rgba(255,255,255,0.2);"></div>
        </div>
      </div>
      <div style="display:flex;gap:8px;">
        <div style="flex:1;height:55px;background:${c1}44;border-radius:10px;border:1px solid ${accent}33;"></div>
        <div style="flex:1;height:55px;background:${c2}33;border-radius:10px;"></div>
        <div style="flex:1;height:55px;background:${c3}33;border-radius:10px;"></div>
      </div>`;
  } else if (layout === 'dashboard') {
    bodyHTML = `
      <div style="display:flex;gap:8px;margin-bottom:10px;">
        <div style="width:100px;background:rgba(255,255,255,0.08);border-radius:8px;padding:8px;display:flex;flex-direction:column;gap:6px;">
          <div style="height:8px;width:80%;background:rgba(255,255,255,0.25);border-radius:4px;"></div>
          <div style="height:6px;width:65%;background:rgba(255,255,255,0.14);border-radius:4px;"></div>
          <div style="height:6px;width:70%;background:rgba(255,255,255,0.14);border-radius:4px;"></div>
          <div style="height:6px;width:55%;background:rgba(255,255,255,0.14);border-radius:4px;"></div>
          <div style="height:6px;width:75%;background:rgba(255,255,255,0.14);border-radius:4px;"></div>
        </div>
        <div style="flex:1;display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;gap:7px;">
            <div style="flex:1;height:36px;background:${accent}33;border-radius:8px;border:1px solid ${accent}44;padding:6px;"><div style="height:8px;width:60%;background:${accent}99;border-radius:3px;"></div></div>
            <div style="flex:1;height:36px;background:${c2}33;border-radius:8px;padding:6px;"><div style="height:8px;width:50%;background:${c2}88;border-radius:3px;"></div></div>
            <div style="flex:1;height:36px;background:${c3}33;border-radius:8px;padding:6px;"><div style="height:8px;width:70%;background:${c3}88;border-radius:3px;"></div></div>
          </div>
          <div style="height:68px;background:rgba(255,255,255,0.07);border-radius:8px;padding:8px;">
            <div style="height:8px;width:40%;background:rgba(255,255,255,0.2);border-radius:3px;margin-bottom:6px;"></div>
            <div style="display:flex;gap:4px;align-items:flex-end;height:42px;">
              ${[35,55,42,68,50,75,48].map(h=>`<div style="flex:1;height:${h}%;background:${accent}55;border-radius:3px 3px 0 0;"></div>`).join('')}
            </div>
          </div>
        </div>
      </div>
      <div style="display:flex;gap:6px;">
        <div style="height:10px;flex:2;background:rgba(255,255,255,0.14);border-radius:3px;"></div>
        <div style="height:10px;flex:1;background:rgba(255,255,255,0.1);border-radius:3px;"></div>
        <div style="height:10px;flex:1;background:rgba(255,255,255,0.1);border-radius:3px;"></div>
      </div>`;
  } else if (layout === 'cards') {
    bodyHTML = `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <div style="height:9px;width:70px;background:rgba(255,255,255,0.25);border-radius:4px;"></div>
        <div style="flex:1;"></div>
        <div style="height:9px;width:40px;background:rgba(255,255,255,0.14);border-radius:100px;"></div>
      </div>
      <div style="display:flex;gap:8px;margin-bottom:8px;">
        ${[c1,c2,c3].map((col,i)=>`
          <div style="flex:1;background:${col}22;border-radius:10px;border:1px solid ${col}44;padding:8px;">
            <div style="width:28px;height:28px;background:${col}55;border-radius:7px;margin-bottom:6px;display:flex;align-items:center;justify-content:center;">
              <div style="width:12px;height:12px;background:${col};border-radius:3px;"></div>
            </div>
            <div style="height:7px;width:80%;background:rgba(255,255,255,0.25);border-radius:3px;margin-bottom:4px;"></div>
            <div style="height:6px;width:60%;background:rgba(255,255,255,0.14);border-radius:3px;"></div>
          </div>`).join('')}
      </div>
      <div style="height:40px;background:rgba(255,255,255,0.07);border-radius:8px;padding:8px;display:flex;gap:6px;align-items:center;">
        <div style="height:8px;flex:1;background:rgba(255,255,255,0.18);border-radius:3px;"></div>
        <div style="height:8px;width:60px;background:rgba(255,255,255,0.1);border-radius:3px;"></div>
      </div>`;
  } else if (layout === 'grid') {
    bodyHTML = `
      <div style="height:20px;background:rgba(255,255,255,0.12);border-radius:6px;margin-bottom:8px;"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;flex:1;">
        ${[c1,c2,c3,c1,c2,c3].map((col,i)=>`
          <div style="height:45px;background:${col}${i%2===0?'44':'33'};border-radius:8px;border:1px solid ${col}33;display:flex;align-items:flex-end;padding:5px;">
            <div style="height:6px;width:70%;background:rgba(255,255,255,0.25);border-radius:3px;"></div>
          </div>`).join('')}
      </div>`;
  } else if (layout === 'form') {
    bodyHTML = `
      <div style="height:16px;width:50%;background:rgba(255,255,255,0.25);border-radius:5px;margin-bottom:10px;"></div>
      <div style="display:flex;flex-direction:column;gap:7px;">
        <div style="height:24px;background:rgba(255,255,255,0.12);border-radius:6px;border:1px solid rgba(255,255,255,0.2);display:flex;align-items:center;padding:0 8px;gap:6px;"><div style="height:7px;width:50%;background:rgba(255,255,255,0.2);border-radius:3px;"></div></div>
        <div style="height:24px;background:rgba(255,255,255,0.12);border-radius:6px;border:1px solid rgba(255,255,255,0.2);display:flex;align-items:center;padding:0 8px;gap:6px;"><div style="height:7px;width:40%;background:rgba(255,255,255,0.2);border-radius:3px;"></div></div>
        <div style="height:40px;background:rgba(255,255,255,0.08);border-radius:6px;border:1px solid rgba(255,255,255,0.15);"></div>
        <div style="height:24px;width:80px;background:${accent};border-radius:100px;"></div>
      </div>`;
  } else if (layout === 'list') {
    bodyHTML = `
      <div style="height:18px;background:rgba(255,255,255,0.12);border-radius:100px;margin-bottom:8px;display:flex;align-items:center;padding:0 8px;gap:6px;">
        <div style="height:8px;width:50%;background:rgba(255,255,255,0.2);border-radius:3px;"></div>
        <div style="height:14px;width:50px;background:${accent};border-radius:100px;margin-left:auto;"></div>
      </div>
      ${[1,2,3].map(()=>`
        <div style="background:rgba(255,255,255,0.07);border-radius:8px;padding:8px;margin-bottom:6px;display:flex;gap:8px;align-items:center;border:1px solid rgba(255,255,255,0.1);">
          <div style="width:32px;height:32px;background:${c1}44;border-radius:7px;flex-shrink:0;"></div>
          <div style="flex:1;"><div style="height:8px;width:65%;background:rgba(255,255,255,0.28);border-radius:3px;margin-bottom:4px;"></div><div style="height:6px;width:45%;background:rgba(255,255,255,0.15);border-radius:3px;"></div></div>
          <div style="height:18px;width:40px;background:${accent}44;border-radius:100px;"></div>
        </div>`).join('')}`;
  } else if (layout === 'profile') {
    bodyHTML = `
      <div style="display:flex;gap:10px;margin-bottom:10px;">
        <div style="width:52px;height:52px;border-radius:50%;background:${accent}44;flex-shrink:0;border:2px solid ${accent}66;"></div>
        <div>
          <div style="height:10px;width:90px;background:rgba(255,255,255,0.3);border-radius:4px;margin-bottom:5px;"></div>
          <div style="height:8px;width:65px;background:rgba(255,255,255,0.18);border-radius:4px;margin-bottom:5px;"></div>
          <div style="display:flex;gap:4px;">
            <div style="height:14px;width:44px;background:${accent};border-radius:100px;"></div>
            <div style="height:14px;width:36px;background:rgba(255,255,255,0.12);border-radius:100px;border:1px solid rgba(255,255,255,0.2);"></div>
          </div>
        </div>
      </div>
      <div style="display:flex;gap:6px;">
        <div style="flex:1;height:50px;background:rgba(255,255,255,0.07);border-radius:8px;border:1px solid rgba(255,255,255,0.1);padding:6px;"><div style="height:7px;width:55%;background:rgba(255,255,255,0.2);border-radius:3px;margin-bottom:4px;"></div><div style="height:12px;width:40%;background:${accent}66;border-radius:3px;"></div></div>
        <div style="flex:1;height:50px;background:rgba(255,255,255,0.07);border-radius:8px;border:1px solid rgba(255,255,255,0.1);padding:6px;"><div style="height:7px;width:55%;background:rgba(255,255,255,0.2);border-radius:3px;margin-bottom:4px;"></div><div style="height:12px;width:35%;background:${c2}66;border-radius:3px;"></div></div>
        <div style="flex:1;height:50px;background:rgba(255,255,255,0.07);border-radius:8px;border:1px solid rgba(255,255,255,0.1);padding:6px;"><div style="height:7px;width:55%;background:rgba(255,255,255,0.2);border-radius:3px;margin-bottom:4px;"></div><div style="height:12px;width:45%;background:${c3}66;border-radius:3px;"></div></div>
      </div>`;
  } else if (layout === 'tracking') {
    bodyHTML = `
      <div style="height:14px;width:55%;background:rgba(255,255,255,0.22);border-radius:5px;margin-bottom:10px;"></div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        ${['Order Placed','Preparing','Out for Delivery','Delivered'].map((s,i)=>`
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:16px;height:16px;border-radius:50%;background:${i<=2?accent:'rgba(255,255,255,0.15)'};flex-shrink:0;display:flex;align-items:center;justify-content:center;"><div style="width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,0.8);"></div></div>
            <div style="height:7px;width:${45+i*10}px;background:rgba(255,255,255,${i<=2?'0.3':'0.14'});border-radius:3px;"></div>
            ${i<=2?`<div style="height:14px;width:36px;background:${accent}44;border-radius:100px;margin-left:auto;"></div>`:''}
          </div>`).join('')}
      </div>`;
  } else if (layout === 'detail') {
    bodyHTML = `
      <div style="height:65px;background:${c1}33;border-radius:10px;margin-bottom:8px;position:relative;overflow:hidden;border:1px solid ${accent}22;">
        <div style="position:absolute;bottom:8px;left:8px;display:flex;gap:4px;">
          <div style="height:16px;width:44px;background:${accent};border-radius:100px;"></div>
          <div style="height:16px;width:36px;background:rgba(255,255,255,0.14);border-radius:100px;border:1px solid rgba(255,255,255,0.25);"></div>
        </div>
      </div>
      <div style="display:flex;gap:8px;">
        <div style="flex:2;"><div style="height:8px;width:80%;background:rgba(255,255,255,0.28);border-radius:3px;margin-bottom:5px;"></div><div style="height:6px;width:55%;background:rgba(255,255,255,0.16);border-radius:3px;margin-bottom:4px;"></div><div style="height:6px;width:65%;background:rgba(255,255,255,0.14);border-radius:3px;"></div></div>
        <div style="flex:1;display:flex;flex-direction:column;gap:4px;">
          <div style="height:18px;background:${accent};border-radius:6px;"></div>
          <div style="height:14px;background:rgba(255,255,255,0.12);border-radius:6px;border:1px solid rgba(255,255,255,0.2);"></div>
        </div>
      </div>`;
  }

  return `
    <div class="lb-slide" style="">
      <div style="width:100%;height:100%;background:${bg};position:relative;overflow:hidden;">
        <div class="lb-slide-label">${slides[slideIndex].label}</div>
        <!-- Nav bar -->
        <div style="display:flex;align-items:center;padding:10px 16px 0;gap:5px;">
          <div style="width:7px;height:7px;border-radius:50%;background:#ef4444;"></div>
          <div style="width:7px;height:7px;border-radius:50%;background:#f59e0b;"></div>
          <div style="width:7px;height:7px;border-radius:50%;background:#22c55e;"></div>
          <div style="flex:1;height:14px;background:rgba(255,255,255,0.14);border-radius:100px;margin:0 6px;display:flex;align-items:center;padding:0 8px;">
            <div style="height:6px;width:55%;background:rgba(255,255,255,0.25);border-radius:3px;"></div>
          </div>
        </div>
        <!-- Content -->
        <div style="padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;height:calc(100% - 32px);">
          ${bodyHTML}
        </div>
        <!-- Glow accent -->
        <div style="position:absolute;bottom:-60px;right:-60px;width:200px;height:200px;background:radial-gradient(circle,${accent}22 0%,transparent 70%);pointer-events:none;"></div>
      </div>
    </div>`;
}

// ── Build small card mockup ────────────────────────────
function buildCardMockup(data) {
  const acc = data.accent;

  // Use real screenshot for card preview if available
  if (data.imgs && data.imgs[0]) {
    return `
    <div class="work-mockup" style="background:${data.bg};display:flex;flex-direction:column;">
      <div class="mockup-bar">
        <div class="mockup-dot" style="background:#ef4444;"></div>
        <div class="mockup-dot" style="background:#f59e0b;"></div>
        <div class="mockup-dot" style="background:#22c55e;"></div>
        <div class="mockup-url"><span class="mockup-url-text">${data.urlText}</span></div>
      </div>
      <div style="flex:1;overflow:hidden;">
        <img src="${data.imgs[0]}"
          style="width:100%;height:100%;object-fit:cover;object-position:top;display:block;"
          alt="${data.title}" loading="lazy">
      </div>
    </div>`;
  }

  const [c1,c2,c3] = data.c;
  return `
    <div class="work-mockup" style="background:${data.bg};">
      <div class="mockup-bar">
        <div class="mockup-dot" style="background:#ef4444;"></div>
        <div class="mockup-dot" style="background:#f59e0b;"></div>
        <div class="mockup-dot" style="background:#22c55e;"></div>
        <div class="mockup-url"><span class="mockup-url-text">${data.urlText}</span></div>
      </div>
      <div class="mockup-body">
        <div class="m-hero" style="background:${acc}28;border-left:3px solid ${acc};"></div>
        <div class="m-row">
          <div class="m-block" style="flex:1;height:44px;background:${c1}50;border-radius:7px;"></div>
          <div class="m-block" style="flex:1;height:44px;background:${c2}50;border-radius:7px;"></div>
          <div class="m-block" style="flex:1;height:44px;background:${c3}50;border-radius:7px;"></div>
        </div>
        <div class="m-block" style="height:15px;width:62%;background:rgba(255,255,255,0.12);border-radius:4px;"></div>
        <div class="m-block" style="height:11px;width:40%;background:rgba(255,255,255,0.07);border-radius:4px;"></div>
      </div>
    </div>`;
}

// ── DOM refs ───────────────────────────────────────────
const track        = document.getElementById('workTrack');
const dotsWrap     = document.getElementById('sliderDots');
const btnPrev      = document.getElementById('btnPrev');
const btnNext      = document.getElementById('btnNext');

// ── Case study overlay DOM refs ─────────────────────────
const csOverlay     = document.getElementById('csOverlay');
const csClose       = document.getElementById('csClose');
const csCloseX      = document.getElementById('csCloseX');
const csGallery     = document.getElementById('csGallery');
const csCounter     = document.getElementById('csCounter');
const csDomain      = document.getElementById('csDomain');
const csTitle       = document.getElementById('csTitle');
const csDesc        = document.getElementById('csDesc');
const csFeaturesList= document.getElementById('csFeaturesList');
const csTechTags    = document.getElementById('csTechTags');
const csVisitBtn    = document.getElementById('csVisitBtn');
const csUrlText     = document.getElementById('csUrlText');
const csScreenCount = document.getElementById('csScreenCount');
const csThumbs      = document.getElementById('csThumbs');
const csProjPrev    = document.getElementById('csProjPrev');
const csProjNext    = document.getElementById('csProjNext');
const csZoomBg      = document.getElementById('csZoomBg');
const csZoomImg     = document.getElementById('csZoomImg');
const csZoomClose   = document.getElementById('csZoomClose');

let sliderIndex = 0;
let csIndex     = 0;
const CARD_W    = 380 + 20;

// ── Build slider cards ─────────────────────────────────
function buildCards() {
  WORK_DATA.forEach((site, i) => {
    const card = document.createElement('div');
    card.className = 'work-card' + (i === 0 ? ' active' : '');
    card.setAttribute('data-index', i);
    card.innerHTML = `
      ${buildCardMockup(site)}
      <div class="work-card-overlay">
        <div class="overlay-icon">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
        </div>
        <div class="overlay-label">View Details</div>
        <div class="overlay-sub">${site.imgs.length} screens inside</div>
      </div>
      <div class="work-card-info">
        <div class="work-card-domain">${site.domain}</div>
        <div class="work-card-title">${site.title}</div>
        <p class="work-card-desc">${site.desc.substring(0, 108)}…</p>
        <div class="work-card-footer">
          <div class="work-tags">${site.tags.map(t => `<span class="work-tag">${t}</span>`).join('')}</div>
          <a href="${site.url}" target="_blank" rel="noopener" class="work-visit" onclick="event.stopPropagation()">
            Visit <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        </div>
      </div>`;
    card.addEventListener('click', () => openCaseStudy(i));
    track.appendChild(card);
  });
}

function buildSliderDots() {
  WORK_DATA.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i+1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });
}

function buildCsThumbs() {
  WORK_DATA.forEach((site, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'cs-thumb' + (i === 0 ? ' active' : '');
    thumb.title = site.title;
    const img = site.imgs && site.imgs[0]
      ? `<img src="${site.imgs[0]}" alt="${site.title}" loading="lazy">`
      : `<div style="width:100%;height:100%;background:${site.bg};border-radius:5px;"></div>`;
    thumb.innerHTML = `${img}<div class="cs-thumb-label"><span>${site.title.split(' ')[0]}</span></div>`;
    thumb.addEventListener('click', () => navigateCaseStudy(i));
    csThumbs.appendChild(thumb);
  });
}

// ── Slider ─────────────────────────────────────────────
function goToSlide(idx) {
  sliderIndex = Math.max(0, Math.min(idx, WORK_DATA.length - 1));
  track.style.transform = `translateX(-${sliderIndex * CARD_W}px)`;
  document.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === sliderIndex));
  document.querySelectorAll('.work-card').forEach((c, i) => c.classList.toggle('active', i === sliderIndex));
  btnPrev.disabled = sliderIndex === 0;
  btnNext.disabled = sliderIndex === WORK_DATA.length - 1;
}

btnPrev.addEventListener('click', () => goToSlide(sliderIndex - 1));
btnNext.addEventListener('click', () => goToSlide(sliderIndex + 1));

let tStartX = 0;
track.addEventListener('touchstart', e => { tStartX = e.changedTouches[0].clientX; }, {passive:true});
track.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - tStartX;
  if (Math.abs(dx) > 40) dx < 0 ? goToSlide(sliderIndex+1) : goToSlide(sliderIndex-1);
}, {passive:true});

// ── Case Study Overlay ─────────────────────────────────
function openCaseStudy(idx) {
  csIndex = idx;
  buildCsGallery();
  updateCsInfo();
  csOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  csGallery.scrollTop = 0;
}

function closeCaseStudy() {
  csOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function navigateCaseStudy(idx) {
  csIndex = Math.max(0, Math.min(idx, WORK_DATA.length - 1));
  buildCsGallery();
  updateCsInfo();
  csGallery.scrollTop = 0;
}

function buildCsGallery() {
  const data = WORK_DATA[csIndex];
  const imgs  = data.imgs || [];
  const [hero, ...rest] = imgs;
  let html = '';

  if (hero) {
    html += `<div class="cs-img-hero" data-src="${hero}">
      <img src="${hero}" alt="${data.title} screen 1" loading="eager">
    </div>`;
  }

  if (rest.length) {
    html += '<div class="cs-img-grid">';
    rest.forEach((src, i) => {
      html += `<div class="cs-img-card" data-src="${src}">
        <img src="${src}" alt="${data.title} screen ${i + 2}" loading="lazy">
        <div class="cs-img-num">${String(i + 2).padStart(2,'0')}</div>
      </div>`;
    });
    html += '</div>';
  }

  html += `<div class="cs-gallery-cta">
    <h3>Want something like this?</h3>
    <p>I build production-grade platforms tailored to your business. Let's create yours.</p>
    <a href="mailto:araj979231@gmail.com">
      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
      Let's Work Together
    </a>
  </div>`;

  csGallery.innerHTML = html;

  csGallery.querySelectorAll('[data-src]').forEach(el => {
    el.addEventListener('click', () => openZoom(el.dataset.src));
  });
}

function updateCsInfo() {
  const site = WORK_DATA[csIndex];
  const pad  = n => String(n).padStart(2, '0');

  csCounter.textContent     = `${pad(csIndex + 1)} / ${pad(WORK_DATA.length)}`;
  csDomain.textContent      = site.domain;
  csTitle.textContent       = site.title;
  csDesc.textContent        = site.desc;
  csVisitBtn.href           = site.url;
  csUrlText.textContent     = site.urlText;
  csScreenCount.textContent = `${site.imgs.length} screens`;

  csFeaturesList.innerHTML  = site.features.map(f => `<li>${f}</li>`).join('');
  csTechTags.innerHTML      = site.tags.map(t => `<span class="cs-tech-tag">${t}</span>`).join('');

  document.querySelectorAll('.cs-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === csIndex);
    if (i === csIndex) t.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  csProjPrev.disabled = csIndex === 0;
  csProjNext.disabled = csIndex === WORK_DATA.length - 1;
}

function openZoom(src) {
  csZoomImg.src = src;
  csZoomBg.classList.add('open');
}

function closeZoom() {
  csZoomBg.classList.remove('open');
  setTimeout(() => { csZoomImg.src = ''; }, 250);
}

// Case study event listeners
csClose.addEventListener('click', closeCaseStudy);
csCloseX.addEventListener('click', closeCaseStudy);
csProjPrev.addEventListener('click', () => navigateCaseStudy(csIndex - 1));
csProjNext.addEventListener('click', () => navigateCaseStudy(csIndex + 1));
csOverlay.addEventListener('click', e => { if (e.target === csOverlay) closeCaseStudy(); });
csZoomClose.addEventListener('click', closeZoom);
csZoomBg.addEventListener('click', e => { if (e.target === csZoomBg) closeZoom(); });

window.addEventListener('keydown', e => {
  if (csZoomBg.classList.contains('open')) {
    if (e.key === 'Escape') closeZoom();
    return;
  }
  if (!csOverlay.classList.contains('open')) return;
  if (e.key === 'Escape')      closeCaseStudy();
  if (e.key === 'ArrowLeft')   navigateCaseStudy(csIndex - 1);
  if (e.key === 'ArrowRight')  navigateCaseStudy(csIndex + 1);
});

// Touch swipe on overlay to navigate projects
let csTx = 0;
csOverlay.addEventListener('touchstart', e => { csTx = e.changedTouches[0].clientX; }, { passive: true });
csOverlay.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - csTx;
  if (Math.abs(dx) > 55) dx < 0 ? navigateCaseStudy(csIndex + 1) : navigateCaseStudy(csIndex - 1);
}, { passive: true });

// ── Scroll reveal ──────────────────────────────────────
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

// ── Stat counters ──────────────────────────────────────
function initCounters() {
  const cObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      let cur = 0;
      const step = Math.ceil(target / 50);
      const t = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.innerHTML = `${cur}<em>${suffix}</em>`;
        if (cur >= target) clearInterval(t);
      }, 24);
      cObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num').forEach(el => cObs.observe(el));
}

// ── Nav scroll ─────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 20);
}, {passive:true});

// ── Init ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildCards();
  buildSliderDots();
  buildCsThumbs();
  goToSlide(0);
  document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));
  initCounters();
});
