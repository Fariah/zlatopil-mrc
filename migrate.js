const fs = require('fs');
const path = require('path');

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

files.forEach(file => {
  const filePath = path.join('_legacy', file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract main content
  const mainMatch = content.match(/<main class="content">([\s\S]*?)<\/main>/);
  if (!mainMatch) return;

  let mainContent = mainMatch[1];

  // Extract title
  let title = '';
  const titleMatch = content.match(/<div class="page-header"[\s\S]*?><h2[\s\S]*?>([\s\S]*?)<\/h2>/);
  if (titleMatch) {
    title = titleMatch[1].replace(/<[^>]*>?/gm, '').trim();
  } else {
    const h2Match = mainContent.match(/<h2[\s\S]*?>([\s\S]*?)<\/h2>/);
    if (h2Match) {
        title = h2Match[1].replace(/<[^>]*>?/gm, '').trim();
    } else {
        const headTitleMatch = content.match(/<title>([\s\S]*?)<\/title>/);
        if (headTitleMatch) {
          title = headTitleMatch[1].split('-')[0].trim();
        } else {
          title = file.replace('.html', '');
        }
    }
  }

  // Escape double quotes for YAML
  const escapedTitle = title.replace(/"/g, '\\"');

  // Remove breadcrumbs and page-header from mainContent
  mainContent = mainContent.replace(/<nav class="breadcrumbs"[\s\S]*?<\/nav>/, '');
  mainContent = mainContent.replace(/<div class="page-header"[\s\S]*?<\/div>/, '');

  mainContent = mainContent.trim();

  const mdFileName = file.replace('.html', '.md');
  const mdContent = `---
layout: layouts/base.njk
title: "${escapedTitle}"
---

${mainContent}`;

  fs.writeFileSync(mdFileName, mdContent);
  console.log(`Updated ${mdFileName}`);
});
