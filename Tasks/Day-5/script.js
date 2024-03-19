const resumeData = {
  name: "Vinoth Vellaisamy",
  contact: {
    email: "vinoth12016@gmail.com",
    phone: "9751052143",
    address: "Trichy, India"
  },
  profile: {
    summary: "A passionate Fresher looking for an opportunity to enhance and explore my knowledge and skills, eager to get into a work environment to put my communicational and technical skills to good use for me and the firm's success, always looking forward to facing a challenging situation for me to be a better version of myself."
  },
  education: [
    {
      degree: "BA",
      school: "National Collage of Arts and Science",
      location: "Trichy, India",
      year: "2012 to 2015",
      percentage: "80%"
    },
    {
      degree: "SSLC",
      school: "Thiru Nadesanaar High Sec School",
      location: "Chennai, India",
    },
    {
      degree: "HSC",
      school: "Goverment High Sec School",
      location: "Trichy, India",
          }
  ],
  languages: ["Tamil","English",],
  skills: [
    "Effective communication",
    "Time Management",
    "Leadership Skills",
    "Quick Learning",
    "Stress Handling"
  ],
  
    declaration: "I hereby solemnly declare that the above-furnished details are absolute and true to the best of my knowledge and belief."
};

console.log(resumeData);
// for loop 

for (let i = 0; i < resumeData.education.length; i++) {
  const educationItem = resumeData.education[i];
  console.log(`Education ${i + 1}:`);
  for (const key in educationItem) {
    if (educationItem.hasOwnProperty(key)) {
      console.log(`  ${key}:`, educationItem[key]);
    }
  }
}
// for in loop
for (const key in resumeData) {
  if (resumeData.hasOwnProperty(key)) {
    console.log(`${key}:`);
  }
};
// for of loop 
for (const educationItem of resumeData.education) {
  console.log("Education:");
  for (const key in educationItem) {
    if (educationItem.hasOwnProperty(key)) {
      console.log(`  ${key}: ${educationItem[key]}`);
    }
  }
};
//for each loop 
resumeData.education.forEach((educationItem, index) => {
  console.log(`Education ${index + 1}:`);
  for (const key in educationItem) {
    if (educationItem.hasOwnProperty(key)) {
      console.log(`  ${key}: ${educationItem[key]}`);
    }
  }
});