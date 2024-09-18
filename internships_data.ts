export interface Internship {
  id: number;
  company: string;
  position: string;
  location: string;
  deadline: string;
  applicationLink: string;
}

export async function fetchInternships(): Promise<Internship[]> {
  // In a real application, this would be an API call to your backend
  // For now, we'll return a static list of internships
  return [
    {
      id: 1,
      company: "Point72",
      position: "2024 Software Engineer Internship",
      location: "London, UK",
      deadline: "2024-08-01 00:00:00",
      applicationLink: "N/A"
    },
    {
      id: 2,
      company: "Capstone",
      position: "2025 Summer Internship - Software Engineering",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 3,
      company: "BlackRock",
      position: "Summer Internship Program - EMEA",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 4,
      company: "Man Group",
      position: "Technology Summer Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 5,
      company: "GSA Capital",
      position: "Software Developer - Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 6,
      company: "DRW",
      position: "Software Developer Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 7,
      company: "Castleton Commodities International",
      position: "Internship (Summer 2025)",
      location: "London, UK",
      deadline: "2024-10-08 00:00:00",
      applicationLink: "N/A"
    },
    {
      id: 8,
      company: "The Trade Desk",
      position: "2025 Summer Intern - Software Engineer",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 9,
      company: "Marshall Wace",
      position: "Technology Intern - 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 10,
      company: "Palantir",
      position: "Software Engineer, Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 11,
      company: "Millennium Management",
      position: "Software Engineer Summer Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 12,
      company: "Talos",
      position: "Software Engineering Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 13,
      company: "BNP Paribas",
      position: "2025 Summer Internship - Technology",
      location: "London, UK",
      deadline: "2024-09-22 00:00:00",
      applicationLink: "N/A"
    },
    {
      id: 14,
      company: "Citadel",
      position: "Software Engineer - Intern (Europe)",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 15,
      company: "Jane Street",
      position: "Software Engineer Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 16,
      company: "Goldman Sachs",
      position: "2025 Summer Analyst Programme",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 17,
      company: "Bank of America",
      position: "Software Engineer Summer 2025 Analyst",
      location: "London, UK",
      deadline: "2024-10-25 00:00:00",
      applicationLink: "N/A"
    },
    {
      id: 18,
      company: "Jump Trading",
      position: "Campus Software Engineer (Intern)",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 19,
      company: "Optiver",
      position: "Software Engineer Internship (2025 Start)",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 20,
      company: "PIMCO",
      position: "2025 Summer Internship - Technology Analyst",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 21,
      company: "Squarepoint Capital",
      position: "Intern Software Development - Summer 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 22,
      company: "UBS",
      position: "2025 Summer Internship Program - GOTO Technology",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 23,
      company: "Nomura",
      position: "Information Technology - Summer Internship",
      location: "London, UK",
      deadline: "2024-12-01 00:00:00",
      applicationLink: "N/A"
    },
    {
      id: 24,
      company: "J.P. Morgan",
      position: "2025 Software Engineer Programme",
      location: "London, UK",
      deadline: "2024-11-03 00:00:00",
      applicationLink: "N/A"
    },
    {
      id: 25,
      company: "Macquarie Group",
      position: "2025 Summer Internship Programme",
      location: "London, UK",
      deadline: "2024-10-25 00:00:00",
      applicationLink: "N/A"
    },
    {
      id: 26,
      company: "Morgan Stanley",
      position: "2025 Technology Summer Analyst Program",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 27,
      company: "Maven Securities",
      position: "Software Developer Summer Internship 2025",
      location: "London, UK",
      deadline: "2024-10-21 00:00:00",
      applicationLink: "N/A"
    },
    {
      id: 28,
      company: "Baillie Gifford",
      position: "Summer Internship 2025",
      location: "London, UK",
      deadline: "2024-10-28 00:00:00",
      applicationLink: "N/A"
    },
    {
      id: 29,
      company: "Zurich Insurance",
      position: "Technology Management Summer Internship 2025",
      location: "London, UK",
      deadline: "2024-10-20 00:00:00",
      applicationLink: "N/A"
    },
    {
      id: 30,
      company: "Cisco",
      position: "Software Engineer Internship - Summer 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 31,
      company: "G-Research",
      position: "Software Engineering Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 32,
      company: "Susquehanna International Group",
      position: "Software Development Summer Internship 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 33,
      company: "Epic Games",
      position: "Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 34,
      company: "Softwire",
      position: "Software Development Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 35,
      company: "BAE Systems",
      position: "Summer Internship - Software Engineer",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 36,
      company: "Amazon",
      position: "2025 Software Dev Engineer Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 37,
      company: "Mizuho",
      position: "IT Summer Internship",
      location: "London, UK",
      deadline: "2024-10-11 00:00:00",
      applicationLink: "N/A"
    },
    {
      id: 38,
      company: "Wells Fargo",
      position: "EMEA Technology Summer Analyst",
      location: "London, UK",
      deadline: "2024-11-15 00:00:00",
      applicationLink: "N/A"
    },
    {
      id: 39,
      company: "IMC Trading",
      position: "Software Engineer Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 40,
      company: "Capital One",
      position: "Technology Intern",
      location: "London, UK",
      deadline: "2024-11-04 00:00:00",
      applicationLink: "N/A"
    },
    {
      id: 41,
      company: "Deloitte",
      position: "Summer Vacation Scheme",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 42,
      company: "Deutsche Bank",
      position: "Internship Programme - Technology",
      location: "London, UK",
      deadline: "2024-11-24 00:00:00",
      applicationLink: "N/A"
    },
    {
      id: 43,
      company: "Galaxy",
      position: "2025 Blockchain Engineering Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 44,
      company: "MUFG",
      position: "2025 Summer Internship Programme: Technology",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 45,
      company: "Accelercom",
      position: "Summer Internship Python 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 46,
      company: "Addepar",
      position: "Software Engineer Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 47,
      company: "BP",
      position: "Summer Internship - Software Engineering",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 48,
      company: "Financial Conduct Authority",
      position: "2025 Summer Internship Programme: Technology",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 49,
      company: "Marsh McLennan",
      position: "Tech Support Summer Internship 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 50,
      company: "National Highways",
      position: "Summer Internship - Digital and IT Services",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 51,
      company: "Netcraft",
      position: "Summer Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 52,
      company: "Nutanix",
      position: "Software Engineer Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 53,
      company: "Terra",
      position: "AI and Engineering Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 54,
      company: "Two Sigma",
      position: "Software Engineering Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 55,
      company: "Universal Music Group",
      position: "IT Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 56,
      company: "D.E. Shaw",
      position: "Systems: Engineering Intern - Summer 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 57,
      company: "RBC Capital Markets",
      position: "2025 Summer Analyst - Quantitative Technology",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 58,
      company: "HSBC",
      position: "Digital Innovation Summer Internship 2023-2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 59,
      company: "BNY Mellon",
      position: "2025 Summer Internship Program - Engineering",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 60,
      company: "Hudson River Trading",
      position: "Software Engineering Internship - Summer 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 61,
      company: "Barclays",
      position: "Technology Summer Internship Programme 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 62,
      company: "Balyasny Asset Management",
      position: "Software Engineering - 2025 Summer Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 63,
      company: "American Express",
      position: "Internship - Technology Software Engineer",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 64,
      company: "EY",
      position: "Summer Internship 2025 - Technology Consulting",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 65,
      company: "Natwest Markets",
      position: "Internal Audit, Technology - Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 66,
      company: "Schonfeld",
      position: "2025 Network Engineering Summer Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 67,
      company: "Willis Towers Watson",
      position: "2025 Software Developer Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 68,
      company: "M&G",
      position: "Technology Summer Internship (London)",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 69,
      company: "Textron",
      position: "2025 IT Summer Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 70,
      company: "TD Securities",
      position: "Intern Tech Summer Programme 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 71,
      company: "Cloudflare",
      position: "Software Engineer - Intern (Summer 2025)",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 72,
      company: "MathWorks",
      position: "Software Development Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 73,
      company: "Tesco",
      position: "Software Engineering Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 74,
      company: "McLaren",
      position: "IT Internship Scheme",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 75,
      company: "TP ICAP",
      position: "Technology Summer Internship 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 76,
      company: "Blackstone",
      position: "Software Developer Summer Analyst",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 77,
      company: "MarketAxess",
      position: "Software Engineering Intern 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 78,
      company: "FactSet",
      position: "Software Engineer Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 79,
      company: "Qube RT",
      position: "2025 - Internship - Software Engineering",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 80,
      company: "Cisco",
      position: "Software Engineer - Micro Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 81,
      company: "PA Consulting",
      position: "Software Engineering - Summer Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 82,
      company: "HME",
      position: "Software Engineering Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 83,
      company: "BGC Partners",
      position: "Technology Summer Internship - Development",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 84,
      company: "Frazer-Nash Consultancy",
      position: "Data Science & Software Summer Intern 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 85,
      company: "Vanguard",
      position: "Technology Summer Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 86,
      company: "QinetiQ",
      position: "IT Engineer - Summer Placement",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 87,
      company: "Rolls-Royce",
      position: "Technology Summer Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 88,
      company: "Tradeweb",
      position: "Summer Internship 2025 - Technology Division",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 89,
      company: "TikTok",
      position: "System Software Engineer, Summer Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 90,
      company: "Siemens",
      position: "Software Engineer Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 91,
      company: "UK Atomic Energy Authority",
      position: "Software Engineering - Summer Placement 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 92,
      company: "BT",
      position: "Summer Placement - Research & Network Strategy",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 93,
      company: "Jefferies",
      position: "2025 Information Technology Summer Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 94,
      company: "Graphcore",
      position: "Intern 2025 - Software",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 95,
      company: "Renishaw",
      position: "Software Summer Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 96,
      company: "Crédit Agricole",
      position: "Summer Internship Programme 2025 - IT",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 97,
      company: "Jacobs",
      position: "Geospatial & GIS - Summer Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 98,
      company: "King",
      position: "Summer Technology Internships 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 99,
      company: "Five AI",
      position: "Software Engineer - Summer Internship 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 100,
      company: "Verisk",
      position: "Tech - 2025 Summer Internship Program",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 101,
      company: "Ripple",
      position: "Software Engineer Intern (Summer)",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 102,
      company: "Speechmatics",
      position: "ML Software Engineering Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 103,
      company: "NXP Semiconductors",
      position: "Internship - Software Engineering - 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 104,
      company: "Mastercard",
      position: "Software Engineering Intern, Summer 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 105,
      company: "HP",
      position: "Software Engineer Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 106,
      company: "Quantcast",
      position: "Software Engineering Intern - Summer 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 107,
      company: "TE Connectivity",
      position: "Software Engineer Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 108,
      company: "FSP",
      position: "Intern Software Developer",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 109,
      company: "Centrica",
      position: "Software Engineering Summer Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 110,
      company: "Caxton Associates",
      position: "Summer Internship Programme (Quant and Tech)",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 111,
      company: "S&P Global",
      position: "Summer Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 112,
      company: "ICBC Standard Bank",
      position: "Summer Intern - Technology",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 113,
      company: "Thales",
      position: "Software Engineering Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 114,
      company: "Hiscox",
      position: "Technology Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 115,
      company: "PredictX",
      position: "Paid Summer 2025 Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 116,
      company: "Cboe Global Markets",
      position: "Intern",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 117,
      company: "Spotify",
      position: "2025 Summer Internship",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 118,
      company: "KPMG",
      position: "Vacation Technology - Technology Consulting",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 119,
      company: "Scotiabank",
      position: "Technology Summer Internship 2025",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
    {
      id: 120,
      company: "The Walt Disney Company",
      position: "Technology & IT Internships",
      location: "London, UK",
      deadline: "nan",
      applicationLink: "N/A"
    },
  ];
}
