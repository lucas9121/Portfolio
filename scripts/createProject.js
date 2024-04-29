const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Construct the absolute path to MyProjects.js
const myProjectsPath = path.resolve(__dirname, '../src/components/Projects/Data/ProjectsData.json');




// Function to generate lorem ipsum text for description
function generateLoremIpsum() {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

// Function to generate a random ID for images
function generateRandomId() {
  return Math.floor(Math.random() * 1000) + 1;
}

// Function to format the date as YYYY-MM-DD
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Function to provide options and prompt user for input
function promptUserWithOptions(question, options, callback) {
  const formattedOptions = options.map((option, index) => `${index + 1}. ${option}`).join('\n');
  rl.question(`${question}\n${formattedOptions}\nChoice: `, (choice) => {
    const index = parseInt(choice.trim(), 10) - 1;
    if (index >= 0 && index < options.length) {
      callback(options[index]);
    } else {
      console.log('Invalid choice. Please select a valid option.');
      promptUserWithOptions(question, options, callback);
    }
  });
}

// Recursive function to prompt user for input
function promptUserForInput() {
  const projectRoleOptions = ['Fullstack', 'Frontend', 'Backend'];
  const projectCategoryOptions = ['Personal', 'Work'];

  rl.question('Enter project name: ', (name) => {
    rl.question('Enter project summary: ', (summary) => {
      rl.question('Enter project description (press Enter for default lorem ipsum): ', (description) => {
        rl.question('Enter technologies (separated by commas): ', (tech) => {
          promptUserWithOptions('Select project role:', projectRoleOptions, (projectRole) => {
            promptUserWithOptions('Select project category:', projectCategoryOptions, (projectCategory) => {
              rl.question('Enter project (Github) link (optional): ', (projectLink) => {
                rl.question('Enter live link (optional): ', (liveLink) => {
                  // Constructing the images array
                  const images = [];
                  promptUserForImage(images, () => {
                    // Constructing the object
                    const projectObject = {
                      name: name ? name : 'Test',
                      summary: summary || generateLoremIpsum(),
                      description: description ? description.replace(/\\n/g, '\n') : generateLoremIpsum(),
                      tech: tech.split(',').map(tech => tech.trim().toUpperCase()).join(', '),
                      projectIcon: projectIcon ? projectIcon : 'none',
                      projectRole,
                      projectCategory,
                      projectLink: projectLink ? projectLink : '',
                      liveLink: liveLink ? liveLink : '',
                      color: color ? color : 'inherit',
                      images: images ? images : [],
                      dateCreated: formatDate(new Date()),
                    };

                    // Writing object to ProjectsData.json file
                    fs.readFile(myProjectsPath, 'utf8', (err, data) => {
                      console.log('file being read')
                      if (err) throw err;

                      const myProjects = JSON.parse(data);
                      myProjects.projects.unshift(projectObject);
                      const newData = JSON.stringify(myProjects)

                      // Write the modified data back to the file
                      fs.writeFile(myProjectsPath, newData, (err) => {
                          if (err) throw err;
                          console.log('Project object has been added to ProjectsData.json');
                          rl.close();
                      });
                    });
                  });                
                });
              });
            });
          });
        });
      });
    });
  });
}

// Recursive function to prompt user for image links
function promptUserForImage(images, callback) {
  rl.question('Enter image link (press Enter to finish): ', (imageLink) => {
    if (imageLink !== '') {
      images.push({
        id: generateRandomId(),
        src: imageLink,
        alt: `Image ${images.length + 1}`
      });
      promptUserForImage(images, callback);
    } else {
      callback();
    }
  });
}

// Start prompting user for input
promptUserForInput();
