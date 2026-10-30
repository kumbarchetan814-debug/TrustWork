// TrustWork Platform - Application Core Logic
// RBI-Compliant Escrow, Student Project Verification & Multi-role Platform

const initialData = {
  currentRole: 'student', // 'student' | 'mentor' | 'sponsor' | 'admin' | 'login'
  activeTab: 'dashboard',  // 'dashboard' | 'companies' | 'trust-account' | 'admin-dashboard' | 'how-it-works' | 'login'
  
  currentUser: {
    id: 'student-1',
    name: 'Aarav Mehta',
    role: 'student',
    specialty: 'Hardware Lead (IoT & ESP32)',
    college: 'IIT Madras',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    github: {
      username: 'aarav-iot',
      connected: true,
      repo: 'trustwork-org/smart-irrigation-ai',
      commitsCount: 38,
      pullRequests: 6
    },
    linkedin: {
      connected: true,
      url: 'https://linkedin.com/in/aarav-mehta-iot',
      verifiedSkill: 'Embedded Systems & Arduino/ESP32'
    },
    walletBalance: 10500, // INR received so far
    pendingEscrow: 7000
  },

  trustAccount: {
    regulator: "Reserve Bank of India (RBI)",
    complianceCode: "RBI/2020-21/115 - Master Direction on Payment Aggregator & Escrow Accounts",
    escrowBank: "HDFC Bank (Scheduled Commercial Bank)",
    branch: "Nariman Point Financial Hub, Mumbai",
    accountName: "TRUSTWORK NODAL ESCROW ACCOUNT - BENEFICIARY SETTLEMENT",
    accountNumber: "0092-2348-9102-4411",
    ifsc: "HDFC0000092",
    nodalTrustee: "Apex Regulatory Trustee Services Ltd.",
    totalEscrowDeposited: 2580000,
    currentlyLocked: 1850000,
    totalSettled: 730000,
    auditStatus: "100% RECONCILED (Quarterly RBI Audit Passed)",
    lastAuditDate: "24-Oct-2026",
    settlementRules: {
      platformFeePercent: 10,
      mentorFeePercent: 30,
      studentPoolPercent: 60
    }
  },

  companies: [
    {
      id: 'comp-1',
      name: 'AgroTech Innovations Pvt Ltd',
      cin: 'U72900DL2021PTC381920',
      sector: 'Agriculture & IoT',
      headquarters: 'New Delhi / Bengaluru',
      totalEscrowDeposited: 150000,
      activeProjects: 2,
      rbiKycStatus: 'Verified',
      contactPerson: 'Vikram Singhania (Head of R&D)',
      email: 'vikram.s@agrotech-inno.com',
      joinedDate: 'Jan 2026'
    },
    {
      id: 'comp-2',
      name: 'Tata Digital Labs',
      cin: 'U74999MH2019PLC332014',
      sector: 'Enterprise AI & Cloud',
      headquarters: 'Mumbai, Maharashtra',
      totalEscrowDeposited: 1200000,
      activeProjects: 6,
      rbiKycStatus: 'Verified',
      contactPerson: 'Meera Deshmukh (VP Technology)',
      email: 'm.deshmukh@tatadigital.com',
      joinedDate: 'Nov 2025'
    },
    {
      id: 'comp-3',
      name: 'GreenHorizon AgriSystems',
      cin: 'U01111KA2020PTC139821',
      sector: 'CleanTech & Renewable',
      headquarters: 'Bengaluru, Karnataka',
      totalEscrowDeposited: 320000,
      activeProjects: 3,
      rbiKycStatus: 'Verified',
      contactPerson: 'Siddharth Rao',
      email: 'siddharth@greenhorizon.eco',
      joinedDate: 'Feb 2026'
    },
    {
      id: 'comp-4',
      name: 'MediPulse Health AI',
      cin: 'U85110TG2022PTC160412',
      sector: 'Healthcare & Diagnostics',
      headquarters: 'Hyderabad, Telangana',
      totalEscrowDeposited: 480000,
      activeProjects: 4,
      rbiKycStatus: 'Verified',
      contactPerson: 'Dr. Sunita Reddy',
      email: 's.reddy@medipulse.ai',
      joinedDate: 'Dec 2025'
    },
    {
      id: 'comp-5',
      name: 'CyberShield Security Systems',
      cin: 'U72200KA2018PTC112340',
      sector: 'Cybersecurity & FinTech',
      headquarters: 'Pune, Maharashtra',
      totalEscrowDeposited: 250000,
      activeProjects: 2,
      rbiKycStatus: 'Verified',
      contactPerson: 'Kunal Verma',
      email: 'kunal@cybershield.in',
      joinedDate: 'Mar 2026'
    },
    {
      id: 'comp-6',
      name: 'CleanEnergy Mobility Corp',
      cin: 'U34100MH2021PTC368910',
      sector: 'EV & Smart Grid',
      headquarters: 'Chennai, Tamil Nadu',
      totalEscrowDeposited: 180000,
      activeProjects: 1,
      rbiKycStatus: 'Verified',
      contactPerson: 'Raghavan Iyer',
      email: 'raghavan@cleanenergy.co',
      joinedDate: 'Apr 2026'
    }
  ],

  projects: [
    {
      id: 'proj-smart-irrigation',
      title: 'Smart Irrigation IoT & AI System',
      description: 'An automated solar-powered irrigation management system with soil moisture prediction, low-power telemetry, and mobile dashboard for farmers.',
      sponsor: 'AgroTech Innovations Pvt Ltd',
      sponsorContact: 'Vikram Singhania',
      totalBudget: 50000,
      currency: 'INR (₹)',
      status: 'Active (Milestone 2 In Review)',
      githubRepo: 'trustwork-org/smart-irrigation-ai',
      githubUrl: 'https://github.com/trustwork-org/smart-irrigation-ai',
      githubBranch: 'main',
      escrowDeposited: true,
      escrowReference: 'RBI-ESC-2026-98124',
      
      splitBreakdown: {
        platformFee: 5000, // 10%
        mentorFee: 15000,   // 30%
        studentPool: 30000  // 60%
      },

      mentor: {
        id: 'mentor-1',
        name: 'Dr. Ananya Sharma',
        role: 'mentor',
        title: 'Principal Research Mentor & Professor',
        institution: 'Department of Electrical Engineering, IIT Madras',
        linkedin: 'https://linkedin.com/in/dr-ananya-sharma-iit',
        github: 'https://github.com/ananya-sharma-lab',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
        feeAllocated: 15000,
        feeReleased: 5000
      },

      students: [
        {
          id: 'student-1',
          name: 'Aarav Mehta',
          task: 'Hardware & Sensor Subsystems',
          desc: 'Develops sensor hardware, ESP32 firmware & telemetry circuit',
          github: 'aarav-iot',
          linkedin: 'aarav-mehta-iot',
          commits: 38,
          loc: 2450,
          contributionPct: 35,
          suggestedPayout: 10500, // 35% of 30,000
          releasedPayout: 5250,
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
        },
        {
          id: 'student-2',
          name: 'Priya Nair',
          task: 'Software & Cloud Dashboard',
          desc: 'Writes cloud REST APIs, WebSockets backend & React client',
          github: 'priya-codes',
          linkedin: 'priya-nair-dev',
          commits: 41,
          loc: 3100,
          contributionPct: 35,
          suggestedPayout: 10500, // 35% of 30,000
          releasedPayout: 5250,
          avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
        },
        {
          id: 'student-3',
          name: 'Rohan Das',
          task: 'AI Model & Predictions',
          desc: 'Trains soil moisture time-series model with PyTorch & ONNX edge deploy',
          github: 'rohan-ai',
          linkedin: 'rohan-das-ml',
          commits: 29,
          loc: 1850,
          contributionPct: 30,
          suggestedPayout: 9000, // 30% of 30,000
          releasedPayout: 4500,
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
        }
      ],

      milestones: [
        {
          id: 'm1',
          number: 1,
          title: 'Sensor Hardware & Firmware Architecture',
          amount: 15000,
          deliverables: 'Schematic review, ESP32 low-power test bench, MQTT telemetry handshake.',
          status: 'Approved & Released',
          releasedDate: '20-Oct-2026',
          rbiUtr: 'RBI-UTR-HDFC-9021984210',
          breakdown: {
            platform: 1500,
            mentor: 4500,
            students: 9000
          }
        },
        {
          id: 'm2',
          number: 2,
          title: 'Cloud Integration & Real-time Telemetry Pipeline',
          amount: 20000,
          deliverables: 'REST API, time-series database ingestion, GitHub Actions CI/CD test coverage > 85%.',
          status: 'In Review',
          releasedDate: null,
          rbiUtr: null,
          breakdown: {
            platform: 2000,
            mentor: 6000,
            students: 12000
          }
        },
        {
          id: 'm3',
          number: 3,
          title: 'Predictive Soil Moisture Model & Field Testing',
          amount: 15000,
          deliverables: 'Trained model embedded on edge gateway, field accuracy > 92%, comprehensive documentation.',
          status: 'In Progress',
          releasedDate: null,
          rbiUtr: null,
          breakdown: {
            platform: 1500,
            mentor: 4500,
            students: 9000
          }
        }
      ]
    }
  ],

  githubCommits: [
    {
      hash: '9f2a71d',
      author: 'Aarav Mehta',
      handle: 'aarav-iot',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      message: 'feat(hardware): calibrate capacitive soil sensors & low sleep mode (PR #14)',
      time: '2 hours ago',
      verified: true,
      milestone: 'Milestone 2',
      additions: '+184',
      deletions: '-32'
    },
    {
      hash: 'c4e810a',
      author: 'Priya Nair',
      handle: 'priya-codes',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      message: 'api: implement WebSocket telemetry broadcast and JWT auth validation',
      time: '4 hours ago',
      verified: true,
      milestone: 'Milestone 2',
      additions: '+420',
      deletions: '-64'
    },
    {
      hash: 'b1739ee',
      author: 'Rohan Das',
      handle: 'rohan-ai',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      message: 'ml: optimize LSTM hyperparams on soil dataset, loss down to 0.041',
      time: 'Yesterday',
      verified: true,
      milestone: 'Milestone 3',
      additions: '+310',
      deletions: '-45'
    },
    {
      hash: '5d890fa',
      author: 'Priya Nair',
      handle: 'priya-codes',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      message: 'ci: add automated pytest and flake8 linting in GitHub actions',
      time: '2 days ago',
      verified: true,
      milestone: 'Milestone 2',
      additions: '+98',
      deletions: '-12'
    }
  ],

  escrowTransactions: [
    {
      id: 'TXN-902181',
      date: '20-Oct-2026 14:32',
      type: 'Milestone 1 Settlement',
      project: 'Smart Irrigation IoT & AI System',
      grossAmount: 15000,
      rbiUtr: 'RBI-UTR-HDFC-9021984210',
      status: 'Settled via NEFT/RTGS',
      breakdown: 'Platform: ₹1,500 | Mentor: ₹4,500 | Students: ₹9,000'
    },
    {
      id: 'TXN-901102',
      date: '12-Oct-2026 11:15',
      type: 'Initial Project Escrow Deposit',
      project: 'Smart Irrigation IoT & AI System',
      grossAmount: 50000,
      rbiUtr: 'RBI-INFLOW-HDFC-8821034',
      status: 'Locked in Nodal Escrow',
      breakdown: 'Deposited by AgroTech Innovations Pvt Ltd'
    },
    {
      id: 'TXN-884019',
      date: '05-Oct-2026 09:40',
      type: 'Milestone 3 Final Settlement',
      project: 'Autonomous Solar Drone Surveyor',
      grossAmount: 80000,
      rbiUtr: 'RBI-UTR-HDFC-7719203918',
      status: 'Settled via NEFT/RTGS',
      breakdown: 'Platform: ₹8,000 | Mentor: ₹24,000 | Students: ₹48,000'
    }
  ]
};

class TrustWorkApp {
  constructor() {
    try {
      const saved = localStorage.getItem('trustwork_state');
      this.state = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(initialData));
      if (!this.state || !this.state.trustAccount || !this.state.companies || !this.state.projects || !this.state.currentUser) {
        this.state = JSON.parse(JSON.stringify(initialData));
      }
    } catch (e) {
      console.warn("Storage reset to initial state:", e);
      this.state = JSON.parse(JSON.stringify(initialData));
    }
    this.activeTab = this.state.activeTab || 'dashboard';
    this.init();
  }

  save() {
    this.state.activeTab = this.activeTab;
    localStorage.setItem('trustwork_state', JSON.stringify(this.state));
  }

  reset() {
    this.state = JSON.parse(JSON.stringify(initialData));
    this.activeTab = 'dashboard';
    this.save();
    this.render();
    this.showToast('Demo environment reset to initial demo presentation state!', 'success');
  }

  init() {
    this.bindEvents();
    this.render();
  }

  setRole(role, userId) {
    this.state.currentRole = role;
    
    if (role === 'student') {
      const student = this.state.projects[0].students.find(s => s.id === userId) || this.state.projects[0].students[0];
      this.state.currentUser = {
        id: student.id,
        name: student.name,
        role: 'student',
        specialty: student.task,
        college: 'IIT Madras',
        avatar: student.avatar,
        github: {
          username: student.github,
          connected: true,
          repo: 'trustwork-org/smart-irrigation-ai',
          commitsCount: student.commits,
          pullRequests: 6
        },
        linkedin: {
          connected: true,
          url: `https://linkedin.com/in/${student.linkedin}`,
          verifiedSkill: student.task
        },
        walletBalance: student.releasedPayout,
        pendingEscrow: student.suggestedPayout - student.releasedPayout
      };
      this.activeTab = 'dashboard';
    } else if (role === 'mentor') {
      const mentor = this.state.projects[0].mentor;
      this.state.currentUser = {
        id: mentor.id,
        name: mentor.name,
        role: 'mentor',
        specialty: mentor.title,
        institution: mentor.institution,
        avatar: mentor.avatar,
        github: {
          username: 'ananya-sharma-lab',
          connected: true,
          repo: 'trustwork-org/smart-irrigation-ai'
        },
        linkedin: {
          connected: true,
          url: mentor.linkedin,
          verifiedSkill: 'Research Supervisor & IoT Architecture'
        },
        walletBalance: mentor.feeReleased,
        pendingEscrow: mentor.feeAllocated - mentor.feeReleased
      };
      this.activeTab = 'dashboard';
    } else if (role === 'sponsor') {
      const company = this.state.companies[0];
      this.state.currentUser = {
        id: 'sponsor-1',
        name: company.contactPerson,
        companyName: company.name,
        role: 'sponsor',
        cin: company.cin,
        sector: company.sector,
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
        rbiEscrowFunded: company.totalEscrowDeposited,
        github: {
          connected: true,
          org: 'agrotech-ventures'
        },
        linkedin: {
          connected: true,
          url: 'https://linkedin.com/company/agrotech-innovations'
        }
      };
      this.activeTab = 'dashboard';
    } else if (role === 'admin') {
      this.state.currentUser = {
        id: 'admin-1',
        name: 'Rajesh Raman, Ex-RBI Auditor',
        role: 'admin',
        title: 'TrustWork Principal Escrow Compliance Officer',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
        clearance: 'RBI Master Directions Grade A Compliance Officer'
      };
      this.activeTab = 'admin-dashboard';
    }

    this.save();
    this.render();
    this.showToast(`Active Persona switched to ${role.toUpperCase()}: ${this.state.currentUser.name}`, 'info');
  }

  approveMilestone(projectId, milestoneId) {
    const project = this.state.projects.find(p => p.id === projectId);
    if (!project) return;

    const milestone = project.milestones.find(m => m.id === milestoneId);
    if (!milestone || milestone.status === 'Approved & Released') return;

    milestone.status = 'Approved & Released';
    milestone.releasedDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const utrNumber = 'RBI-UTR-HDFC-' + Math.floor(1000000000 + Math.random() * 9000000000);
    milestone.rbiUtr = utrNumber;

    const amount = milestone.amount;
    const platformShare = Math.round(amount * 0.10);
    const mentorShare = Math.round(amount * 0.30);
    const studentShareTotal = Math.round(amount * 0.60);

    project.mentor.feeReleased += mentorShare;

    project.students.forEach(st => {
      const share = Math.round(studentShareTotal * (st.contributionPct / 100));
      st.releasedPayout += share;
    });

    this.state.trustAccount.currentlyLocked -= amount;
    this.state.trustAccount.totalSettled += amount;

    this.state.escrowTransactions.unshift({
      id: 'TXN-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-GB') + ' ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      type: `${milestone.title} Settlement`,
      project: project.title,
      grossAmount: amount,
      rbiUtr: utrNumber,
      status: 'Settled via NEFT/RTGS',
      breakdown: `Platform: ₹${platformShare.toLocaleString()} | Mentor: ₹${mentorShare.toLocaleString()} | Students: ₹${studentShareTotal.toLocaleString()}`
    });

    if (this.state.currentRole === 'student') {
      const st = project.students.find(s => s.id === this.state.currentUser.id);
      if (st) {
        this.state.currentUser.walletBalance = st.releasedPayout;
        this.state.currentUser.pendingEscrow = st.suggestedPayout - st.releasedPayout;
      }
    } else if (this.state.currentRole === 'mentor') {
      this.state.currentUser.walletBalance = project.mentor.feeReleased;
      this.state.currentUser.pendingEscrow = project.mentor.feeAllocated - project.mentor.feeReleased;
    }

    this.save();
    this.render();
    this.showToast(`🎉 Milestone Approved! ₹${amount.toLocaleString()} disbursed from RBI Escrow via UTR ${utrNumber}`, 'success');
  }

  simulateGitHubCommit() {
    const authors = [
      { name: 'Aarav Mehta', handle: 'aarav-iot', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', studentIndex: 0 },
      { name: 'Priya Nair', handle: 'priya-codes', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80', studentIndex: 1 },
      { name: 'Rohan Das', handle: 'rohan-ai', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', studentIndex: 2 }
    ];

    const pick = authors[Math.floor(Math.random() * authors.length)];
    const commitMessages = [
      'fix: edge MQTT packet re-transmission on network jitter',
      'feat: add multi-sensor anomaly detection threshold filter',
      'refactor: streamline battery drain telemetry payload format',
      'test: integration test with synthetic weather API data feed',
      'docs: update wiring pinout diagram and installation guide'
    ];
    const msg = commitMessages[Math.floor(Math.random() * commitMessages.length)];
    const hash = Math.random().toString(16).substring(2, 9);

    const newCommit = {
      hash: hash,
      author: pick.name,
      handle: pick.handle,
      avatar: pick.avatar,
      message: msg,
      time: 'Just now',
      verified: true,
      milestone: 'Milestone 2',
      additions: '+' + Math.floor(40 + Math.random() * 200),
      deletions: '-' + Math.floor(5 + Math.random() * 40)
    };

    this.state.githubCommits.unshift(newCommit);
    
    const project = this.state.projects[0];
    project.students[pick.studentIndex].commits += 1;
    project.students[pick.studentIndex].loc += 150;

    const totalCommits = project.students.reduce((acc, curr) => acc + curr.commits, 0);
    project.students.forEach(st => {
      st.contributionPct = Math.round((st.commits / totalCommits) * 100);
      st.suggestedPayout = Math.round(project.splitBreakdown.studentPool * (st.contributionPct / 100));
    });

    this.save();
    this.render();
    this.showToast(`⚡ GitHub commit (${hash}) pushed! AI updated student fair split dynamically.`, 'info');
  }

  showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    const colors = {
      success: 'bg-emerald-50 border-emerald-300 text-emerald-900',
      info: 'bg-amber-50 border-amber-300 text-amber-900',
      error: 'bg-rose-50 border-rose-300 text-rose-900'
    };
    const icon = type === 'success' ? '✓' : type === 'info' ? 'ℹ' : '⚠';

    toast.className = `flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg text-sm font-medium transition-all transform duration-300 translate-y-2 opacity-0 ${colors[type] || colors.info}`;
    toast.innerHTML = `<span class="flex-shrink-0 font-bold">${icon}</span><span>${message}</span>`;

    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
    }, 10);

    setTimeout(() => {
      toast.classList.add('opacity-0');
      setTimeout(() => {
        if (toast && typeof toast.remove === 'function') {
          toast.remove();
        } else if (toast && toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 4000);
  }

  bindEvents() {
    document.addEventListener('click', (e) => {
      const tabTarget = e.target.closest('[data-tab]');
      if (tabTarget) {
        this.activeTab = tabTarget.dataset.tab;
        this.save();
        this.render();
        return;
      }

      const roleBtn = e.target.closest('[data-role-switch]');
      if (roleBtn) {
        const role = roleBtn.dataset.roleSwitch;
        const userId = roleBtn.dataset.userId;
        this.setRole(role, userId);
        return;
      }

      const approveBtn = e.target.closest('[data-approve-milestone]');
      if (approveBtn) {
        const projId = approveBtn.dataset.projId;
        const mId = approveBtn.dataset.mId;
        this.approveMilestone(projId, mId);
        return;
      }

      const syncGitBtn = e.target.closest('#btn-sync-github');
      if (syncGitBtn) {
        this.simulateGitHubCommit();
        return;
      }

      const resetBtn = e.target.closest('#btn-reset-demo');
      if (resetBtn) {
        this.reset();
        return;
      }

      const exportCertBtn = e.target.closest('#btn-export-cert');
      if (exportCertBtn) {
        window.print();
        return;
      }

      const connectOAuthBtn = e.target.closest('[data-oauth-connect]');
      if (connectOAuthBtn) {
        const provider = connectOAuthBtn.dataset.oauthConnect;
        this.showToast(`Connected ${provider} Account successfully! Profile credentials verified.`, 'success');
        return;
      }
    });
  }

  render() {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    appEl.innerHTML = `
      <!-- Role Switcher Top Bar -->
      <aside aria-label="Role Switcher" class="bg-amber-50 border-b border-amber-200 py-2.5 px-4 text-xs sticky top-0 z-50 shadow-xs">
        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-600 text-white shadow-2xs">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              ROLE SWITCHER
            </span>
            <span class="text-slate-700 hidden md:inline">Switch between platform roles:</span>
          </div>

          <div class="flex items-center flex-wrap gap-1.5">
            <button data-role-switch="student" data-user-id="student-1" class="px-2.5 py-1 rounded text-xs font-medium border transition-colors ${this.state.currentRole === 'student' ? 'bg-amber-600 text-white border-amber-600 shadow-2xs' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}">
              🎓 Student (Aarav)
            </button>
            <button data-role-switch="mentor" class="px-2.5 py-1 rounded text-xs font-medium border transition-colors ${this.state.currentRole === 'mentor' ? 'bg-amber-600 text-white border-amber-600 shadow-2xs' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}">
              👨‍🏫 Mentor (Dr. Ananya)
            </button>
            <button data-role-switch="sponsor" class="px-2.5 py-1 rounded text-xs font-medium border transition-colors ${this.state.currentRole === 'sponsor' ? 'bg-amber-600 text-white border-amber-600 shadow-2xs' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}">
              🏢 Sponsor (AgroTech)
            </button>
            <button data-role-switch="admin" class="px-2.5 py-1 rounded text-xs font-medium border transition-colors ${this.state.currentRole === 'admin' ? 'bg-amber-600 text-white border-amber-600 shadow-2xs' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}">
              🛡️ Admin (RBI Escrow)
            </button>
            <button id="btn-sync-github" title="Push a mock commit to repo" class="px-2.5 py-1 rounded text-xs font-medium bg-slate-800 text-white hover:bg-slate-900 border border-slate-800 flex items-center gap-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              + Commit
            </button>
            <button id="btn-reset-demo" title="Reset state to initial" class="px-2 py-1 rounded text-xs text-slate-500 hover:text-slate-800 hover:bg-amber-100">
              ↺ Reset
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Navigation Header -->
      <header class="bg-white border-b border-slate-200 sticky top-11 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div class="flex items-center gap-8">
            <!-- Brand Logo -->
            <div class="flex items-center gap-3 cursor-pointer" data-tab="dashboard">
              <div class="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shadow-2xs">
                <!-- Shield Icon -->
                <svg class="w-6 h-6 stroke-amber-600" viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-xl font-bold tracking-tight text-slate-900 font-display">TrustWork</span>
                  <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    RBI Escrow Regulated
                  </span>
                </div>
                <p class="text-[11px] text-slate-500 hidden sm:block">Fair pay · Proven work · Protected funds</p>
              </div>
            </div>

            <!-- Navigation Links -->
            <nav class="hidden md:flex items-center space-x-1">
              <button data-tab="dashboard" class="px-3 py-2 rounded-md text-sm font-medium transition-colors ${this.activeTab === 'dashboard' ? 'text-amber-700 bg-amber-50/70 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}">
                Active Project
              </button>
              <button data-tab="admin-dashboard" class="px-3 py-2 rounded-md text-sm font-medium transition-colors ${this.activeTab === 'admin-dashboard' ? 'text-amber-700 bg-amber-50/70 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}">
                Admin Dashboard
              </button>
              <button data-tab="companies" class="px-3 py-2 rounded-md text-sm font-medium transition-colors ${this.activeTab === 'companies' ? 'text-amber-700 bg-amber-50/70 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}">
                Registered Companies
              </button>
              <button data-tab="trust-account" class="px-3 py-2 rounded-md text-sm font-medium transition-colors ${this.activeTab === 'trust-account' ? 'text-amber-700 bg-amber-50/70 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}">
                RBI Trust Account
              </button>
              <button data-tab="how-it-works" class="px-3 py-2 rounded-md text-sm font-medium transition-colors ${this.activeTab === 'how-it-works' ? 'text-amber-700 bg-amber-50/70 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}">
                How It Works
              </button>
              <button data-tab="login" class="px-3 py-2 rounded-md text-sm font-medium transition-colors ${this.activeTab === 'login' ? 'text-amber-700 bg-amber-50/70 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}">
                Auth & Connect
              </button>
            </nav>
          </div>

          <!-- User Badge & Connected Integrations -->
          <div class="flex items-center gap-3">
            <div class="hidden lg:flex items-center gap-2 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 text-xs">
              <div class="flex items-center gap-1 text-slate-700" title="Connected to GitHub">
                <svg class="w-3.5 h-3.5 text-slate-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span class="font-mono text-[11px] text-emerald-600 font-medium">● GitHub Linked</span>
              </div>
              <span class="text-slate-300">|</span>
              <div class="flex items-center gap-1 text-slate-700" title="LinkedIn Profile Verified">
                <svg class="w-3.5 h-3.5 text-[#0a66c2]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span class="text-[11px] text-slate-600">LinkedIn Verified</span>
              </div>
            </div>

            <!-- Profile Pill -->
            <div class="flex items-center gap-2.5 pl-2 border-l border-slate-200 cursor-pointer" data-tab="login">
              <img src="${this.state.currentUser.avatar}" alt="${this.state.currentUser.name}" class="w-8 h-8 rounded-full border border-slate-200 object-cover" />
              <div class="text-left">
                <div class="text-xs font-semibold text-slate-800 leading-tight">${this.state.currentUser.name}</div>
                <div class="text-[10px] text-amber-700 font-medium uppercase tracking-wider">${this.state.currentRole}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Nav bar -->
        <div class="md:hidden flex items-center justify-around border-t border-slate-100 py-2 bg-slate-50 text-xs">
          <button data-tab="dashboard" class="${this.activeTab === 'dashboard' ? 'text-amber-700 font-bold' : 'text-slate-600'}">Project</button>
          <button data-tab="admin-dashboard" class="${this.activeTab === 'admin-dashboard' ? 'text-amber-700 font-bold' : 'text-slate-600'}">Admin</button>
          <button data-tab="companies" class="${this.activeTab === 'companies' ? 'text-amber-700 font-bold' : 'text-slate-600'}">Companies</button>
          <button data-tab="trust-account" class="${this.activeTab === 'trust-account' ? 'text-amber-700 font-bold' : 'text-slate-600'}">RBI Escrow</button>
          <button data-tab="login" class="${this.activeTab === 'login' ? 'text-amber-700 font-bold' : 'text-slate-600'}">Login</button>
        </div>
      </header>

      <!-- Main Body Content -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        ${this.renderActiveTab()}
      </main>

      <!-- Clean Light Footer -->
      <footer class="bg-white border-t border-slate-200 py-8 text-xs text-slate-500">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span class="font-semibold text-slate-700">TrustWork Financial Technologies Pvt Ltd</span>
            <span>·</span>
            <span>Nodal Escrow operating in compliance with Reserve Bank of India (RBI) Payment Aggregator Rules.</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-emerald-700 font-medium flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              Escrow Nodal System: Operational
            </span>
            <span>·</span>
            <span>Platform v1.0.4</span>
          </div>
        </div>
      </footer>

      <!-- Toast Notification Container -->
      <div id="toast-container" class="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none"></div>
    `;
  }

  renderActiveTab() {
    switch (this.activeTab) {
      case 'dashboard':
        return this.renderDashboard();
      case 'admin-dashboard':
        return this.renderAdminDashboard();
      case 'companies':
        return this.renderCompanies();
      case 'trust-account':
        return this.renderTrustAccount();
      case 'how-it-works':
        return this.renderPitchArchitecture();
      case 'login':
        return this.renderLoginPage();
      default:
        return this.renderDashboard();
    }
  }

  // TAB: LOGIN & ONBOARDING PAGE
  renderLoginPage() {
    return `
      <div class="max-w-4xl mx-auto space-y-8">
        <div class="text-center space-y-2">
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600">
            <svg class="w-7 h-7 stroke-amber-600" viewBox="0 0 24 24" fill="none" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight">TrustWork Authentication & Portal Login</h1>
          <p class="text-slate-600 text-sm max-w-xl mx-auto">
            Select your portal role below to access your workspace. Connect with GitHub and LinkedIn to verify contributions.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Student Card -->
          <div class="bg-white rounded-2xl border-2 ${this.state.currentRole === 'student' ? 'border-amber-500 shadow-md ring-1 ring-amber-400' : 'border-slate-200'} p-6 flex flex-col justify-between space-y-5">
            <div>
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Student Contributor Portal
                </span>
                <span class="text-2xl">🎓</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mt-3">Students & Developers</h3>
              <p class="text-xs text-slate-600 mt-1">
                Link GitHub repos, have commits verified by AI, and receive direct RBI Escrow payouts into your bank account.
              </p>

              <div class="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div class="flex items-center justify-between text-slate-600">
                  <span>Demo Profile:</span>
                  <strong class="text-slate-900">Aarav Mehta (Hardware Lead)</strong>
                </div>
                <div class="flex items-center justify-between text-slate-600">
                  <span>GitHub:</span>
                  <span class="font-mono text-slate-800">github.com/aarav-iot</span>
                </div>
                <div class="flex items-center justify-between text-slate-600">
                  <span>LinkedIn:</span>
                  <span class="text-[#0a66c2]">linkedin.com/in/aarav-mehta-iot</span>
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <button data-role-switch="student" data-user-id="student-1" class="w-full py-2.5 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-xs transition-colors flex items-center justify-center gap-2">
                Login as Aarav Mehta (Student)
              </button>
              <div class="flex gap-2">
                <button data-oauth-connect="GitHub" class="flex-1 py-1.5 rounded-lg border border-slate-300 text-[11px] font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  Connect GitHub
                </button>
                <button data-oauth-connect="LinkedIn" class="flex-1 py-1.5 rounded-lg border border-slate-300 text-[11px] font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5">
                  <svg class="w-3.5 h-3.5 text-[#0a66c2]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  Connect LinkedIn
                </button>
              </div>
            </div>
          </div>

          <!-- Mentor Card -->
          <div class="bg-white rounded-2xl border-2 ${this.state.currentRole === 'mentor' ? 'border-amber-500 shadow-md ring-1 ring-amber-400' : 'border-slate-200'} p-6 flex flex-col justify-between space-y-5">
            <div>
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  Academic Mentor Portal
                </span>
                <span class="text-2xl">👨‍🏫</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mt-3">University & Research Mentors</h3>
              <p class="text-xs text-slate-600 mt-1">
                Guide student teams, review code architecture, calibrate AI contribution splits, and receive 30% mentor escrow pool.
              </p>

              <div class="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div class="flex items-center justify-between text-slate-600">
                  <span>Demo Profile:</span>
                  <strong class="text-slate-900">Dr. Ananya Sharma (IIT Madras)</strong>
                </div>
                <div class="flex items-center justify-between text-slate-600">
                  <span>Role:</span>
                  <span>Principal Research Mentor</span>
                </div>
                <div class="flex items-center justify-between text-slate-600">
                  <span>30% Mentor Pool:</span>
                  <span class="font-bold text-amber-800">₹15,000 allocated</span>
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <button data-role-switch="mentor" class="w-full py-2.5 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-xs transition-colors flex items-center justify-center gap-2">
                Login as Dr. Ananya Sharma (Mentor)
              </button>
              <div class="flex gap-2">
                <button data-oauth-connect="GitHub" class="flex-1 py-1.5 rounded-lg border border-slate-300 text-[11px] font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  Lab Profile
                </button>
                <button data-oauth-connect="LinkedIn" class="flex-1 py-1.5 rounded-lg border border-slate-300 text-[11px] font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5">
                  <svg class="w-3.5 h-3.5 text-[#0a66c2]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  Academic Credentials
                </button>
              </div>
            </div>
          </div>

          <!-- Sponsor Card -->
          <div class="bg-white rounded-2xl border-2 ${this.state.currentRole === 'sponsor' ? 'border-amber-500 shadow-md ring-1 ring-amber-400' : 'border-slate-200'} p-6 flex flex-col justify-between space-y-5">
            <div>
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                  Corporate Sponsor Portal
                </span>
                <span class="text-2xl">🏢</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mt-3">Company Sponsors</h3>
              <p class="text-xs text-slate-600 mt-1">
                Post projects with clear scopes, lock funding safely in RBI Nodal Escrow, and approve releases only when milestones pass testing.
              </p>

              <div class="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div class="flex items-center justify-between text-slate-600">
                  <span>Demo Company:</span>
                  <strong class="text-slate-900">AgroTech Innovations Pvt Ltd</strong>
                </div>
                <div class="flex items-center justify-between text-slate-600">
                  <span>CIN:</span>
                  <span class="font-mono text-slate-800">U72900DL2021PTC381920</span>
                </div>
                <div class="flex items-center justify-between text-slate-600">
                  <span>Active Escrow:</span>
                  <span class="font-bold text-emerald-700">₹50,000 in RBI Escrow</span>
                </div>
              </div>
            </div>

            <div>
              <button data-role-switch="sponsor" class="w-full py-2.5 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-xs transition-colors flex items-center justify-center gap-2">
                Login as AgroTech Innovations (Sponsor)
              </button>
            </div>
          </div>

          <!-- Admin Portal Card -->
          <div class="bg-white rounded-2xl border-2 ${this.state.currentRole === 'admin' ? 'border-amber-500 shadow-md ring-1 ring-amber-400' : 'border-slate-200'} p-6 flex flex-col justify-between space-y-5">
            <div>
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200">
                  Trust & Compliance Portal
                </span>
                <span class="text-2xl">🛡️</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mt-3">RBI Escrow Admin Dashboard</h3>
              <p class="text-xs text-slate-600 mt-1">
                Full supervisory control: View all registered sponsor companies, inspect RBI nodal escrow balances, and audit settlement transactions.
              </p>

              <div class="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div class="flex items-center justify-between text-slate-600">
                  <span>Officer:</span>
                  <strong class="text-slate-900">Rajesh Raman, Ex-RBI Auditor</strong>
                </div>
                <div class="flex items-center justify-between text-slate-600">
                  <span>Escrow Bank:</span>
                  <span class="font-semibold text-slate-800">HDFC Scheduled Commercial</span>
                </div>
                <div class="flex items-center justify-between text-slate-600">
                  <span>Total Escrow Pool:</span>
                  <span class="font-bold text-amber-900">₹25,80,000 Locked/Settled</span>
                </div>
              </div>
            </div>

            <div>
              <button data-role-switch="admin" class="w-full py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-xs transition-colors flex items-center justify-center gap-2">
                Open RBI Escrow Admin Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // TAB: DEDICATED ADMIN DASHBOARD
  renderAdminDashboard() {
    const acc = this.state.trustAccount;

    return `
      <div class="space-y-8">
        <div class="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-600 text-white">
                  ADMIN SUPERVISORY CONSOLE
                </span>
                <span class="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  ● RBI Compliance Active
                </span>
              </div>
              <h1 class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">TrustWork Platform Administration</h1>
              <p class="text-slate-600 text-sm max-w-2xl">
                Overseeing all registered sponsor companies, active project escrows, and Reserve Bank of India (RBI) payment aggregator compliance.
              </p>
            </div>

            <div class="flex items-center gap-3">
              <button id="btn-export-cert" class="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800 text-white hover:bg-slate-900 shadow-xs flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                Export RBI Audit Report
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span class="text-xs text-slate-500 font-medium uppercase tracking-wider">Registered Companies</span>
              <div class="text-2xl font-bold text-slate-900 mt-1">${this.state.companies.length} Corporates</div>
              <span class="text-[11px] text-emerald-600 font-semibold">100% KYC Verified</span>
            </div>

            <div class="p-4 rounded-xl bg-amber-50/50 border border-amber-200">
              <span class="text-xs text-amber-800 font-semibold uppercase tracking-wider">Total Escrow Volume</span>
              <div class="text-2xl font-bold text-amber-900 mt-1">₹${acc.totalEscrowDeposited.toLocaleString()}</div>
              <span class="text-[11px] text-amber-800">Held in HDFC Nodal Account</span>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span class="text-xs text-slate-500 font-medium uppercase tracking-wider">Locked in Milestones</span>
              <div class="text-2xl font-bold text-slate-900 mt-1">₹${acc.currentlyLocked.toLocaleString()}</div>
              <span class="text-[11px] text-slate-500">Awaiting sign-off</span>
            </div>

            <div class="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200">
              <span class="text-xs text-emerald-800 font-semibold uppercase tracking-wider">Settled to Beneficiaries</span>
              <div class="text-2xl font-bold text-emerald-900 mt-1">₹${acc.totalSettled.toLocaleString()}</div>
              <span class="text-[11px] text-emerald-700 font-semibold">Settled via NEFT/RTGS</span>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-lg font-bold text-slate-900">All Registered Companies on Platform</h2>
              <p class="text-xs text-slate-500">Corporate entities funding student projects via RBI escrow</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-sm">
                <thead>
                  <tr class="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-600">
                    <th class="py-3.5 px-4 sm:px-6">Company & Registration (CIN)</th>
                    <th class="py-3.5 px-4">Sector</th>
                    <th class="py-3.5 px-4">Active Projects</th>
                    <th class="py-3.5 px-4">Escrow Deposited</th>
                    <th class="py-3.5 px-4">RBI KYC Status</th>
                    <th class="py-3.5 px-4">R&D / Tech Lead</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${this.state.companies.map(c => `
                    <tr class="hover:bg-slate-50/70 transition-colors">
                      <td class="py-4 px-4 sm:px-6">
                        <div class="font-bold text-slate-900">${c.name}</div>
                        <div class="text-xs font-mono text-slate-500 mt-0.5">CIN: ${c.cin}</div>
                        <div class="text-[11px] text-slate-400">${c.headquarters}</div>
                      </td>
                      <td class="py-4 px-4">
                        <span class="px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700">${c.sector}</span>
                      </td>
                      <td class="py-4 px-4 font-semibold text-slate-800">
                        ${c.activeProjects} ${c.activeProjects === 1 ? 'Project' : 'Projects'}
                      </td>
                      <td class="py-4 px-4">
                        <span class="font-bold text-amber-900 text-base">₹${c.totalEscrowDeposited.toLocaleString()}</span>
                        <div class="text-[10px] text-slate-500">In Nodal Escrow</div>
                      </td>
                      <td class="py-4 px-4">
                        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                          ${c.rbiKycStatus}
                        </span>
                      </td>
                      <td class="py-4 px-4 text-xs">
                        <div class="font-medium text-slate-800">${c.contactPerson}</div>
                        <div class="text-slate-500">${c.email}</div>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-lg font-bold text-slate-900">RBI Nodal Escrow Live Feed</h2>
              <p class="text-xs text-slate-500">Scheduled Commercial Bank designated account for student project rewards</p>
            </div>
            <button data-tab="trust-account" class="text-xs font-bold text-amber-700 hover:text-amber-800">
              View Complete Trust Account Details →
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span class="text-slate-500">Account Name:</span>
              <div class="font-semibold text-slate-800">${acc.accountName}</div>
            </div>
            <div>
              <span class="text-slate-500">Designated Bank & IFSC:</span>
              <div class="font-semibold text-slate-800">${acc.escrowBank} (${acc.ifsc})</div>
            </div>
            <div>
              <span class="text-slate-500">Nodal Escrow Account No.:</span>
              <div class="font-mono font-bold text-amber-900">${acc.accountNumber}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // TAB 1: ACTIVE PROJECT DASHBOARD (Tailored by Role)
  renderDashboard() {
    const project = this.state.projects[0];
    const totalStudentPool = project.splitBreakdown.studentPool;
    const isSponsorOrMentor = this.state.currentRole === 'sponsor' || this.state.currentRole === 'mentor' || this.state.currentRole === 'admin';

    return `
      <div class="space-y-8">
        <!-- Top Project Header Banner -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div class="space-y-2">
              <div class="flex flex-wrap items-center gap-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  ● Verified RBI Escrow Funded
                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                  AgTech & Embedded IoT
                </span>
                <span class="text-xs text-slate-500">Reference: ${project.escrowReference}</span>
              </div>
              <h1 class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">${project.title}</h1>
              <p class="text-slate-600 max-w-3xl text-sm leading-relaxed">${project.description}</p>
            </div>

            <!-- Escrow Budget Card -->
            <div class="bg-amber-50/50 rounded-xl p-5 border border-amber-200/80 flex lg:flex-col items-center justify-between lg:justify-center min-w-[220px] text-center">
              <div>
                <span class="text-xs uppercase tracking-wider font-semibold text-amber-800">Sponsor Escrow Budget</span>
                <div class="text-3xl font-bold text-amber-900 mt-1">₹${project.totalBudget.toLocaleString()}</div>
              </div>
              <div class="mt-2 text-left lg:text-center text-[11px] text-slate-500">
                <span>Deposited by: </span>
                <strong class="text-slate-700">${project.sponsor}</strong>
              </div>
            </div>
          </div>

          <!-- Escrow Split Pillars -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-100">
            <!-- 10% Platform -->
            <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Platform Security Fee</span>
                <span class="px-2 py-0.5 rounded text-xs font-bold bg-slate-200 text-slate-700">10%</span>
              </div>
              <div class="text-xl font-bold text-slate-900">₹${project.splitBreakdown.platformFee.toLocaleString()}</div>
              <p class="text-[12px] text-slate-500 mt-1">Runs and secures the platform & automated GitHub CI testing.</p>
            </div>

            <!-- 30% Mentor -->
            <div class="bg-amber-50/40 rounded-xl p-4 border border-amber-200">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold uppercase tracking-wider text-amber-800">Mentor Advisory Pool</span>
                <span class="px-2 py-0.5 rounded text-xs font-bold bg-amber-200 text-amber-900">30%</span>
              </div>
              <div class="text-xl font-bold text-amber-900">₹${project.splitBreakdown.mentorFee.toLocaleString()}</div>
              <p class="text-[12px] text-slate-500 mt-1">Pays verified university experts who review architecture & deliverables.</p>
            </div>

            <!-- 60% Student Team -->
            <div class="bg-emerald-50/40 rounded-xl p-4 border border-emerald-200">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-800">Student Team Pool</span>
                <span class="px-2 py-0.5 rounded text-xs font-bold bg-emerald-200 text-emerald-900">60%</span>
              </div>
              <div class="text-xl font-bold text-emerald-900">₹${project.splitBreakdown.studentPool.toLocaleString()}</div>
              <p class="text-[12px] text-slate-500 mt-1">Split fairly across student contributors by verified code & milestone proof.</p>
            </div>
          </div>
        </div>

        <!-- Interactive Milestones Section with 1-Click Release -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 class="text-lg font-bold text-slate-900">Project Milestones & Protected Escrow Releases</h2>
              <p class="text-xs text-slate-500">Funds stay securely locked in the RBI Nodal Escrow until agreed milestones are approved.</p>
            </div>
            
            ${isSponsorOrMentor ? `
              <div class="flex items-center gap-2">
                <span class="text-xs text-slate-500">Role Authority:</span>
                <span class="text-xs font-semibold px-2 py-1 rounded bg-amber-100 text-amber-800">Can Approve & Release Funds</span>
              </div>
            ` : ''}
          </div>

          <div class="space-y-4">
            ${project.milestones.map(m => {
              const isApproved = m.status === 'Approved & Released';
              const isInReview = m.status === 'In Review';

              return `
                <div class="border rounded-xl p-5 transition-all ${isApproved ? 'bg-emerald-50/20 border-emerald-200' : isInReview ? 'bg-amber-50/20 border-amber-300 ring-1 ring-amber-300' : 'bg-slate-50/40 border-slate-200'}">
                  <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div class="space-y-1.5 flex-1">
                      <div class="flex items-center gap-2">
                        <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isApproved ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'}">
                          ${isApproved ? '✓' : m.number}
                        </span>
                        <h3 class="font-bold text-slate-900 text-base">${m.title}</h3>
                        <span class="px-2 py-0.5 rounded text-xs font-semibold ${isApproved ? 'bg-emerald-100 text-emerald-800' : isInReview ? 'bg-amber-100 text-amber-800 animate-pulse' : 'bg-slate-200 text-slate-700'}">
                          ${m.status}
                        </span>
                      </div>
                      <p class="text-xs text-slate-600 pl-8">${m.deliverables}</p>
                      
                      ${m.rbiUtr ? `
                        <div class="pl-8 flex items-center gap-2 text-[11px] text-emerald-700 font-mono">
                          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                          Settled via NEFT UTR: <strong>${m.rbiUtr}</strong> on ${m.releasedDate}
                        </div>
                      ` : ''}
                    </div>

                    <div class="flex items-center justify-between lg:justify-end gap-6 border-t lg:border-t-0 pt-3 lg:pt-0">
                      <div class="text-right">
                        <div class="text-xs text-slate-500">Milestone Value</div>
                        <div class="text-lg font-bold text-slate-900">₹${m.amount.toLocaleString()}</div>
                      </div>

                      ${isInReview ? `
                        <button data-approve-milestone data-proj-id="${project.id}" data-m-id="${m.id}" class="px-4 py-2.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-transform active:scale-95 flex items-center gap-1.5">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                          Approve & Release RBI Escrow
                        </button>
                      ` : isApproved ? `
                        <span class="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-100/70 px-3 py-1.5 rounded-lg">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                          Escrow Disbursed
                        </span>
                      ` : `
                        <span class="text-xs text-slate-400 font-medium">Pending Prior Milestones</span>
                      `}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Student Team & AI Fair Split Algorithm Breakdown -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Students Verified Contribution Card (2 cols) -->
          <div class="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div class="flex items-center gap-2">
                  <h2 class="text-lg font-bold text-slate-900">Student Team & AI Fair Split</h2>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-800">
                    AI Suggested · Rule Checked
                  </span>
                </div>
                <p class="text-xs text-slate-500 mt-0.5">Core principle: "AI suggests a fair split. Predefined rules review it, never blind trust."</p>
              </div>

              <div class="text-right">
                <span class="text-xs text-slate-500">Student Pool (60%)</span>
                <div class="text-xl font-bold text-emerald-700">₹${totalStudentPool.toLocaleString()}</div>
              </div>
            </div>

            <!-- List of Student Contributors -->
            <div class="space-y-4">
              ${project.students.map(st => {
                return `
                  <div class="border border-slate-200 rounded-xl p-4 hover:border-amber-300 transition-colors bg-white">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div class="flex items-center gap-3">
                        <img src="${st.avatar}" alt="${st.name}" class="w-12 h-12 rounded-full border border-slate-200 object-cover" />
                        <div>
                          <div class="flex items-center gap-2">
                            <span class="font-bold text-slate-900 text-sm">${st.name}</span>
                            <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">${st.task}</span>
                          </div>
                          <p class="text-xs text-slate-500 mt-0.5">${st.desc}</p>
                          <div class="flex items-center gap-3 mt-1 text-[11px] text-slate-600 font-mono">
                            <span class="flex items-center gap-1">
                              <svg class="w-3 h-3 text-slate-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                              @${st.github} (${st.commits} commits)
                            </span>
                            <span>·</span>
                            <span>${st.loc} LoC</span>
                            <span>·</span>
                            <span class="text-[#0a66c2] font-sans">in/${st.linkedin}</span>
                          </div>
                        </div>
                      </div>

                      <div class="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-2 sm:pt-0">
                        <div class="text-right">
                          <span class="text-[11px] text-slate-500">AI Split (${st.contributionPct}%)</span>
                          <div class="text-base font-bold text-slate-900">₹${st.suggestedPayout.toLocaleString()}</div>
                        </div>
                        <div class="text-[11px] text-emerald-600 font-medium">
                          Paid: ₹${st.releasedPayout.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <!-- Progress bar for verified contribution -->
                    <div class="w-full bg-slate-100 rounded-full h-1.5 mt-3">
                      <div class="bg-amber-500 h-1.5 rounded-full" style="width: ${st.contributionPct}%"></div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Verified Mentor & Escrow Pool (1 col) -->
          <div class="space-y-6">
            <!-- Mentor Box -->
            <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div class="flex items-center justify-between">
                <h3 class="font-bold text-slate-900 text-base">Verified Project Mentor</h3>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">30% Mentor Pool</span>
              </div>

              <div class="flex items-center gap-3">
                <img src="${project.mentor.avatar}" alt="${project.mentor.name}" class="w-12 h-12 rounded-full border border-slate-200 object-cover" />
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">${project.mentor.name}</h4>
                  <p class="text-xs text-slate-600">${project.mentor.title}</p>
                  <p class="text-[11px] text-slate-500">${project.mentor.institution}</p>
                </div>
              </div>

              <div class="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-2 text-xs">
                <div class="flex justify-between">
                  <span class="text-slate-500">Mentor Allocated Fee:</span>
                  <span class="font-bold text-slate-800">₹${project.mentor.feeAllocated.toLocaleString()}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-500">Released to Bank:</span>
                  <span class="font-bold text-emerald-700">₹${project.mentor.feeReleased.toLocaleString()}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-500">Locked in Milestone 2 & 3:</span>
                  <span class="font-medium text-amber-800">₹${(project.mentor.feeAllocated - project.mentor.feeReleased).toLocaleString()}</span>
                </div>
              </div>

              <div class="flex items-center justify-between text-xs pt-1">
                <a href="${project.mentor.linkedin}" target="_blank" class="text-[#0a66c2] hover:underline flex items-center gap-1">
                  View LinkedIn Credentials ↗
                </a>
                <a href="${project.mentor.github}" target="_blank" class="text-slate-700 hover:underline flex items-center gap-1">
                  GitHub Lab ↗
                </a>
              </div>
            </div>

            <!-- Real-time GitHub Commit Stream -->
            <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-slate-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <h3 class="font-bold text-slate-900 text-sm">GitHub Commits Feed</h3>
                </div>
                <span class="text-[11px] font-mono text-emerald-600">● Live Hook</span>
              </div>

              <div class="space-y-3 max-h-64 overflow-y-auto pr-1">
                ${this.state.githubCommits.map(c => `
                  <div class="p-2.5 rounded-lg border border-slate-100 bg-slate-50/60 text-xs space-y-1">
                    <div class="flex items-center justify-between text-[11px]">
                      <span class="font-mono text-amber-800 font-medium">${c.hash}</span>
                      <span class="text-slate-400">${c.time}</span>
                    </div>
                    <p class="text-slate-800 font-medium leading-snug">${c.message}</p>
                    <div class="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                      <span>by <strong>${c.author}</strong></span>
                      <span class="font-mono"><span class="text-emerald-600">${c.additions}</span> <span class="text-rose-600">${c.deletions}</span></span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // TAB 2: REGISTERED COMPANIES (Admin / Public Directory)
  renderCompanies() {
    return `
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl font-bold text-slate-900">Registered Sponsor Companies</h1>
            <p class="text-sm text-slate-500">Corporate partners & sponsors with verified RBI-compliant Escrow Trustee deposit accounts.</p>
          </div>

          <div class="flex items-center gap-2">
            <span class="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
              ✓ All 6 Companies KYC & RBI Verified
            </span>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-sm">
              <thead>
                <tr class="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-600">
                  <th class="py-3.5 px-4 sm:px-6">Company & Registration (CIN)</th>
                  <th class="py-3.5 px-4">Sector</th>
                  <th class="py-3.5 px-4">Active Projects</th>
                  <th class="py-3.5 px-4">Total Escrow Deposited</th>
                  <th class="py-3.5 px-4">RBI Escrow KYC</th>
                  <th class="py-3.5 px-4">Primary Contact</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                ${this.state.companies.map(c => `
                  <tr class="hover:bg-slate-50/70 transition-colors">
                    <td class="py-4 px-4 sm:px-6">
                      <div class="font-bold text-slate-900">${c.name}</div>
                      <div class="text-xs font-mono text-slate-500 mt-0.5">CIN: ${c.cin}</div>
                      <div class="text-[11px] text-slate-400">${c.headquarters}</div>
                    </td>
                    <td class="py-4 px-4">
                      <span class="px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700">${c.sector}</span>
                    </td>
                    <td class="py-4 px-4 font-semibold text-slate-800">
                      ${c.activeProjects} ${c.activeProjects === 1 ? 'Project' : 'Projects'}
                    </td>
                    <td class="py-4 px-4">
                      <span class="font-bold text-amber-900 text-base">₹${c.totalEscrowDeposited.toLocaleString()}</span>
                      <div class="text-[10px] text-slate-500">Locked in Nodal Escrow</div>
                    </td>
                    <td class="py-4 px-4">
                      <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                        ${c.rbiKycStatus}
                      </span>
                    </td>
                    <td class="py-4 px-4 text-xs">
                      <div class="font-medium text-slate-800">${c.contactPerson}</div>
                      <div class="text-slate-500">${c.email}</div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // TAB 3: TRUST ACCOUNT DETAILS (RBI COMPLIANCE & ESCROW LEDGER)
  renderTrustAccount() {
    const acc = this.state.trustAccount;

    return `
      <div class="space-y-8">
        <div class="bg-amber-500/10 border-2 border-amber-500/30 rounded-2xl p-6 sm:p-8">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-600 text-white shadow-xs">
                  REGULATORY COMPLIANCE MANDATE
                </span>
                <span class="text-xs font-semibold text-amber-900">Operated strictly under RBI Master Directions</span>
              </div>
              <h2 class="text-2xl font-bold text-slate-900 font-display">Reserve Bank of India (RBI) Escrow Protected</h2>
              <p class="text-sm text-slate-700 max-w-3xl leading-relaxed">
                TrustWork operates under <strong>RBI Payment Aggregator & Escrow Account Guidelines (RBI/2020-21/115)</strong>. 
                All project funds deposited by companies are maintained in a designated separate <strong>Nodal Escrow Account</strong> 
                at a Scheduled Commercial Bank, fully insulated from platform operational finances and used exclusively for verified milestone payouts.
              </p>
            </div>

            <button id="btn-export-cert" class="px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 shadow-xs flex items-center gap-2 whitespace-nowrap">
              <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              Print RBI Escrow Statement
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 class="text-base font-bold text-slate-900 border-b pb-3">Official Escrow Bank Credentials</h3>
            
            <div class="space-y-3 text-sm">
              <div class="flex justify-between py-1 border-b border-slate-100">
                <span class="text-slate-500">Designated Bank:</span>
                <span class="font-bold text-slate-900">${acc.escrowBank}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-100">
                <span class="text-slate-500">Nodal Escrow Account Name:</span>
                <span class="font-semibold text-slate-800 text-xs">${acc.accountName}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-100">
                <span class="text-slate-500">Account Number:</span>
                <span class="font-mono font-bold text-amber-900">${acc.accountNumber}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-100">
                <span class="text-slate-500">IFSC Code:</span>
                <span class="font-mono font-semibold text-slate-800">${acc.ifsc}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-100">
                <span class="text-slate-500">Independent Trustee:</span>
                <span class="font-semibold text-slate-800">${acc.nodalTrustee}</span>
              </div>
              <div class="flex justify-between py-1">
                <span class="text-slate-500">RBI Compliance Framework:</span>
                <span class="font-mono text-xs text-emerald-700 font-semibold">${acc.complianceCode}</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 class="text-base font-bold text-slate-900 border-b pb-3">Escrow Ledger Balance Summary</h3>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <span class="text-xs text-slate-500 uppercase tracking-wider">Total In Escrow</span>
                <div class="text-2xl font-bold text-slate-900 mt-1">₹${acc.totalEscrowDeposited.toLocaleString()}</div>
                <p class="text-[11px] text-slate-400 mt-0.5">Across all registered sponsors</p>
              </div>

              <div class="bg-amber-50/60 rounded-xl p-4 border border-amber-200">
                <span class="text-xs text-amber-800 uppercase tracking-wider font-semibold">Currently Locked</span>
                <div class="text-2xl font-bold text-amber-900 mt-1">₹${acc.currentlyLocked.toLocaleString()}</div>
                <p class="text-[11px] text-amber-700 mt-0.5">Awaiting milestone sign-off</p>
              </div>

              <div class="bg-emerald-50/60 rounded-xl p-4 border border-emerald-200 col-span-2">
                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-xs text-emerald-800 uppercase tracking-wider font-semibold">Settled to Students & Mentors</span>
                    <div class="text-2xl font-bold text-emerald-900 mt-1">₹${acc.totalSettled.toLocaleString()}</div>
                  </div>
                  <div class="text-right">
                    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-100 text-emerald-800">
                      ✓ ${acc.auditStatus}
                    </span>
                    <div class="text-[11px] text-slate-500 mt-1">Last Audit: ${acc.lastAuditDate}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-base font-bold text-slate-900">RBI Escrow Audit Ledger</h3>
              <p class="text-xs text-slate-500">Immutable record of deposits, locks, and NEFT/RTGS settlement UTRs.</p>
            </div>
            <span class="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
              ● Bank Feed Synced
            </span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm">
              <thead>
                <tr class="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase text-slate-600">
                  <th class="py-3 px-4">Transaction / UTR</th>
                  <th class="py-3 px-4">Timestamp</th>
                  <th class="py-3 px-4">Project</th>
                  <th class="py-3 px-4">Amount</th>
                  <th class="py-3 px-4">Settlement Distribution</th>
                  <th class="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                ${this.state.escrowTransactions.map(tx => `
                  <tr class="hover:bg-slate-50/50">
                    <td class="py-3.5 px-4">
                      <div class="font-bold text-slate-900">${tx.type}</div>
                      <div class="text-xs font-mono text-amber-800">${tx.rbiUtr}</div>
                    </td>
                    <td class="py-3.5 px-4 text-xs text-slate-500">${tx.date}</td>
                    <td class="py-3.5 px-4 text-xs font-medium text-slate-800">${tx.project}</td>
                    <td class="py-3.5 px-4 font-bold text-slate-900">₹${tx.grossAmount.toLocaleString()}</td>
                    <td class="py-3.5 px-4 text-xs text-slate-600">${tx.breakdown}</td>
                    <td class="py-3.5 px-4">
                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${tx.status.includes('Settled') ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200'}">
                        ${tx.status}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // TAB 4: PLATFORM ARCHITECTURE & HOW MONEY IS PROTECTED
  renderPitchArchitecture() {
    return `
      <div class="space-y-8 max-w-5xl mx-auto">
        <div class="text-center space-y-3">
          <div class="inline-flex items-center justify-center p-3 rounded-2xl bg-amber-50 border border-amber-200">
            <svg class="w-10 h-10 stroke-amber-600" viewBox="0 0 24 24" fill="none" stroke-width="2.2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">How the Money is Protected</h1>
          <p class="text-slate-600 max-w-2xl mx-auto text-base">
            "Designed around RBI payment aggregator rules: funds sit in a separate escrow account at a Scheduled Commercial Bank, used only for authorised settlements and refunds."
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
          <div class="bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div class="space-y-3">
              <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                STEP 1
              </span>
              <h3 class="text-2xl font-bold text-slate-900">Sponsor Deposits</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                The full project budget goes in up front. No vague promises or payment chasing after project completion.
              </p>
            </div>
            
            <div class="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center font-bold text-slate-800">
              100% Budget Upfront Commitment
            </div>
          </div>

          <div class="bg-white rounded-2xl border-2 border-amber-400 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div class="space-y-3">
              <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800">
                STEP 2
              </span>
              <h3 class="text-2xl font-bold text-slate-900">TrustWork Trust Account</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Funds stay locked until milestones are approved by sponsors and verified by university mentors.
              </p>
            </div>

            <div class="mt-6 space-y-2 text-xs">
              <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-700">PLATFORM FEE (10%)</span>
                <span class="font-bold text-slate-900">₹5,000 of ₹50,000</span>
              </div>
              <div class="flex items-center justify-between p-2.5 rounded-lg bg-amber-50/60 border border-amber-200">
                <span class="font-bold text-amber-800">MENTOR FEES (30%)</span>
                <span class="font-bold text-amber-900">₹15,000 pays expert mentors</span>
              </div>
              <div class="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-200">
                <span class="font-bold text-emerald-800">STUDENT TEAM (60%)</span>
                <span class="font-bold text-emerald-900">₹30,000 split by verified contribution</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
          <h2 class="text-xl font-bold text-slate-900 text-center">The 5 Core Workflow Phases</h2>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <span class="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center mx-auto text-xs">1</span>
              <h4 class="font-bold text-slate-900 text-sm">Publish</h4>
              <p class="text-xs text-slate-500">Sponsors post projects with clear goals, deadlines, and budgets.</p>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <span class="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center mx-auto text-xs">2</span>
              <h4 class="font-bold text-slate-900 text-sm">Team Up</h4>
              <p class="text-xs text-slate-500">Students and domain experts form teams and collaborate.</p>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <span class="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center mx-auto text-xs">3</span>
              <h4 class="font-bold text-slate-900 text-sm">Track</h4>
              <p class="text-xs text-slate-500">Code commits, completed tasks, and milestones become verifiable records.</p>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <span class="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center mx-auto text-xs">4</span>
              <h4 class="font-bold text-slate-900 text-sm">Reward</h4>
              <p class="text-xs text-slate-500">AI suggests a fair split. Predefined rules review it, never blind trust.</p>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <span class="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center mx-auto text-xs">5</span>
              <h4 class="font-bold text-slate-900 text-sm">Release</h4>
              <p class="text-xs text-slate-500">A compliant escrow holds funds until agreed milestones are approved.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

function initTrustWork() {
  try {
    if (!window.trustWorkApp) {
      window.trustWorkApp = new TrustWorkApp();
    }
  } catch (err) {
    console.error("Initialization error:", err);
    try {
      localStorage.removeItem('trustwork_state');
      window.trustWorkApp = new TrustWorkApp();
    } catch (e2) {
      console.error("Fatal initialization error:", e2);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTrustWork);
} else {
  initTrustWork();
}
