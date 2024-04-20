const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Construct the absolute path to MyProjects.js
const myProjectsPath = path.resolve(__dirname, '../src/components/Projects/MyProjects.js');

// Function to generate lorem ipsum text for description
function generateLoremIpsum() {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

// Function to generate a random ID for images
function generateRandomId() {
  return Math.floor(Math.random() * 1000) + 1;
}

// Function to create CSS ID based on color
function createCssId(color) {
  return `#${color.replace('#', '')}`;
}

// Recursive function to prompt user for input
function promptUserForInput() {
  rl.question('Enter project name: ', (name) => {
    rl.question('Enter project summary: ', (summary) => {
      rl.question('Enter project description (press Enter for default lorem ipsum): ', (description) => {
        rl.question('Enter technologies (separated by commas): ', (tech) => {
          rl.question('Enter project icon name (optional): ', (projectIcon) => {
            rl.question('Enter project link (optional): ', (projectLink) => {
              rl.question('Enter live link (optional): ', (liveLink) => {
                rl.question('Enter color (optional): ', (color) => {
                  // Constructing the images array
                  const images = [];
                  promptUserForImage(images, () => {
                    // Constructing the object
                    const projectObject = {
                      name: name ? name : 'Test',
                      summary: summary || generateLoremIpsum(),
                      description: description || generateLoremIpsum(),
                      tech: tech.split(',').map(tech => tech.trim()).join(', '),
                      projectIcon: projectIcon ? projectIcon : 'none',
                      projectLink: projectLink ? projectLink : '',
                      liveLink: liveLink ? liveLink : '',
                      color: color ? color : '',
                      images: images ? images : []
                    };

                    // Writing object to MyProjects.js file
                    fs.readFile(myProjectsPath, 'utf8', (err, data) => {
                      console.log('file being read')
                      if (err) throw err;

                        // Parse the JSON data
                        const myProjects = JSON.parse(data);

                        // Push the new project object to the myProject array
                        myProjects.push(projectObject);

                      // Write the modified data back to the file
                      fs.writeFile(myProjectsPath, data, (err) => {
                          if (err) throw err;
                          console.log('Project object has been added to MyProjects.js');
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
