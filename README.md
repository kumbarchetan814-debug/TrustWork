# 🛡️ TrustWork
### *Fair pay · Proven work · Protected funds*

> A decentralized trust & accountability platform where student project work is verified, fairly rewarded, and safely funded through an RBI-compliant nodal escrow system.

[![Live Demo](https://img.shields.io/badge/Live_Demo-trustwork--1.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://trustwork-1.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![Compliance](https://img.shields.io/badge/RBI-Nodal%20Escrow%20Directive-emerald.svg)](#-rbi-nodal-escrow-compliance)
[![Build Status](https://img.shields.io/badge/Platform-Live%20v1.0.6-blue.svg)](#)
[![Integrations](https://img.shields.io/badge/Integrations-GitHub%20%7C%20LinkedIn-darkblue.svg)](#-integrations)

---

### 🌐 Live Platform & Judge Demo
👉 **Live URL:** **[https://trustwork-1.vercel.app/](https://trustwork-1.vercel.app/)**  
*(Click the top **Fast Switcher Bar** on the live site to test all roles: Student, Mentor, Sponsor, and RBI Admin in 1 click).*

---

## 🚩 The Problem We Are Solving (Straightforward)

Every year, millions of engineering students build real-world software and hardware prototypes for college projects, sponsor bounties, and hackathons. 

Almost all of them face the exact same four broken realities:

1. **Students work for free:** Hundreds of hours spent building real production code or hardware circuits, rewarded with nothing more than an unpaid certificate and empty promises of "exposure."
2. **The "Free-Rider" problem:** In almost every team project, one student writes 80% of the codebase at 3 AM while team members who barely touched the repo get the exact same credit, marks, and certificate.
3. **Sponsors get burned:** Companies fund student grants or projects without knowing if the team will deliver working code, meet milestones, or simply ghost them before the deadline.
4. **Money vanishes into opaque bureaucracy:** When stipends or project funds are promised, payment is delayed for months or split behind closed doors with zero verifiable paper trail.

---

## 💡 What TrustWork Does

TrustWork eliminates "blind trust" between student teams, college mentors, and corporate sponsors by combining **verifiable GitHub code contributions** with **RBI-compliant nodal escrow accounts**.

### How it fixes the problem:
* **Sponsors commit 100% upfront:** Project budgets are deposited into a designated RBI Nodal Escrow Account at a Scheduled Commercial Bank before any student writes a single line of code.
* **No work, no release:** Funds stay strictly locked in escrow until agreed project milestones are delivered, code is pushed, and automated CI tests pass.
* **No free-riders taking equal cash:** TrustWork inspects GitHub commits, code diffs, and pull requests. AI suggests a contribution percentage split based on actual delivered engineering work, audited and signed off by the project mentor.
* **Transparent, automatic payout:** When a milestone is approved, the escrow automatically disburses:
  * **60%** to the student team (split fairly by verified contribution)
  * **30%** to the university mentor (for guidance, architecture reviews & sign-off)
  * **10%** to the platform (for security, CI test runners & maintenance)

---

## 💰 A Real Example: ₹50,000 Sponsor Budget

A corporate sponsor funds a **Smart Irrigation AI & IoT System** with a ₹50,000 budget:

* **Traditional Model:** Money is handed over casually. One student stays up all night building sensors and AI models. Two teammates do nothing. The sponsor gets a half-baked zip file. No one knows where the money went.
* **TrustWork Model:**
  * ₹50,000 is locked in the RBI Nodal Escrow account on Day 1.
  * **Milestone 1:** Hardware schematics & ESP32 firmware committed and verified → **₹15,000 released**.
  * **Milestone 2:** Cloud telemetry API and test suites verified → **₹20,000 released**.
  * **Milestone 3:** Edge AI model trained and field tested → **₹15,000 released**.
  * If Student A contributed 35%, Student B 35%, and Student C 30%, their bank accounts receive **₹10,500**, **₹10,500**, and **₹9,000** respectively. The Academic Mentor receives **₹15,000**. Every rupee is accounted for.

---

## 🏛️ RBI Nodal Escrow Compliance

TrustWork is designed strictly around the **Reserve Bank of India (RBI) Payment Aggregator & Nodal Escrow Directive (RBI/2020-21/115)**.

* **Designated Financial Institution:** HDFC Bank (Scheduled Commercial Bank)
* **Escrow Account Name:** `TRUSTWORK NODAL ESCROW ACCOUNT - BENEFICIARY SETTLEMENT`
* **Account Number:** `0092-2348-9102-4411` (IFSC: `HDFC0000092`)
* **Independent Trustee:** Apex Regulatory Trustee Services Ltd.
* **Compliance Code:** `RBI/2020-21/115` Master Direction on Payment Aggregators & Escrow Accounts.
* **Insulated Funds:** Sponsor deposits never enter operational accounts; they remain in the nodal escrow until authorized NEFT/RTGS UTR settlements occur.

---

## 👥 Platform Roles & Demo Switcher

The platform features an instant **Fast Switcher Bar** to evaluate all perspectives:

1. **🎓 Student Contributor (`Aarav Mehta - Hardware Lead`):** View real-time commit counts, LOC metrics, AI-suggested fair split, and direct bank payout wallet.
2. **👨‍🏫 Academic Mentor (`Dr. Ananya Sharma, IIT Madras`):** Review milestone deliverables, calibrate AI split recommendations, and manage the 30% mentor pool.
3. **🏢 Corporate Sponsor (`AgroTech Innovations Pvt Ltd`):** Lock escrow deposits, review deliverables, and click **"Approve & Release RBI Escrow"** with 1 click.
4. **🛡️ Admin Supervisory Console (`Rajesh Raman - Ex-RBI Auditor`):** Full supervisory view of all 6 registered sponsor companies (CIN, sector, KYC status) and real-time RBI settlement audit ledger.

---

## 🔗 Integrations

* **GitHub:** Live commit telemetry, pull request tracking, and branch verification with dynamic AI re-splitting.
* **LinkedIn:** Academic credentials, mentor faculty titles, and student digital proof-of-work badges.
* **Banking Rails:** Automated NEFT/RTGS UTR generation for complete auditability.

---

## 🚀 Quick Start (Run Locally)

### Prerequisites
* Node.js (v18 or higher)

### Run Platform
```bash
# Clone the repository
git clone https://github.com/<your-username>/trustwork.git

# Navigate into the project folder
cd trustwork

# Start the built-in server
node server.js
```

Open your browser at: **`http://localhost:3000`**

*(Alternatively, you can simply open `index.html` directly in any web browser).*

---

## 📁 Repository Structure

```text
trustwork/
├── .gitignore         # Ignores node_modules, temp logs, environment files, OS caches
├── LICENSE            # MIT Open-Source License
├── README.md          # Comprehensive project documentation & problem statement
├── package.json       # Project metadata & npm start scripts
├── index.html         # Light-mode, responsive SPA frontend shell
├── app.js             # Core reactive engine, RBI ledger, GitHub sync, & multi-role state
└── server.js          # Fast, zero-dependency Node.js HTTP server
```

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
