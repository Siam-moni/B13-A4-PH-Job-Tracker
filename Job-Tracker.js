// job list

const jobs = [
  {
    id: 1,
    company: "React Native Developer",
    position: "Mobile First Corp",
    location: "Los Angeles",
    type: "Full Time",
    salary: "$130,000-$175,000",
    description: "Build cross-platform mobile applications using React Native.",
    status: "none",
  },
  {
    id: 2,
    company: "Web Designer & Developer",
    position: "WebFlow Agency",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences.",
    status: "none",
  },
  {
    id: 3,
    company: "Data Visualization Specialist",
    position: "DataViz Solutions",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Transform complex data into visualizations.",
    status: "none",
  },
  {
    id: 4,
    company: "Backend Developer",
    position: "CloudFirst Inc",
    location: "Seattle, WA",
    type: "Full Time",
    salary: "$140,000 - $190,000",
    description: "Design scalable backend systems.",
    status: "none",
  },
  {
    id: 5,
    company: "UI/UX Engineer",
    position: "Innovation Labs",
    location: "Austin, TX ",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Create functional user interfaces.",
    status: "none",
  },
  {
    id: 6,
    company: "JavaScript Developer",
    position: "MegaCorp Solutions",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,00",
    description: "Build enterprise applications.",
    status: "none",
  },
  {
    id: 7,
    company: "Full Stack Engineer",
    position: "StartupXYZ",
    location: "San Francisco, CA",
    type: "Full Time",
    salary: "$120,000 - $160,000",
    description: "Join our fast-growing startup.",
    status: "none",
  },
  {
    id: 8,
    company: "Senior Frontend Developer",
    position: "TechCorp Industries",
    location: "San Francisco, CA",
    type: "Full Time",
    salary: "$130,000 - $175,000",
    description: "Build web applications using React.",
    status: "none",
  },
];

let currentJob = "all";

// Element Select

const jobContainer = document.getElementById("jobContainer");
const noJobMessage = document.getElementById("noJobMessage");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobCountLabel = document.getElementById("jobCount");
const activeStatusLabel = document.getElementById("activeStatus");

// for count

function updateCounts() {
  const all = jobs.length;
  const interview = jobs.filter((j) => j.status === "interview").length;
  const rejected = jobs.filter((j) => j.status === "rejected").length;

  totalCount.innerText = all;
  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected;

  if (currentJob === "all") jobCountLabel.innerText = all;
  else if (currentJob === "interview") jobCountLabel.innerText = interview;
  else if (currentJob === "rejected") jobCountLabel.innerText = rejected;
}

 // make a Job function

  function renderJobs() {
    jobContainer.innerHTML = "";
    let filtered = jobs;
    if (currentJob !== "all") {
      filtered = jobs.filter((j) => j.status === currentJob);
    }
    if (filtered.length === 0) {
      noJobMessage.classList.remove("hidden");
    } else {
      noJobMessage.classList.add("hidden");
    }
    filtered.forEach((job) => {
      const card = document.createElement("div");
      card.className =
        "card w-full bg-white shadow-md border border-gray-100 relative mb-6";

      //make  status text & color
      let statusText = "ALL";
      let statusColor = "bg-gray-200 text-gray-700";

      if (job.status === "interview") {
        statusText = "INTERVIEW";
        statusColor = "bg-green-100 text-green-700";
      } else if (job.status === "rejected") {
        statusText = "REJECTED";
        statusColor = "bg-red-100 text-red-700";
      }