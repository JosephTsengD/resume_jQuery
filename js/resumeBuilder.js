var bioData, workData, projectsData, educationData;

bioData = {
  name: 'Shao-Fu Tseng',
  role: 'Web Developer',

  contacts: {
    mobile: '0935-384-728',
    email: 's973302@gmail',
    github: 'JosephTsengD',
    blog: 'http://josephtseng-blog.logdown.com/',
    location: 'Taipei, Taiwan'
  },

  picture: './images/bio.jpg',
  welcomeMessage: 'Hi! I am Shao-Fu. Or you can call me Joseph! Having sense of teamwork spirit, good communication and coordination capacity. Strong background on CS Fundamental and having passion for learning new skills. I’d like to communicate with people from different countries.',

  skills: [
    'awesomeness',
    'outgoing',
    'self-motivated',
    'confidence'
  ]
};


workData = {
  previous: {
    employer: 'Diamond tour',
    title: 'IT Assistant',
    dates: 'Jan. 2011 &ndash; Jun. 2013',
    location: 'Taipei, Taiwan',
    description: '&ndash; Maintained and updated the company website. <br>&ndash; Management of social networking websites.<br>&ndash; Word processing (office software operation)'
  }
};


projectsData = {
  project1: {
    title: 'A Text Reading Interface of E-book for Synchronizing Thinking Process and Thinking Products',
    dates: '2015',
    description: '&ndash; Presented a new E-book display method on one window interface which is divided into two block, and develop a web-based learning platform via the advantage of dynamic web interface.',
    //picture: './images/1.jpg'
  },
  project2: {
    title: 'PISA Reading - Learning and Assessment Platform',
    dates: '2013',
    description: '&ndash; Developed a website used by high school teachers to set questions, share their teaching materials and discussion.',
    //picture: './images/1.jpg'
  },
  project3: {
    title: 'Agile Software Development - Grade System Project',
    dates: '2014',
    description: '&ndash; Developed a Java system and unit test under agile/extreme programming.<br>&ndash; According to  the given scenarios, the system had to implement the unit test case, input all students\'s grade in this course, shows someone\'s grade, rank, update the grade.',
    //picture: './images/1.jpg'
  }
};


educationData = {
  formal: [
    {
      name: 'National Central University',
      degree: 'M.S., GPA 3.88',
      dates: 'Sep. 2013 &ndash; Aug. 2015',
      location: 'Taoyuan, Taiwan',
      major: 'Computer Science and Information Engineering'
    },

    {
      name: 'Yuan-Ze University',
      degree: 'B.S.',
      dates: 'Sep. 2008 &ndash; Jun. 2013',
      location: 'Taoyuan, Taiwan',
      major: 'Computer Science and Engineering'
    }
  ],

  online: [
    {
      title: 'Nanodegree',
      school: 'Udacity',
      dates: '2015',
      url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
      credential: 'Front-End Web Development'
    }
  ]
};


function displayBio(bio) {
  var name = HTMLheaderName.replace('%data%', bio['name']),
    role = HTMLheaderRole.replace('%data%', bio['role']),
    picture = HTMLbioPic.replace('%data%', bio['picture']),
    message = HTMLWelcomeMsg.replace('%data%', bio['welcomeMessage']),
    contacts = bio['contacts'],
    mobile = HTMLmobile.replace('%data%', contacts['mobile']),
    email = HTMLemail.replace('%data%', contacts['email']),
    github = HTMLgithub.replace('%data%', contacts['github']),
    blog = HTMLblog.replace('%data%', contacts['blog']),
    location = HTMLlocation.replace('%data%', contacts['location']),
    index;

  if (bio.name) {
    if (bio.role) {
      $('#header').prepend(role);
    }

    $('#header').prepend(name);
  }

  if (bio.picture) $('#header').append(picture);

  if (bio.welcomeMessage) $('#header').append(message);

  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    for (index = 0; index < bio.skills.length; index++) {
      $('#skills').append(HTMLskills.replace('%data%', bio['skills'][index]));
    }
  }

  if (contacts) {
    if (mobile) {
      $('#topContacts').append(mobile);
      $('#footerContacts').append(mobile);
    }

    if (email) {
      $('#topContacts').append(email);
      $('#footerContacts').append(email);
    }

    if (github) {
      $('#topContacts').append(github);
      $('#footerContacts').append(github);
    }

    if (blog) {
      $('#topContacts').append(blog);
      $('#footerContacts').append(blog);
    }

    if (location) {
      $('#topContacts').append(location);
      $('#footerContacts').append(location);
    }
  }
}


function displayWork(work) {
  var job, name,
      employer, title, dates, location, description;

  if (Object.keys(work).length > 0) {
    for (name in work) {
      job = work[name];
      employer = HTMLworkEmployer.replace('%data%', job['employer']);
      title = HTMLworkTitle.replace('%data%', job['title']);
      dates = HTMLworkDates.replace('%data%', job['dates']);
      location = HTMLworkLocation.replace('%data%', job['location']);
      description = HTMLworkDescription.replace('%data%', job['description']);

      $('#workExperience').append(HTMLworkStart);

      if (employer) {
        if (!title) {
          $('.work-entry:last').append(employer);
        } else {
          $('.work-entry:last').append(employer + title);
        }
      }

      if (dates) $('.work-entry:last').append(dates);

      if (location) $('.work-entry:last').append(location);

      if (description) $('.work-entry:last').append(description);
    }
  }
}


function displayProjects(projects) {
  var name, proj,
      title, dates, description, picture;

  if (Object.keys(projects).length > 0) {
    for (name in projects) {
      proj = projects[name];

      title = HTMLprojectTitle.replace('%data%', proj['title']);
      dates = HTMLprojectDates.replace('%data%', proj['dates']);
      description = HTMLprojectDescription.replace('%data%', proj['description']);
      //picture = HTMLprojectImage.replace('%data%', proj['picture']);

      $('#projects').append(HTMLprojectStart);

      if (title) $('.project-entry:last').append(title);

      if (dates) $('.project-entry:last').append(dates);

      if (description) $('.project-entry:last').append(description);

      //if (picture) $('.project-entry:last').append(picture);

      // to be like the example, the picture is repeated
    }
  }
}


function displayEducation(education) {
  var formals = education['formal'],
      onlines = education['online'],
      name, degree, dates, location, major, title, school, url,
      index;

  if (formals.length > 0) {
    for (index in formals) {
      name = HTMLschoolName.replace('%data%', formals[index]['name']);
      degree = HTMLschoolDegree.replace('%data%', formals[index]['degree']);
      dates = HTMLschoolDates.replace('%data%', formals[index]['dates']);
      location = HTMLschoolLocation.replace('%data%', formals[index]['location']);
      major = HTMLschoolMajor.replace('%data%', formals[index]['major']);

      $('#education').append(HTMLschoolStart);

      if (name && degree) $('.education-entry:last').append(name + degree);

      if (dates) $('.education-entry:last').append(dates);

      if (location) $('.education-entry:last').append(location);

      if (major) $('.education-entry:last').append(major);
    }
  }

  if (onlines.length > 0) {
    $('#education').append(HTMLonlineClasses);

    for (index in onlines) {
      title = HTMLonlineTitle.replace('%data%', onlines[index]['title']);
      school = HTMLonlineSchool.replace('%data%', onlines[index]['school']);
      dates = HTMLonlineDates.replace('%data%', onlines[index]['dates']);
      url = HTMLonlineURL.replace('%data%', onlines[index]['url']);

      $('#education').append(HTMLschoolStart);

      if (title && school) $('.education-entry:last').append(title + school);

      if (dates) $('.education-entry:last').append(dates);

      if (url) $('.education-entry:last').append(url);
    }
  }
}


displayBio(bioData);
displayWork(workData);
displayProjects(projectsData);
displayEducation(educationData);


$('#mapDiv').append(googleMap);


/* for the "Internationalize Button" feature
$('#main').append(internationalizeButton);

function inName(name) {
  name_array = name.split(' ');

  if (name_array.length === 2) {
    return name_array[0] + ' ' + name_array[1].toUpperCase();
  }

  return name
};
*/

