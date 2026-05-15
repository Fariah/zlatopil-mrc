const fs = require('fs');
const path = require('path');

const configPath = 'admin/config.yml';
let config = fs.readFileSync(configPath, 'utf8');

// Normalize line endings
config = config.replace(/\r\n/g, '\n');

const files = [
  'accessibility.html',
  'accreditation.html',
  'admission-rules.html',
  'annual-report.html',
  'anti-bullying.html',
  'attestation-plan.html',
  'attestation.html',
  'behavior-rules.html',
  'bullying-procedure.html',
  'directions.html',
  'distance-learning.html',
  'driving-course.html',
  'educational-programs.html',
  'entrants.html',
  'estimate.html',
  'facilities.html',
  'graduates.html',
  'history.html',
  'important.html',
  'language.html',
  'license.html',
  'licensed-volume.html',
  'links.html',
  'management.html',
  'methodical-commission-schedule.html',
  'methodical-commission.html',
  'methodical.html',
  'pedagogical-staff.html',
  'pedagogichni-radi-seminar.html',
  'psychological-service.html',
  'safety.html',
  'schedule.html',
  'statute.html',
  'structure.html',
  'study-plans.html',
  'traffic-rules.html',
  'transparency.html',
  'vacancies.html'
];

let newEntries = '';

files.forEach(file => {
  const mdFileName = file.replace('.html', '.md');
  const mdPath = path.join('.', mdFileName);
  if (!fs.existsSync(mdPath)) return;

  const mdContent = fs.readFileSync(mdPath, 'utf8');
  // Match title: "..." taking care of escaped quotes
  const titleMatch = mdContent.match(/title: "([\s\S]*?)(?<!\\)"/);
  const title = titleMatch ? titleMatch[1] : mdFileName;
  const name = file.replace('.html', '');

  newEntries += `      - file: "${mdFileName}"
        label: "${title}"
        name: "${name}"
        fields:
          - {label: "Заголовок", name: "title", widget: "string"}
          - {label: "Тіло", name: "body", widget: "markdown"}\n`;
});

// We want to replace everything from accessibility.md to vacancies.md if they exist, 
// or just replace from accessibility.md onwards.
// Actually, it's safer to just rebuild the 'files:' section for 'pages' collection.

const pagesSectionMatch = /name: "pages"[\s\S]*?files:([\s\S]*?)(?=\n  - name:|$)/;
const pagesSection = config.match(pagesSectionMatch);

if (pagesSection) {
    const baseFiles = `      - file: "index.md"
        label: "Головна"
        name: "index"
        fields:
          - {label: "Заголовок", name: "title", widget: "string"}
          - {label: "Тіло", name: "body", widget: "markdown"}
      - file: "about.md"
        label: "Про нас"
        name: "about"
        fields:
          - {label: "Заголовок", name: "title", widget: "string"}
          - {label: "Тіло", name: "body", widget: "markdown"}\n`;
    
    const newFilesSection = 'files:\n' + baseFiles + newEntries.trimEnd();
    config = config.replace(/files:[\s\S]*?(?=\n  - name:|$)/, newFilesSection);
    fs.writeFileSync(configPath, config);
    console.log('Updated admin/config.yml');
} else {
    console.log('Could not find pages collection in config.yml');
}
