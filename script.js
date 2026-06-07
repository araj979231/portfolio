/* ═══════════════════════════════════════════
   PORTFOLIO SCRIPT — Abhishek Raj
   Multi-image gallery lightbox + animations
═══════════════════════════════════════════ */

// ── WORK DATA — each site has 3 "screenshot" views ──────────
const WORK_DATA = [
  {
    domain: "IT Company",
    title: "Dreams Technology",
    desc: "Full corporate website for Dreams Technology — a software services company. Showcases services like web development, app development, CRM solutions, team profiles, and a portfolio of client work with an inquiry management system.",
    features: ["Service Showcase", "Portfolio Section", "Team Profiles", "Contact & Inquiry", "Admin Panel"],
    url: "https://www.dreams-technology.com/",
    urlText: "dreams-technology.com",
    tags: ["Laravel", "Corporate", "CMS"],
    bg: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #2563eb 100%)",
    accent: "#3b82f6",
    c: ["#3b82f6", "#1d4ed8", "#2563eb"],
    slides: [
      { label: "Homepage", layout: "hero" },
      { label: "Services Page", layout: "cards" },
      { label: "Portfolio Gallery", layout: "grid" }
    ]
  },
  {
    domain: "Banking & Finance",
    title: "SNCS Sachivalay Gujarat",
    desc: "Full-scale cooperative banking platform managing loans (personal, home, vehicle), recurring deposits, fixed deposits, membership management, EMI scheduling, and real-time ledger reconciliation — handling 50,000+ daily transactions.",
    features: ["Loan Management", "Recurring Deposits", "FD & RD System", "Membership Portal", "Ledger & Reports"],
    url: "https://sncsgujarat.org/",
    urlText: "sncsgujarat.org",
    tags: ["Laravel", "Banking", "Fintech"],
    bg: "linear-gradient(135deg, #14532d 0%, #064e3b 55%, #16a34a 100%)",
    accent: "#22c55e",
    c: ["#16a34a", "#15803d", "#166534"],
    slides: [
      { label: "Homepage", layout: "hero" },
      { label: "Dashboard", layout: "dashboard" },
      { label: "Loan Portal", layout: "form" }
    ]
  },
  {
    domain: "Job Portal",
    title: "DeiChampion",
    desc: "Feature-rich job portal connecting recruiters and candidates. Includes real-time job listings, advanced candidate filtering, application tracking, subscription plans, coin-based access system, and dual-dashboard for employers and job seekers.",
    features: ["Job Listings", "Candidate Profiles", "Recruiter Dashboard", "Subscription Plans", "Real-time Chat"],
    url: "https://deichampion.com/",
    urlText: "deichampion.com",
    tags: ["Laravel", "Job Portal", "SaaS"],
    bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 55%, #7c3aed 100%)",
    accent: "#a78bfa",
    c: ["#7c3aed", "#6d28d9", "#4c1d95"],
    slides: [
      { label: "Job Listings", layout: "list" },
      { label: "Candidate Profile", layout: "profile" },
      { label: "Recruiter Dashboard", layout: "dashboard" }
    ]
  },
  {
    domain: "Real Estate",
    title: "Auricity",
    desc: "Modern real estate platform for property listings, buying, selling, and renting. Features property search with advanced filters (location, budget, type), agent profiles, virtual tour support, lead management, and a powerful admin CRM.",
    features: ["Property Listings", "Advanced Search & Filters", "Agent Profiles", "Lead CRM", "Admin Dashboard"],
    url: "https://auricity.com/",
    urlText: "auricity.com",
    tags: ["Laravel", "Real Estate", "CRM"],
    bg: "linear-gradient(135deg, #1c1917 0%, #44403c 55%, #d97706 100%)",
    accent: "#f59e0b",
    c: ["#d97706", "#b45309", "#92400e"],
    slides: [
      { label: "Homepage", layout: "hero" },
      { label: "Property Listings", layout: "grid" },
      { label: "Property Detail", layout: "detail" }
    ]
  },
  {
    domain: "IT Company",
    title: "Mustit Services",
    desc: "Professional website for Mustit Services, an IT solutions company. Presents their software services, project portfolio, client success stories, and includes a lead-capture system with inquiry forms and a full-featured backend admin panel.",
    features: ["Service Portfolio", "Lead Capture", "Case Studies", "Admin Panel", "Client Testimonials"],
    url: "https://mustitservices.com/",
    urlText: "mustitservices.com",
    tags: ["Laravel", "Corporate", "B2B"],
    bg: "linear-gradient(135deg, #0c1445 0%, #1a237e 55%, #1565c0 100%)",
    accent: "#60a5fa",
    c: ["#1565c0", "#0d47a1", "#1e40af"],
    slides: [
      { label: "Homepage", layout: "hero" },
      { label: "Services", layout: "cards" },
      { label: "Contact & Inquiry", layout: "form" }
    ]
  },
  {
    domain: "FoodTech",
    title: "NutritionNook",
    desc: "Swiggy-style food ordering platform with multi-restaurant support, real-time order tracking, GPS delivery management, wallet & payment gateway integration, push notifications, and role-based dashboards for restaurants, delivery partners, and admins.",
    features: ["Multi-restaurant", "Real-time Tracking", "GPS Delivery", "Wallet & Payments", "Push Notifications"],
    url: "https://nutritionnook.net/",
    urlText: "nutritionnook.net",
    tags: ["Laravel", "Food Delivery", "Payments"],
    bg: "linear-gradient(135deg, #1a0a00 0%, #7c2d12 55%, #ea580c 100%)",
    accent: "#fb923c",
    c: ["#ea580c", "#c2410c", "#9a3412"],
    slides: [
      { label: "Restaurant Listing", layout: "grid" },
      { label: "Order Tracking", layout: "tracking" },
      { label: "Admin Dashboard", layout: "dashboard" }
    ]
  },
  {
    domain: "Food & FMCG",
    title: "Saucy Mahi",
    desc: "Brand website and e-commerce platform for Saucy Mahi, a premium food sauce brand. Features product catalog, online ordering, bulk order inquiries, brand storytelling pages, and a distribution partner portal with backend management.",
    features: ["Product Catalog", "Online Ordering", "Bulk Inquiries", "Brand Story", "Distributor Portal"],
    url: "https://saucymahi.co/",
    urlText: "saucymahi.co",
    tags: ["eCommerce", "FMCG", "Brand"],
    bg: "linear-gradient(135deg, #450a0a 0%, #991b1b 55%, #dc2626 100%)",
    accent: "#f87171",
    c: ["#dc2626", "#b91c1c", "#991b1b"],
    slides: [
      { label: "Homepage", layout: "hero" },
      { label: "Product Catalog", layout: "grid" },
      { label: "Order Page", layout: "form" }
    ]
  },
  {
    domain: "Solar & Energy",
    title: "Helios Natural",
    desc: "Corporate & lead-generation website for a solar energy business. Covers residential and commercial solar solutions, product catalog (panels, inverters, batteries), ROI calculator, government subsidy information, and project enquiry management system.",
    features: ["Solar Products", "ROI Calculator", "Project Gallery", "Subsidy Info", "Lead Management"],
    url: "https://www.heliosnatural.com/",
    urlText: "heliosnatural.com",
    tags: ["Laravel", "Solar", "Lead Gen"],
    bg: "linear-gradient(135deg, #052e16 0%, #14532d 55%, #16a34a 100%)",
    accent: "#86efac",
    c: ["#16a34a", "#15803d", "#14532d"],
    slides: [
      { label: "Homepage", layout: "hero" },
      { label: "Products", layout: "cards" },
      { label: "ROI Calculator", layout: "form" }
    ]
  },
  {
    domain: "Education",
    title: "Hillwoods School",
    desc: "Premium school website for Hillwoods School with an online admissions portal, academic calendar, teacher profiles, event management, gallery, circular/notice board, and a parent-student communication portal with secure login.",
    features: ["Online Admissions", "Academic Calendar", "Teacher Profiles", "Event Management", "Parent Portal"],
    url: "https://www.hillwoodsschool.com/",
    urlText: "hillwoodsschool.com",
    tags: ["Laravel", "Education", "Portal"],
    bg: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 55%, #6366f1 100%)",
    accent: "#818cf8",
    c: ["#6366f1", "#4f46e5", "#4338ca"],
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
  const [c1,c2,c3] = data.c;
  const acc = data.accent;
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
const overlay      = document.getElementById('lightboxOverlay');
const lbUrlText    = document.getElementById('lbUrlText');
const lbVisit      = document.getElementById('lbVisit');
const lbVisitBtn   = document.getElementById('lbVisitBtn');
const lbDomain     = document.getElementById('lbDomain');
const lbName       = document.getElementById('lbName');
const lbDesc       = document.getElementById('lbDesc');
const lbFeatures   = document.getElementById('lbFeatures');
const lbSlides     = document.getElementById('lbSlides');
const lbGalleryDots= document.getElementById('lbGalleryDots');
const lbThumbsWrap = document.getElementById('lbThumbs');
const lbCounter    = document.getElementById('lbCounter');
const lbNavPrev    = document.getElementById('lbNavPrev');
const lbNavNext    = document.getElementById('lbNavNext');

let sliderIndex   = 0;
let lightboxIndex = 0;
let gallerySlide  = 0;
const CARD_W      = 380 + 20;

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
        <div class="overlay-sub">3 screens inside</div>
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
    card.addEventListener('click', () => openLightbox(i));
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

function buildThumbs() {
  WORK_DATA.forEach((site, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'lb-thumb' + (i === 0 ? ' active' : '');
    thumb.innerHTML = `
      <div class="lb-thumb-inner" style="background:${site.bg};"></div>
      <div class="lb-thumb-label">${site.title.split(' ')[0]}</div>`;
    thumb.addEventListener('click', () => navigateLightbox(i));
    lbThumbsWrap.appendChild(thumb);
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

// ── Lightbox ───────────────────────────────────────────
function openLightbox(projectIdx) {
  lightboxIndex = projectIdx;
  gallerySlide  = 0;
  buildGallery();
  updateLightboxInfo();
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function navigateLightbox(projectIdx) {
  lightboxIndex = Math.max(0, Math.min(projectIdx, WORK_DATA.length - 1));
  gallerySlide  = 0;
  buildGallery();
  updateLightboxInfo();
}

// Build the 3 image slides for current project
function buildGallery() {
  const data = WORK_DATA[lightboxIndex];
  lbSlides.innerHTML = '';
  lbGalleryDots.innerHTML = '';

  data.slides.forEach((_, si) => {
    lbSlides.insertAdjacentHTML('beforeend', buildSlide(data, si));
    const dot = document.createElement('button');
    dot.className = 'lb-gallery-dot' + (si === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToGallerySlide(si));
    lbGalleryDots.appendChild(dot);
  });
  goToGallerySlide(0);
}

function goToGallerySlide(idx) {
  gallerySlide = Math.max(0, Math.min(idx, WORK_DATA[lightboxIndex].slides.length - 1));
  lbSlides.style.transform = `translateX(-${gallerySlide * 100}%)`;
  document.querySelectorAll('.lb-gallery-dot').forEach((d, i) => d.classList.toggle('active', i === gallerySlide));
  lbNavPrev.disabled = gallerySlide === 0;
  lbNavNext.disabled = gallerySlide === WORK_DATA[lightboxIndex].slides.length - 1;
}

function updateLightboxInfo() {
  const site = WORK_DATA[lightboxIndex];
  lbUrlText.textContent   = site.urlText;
  lbVisit.href            = site.url;
  lbVisitBtn.href         = site.url;
  lbDomain.textContent    = site.domain;
  lbName.textContent      = site.title;
  lbDesc.textContent      = site.desc;
  lbCounter.textContent   = `${lightboxIndex + 1} / ${WORK_DATA.length}`;
  lbFeatures.innerHTML    = site.features.map(f => `<span class="lb-feature-tag">${f}</span>`).join('');

  document.querySelectorAll('.lb-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === lightboxIndex);
    if (i === lightboxIndex) t.scrollIntoView({behavior:'smooth', block:'nearest', inline:'center'});
  });
}

lbNavPrev.addEventListener('click', () => {
  if (gallerySlide > 0) { goToGallerySlide(gallerySlide - 1); }
});
lbNavNext.addEventListener('click', () => {
  if (gallerySlide < WORK_DATA[lightboxIndex].slides.length - 1) { goToGallerySlide(gallerySlide + 1); }
});

document.getElementById('lbClose').addEventListener('click', closeLightbox);
overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
document.getElementById('lbProjPrev').addEventListener('click', () => navigateLightbox(lightboxIndex - 1));
document.getElementById('lbProjNext').addEventListener('click', () => navigateLightbox(lightboxIndex + 1));

// Keyboard nav — arrows cycle through gallery slides, shift+arrow cycles projects
window.addEventListener('keydown', e => {
  if (!overlay.classList.contains('open')) return;
  if (e.key === 'Escape') { closeLightbox(); return; }
  if (e.shiftKey) {
    if (e.key === 'ArrowLeft')  navigateLightbox(lightboxIndex - 1);
    if (e.key === 'ArrowRight') navigateLightbox(lightboxIndex + 1);
  } else {
    if (e.key === 'ArrowLeft')  goToGallerySlide(gallerySlide - 1);
    if (e.key === 'ArrowRight') goToGallerySlide(gallerySlide + 1);
  }
});

// Touch swipe on lightbox (gallery slides)
let lbTx = 0;
document.querySelector && (() => {})();
overlay.addEventListener('touchstart', e => { lbTx = e.changedTouches[0].clientX; }, {passive:true});
overlay.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - lbTx;
  if (Math.abs(dx) > 45) dx < 0 ? goToGallerySlide(gallerySlide+1) : goToGallerySlide(gallerySlide-1);
}, {passive:true});

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
  buildThumbs();
  goToSlide(0);
  document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));
  initCounters();
});
