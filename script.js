/* ═══════════════════════════════════════════
   PORTFOLIO SCRIPT — Abhishek Raj
   Multi-image gallery lightbox + animations
═══════════════════════════════════════════ */

// ── WORK DATA — each site has 3 "screenshot" views ──────────
const WORK_DATA = [
  {
    domain: "Agricultural Export",
    title: "Vani Export",
    desc: "A premium B2B export portal connecting India's finest agricultural producers with global buyers. Vani Export showcases quality-certified produce, manages bulk enquiries, automates buyer communication, and builds trust through verified certifications — bridging Indian farms to international markets.",
    features: ["Product Catalogue", "Bulk Enquiry System", "Buyer Verification", "Export Documentation", "Multi-currency Pricing"],
    url: "mailto:araj979231@gmail.com",
    urlText: "vaniexport.com",
    tags: ["Laravel", "Export", "B2B"],
    bg: "linear-gradient(135deg, #1a2e05 0%, #365314 55%, #65a30d 100%)",
    accent: "#a3e635",
    c: ["#65a30d", "#4d7c0f", "#3f6212"],
    imgs: [
      "images/vani/varni-1.png",
      "images/vani/varni-10.png",
      "images/vani/varni-2.png",
      "images/vani/varni-3.png",
      "images/vani/varni-4.png",
      "images/vani/varni-5.png",
      "images/vani/varni-6.png",
      "images/vani/varni-7.png",
      "images/vani/varni-8.png",
      "images/vani/varni-9.png"
    ],
    slides: [
      { label: "Homepage", layout: "hero" },
      { label: "Product Catalogue", layout: "grid" },
      { label: "Enquiry Portal", layout: "form" }
    ]
  },
  {
    domain: "HR Technology",
    title: "HRMS Pulse",
    desc: "A comprehensive Human Resource Management System designed to streamline every stage of the employee lifecycle. HRMS Pulse delivers cutting-edge tools for recruitment pipelines, automated payroll processing, real-time attendance tracking, performance appraisals, and team analytics — all in one unified dashboard.",
    features: ["Recruitment Pipeline", "Payroll Automation", "Attendance & Leave", "Performance Appraisals", "Team Analytics Dashboard"],
    url: "mailto:araj979231@gmail.com",
    urlText: "hrmspulse.com",
    tags: ["Laravel", "HRMS", "SaaS"],
    bg: "linear-gradient(135deg, #0c1a3a 0%, #1e3a8a 55%, #2563eb 100%)",
    accent: "#60a5fa",
    c: ["#2563eb", "#1d4ed8", "#1e40af"],
    imgs: [
      "images/hrms/h-10.png",
      "images/hrms/h-13.png",
      "images/hrms/h-15.png",
      "images/hrms/h-18.png",
      "images/hrms/h-2.png",
      "images/hrms/h-20.png",
      "images/hrms/h-21.png",
      "images/hrms/h-3.png",
      "images/hrms/h-4.png",
      "images/hrms/h-8.png"
    ],
    slides: [
      { label: "Dashboard", layout: "dashboard" },
      { label: "Employee Records", layout: "list" },
      { label: "Payroll Module", layout: "form" }
    ]
  },
  {
    domain: "E-Commerce",
    title: "FitCommerce Pro",
    desc: "Fitness gear delivered to your doorstep — shop today, sweat tomorrow. FitCommerce Pro is a specialized e-commerce platform built for fitness enthusiasts, offering high-quality workout equipment and supplements at competitive prices. Smart product filtering, cart management, secure checkout, and post-order tracking make it effortless.",
    features: ["Smart Product Filters", "Cart & Wishlist", "Secure Checkout", "Order Tracking", "Admin Inventory Panel"],
    url: "mailto:araj979231@gmail.com",
    urlText: "fitcommercepro.com",
    tags: ["React", "eCommerce", "Fitness"],
    bg: "linear-gradient(135deg, #0f0a1a 0%, #4c1d95 55%, #7c3aed 100%)",
    accent: "#c4b5fd",
    c: ["#7c3aed", "#6d28d9", "#5b21b6"],
    imgs: [
      "images/fitness/e-1.png",
      "images/fitness/e-2.png",
      "images/fitness/e-3.png",
      "images/fitness/e-4.png",
      "images/fitness/e-5.png",
      "images/fitness/e-6.png",
      "images/fitness/e-7.png",
      "images/fitness/e-8.png"
    ],
    slides: [
      { label: "Shop Homepage", layout: "hero" },
      { label: "Product Grid", layout: "grid" },
      { label: "Checkout Flow", layout: "form" }
    ]
  },
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
    desc: "A feature-rich school platform bringing modern EdTech to traditional schooling. Online admissions, academic calendars, teacher profiles, event management, digital notice boards, and a secure parent-student communication portal — all in one, fully mobile-responsive system.",
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
const trackOuter     = document.getElementById('workTrackOuter');
const sliderCurrEl   = document.getElementById('sliderCurr');
const sliderTotalEl  = document.getElementById('sliderTotal');
const sliderProgress = document.getElementById('sliderProgressBar');

function padN(n) { return String(n).padStart(2, '0'); }

function updateSliderUI() {
  const total = WORK_DATA.length;
  if (sliderCurrEl)  sliderCurrEl.textContent  = padN(sliderIndex + 1);
  if (sliderTotalEl) sliderTotalEl.textContent = padN(total);
  if (sliderProgress) sliderProgress.style.width = ((sliderIndex + 1) / total * 100) + '%';
  document.querySelectorAll('.work-card').forEach((c, i) => c.classList.toggle('active', i === sliderIndex));
  btnPrev.disabled = sliderIndex === 0;
  btnNext.disabled = sliderIndex === WORK_DATA.length - 1;
}

function goToSlide(idx) {
  sliderIndex = Math.max(0, Math.min(idx, WORK_DATA.length - 1));
  const cards = track.children;
  if (cards[sliderIndex] && trackOuter) {
    const card     = cards[sliderIndex];
    const padLeft  = parseInt(getComputedStyle(track).paddingLeft) || 8;
    trackOuter.scrollTo({ left: card.offsetLeft - padLeft, behavior: 'smooth' });
  }
  updateSliderUI();
}

btnPrev.addEventListener('click', () => goToSlide(sliderIndex - 1));
btnNext.addEventListener('click', () => goToSlide(sliderIndex + 1));

// Sync index when user finger-scrolls natively (scroll-snap)
let _scrollTimer = null;
if (trackOuter) {
  trackOuter.addEventListener('scroll', () => {
    clearTimeout(_scrollTimer);
    _scrollTimer = setTimeout(() => {
      const cards = Array.from(track.children);
      if (!cards.length) return;
      const outerRect = trackOuter.getBoundingClientRect();
      let bestIdx = 0, bestDist = Infinity;
      cards.forEach((c, i) => {
        const dist = Math.abs(c.getBoundingClientRect().left - outerRect.left);
        if (dist < bestDist) { bestDist = dist; bestIdx = i; }
      });
      if (bestIdx !== sliderIndex) { sliderIndex = bestIdx; updateSliderUI(); }
    }, 80);
  }, { passive: true });
}

// Auto-advance every 5 s — pauses on hover
let _autoSlide = null;
function startAutoSlide() {
  _autoSlide = setInterval(() => {
    if (sliderIndex < WORK_DATA.length - 1) {
      goToSlide(sliderIndex + 1);
    } else {
      // instant jump back to start, then animate forward on next tick
      if (trackOuter) trackOuter.scrollTo({ left: 0 });
      sliderIndex = 0;
      updateSliderUI();
    }
  }, 5000);
}
function stopAutoSlide() { clearInterval(_autoSlide); }
if (trackOuter) {
  trackOuter.addEventListener('mouseenter', stopAutoSlide);
  trackOuter.addEventListener('mouseleave', startAutoSlide);
}

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

let _csisTimer = null;

function buildCsGallery() {
  clearInterval(_csisTimer);
  const data  = WORK_DATA[csIndex];
  const imgs  = data.imgs || [];
  const total = imgs.length;

  csGallery.innerHTML = `
    <div class="csis-wrap">
      <div class="csis-track" id="csisTrack">
        ${imgs.map((src, i) => `<img class="csis-slide" src="${src}" alt="${data.title} screen ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}">`).join('')}
      </div>
      <button class="csis-arrow csis-prev" id="csisPrev" aria-label="Previous" ${total <= 1 ? 'disabled' : ''}>
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button class="csis-arrow csis-next" id="csisNext" aria-label="Next" ${total <= 1 ? 'disabled' : ''}>
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
      </button>
      <div class="csis-dots" id="csisDots"></div>
      <div class="csis-counter" id="csisCounter">1 / ${total}</div>
    </div>`;

  if (total <= 1) return;

  const csisTrack   = document.getElementById('csisTrack');
  const csisDots    = document.getElementById('csisDots');
  const csisCounter = document.getElementById('csisCounter');
  const csisPrev    = document.getElementById('csisPrev');
  const csisNext    = document.getElementById('csisNext');
  let ci = 0;

  imgs.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'csis-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Image ${i + 1}`);
    dot.addEventListener('click', () => csisGoTo(i));
    csisDots.appendChild(dot);
  });

  function csisGoTo(idx) {
    ci = ((idx % total) + total) % total;
    csisTrack.style.transform = `translateX(-${ci * 100}%)`;
    csisCounter.textContent   = `${ci + 1} / ${total}`;
    csisDots.querySelectorAll('.csis-dot').forEach((d, i) => d.classList.toggle('active', i === ci));
    csisPrev.disabled = ci === 0;
    csisNext.disabled = ci === total - 1;
  }

  csisPrev.addEventListener('click', () => { clearInterval(_csisTimer); csisGoTo(ci - 1); });
  csisNext.addEventListener('click', () => { clearInterval(_csisTimer); csisGoTo(ci + 1); });

  // Touch swipe — stopPropagation so csOverlay doesn't also fire project navigation
  let sx = 0;
  csisTrack.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  csisTrack.addEventListener('touchend', e => {
    e.stopPropagation();
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 40) csisGoTo(dx < 0 ? ci + 1 : ci - 1);
  }, { passive: true });

  // Auto-advance every 3.5 s
  function startCsisAuto() {
    _csisTimer = setInterval(() => csisGoTo(ci < total - 1 ? ci + 1 : 0), 3500);
  }
  const wrap = csGallery.querySelector('.csis-wrap');
  wrap.addEventListener('mouseenter', () => clearInterval(_csisTimer));
  wrap.addEventListener('mouseleave', startCsisAuto);
  startCsisAuto();
  csisGoTo(0);
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
// Uses direction detection so horizontal swipes aren't stolen by the vertical gallery scroll
let csTx = 0, csTy = 0, csSwipeDir = null;

csOverlay.addEventListener('touchstart', e => {
  csTx = e.touches[0].clientX;
  csTy = e.touches[0].clientY;
  csSwipeDir = null;
}, { passive: true });

csOverlay.addEventListener('touchmove', e => {
  if (!csSwipeDir) {
    const dx = Math.abs(e.touches[0].clientX - csTx);
    const dy = Math.abs(e.touches[0].clientY - csTy);
    if (dx > 8 || dy > 8) csSwipeDir = dx > dy ? 'h' : 'v';
  }
  if (csSwipeDir === 'h') e.preventDefault();
}, { passive: false });

csOverlay.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - csTx;
  if (csSwipeDir === 'h' && Math.abs(dx) > 45) {
    dx < 0 ? navigateCaseStudy(csIndex + 1) : navigateCaseStudy(csIndex - 1);
  }
  csSwipeDir = null;
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

// ── Mobile Menu ────────────────────────────────────────
(function() {
  const hamburger = document.getElementById('navHamburger');
  const menu      = document.getElementById('mobileMenu');
  const overlay   = document.getElementById('mobileMenuOverlay');
  const closeBtn  = document.getElementById('mobileMenuClose');

  function openMenu() {
    menu.classList.add('open');
    overlay.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (closeBtn)  closeBtn.addEventListener('click', closeMenu);
  if (overlay)   overlay.addEventListener('click', closeMenu);

  document.querySelectorAll('.mm-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
})();

// ── Full-site translations ───────────────────────────────
const TRANSLATIONS = {
  en: {
    'nav.hire': 'Hire Me →',
    'hero.badge': 'Available for New Projects',
    'hero.sub': "We're Pravanjali Solutions — a full-stack digital agency that transforms ideas into revenue-generating businesses. Strategy, design, backend, frontend, launch — we handle everything so you can focus on what matters: growing your business.",
    'hero.cta1': 'Start Your Project →',
    'hero.cta2': 'See My Work',
    'hero.pill1': '⚡ PHP · Laravel · React',
    'hero.pill2': '🚀 Launch in Weeks, Not Months',
    'hero.pill3': '💰 Built for Revenue & Growth',
    'hero.pill4': '🔒 Scalable & Enterprise-Secure',
    'hero.pill5': '⭐ 30+ Live Products Shipped',
    'about.chip': 'Who We Are',
    'about.p1': "We're Pravanjali Solutions — and we'll be honest with you. Most agencies take your brief, disappear for weeks, and hand you something that technically runs but doesn't actually move your business forward. That's not how we work.",
    'about.p2': "In 5+ years, I've shipped 30+ production platforms for real businesses — banking systems handling 50,000+ daily transactions, food delivery apps with live GPS tracking, real estate CRMs that doubled qualified leads, and AI-powered SaaS tools. Every platform is still live, still running, still generating revenue.",
    'about.p3': "I've built across virtually every domain: eCommerce stores that process thousands of orders daily, HRMS platforms managing full employee lifecycles, CRM systems that convert leads into loyal customers, CMS solutions, agricultural export portals, fitness retail platforms, and enterprise ERP dashboards. If your business has a workflow, I can digitise it.",
    'about.p4': "What makes me different: I think like a business owner, not just a coder. I ask why before I write a single line. I flag problems before they get expensive. And I stay in your corner long after launch day.",
    'about.vision.title': 'My Vision',
    'about.vision.text': "Enterprise-grade digital infrastructure shouldn't be a privilege of large corporations. Every business — from solo founders to growing SMEs — deserves technology that genuinely works for them.",
    'about.mission.title': 'My Mission',
    'about.mission.text': "To build digital products that don't just function — they perform, grow, and make your business money. Every project I take on gets the same obsessive attention to architecture, speed, and results.",
    'about.cta': "Let's Work Together →",
    'work.chip': 'Live Websites',
    'work.title': 'My Work',
    'work.sub': '12 platforms live in production. Each one built to solve a real business problem — and each one still running, scaling, and generating value today.',
    'services.chip': 'What I Offer',
    'services.title': 'Services',
    'services.sub': 'From design to deployment — end-to-end digital solutions built to perform, scale, and impress.',
    'svc1.title': 'Web Design',
    'svc1.desc': 'Modern, responsive, and pixel-perfect UI/UX design that makes your brand stand out. Clean layouts built for conversion and user engagement.',
    'svc2.title': 'Web Development',
    'svc2.desc': 'Robust, high-performance web applications built with Laravel & PHP. From simple websites to complex multi-role platforms with advanced features.',
    'svc3.title': 'App Development',
    'svc3.desc': 'Full-featured mobile and progressive web applications with seamless backend integration, real-time features, and native-like performance.',
    'ts.chip': 'Under the Hood',
    'ts.title': 'Technical Stack',
    'ts.sub': 'Every tool I use is chosen for performance, scalability, and real-world results — not trends.',
    'ts.domains.label': "Domains I've Built For",
    'apps.chip': 'App Portfolio',
    'apps.title': 'Mobile Apps Built',
    'apps.sub': 'Full-stack mobile app backends with real-time features, multi-role access, and polished user experiences — built and deployed in production.',
    'dei.badge': 'Job Portal',
    'dei.name': 'DEI Champion',
    'dei.desc': 'A full-featured job portal where candidates can discover opportunities, build profiles, and apply directly — while employers post jobs, manage applicants, and hire smarter. Features coin-based access, recruiter dashboards, real-time chat, and subscription plans.',
    'dei.f1': 'Candidate profiles & resume upload',
    'dei.f2': 'Recruiter & employer dashboard',
    'dei.f3': 'Coin-based job access system',
    'dei.f4': 'Real-time chat & notifications',
    'dei.f5': 'Subscription & payment plans',
    'nn.badge': 'Food Delivery',
    'nn.name': 'NutritionNook',
    'nn.desc': 'A Swiggy-style food ordering platform where users browse menus, place real-time orders, and track delivery live. Features multi-restaurant support, GPS-based delivery tracking, OTP verification, loyalty rewards, and a powerful admin panel.',
    'nn.f1': 'Real-time order tracking with GPS',
    'nn.f2': 'Multi-restaurant & menu management',
    'nn.f3': 'Rider app with delivery routing',
    'nn.f4': 'UPI / Wallet / COD payments',
    'nn.f5': 'Admin panel for all operations',
    'reviews.chip': 'Client Reviews',
    'reviews.title': 'What Clients Say',
    'reviews.sub': 'Real feedback from real clients across banking, food delivery, real estate, and more.',
    'contact.title': "Let's Build Something<br>Remarkable Together.",
    'contact.sub': 'Available for freelance projects, full-time roles & technical consulting.',
    'contact.email': 'Send an Email',
    'contact.call': 'Call Now',
  },
  gu: {
    'nav.hire': 'હાયર કરો →',
    'hero.badge': 'નવા પ્રોજેક્ટ માટે ઉપલબ્ધ',
    'hero.sub': 'હું અભિષેક છું — Senior Full-Stack Developer જે તમારા idea ને સંપૂર્ણ digital business બનાવે. Strategy, design, backend, frontend, launch — બધું સ્વ-સ્ત્રરે સંભાળું.',
    'hero.cta1': 'પ્રોજેક્ટ શરૂ કરો →',
    'hero.cta2': 'મારું કામ જુઓ',
    'hero.pill1': '⚡ PHP · Laravel · React',
    'hero.pill2': '🚀 અઠવાડિયામાં Launch',
    'hero.pill3': '💰 Revenue-Focused Development',
    'hero.pill4': '🔒 Enterprise-Secure',
    'hero.pill5': '⭐ ૩૦+ Live Products Shipped',
    'about.chip': 'મારા વિશે',
    'about.p1': 'હું અભિષેક રાજ — સ્પષ્ટ વાત: મોટા ભાગના developers brief લઈ ગાયબ થઈ જાય ને ટેક્નિકલી ચાલે એ deliver કરે, પણ ધંધો આગળ ન વધે. હું એ રીતે કામ નથી કરતો.',
    'about.p2': '5+ વર્ષમાં 30+ production platforms ship કર્યા — banking systems જ્યાં 50,000+ daily transactions, GPS food delivery apps, real estate CRMs, AI SaaS tools. દરેક platform live, running ને revenue generate કરે છે.',
    'about.p3': 'eCommerce, HRMS, CRM, CMS, export portals, fitness platforms, ERP dashboards — જો તમારા business માં workflow છે, તો હું digitise કરી શકું.',
    'about.p4': 'ફરક: હું coder ની જેમ નહીં, business owner ની જેમ વિચારું. Why? પૂછ્યા વગર line નથી લખતો. Problem launch પહેલાં flag કરું. Launch પછી પણ સાથ.',
    'about.vision.title': 'મારો Vision',
    'about.vision.text': 'Enterprise-grade digital infrastructure ફક્ત મોટી companies નો special right ન હોવો જોઈએ. Solo founder થી growing SME — દરેક business ને technology deserve.',
    'about.mission.title': 'મારો Mission',
    'about.mission.text': 'એવા digital products build કરવા જે ફક્ત function ન કરે — perform, grow, ને business ma money lave. દરેક project ma architecture, speed, ane results par obsessive focus.',
    'about.cta': 'સાથ Work કરીએ →',
    'work.chip': 'Live Websites',
    'work.title': 'મારું કામ',
    'work.sub': '12 platforms production ma live. દરેક real business problem solve કરવા build. આજે પણ running, scaling ને value generate.',
    'services.chip': 'હું શું offer કરું',
    'services.title': 'Services',
    'services.sub': 'Design થી deployment — end-to-end digital solutions.',
    'svc1.title': 'Web Design',
    'svc1.desc': 'Modern, responsive, pixel-perfect UI/UX design. Brand stand out, conversion-focused clean layouts.',
    'svc2.title': 'Web Development',
    'svc2.desc': 'Laravel & PHP સાથે robust, high-performance web apps. Simple websites થી complex multi-role platforms.',
    'svc3.title': 'App Development',
    'svc3.desc': 'Full-featured mobile ane progressive web apps — seamless backend, real-time features, native-like performance.',
    'ts.chip': 'Technical Detail',
    'ts.title': 'Technical Stack',
    'ts.sub': 'દરેક tool performance, scalability ane real-world results માટે — trends નહીં.',
    'ts.domains.label': 'Domains જ્યાં built',
    'apps.chip': 'App Portfolio',
    'apps.title': 'Mobile Apps Built',
    'apps.sub': 'Full-stack app backends — real-time features, multi-role access ane polished UX — production ma deployed.',
    'dei.badge': 'Job Portal',
    'dei.name': 'DEI Champion',
    'dei.desc': 'Full-featured job portal — candidates opportunities discover ane apply, employers jobs post ane hire. Coin-based access, recruiter dashboards, real-time chat, subscription plans.',
    'dei.f1': 'Candidate profiles & resume upload',
    'dei.f2': 'Recruiter & employer dashboard',
    'dei.f3': 'Coin-based job access system',
    'dei.f4': 'Real-time chat & notifications',
    'dei.f5': 'Subscription & payment plans',
    'nn.badge': 'Food Delivery',
    'nn.name': 'NutritionNook',
    'nn.desc': 'Swiggy-style food ordering platform — menus browse, real-time orders, GPS delivery tracking. Multi-restaurant, OTP, loyalty rewards ane powerful admin panel.',
    'nn.f1': 'GPS-based real-time order tracking',
    'nn.f2': 'Multi-restaurant & menu management',
    'nn.f3': 'Rider app with delivery routing',
    'nn.f4': 'UPI / Wallet / COD payments',
    'nn.f5': 'Admin panel for all operations',
    'reviews.chip': 'Client Reviews',
    'reviews.title': 'Clients શું કહે છે',
    'reviews.sub': 'Banking, food delivery, real estate — real clients na real reviews.',
    'contact.title': 'સાથ મળ્ ―<br>કૈઇ અદ્ભૂત Build કરીએ.',
    'contact.sub': 'Freelance projects, full-time roles & technical consulting.',
    'contact.email': 'Email કરો',
    'contact.call': 'Call કરો',
  },
  hi: {
    'nav.hire': 'हायर करें →',
    'hero.badge': 'नए प्रोजेक्ट के लिए उपलब्ध',
    'hero.sub': 'मैं अभिषेक हूँ — Senior Full-Stack Developer जो आपके idea को पूरे digital business में बदलता है। Strategy, design, backend, frontend, launch — सब कुछ संभालता हूँ।',
    'hero.cta1': 'प्रोजेक्ट शुरू करें →',
    'hero.cta2': 'मेरा काम देखें',
    'hero.pill1': '⚡ PHP · Laravel · React',
    'hero.pill2': '🚀 हफ्तों में Launch',
    'hero.pill3': '💰 Revenue-Focused Development',
    'hero.pill4': '🔒 Enterprise-Secure',
    'hero.pill5': '⭐ 30+ Live Products Shipped',
    'about.chip': 'मेरे बारे में',
    'about.p1': 'मैं अभिषेक राज — सीधी बात: ज़्यादातर developers brief लेकर गायब हो जाते हैं और technically चलने वाली चीज़ देते हैं जो business नहीं बढ़ाती। मेरा तरीका अलग है।',
    'about.p2': '5+ साल में 30+ production platforms ship किए — banking systems जो 50,000+ daily transactions handle करते हैं, GPS food delivery apps, real estate CRMs, AI-powered SaaS tools। हर platform आज भी live और revenue generate कर रहा है।',
    'about.p3': 'eCommerce, HRMS, CRM, CMS, export portals, fitness platforms, ERP dashboards — अगर आपके business में workflow है, मैं उसे digitise कर सकता हूँ।',
    'about.p4': 'फ़र्क: मैं coder की तरह नहीं, business owner की तरह सोचता हूँ। Why? पूछे बिना एक line नहीं लिखता। Launch से पहले problem flag करता हूँ। Launch के बाद भी साथ हूँ।',
    'about.vision.title': 'मेरा Vision',
    'about.vision.text': 'Enterprise-grade digital infrastructure सिर्फ बड़ी companies का हक नहीं होना चाहिए। Solo founder से growing SME — हर business को असली technology deserve करता है।',
    'about.mission.title': 'मेरा Mission',
    'about.mission.text': 'ऐसे digital products बनाना जो सिर्फ function न करें — perform करें, grow करें, business में पैसा लाएं। हर project में architecture, speed और results पर obsessive ध्यान।',
    'about.cta': 'साथ काम करें →',
    'work.chip': 'Live Websites',
    'work.title': 'मेरा काम',
    'work.sub': '12 platforms production में live। हर एक real business problem solve करने के लिए built — आज भी running, scaling और value generate कर रहे हैं।',
    'services.chip': 'मैं क्या offer करता हूँ',
    'services.title': 'Services',
    'services.sub': 'Design से deployment — end-to-end digital solutions।',
    'svc1.title': 'Web Design',
    'svc1.desc': 'Modern, responsive, pixel-perfect UI/UX design। Brand को stand out कराएं, conversion-focused clean layouts।',
    'svc2.title': 'Web Development',
    'svc2.desc': 'Laravel & PHP के साथ robust, high-performance web apps। Simple websites से complex multi-role platforms तक।',
    'svc3.title': 'App Development',
    'svc3.desc': 'Full-featured mobile और progressive web apps — seamless backend, real-time features, native-like performance।',
    'ts.chip': 'Technical Detail',
    'ts.title': 'Technical Stack',
    'ts.sub': 'हर tool performance, scalability और real-world results के लिए — trends के लिए नहीं।',
    'ts.domains.label': 'वे Domains जहाँ built किया',
    'apps.chip': 'App Portfolio',
    'apps.title': 'Mobile Apps Built',
    'apps.sub': 'Full-stack app backends — real-time features, multi-role access और polished UX — production में deployed।',
    'dei.badge': 'Job Portal',
    'dei.name': 'DEI Champion',
    'dei.desc': 'Full-featured job portal — candidates opportunities discover करें और apply करें, employers jobs post और hire करें। Coin-based access, recruiter dashboards, real-time chat, subscription plans।',
    'dei.f1': 'Candidate profiles & resume upload',
    'dei.f2': 'Recruiter & employer dashboard',
    'dei.f3': 'Coin-based job access system',
    'dei.f4': 'Real-time chat & notifications',
    'dei.f5': 'Subscription & payment plans',
    'nn.badge': 'Food Delivery',
    'nn.name': 'NutritionNook',
    'nn.desc': 'Swiggy-style food ordering platform — menus browse करें, real-time orders place करें, GPS से delivery track करें। Multi-restaurant, OTP, loyalty rewards और powerful admin panel।',
    'nn.f1': 'GPS-based real-time order tracking',
    'nn.f2': 'Multi-restaurant & menu management',
    'nn.f3': 'Rider app with delivery routing',
    'nn.f4': 'UPI / Wallet / COD payments',
    'nn.f5': 'Admin panel for all operations',
    'reviews.chip': 'Client Reviews',
    'reviews.title': 'Clients क्या कहते हैं',
    'reviews.sub': 'Banking, food delivery, real estate — real clients के real reviews।',
    'contact.title': 'साथ मिलकर कुछ<br>शानदार बनाएं।',
    'contact.sub': 'Freelance projects, full-time roles & technical consulting।',
    'contact.email': 'Email करें',
    'contact.call': 'Call करें',
  }
};

(function initLangSwitcher() {
  const allBtns = document.querySelectorAll('[data-lang]');
  if (!allBtns.length) return;
  let currentLang = 'en';

  function applyLang(lang) {
    const d = TRANSLATIONS[lang];
    if (!d) return;
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (d[key] === undefined) return;
      el.innerHTML = d[key];
    });

    allBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  }

  allBtns.forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
})();

// ── App image sliders ─────────────────────────────────────
const APP_IMAGES = {
  nn: [
    'images/app/1.jpeg',
    'images/app/2.jpeg',
    'images/app/3.jpeg',
    'images/app/4.jpeg',
    'images/app/5.jpeg',
    'images/app/6.jpeg',
  ]
};

(function initAppSliders() {
  const sliders = document.querySelectorAll('.app-img-slider');
  if (!sliders.length) return;

  sliders.forEach(slider => {
    const id = slider.dataset.slider;
    const track = slider.querySelector('.ais-track');
    const slides = slider.querySelectorAll('.ais-slide');
    const dotsEl = slider.querySelector('.ais-dots');
    const prevBtn = slider.querySelector('.ais-prev');
    const nextBtn = slider.querySelector('.ais-next');
    const total = slides.length;
    if (!total) return;

    let current = 0;
    let autoTimer = null;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'ais-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Slide ' + (i + 1));
      dot.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); });
      dotsEl.appendChild(dot);
    });

    function goTo(idx) {
      current = (idx + total) % total;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      slider.dataset.currentSlide = current;
      slider.querySelectorAll('.ais-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    function startAuto() { autoTimer = setInterval(() => goTo(current + 1), 3500); }
    function stopAuto() { clearInterval(autoTimer); }

    prevBtn.addEventListener('click', e => { e.stopPropagation(); stopAuto(); goTo(current - 1); startAuto(); });
    nextBtn.addEventListener('click', e => { e.stopPropagation(); stopAuto(); goTo(current + 1); startAuto(); });

    // Click on slider image area → open gallery popup
    const track2 = slider.querySelector('.ais-track');
    track2.addEventListener('click', () => openGalleryPopup(id, current));
    track2.style.cursor = 'zoom-in';

    // Touch swipe
    let startX = 0;
    slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; stopAuto(); }, { passive: true });
    slider.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
      startAuto();
    }, { passive: true });

    startAuto();
  });
})();

// ── Image gallery popup ───────────────────────────────────
let _galleryImages = [];
let _galleryIdx = 0;

function openGalleryPopup(appId, startIdx) {
  _galleryImages = APP_IMAGES[appId] || [];
  _galleryIdx = startIdx || 0;
  const overlay = document.getElementById('galleryOverlay');
  if (!overlay) return;
  buildGalleryThumbs();
  galleryShowSlide(_galleryIdx);
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function galleryShowSlide(idx) {
  _galleryIdx = (_galleryIdx = ((idx % _galleryImages.length) + _galleryImages.length) % _galleryImages.length);
  const img = document.getElementById('galleryMainImg');
  const counter = document.getElementById('galleryCounter');
  if (img) img.src = _galleryImages[_galleryIdx];
  if (counter) counter.textContent = (_galleryIdx + 1) + ' / ' + _galleryImages.length;
  document.querySelectorAll('.gpop-dot').forEach((d, i) => d.classList.toggle('active', i === _galleryIdx));
  document.querySelectorAll('.gpop-thumb').forEach((t, i) => t.classList.toggle('active', i === _galleryIdx));
}

function buildGalleryThumbs() {
  const dotsEl = document.getElementById('galleryDots');
  const thumbsEl = document.getElementById('galleryThumbs');
  if (!dotsEl || !thumbsEl) return;
  dotsEl.innerHTML = '';
  thumbsEl.innerHTML = '';
  _galleryImages.forEach((src, i) => {
    const dot = document.createElement('button');
    dot.className = 'gpop-dot';
    dot.setAttribute('aria-label', 'Image ' + (i + 1));
    dot.addEventListener('click', () => galleryShowSlide(i));
    dotsEl.appendChild(dot);

    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.className = 'gpop-thumb';
    thumb.alt = 'Screenshot ' + (i + 1);
    thumb.addEventListener('click', () => galleryShowSlide(i));
    thumbsEl.appendChild(thumb);
  });
}

(function initGalleryPopupEvents() {
  const overlay = document.getElementById('galleryOverlay');
  if (!overlay) return;

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.getElementById('galleryClose').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.getElementById('galleryPrev').addEventListener('click', () => galleryShowSlide(_galleryIdx - 1));
  document.getElementById('galleryNext').addEventListener('click', () => galleryShowSlide(_galleryIdx + 1));

  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') galleryShowSlide(_galleryIdx - 1);
    if (e.key === 'ArrowRight') galleryShowSlide(_galleryIdx + 1);
  });
})();

// ── Scroll progress bar ─────────────────────────────────
(function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (docH > 0 ? (scrollTop / docH) * 100 : 0) + '%';
  }, { passive: true });
})();

// ── Scroll-spy: highlight active nav link ───────────────
(function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(s => obs.observe(s));
})();

// ── Init ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildCards();
  buildSliderDots();
  buildCsThumbs();
  updateSliderUI();
  startAutoSlide();
  document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));
  initCounters();
});
