'use strict';

/* =============================================================
   AdmissionBD — Bangladesh Public University Admission Predictor
   Static website: no backend, no database, no build tools.

   IMPORTANT DATA NOTE:
   Replace demo merit data with verified official subject allocation data.
   Official subject-wise last merit data is often published in result PDFs,
   migration notices, circulars, or admission portals. Do not publish this
   project as an official predictor until every row is verified.
============================================================= */

const safeImageNote = 'Image placeholder — replace with verified official/Wikimedia image URL later';

const universityData = [
  {
    id: 'du', name: 'University of Dhaka', shortName: 'DU', location: 'Dhaka, Bangladesh', established: 1921, type: 'General',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Curzon_Hall%2C_University_of_Dhaka.jpg/1280px-Curzon_Hall%2C_University_of_Dhaka.jpg',
    description: 'A leading public university in Bangladesh with broad science, arts, business, social science, fine arts, and professional programs.',
    units: ['A Unit', 'B Unit', 'C Unit', 'D Unit', 'Fine Arts'], website: 'https://du.ac.bd', gradient: ['#1e3a8a', '#0891b2', '#6d28d9']
  },
  {
    id: 'ru', name: 'University of Rajshahi', shortName: 'RU', location: 'Rajshahi, Bangladesh', established: 1953, type: 'General',
    image: '', description: 'One of the largest public universities in Bangladesh, known for a spacious green campus and strong academic departments.',
    units: ['A Unit', 'B Unit', 'C Unit'], website: 'https://ru.ac.bd', gradient: ['#064e3b', '#0f766e', '#0ea5e9'], imageNote: safeImageNote
  },
  {
    id: 'cu', name: 'University of Chittagong', shortName: 'CU', location: 'Chattogram, Bangladesh', established: 1966, type: 'General',
    image: '', description: 'A major public university located in a scenic hilly campus, offering diverse undergraduate and postgraduate programs.',
    units: ['A Unit', 'B Unit', 'C Unit', 'D Unit'], website: 'https://cu.ac.bd', gradient: ['#581c87', '#7c3aed', '#0891b2'], imageNote: safeImageNote
  },
  {
    id: 'ju', name: 'Jahangirnagar University', shortName: 'JU', location: 'Savar, Dhaka', established: 1970, type: 'General',
    image: '', description: 'A residential public university famous for its campus environment, lakes, migratory birds, and strong science and humanities faculties.',
    units: ['A Unit', 'B Unit', 'C Unit', 'D Unit', 'E Unit'], website: 'https://juniv.edu', gradient: ['#7f1d1d', '#be123c', '#f97316'], imageNote: safeImageNote
  },
  {
    id: 'buet', name: 'Bangladesh University of Engineering and Technology', shortName: 'BUET', location: 'Dhaka, Bangladesh', established: 1962, type: 'Engineering',
    image: '', description: 'Bangladesh’s premier engineering university with highly competitive undergraduate admission.',
    units: ['Engineering'], website: 'https://www.buet.ac.bd', gradient: ['#0f172a', '#1d4ed8', '#38bdf8'], imageNote: safeImageNote
  },
  {
    id: 'gst', name: 'GST Universities', shortName: 'GST', location: 'Multiple locations', established: 2021, type: 'Cluster',
    image: '', description: 'A cluster admission system for several general, science and technology universities under one integrated test process.',
    units: ['A Unit', 'B Unit', 'C Unit'], website: 'https://gstadmission.ac.bd', gradient: ['#312e81', '#4f46e5', '#06b6d4'], imageNote: safeImageNote
  },
  {
    id: 'medical', name: 'Medical Admission', shortName: 'Medical', location: 'Nationwide', established: 1972, type: 'Medical',
    image: '', description: 'Centralized MBBS admission system for medical colleges in Bangladesh under government medical education authorities.',
    units: ['MBBS'], website: 'https://dgme.teletalk.com.bd/mbbs/', gradient: ['#7f1d1d', '#dc2626', '#f97316'], imageNote: safeImageNote
  },
  {
    id: 'dental', name: 'Dental Admission', shortName: 'Dental', location: 'Nationwide', established: 1972, type: 'Medical',
    image: '', description: 'BDS admission pathway for government and non-government dental colleges through official medical admission authorities.',
    units: ['BDS'], website: 'https://dgme.teletalk.com.bd/mbbs/', gradient: ['#881337', '#be185d', '#f472b6'], imageNote: safeImageNote
  },
  {
    id: 'agri', name: 'Agricultural University Cluster', shortName: 'Agri Cluster', location: 'Multiple locations', established: 2019, type: 'Agricultural',
    image: '', description: 'Cluster admission system for agricultural universities and agriculture-related degree programs.',
    units: ['Agriculture'], website: 'https://acas.edu.bd', gradient: ['#14532d', '#16a34a', '#84cc16'], imageNote: safeImageNote
  },
  {
    id: 'bau', name: 'Bangladesh Agricultural University', shortName: 'BAU', location: 'Mymensingh, Bangladesh', established: 1961, type: 'Agricultural',
    image: '', description: 'A leading agricultural university focused on agriculture, veterinary science, fisheries, animal husbandry, and agricultural engineering.',
    units: ['Agriculture'], website: 'https://bau.edu.bd', gradient: ['#166534', '#22c55e', '#0f766e'], imageNote: safeImageNote
  },
  {
    id: 'sust', name: 'Shahjalal University of Science and Technology', shortName: 'SUST', location: 'Sylhet, Bangladesh', established: 1986, type: 'Science & Tech',
    image: '', description: 'A science and technology focused public university in Sylhet with strong programs in engineering, science, and social sciences.',
    units: ['A Unit', 'B Unit'], website: 'https://sust.edu', gradient: ['#0c4a6e', '#0284c7', '#22d3ee'], imageNote: safeImageNote
  },
  {
    id: 'ku', name: 'Khulna University', shortName: 'KU', location: 'Khulna, Bangladesh', established: 1991, type: 'General',
    image: '', description: 'A public university in southwest Bangladesh offering science, arts, social science, business, law, and architecture programs.',
    units: ['A Unit', 'B Unit', 'C Unit'], website: 'https://ku.ac.bd', gradient: ['#1e1b4b', '#4338ca', '#0ea5e9'], imageNote: safeImageNote
  },
  {
    id: 'iu', name: 'Islamic University', shortName: 'IU', location: 'Kushtia, Bangladesh', established: 1979, type: 'General',
    image: '', description: 'A major public university with faculties in science, arts, social sciences, business, law, theology, and engineering.',
    units: ['A Unit', 'B Unit', 'C Unit', 'D Unit'], website: 'https://iu.ac.bd', gradient: ['#064e3b', '#15803d', '#14b8a6'], imageNote: safeImageNote
  },
  {
    id: 'jnu', name: 'Jagannath University', shortName: 'JnU', location: 'Dhaka, Bangladesh', established: 2005, type: 'General',
    image: '', description: 'A major public university in Old Dhaka with roots in a historic educational institution and a wide range of departments.',
    units: ['A Unit', 'B Unit', 'C Unit'], website: 'https://jnu.ac.bd', gradient: ['#7c2d12', '#ea580c', '#facc15'], imageNote: safeImageNote
  },
  {
    id: 'cou', name: 'Comilla University', shortName: 'CoU', location: 'Cumilla, Bangladesh', established: 2006, type: 'General',
    image: '', description: 'A public university serving the Cumilla region with science, arts, social science, and business programs.',
    units: ['A Unit', 'B Unit', 'C Unit'], website: 'https://cou.ac.bd', gradient: ['#1e3a8a', '#2563eb', '#2dd4bf'], imageNote: safeImageNote
  },
  {
    id: 'bu', name: 'Barishal University', shortName: 'BU', location: 'Barishal, Bangladesh', established: 2011, type: 'General',
    image: '', description: 'A public university in southern Bangladesh offering undergraduate and postgraduate programs across several faculties.',
    units: ['A Unit', 'B Unit', 'C Unit'], website: 'https://bu.ac.bd', gradient: ['#164e63', '#0891b2', '#38bdf8'], imageNote: safeImageNote
  },
  {
    id: 'brur', name: 'Begum Rokeya University', shortName: 'BRUR', location: 'Rangpur, Bangladesh', established: 2008, type: 'General',
    image: '', description: 'A public university in northern Bangladesh named after Begum Rokeya, offering programs in science, arts, social science, and business.',
    units: ['A Unit', 'B Unit', 'C Unit'], website: 'https://brur.ac.bd', gradient: ['#4c1d95', '#7c3aed', '#ec4899'], imageNote: safeImageNote
  },
  {
    id: 'jkkniu', name: 'Jatiya Kabi Kazi Nazrul Islam University', shortName: 'JKKNIU', location: 'Trishal, Mymensingh', established: 2005, type: 'General',
    image: '', description: 'A public university named after the national poet, with programs in arts, culture, science, social sciences, and business.',
    units: ['A Unit', 'B Unit', 'C Unit'], website: 'https://jkkniu.edu.bd', gradient: ['#78350f', '#d97706', '#fbbf24'], imageNote: safeImageNote
  },
  {
    id: 'pstu', name: 'Patuakhali Science and Technology University', shortName: 'PSTU', location: 'Dumki, Patuakhali', established: 2000, type: 'Science & Tech',
    image: '', description: 'A public science and technology university with agriculture, engineering, business, and science-related programs.',
    units: ['A Unit', 'B Unit'], website: 'https://pstu.ac.bd', gradient: ['#134e4a', '#0f766e', '#5eead4'], imageNote: safeImageNote
  },
  {
    id: 'nstu', name: 'Noakhali Science and Technology University', shortName: 'NSTU', location: 'Noakhali, Bangladesh', established: 2006, type: 'Science & Tech',
    image: '', description: 'A science and technology university in Noakhali with programs in engineering, science, life science, social science, and business.',
    units: ['A Unit', 'B Unit'], website: 'https://nstu.edu.bd', gradient: ['#075985', '#0284c7', '#22d3ee'], imageNote: safeImageNote
  }
];

/* Replace demo merit data with verified official subject allocation data. */
const subjectData = [
  { id: 1, univId: 'du', univShort: 'DU', university: 'University of Dhaka', examSystem: 'DU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Chemistry', seats: 80, lastMerit: 1850, lastScore: 72.5, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 2, univId: 'du', univShort: 'DU', university: 'University of Dhaka', examSystem: 'DU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Physics', seats: 80, lastMerit: 1650, lastScore: 74.2, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 3, univId: 'du', univShort: 'DU', university: 'University of Dhaka', examSystem: 'DU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Mathematics', seats: 80, lastMerit: 1420, lastScore: 76.1, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 4, univId: 'du', univShort: 'DU', university: 'University of Dhaka', examSystem: 'DU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Computer Science and Engineering', seats: 60, lastMerit: 650, lastScore: 83.6, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 5, univId: 'du', univShort: 'DU', university: 'University of Dhaka', examSystem: 'DU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Pharmacy', seats: 75, lastMerit: 720, lastScore: 82.8, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 6, univId: 'du', univShort: 'DU', university: 'University of Dhaka', examSystem: 'DU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Biochemistry and Molecular Biology', seats: 60, lastMerit: 980, lastScore: 80.3, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 7, univId: 'du', univShort: 'DU', university: 'University of Dhaka', examSystem: 'DU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Microbiology', seats: 55, lastMerit: 1120, lastScore: 78.8, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 8, univId: 'du', univShort: 'DU', university: 'University of Dhaka', examSystem: 'DU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Soil, Water and Environment', seats: 100, lastMerit: 3100, lastScore: 65.5, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 9, univId: 'du', univShort: 'DU', university: 'University of Dhaka', examSystem: 'DU', unit: 'B Unit', group: 'Humanities', year: '2025', subject: 'English', seats: 120, lastMerit: 950, lastScore: 76.4, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 10, univId: 'du', univShort: 'DU', university: 'University of Dhaka', examSystem: 'DU', unit: 'B Unit', group: 'Humanities', year: '2025', subject: 'Bangla', seats: 130, lastMerit: 2450, lastScore: 67.2, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 11, univId: 'du', univShort: 'DU', university: 'University of Dhaka', examSystem: 'DU', unit: 'C Unit', group: 'Business', year: '2025', subject: 'Finance', seats: 180, lastMerit: 820, lastScore: 78.9, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 12, univId: 'du', univShort: 'DU', university: 'University of Dhaka', examSystem: 'DU', unit: 'C Unit', group: 'Business', year: '2025', subject: 'Accounting and Information Systems', seats: 180, lastMerit: 900, lastScore: 77.6, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 13, univId: 'ru', univShort: 'RU', university: 'University of Rajshahi', examSystem: 'RU', unit: 'A Unit', group: 'Humanities', year: '2025', subject: 'English', seats: 100, lastMerit: 1350, lastScore: 70.8, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 14, univId: 'ru', univShort: 'RU', university: 'University of Rajshahi', examSystem: 'RU', unit: 'A Unit', group: 'Humanities', year: '2025', subject: 'History', seats: 110, lastMerit: 3200, lastScore: 60.5, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 15, univId: 'ru', univShort: 'RU', university: 'University of Rajshahi', examSystem: 'RU', unit: 'B Unit', group: 'Business', year: '2025', subject: 'Marketing', seats: 100, lastMerit: 1600, lastScore: 68.4, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 16, univId: 'ru', univShort: 'RU', university: 'University of Rajshahi', examSystem: 'RU', unit: 'C Unit', group: 'Science', year: '2025', subject: 'Computer Science and Engineering', seats: 60, lastMerit: 850, lastScore: 78.1, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 17, univId: 'ru', univShort: 'RU', university: 'University of Rajshahi', examSystem: 'RU', unit: 'C Unit', group: 'Science', year: '2025', subject: 'Statistics', seats: 70, lastMerit: 1900, lastScore: 69.4, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 18, univId: 'ru', univShort: 'RU', university: 'University of Rajshahi', examSystem: 'RU', unit: 'C Unit', group: 'Science', year: '2025', subject: 'Genetic Engineering and Biotechnology', seats: 50, lastMerit: 1200, lastScore: 74.1, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 19, univId: 'cu', univShort: 'CU', university: 'University of Chittagong', examSystem: 'CU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Chemistry', seats: 70, lastMerit: 2200, lastScore: 65.1, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 20, univId: 'cu', univShort: 'CU', university: 'University of Chittagong', examSystem: 'CU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Computer Science and Engineering', seats: 65, lastMerit: 900, lastScore: 76.4, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 21, univId: 'cu', univShort: 'CU', university: 'University of Chittagong', examSystem: 'CU', unit: 'B Unit', group: 'Humanities', year: '2025', subject: 'Communication and Journalism', seats: 60, lastMerit: 1700, lastScore: 66.8, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 22, univId: 'cu', univShort: 'CU', university: 'University of Chittagong', examSystem: 'CU', unit: 'C Unit', group: 'Business', year: '2025', subject: 'Banking and Insurance', seats: 80, lastMerit: 2100, lastScore: 63.9, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 23, univId: 'cu', univShort: 'CU', university: 'University of Chittagong', examSystem: 'CU', unit: 'D Unit', group: 'Science', year: '2025', subject: 'Law', seats: 110, lastMerit: 1250, lastScore: 72.1, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 24, univId: 'ju', univShort: 'JU', university: 'Jahangirnagar University', examSystem: 'JU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Computer Science and Engineering', seats: 55, lastMerit: 620, lastScore: 79.6, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 25, univId: 'ju', univShort: 'JU', university: 'Jahangirnagar University', examSystem: 'JU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Mathematics', seats: 70, lastMerit: 1450, lastScore: 71.9, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 26, univId: 'ju', univShort: 'JU', university: 'Jahangirnagar University', examSystem: 'JU', unit: 'B Unit', group: 'Science', year: '2025', subject: 'Pharmacy', seats: 60, lastMerit: 720, lastScore: 78.7, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 27, univId: 'ju', univShort: 'JU', university: 'Jahangirnagar University', examSystem: 'JU', unit: 'C Unit', group: 'Humanities', year: '2025', subject: 'International Relations', seats: 70, lastMerit: 1300, lastScore: 70.2, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 28, univId: 'buet', univShort: 'BUET', university: 'Bangladesh University of Engineering and Technology', examSystem: 'BUET', unit: 'Engineering', group: 'Science', year: '2025', subject: 'Computer Science and Engineering', seats: 120, lastMerit: 180, lastScore: 86.7, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 29, univId: 'buet', univShort: 'BUET', university: 'Bangladesh University of Engineering and Technology', examSystem: 'BUET', unit: 'Engineering', group: 'Science', year: '2025', subject: 'Electrical and Electronic Engineering', seats: 195, lastMerit: 360, lastScore: 83.4, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 30, univId: 'buet', univShort: 'BUET', university: 'Bangladesh University of Engineering and Technology', examSystem: 'BUET', unit: 'Engineering', group: 'Science', year: '2025', subject: 'Mechanical Engineering', seats: 180, lastMerit: 620, lastScore: 78.2, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 31, univId: 'buet', univShort: 'BUET', university: 'Bangladesh University of Engineering and Technology', examSystem: 'BUET', unit: 'Engineering', group: 'Science', year: '2025', subject: 'Civil Engineering', seats: 195, lastMerit: 980, lastScore: 72.4, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 32, univId: 'buet', univShort: 'BUET', university: 'Bangladesh University of Engineering and Technology', examSystem: 'BUET', unit: 'Engineering', group: 'Science', year: '2025', subject: 'Architecture', seats: 55, lastMerit: 720, lastScore: 75.8, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 33, univId: 'gst', univShort: 'GST', university: 'GST Universities', examSystem: 'GST', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Computer Science and Engineering (Cluster)', seats: 900, lastMerit: 4200, lastScore: 68.5, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 34, univId: 'gst', univShort: 'GST', university: 'GST Universities', examSystem: 'GST', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Physics (Cluster)', seats: 700, lastMerit: 9800, lastScore: 52.2, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 35, univId: 'gst', univShort: 'GST', university: 'GST Universities', examSystem: 'GST', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Chemistry (Cluster)', seats: 720, lastMerit: 11200, lastScore: 49.6, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 36, univId: 'gst', univShort: 'GST', university: 'GST Universities', examSystem: 'GST', unit: 'B Unit', group: 'Humanities', year: '2025', subject: 'English (Cluster)', seats: 620, lastMerit: 7600, lastScore: 54.5, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 37, univId: 'gst', univShort: 'GST', university: 'GST Universities', examSystem: 'GST', unit: 'C Unit', group: 'Business', year: '2025', subject: 'Business Administration (Cluster)', seats: 760, lastMerit: 6900, lastScore: 55.9, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 38, univId: 'medical', univShort: 'Medical', university: 'Medical Admission', examSystem: 'Medical', unit: 'MBBS', group: 'Science', year: '2025', subject: 'MBBS — Government Medical Colleges', seats: 5380, lastMerit: 5200, lastScore: 73.1, source: 'DGME result / replace later', note: 'Demo data — verify before public use' },
  { id: 39, univId: 'medical', univShort: 'Medical', university: 'Medical Admission', examSystem: 'Medical', unit: 'MBBS', group: 'Science', year: '2025', subject: 'MBBS — Private Medical Colleges', seats: 6500, lastMerit: 26000, lastScore: 57.2, source: 'DGME result / replace later', note: 'Demo data — verify before public use' },
  { id: 40, univId: 'dental', univShort: 'Dental', university: 'Dental Admission', examSystem: 'Dental', unit: 'BDS', group: 'Science', year: '2025', subject: 'BDS — Government Dental Colleges', seats: 545, lastMerit: 7000, lastScore: 68.7, source: 'DGME result / replace later', note: 'Demo data — verify before public use' },
  { id: 41, univId: 'dental', univShort: 'Dental', university: 'Dental Admission', examSystem: 'Dental', unit: 'BDS', group: 'Science', year: '2025', subject: 'BDS — Private Dental Colleges', seats: 1200, lastMerit: 21000, lastScore: 52.5, source: 'DGME result / replace later', note: 'Demo data — verify before public use' },

  { id: 42, univId: 'agri', univShort: 'Agri', university: 'Agricultural University Cluster', examSystem: 'Agricultural Cluster', unit: 'Agriculture', group: 'Science', year: '2025', subject: 'Agriculture (Cluster)', seats: 1300, lastMerit: 9200, lastScore: 58.4, source: 'ACAS result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 43, univId: 'agri', univShort: 'Agri', university: 'Agricultural University Cluster', examSystem: 'Agricultural Cluster', unit: 'Agriculture', group: 'Science', year: '2025', subject: 'Veterinary Medicine (Cluster)', seats: 460, lastMerit: 3800, lastScore: 69.8, source: 'ACAS result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 44, univId: 'agri', univShort: 'Agri', university: 'Agricultural University Cluster', examSystem: 'Agricultural Cluster', unit: 'Agriculture', group: 'Science', year: '2025', subject: 'Fisheries (Cluster)', seats: 560, lastMerit: 10500, lastScore: 54.1, source: 'ACAS result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 45, univId: 'bau', univShort: 'BAU', university: 'Bangladesh Agricultural University', examSystem: 'Agricultural Cluster', unit: 'Agriculture', group: 'Science', year: '2025', subject: 'Agricultural Engineering', seats: 80, lastMerit: 2600, lastScore: 72.2, source: 'ACAS result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 46, univId: 'bau', univShort: 'BAU', university: 'Bangladesh Agricultural University', examSystem: 'Agricultural Cluster', unit: 'Agriculture', group: 'Science', year: '2025', subject: 'Animal Husbandry', seats: 120, lastMerit: 4700, lastScore: 66.9, source: 'ACAS result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 47, univId: 'sust', univShort: 'SUST', university: 'Shahjalal University of Science and Technology', examSystem: 'GST', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Computer Science and Engineering', seats: 60, lastMerit: 1050, lastScore: 77.8, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 48, univId: 'sust', univShort: 'SUST', university: 'Shahjalal University of Science and Technology', examSystem: 'GST', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Civil and Environmental Engineering', seats: 60, lastMerit: 2200, lastScore: 69.9, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 49, univId: 'sust', univShort: 'SUST', university: 'Shahjalal University of Science and Technology', examSystem: 'GST', unit: 'B Unit', group: 'Humanities', year: '2025', subject: 'English', seats: 55, lastMerit: 4100, lastScore: 60.6, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 50, univId: 'ku', univShort: 'KU', university: 'Khulna University', examSystem: 'KU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Architecture', seats: 35, lastMerit: 1250, lastScore: 73.8, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 51, univId: 'ku', univShort: 'KU', university: 'Khulna University', examSystem: 'KU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Computer Science and Engineering', seats: 45, lastMerit: 980, lastScore: 76.5, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 52, univId: 'ku', univShort: 'KU', university: 'Khulna University', examSystem: 'KU', unit: 'B Unit', group: 'Humanities', year: '2025', subject: 'English', seats: 50, lastMerit: 3300, lastScore: 57.3, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 53, univId: 'iu', univShort: 'IU', university: 'Islamic University', examSystem: 'IU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Applied Chemistry and Chemical Engineering', seats: 60, lastMerit: 2400, lastScore: 65.5, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 54, univId: 'iu', univShort: 'IU', university: 'Islamic University', examSystem: 'IU', unit: 'B Unit', group: 'Humanities', year: '2025', subject: 'Law', seats: 80, lastMerit: 1900, lastScore: 68.2, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 55, univId: 'iu', univShort: 'IU', university: 'Islamic University', examSystem: 'IU', unit: 'C Unit', group: 'Business', year: '2025', subject: 'Accounting and Information Systems', seats: 75, lastMerit: 3100, lastScore: 60.8, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 56, univId: 'jnu', univShort: 'JnU', university: 'Jagannath University', examSystem: 'JnU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Microbiology', seats: 40, lastMerit: 1350, lastScore: 72.6, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 57, univId: 'jnu', univShort: 'JnU', university: 'Jagannath University', examSystem: 'JnU', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Computer Science and Engineering', seats: 50, lastMerit: 880, lastScore: 77.1, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 58, univId: 'jnu', univShort: 'JnU', university: 'Jagannath University', examSystem: 'JnU', unit: 'B Unit', group: 'Humanities', year: '2025', subject: 'Bangla', seats: 80, lastMerit: 4300, lastScore: 55.1, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 59, univId: 'jnu', univShort: 'JnU', university: 'Jagannath University', examSystem: 'JnU', unit: 'C Unit', group: 'Business', year: '2025', subject: 'Management Studies', seats: 70, lastMerit: 2400, lastScore: 63.7, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 60, univId: 'cou', univShort: 'CoU', university: 'Comilla University', examSystem: 'GST', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Information and Communication Technology', seats: 50, lastMerit: 5200, lastScore: 58.4, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 61, univId: 'cou', univShort: 'CoU', university: 'Comilla University', examSystem: 'GST', unit: 'B Unit', group: 'Humanities', year: '2025', subject: 'Public Administration', seats: 60, lastMerit: 8800, lastScore: 50.2, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 62, univId: 'cou', univShort: 'CoU', university: 'Comilla University', examSystem: 'GST', unit: 'C Unit', group: 'Business', year: '2025', subject: 'Finance and Banking', seats: 60, lastMerit: 7400, lastScore: 52.6, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 63, univId: 'bu', univShort: 'BU', university: 'Barishal University', examSystem: 'GST', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Mathematics', seats: 55, lastMerit: 9400, lastScore: 49.8, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 64, univId: 'bu', univShort: 'BU', university: 'Barishal University', examSystem: 'GST', unit: 'B Unit', group: 'Humanities', year: '2025', subject: 'Sociology', seats: 60, lastMerit: 13200, lastScore: 45.2, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 65, univId: 'bu', univShort: 'BU', university: 'Barishal University', examSystem: 'GST', unit: 'C Unit', group: 'Business', year: '2025', subject: 'Marketing', seats: 60, lastMerit: 9800, lastScore: 48.7, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 66, univId: 'brur', univShort: 'BRUR', university: 'Begum Rokeya University', examSystem: 'GST', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Computer Science and Engineering', seats: 50, lastMerit: 6100, lastScore: 56.6, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 67, univId: 'brur', univShort: 'BRUR', university: 'Begum Rokeya University', examSystem: 'GST', unit: 'B Unit', group: 'Humanities', year: '2025', subject: 'Gender and Development Studies', seats: 55, lastMerit: 11900, lastScore: 46.5, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 68, univId: 'brur', univShort: 'BRUR', university: 'Begum Rokeya University', examSystem: 'GST', unit: 'C Unit', group: 'Business', year: '2025', subject: 'Management Studies', seats: 55, lastMerit: 10200, lastScore: 48.1, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 69, univId: 'jkkniu', univShort: 'JKKNIU', university: 'Jatiya Kabi Kazi Nazrul Islam University', examSystem: 'GST', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Computer Science and Engineering', seats: 40, lastMerit: 5600, lastScore: 57.7, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 70, univId: 'jkkniu', univShort: 'JKKNIU', university: 'Jatiya Kabi Kazi Nazrul Islam University', examSystem: 'GST', unit: 'B Unit', group: 'Humanities', year: '2025', subject: 'Music', seats: 40, lastMerit: 14000, lastScore: 42.8, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 71, univId: 'pstu', univShort: 'PSTU', university: 'Patuakhali Science and Technology University', examSystem: 'GST', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Computer Science and Engineering', seats: 50, lastMerit: 5100, lastScore: 58.9, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 72, univId: 'pstu', univShort: 'PSTU', university: 'Patuakhali Science and Technology University', examSystem: 'Agricultural Cluster', unit: 'Agriculture', group: 'Science', year: '2025', subject: 'Disaster Management', seats: 60, lastMerit: 12800, lastScore: 46.0, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },

  { id: 73, univId: 'nstu', univShort: 'NSTU', university: 'Noakhali Science and Technology University', examSystem: 'GST', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Pharmacy', seats: 50, lastMerit: 2700, lastScore: 67.3, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 74, univId: 'nstu', univShort: 'NSTU', university: 'Noakhali Science and Technology University', examSystem: 'GST', unit: 'A Unit', group: 'Science', year: '2025', subject: 'Applied Chemistry and Chemical Engineering', seats: 50, lastMerit: 6000, lastScore: 56.2, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' },
  { id: 75, univId: 'nstu', univShort: 'NSTU', university: 'Noakhali Science and Technology University', examSystem: 'GST', unit: 'B Unit', group: 'Humanities', year: '2025', subject: 'English', seats: 50, lastMerit: 9200, lastScore: 49.2, source: 'Official result PDF / replace later', note: 'Demo data — verify before public use' }
];

const examData = [
  { title: 'HSC Exam 2026', type: 'Public Exam', date: '2026-06-30T10:00:00+06:00', description: 'Higher Secondary Certificate Examination', demo: true },
  { title: 'Dhaka University Admission Test', type: 'University Admission', date: '2026-12-05T10:00:00+06:00', description: 'Demo date — update when official circular is published.', demo: true },
  { title: 'Rajshahi University Admission Test', type: 'University Admission', date: '2026-12-12T10:00:00+06:00', description: 'Demo date — update when official circular is published.', demo: true },
  { title: 'Chittagong University Admission Test', type: 'University Admission', date: '2026-12-19T10:00:00+06:00', description: 'Demo date — update when official circular is published.', demo: true },
  { title: 'Jahangirnagar University Admission Test', type: 'University Admission', date: '2027-01-09T10:00:00+06:00', description: 'Demo date — update when official circular is published.', demo: true },
  { title: 'GST Admission Test', type: 'Cluster Admission', date: '2027-01-16T10:00:00+06:00', description: 'Demo date — update when official circular is published.', demo: true },
  { title: 'Medical Admission Test', type: 'Medical Admission', date: '2027-01-23T10:00:00+06:00', description: 'Demo date — update when official circular is published.', demo: true },
  { title: 'Dental Admission Test', type: 'Dental Admission', date: '2027-02-06T10:00:00+06:00', description: 'Demo date — update when official circular is published.', demo: true },
  { title: 'BUET Admission Test', type: 'Engineering Admission', date: '2027-02-13T10:00:00+06:00', description: 'Demo date — update when official circular is published.', demo: true },
  { title: 'Agricultural Cluster Admission Test', type: 'Agricultural Admission', date: '2027-02-20T10:00:00+06:00', description: 'Demo date — update when official circular is published.', demo: true }
];

const gradePoints = {
  'A+': 5.00,
  'A': 4.00,
  'A-': 3.50,
  'B': 3.00,
  'C': 2.00,
  'D': 1.00,
  'F': 0.00
};

const state = {
  universityType: 'All',
  latestResults: [],
  resultFilter: 'All',
  resultQuery: '',
  tableRows: [...subjectData],
  tablePage: 1,
  rowsPerPage: 10
};

function $(selector) { return document.querySelector(selector); }
function $$(selector) { return [...document.querySelectorAll(selector)]; }
function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
function uniq(list) { return [...new Set(list.filter(Boolean))]; }
function formatNumber(value) { return Number(value || 0).toLocaleString('en-US'); }
function gradientFrom(univ) { return `linear-gradient(135deg, ${univ.gradient[0]}, ${univ.gradient[1]}, ${univ.gradient[2]})`; }
function getUniversity(id) { return universityData.find(u => u.id === id); }
function getSubjectCount(univId) { return subjectData.filter(row => row.univId === univId).length; }
function getSeatCount(univId) { return subjectData.filter(row => row.univId === univId).reduce((sum, row) => sum + (Number(row.seats) || 0), 0); }

function smoothScrollTo(selector) {
  const target = $(selector);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initNavigation() {
  const navbar = $('#navbar');
  const toggle = $('#navToggle');
  const menu = $('#navMenu');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 40);
    $('#toTop')?.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });
  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  $$('#navMenu a').forEach(link => link.addEventListener('click', () => {
    menu?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }));
  $('#toTop')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  $('#yearNow').textContent = new Date().getFullYear();
}

function initCounters() {
  const counters = $$('.stat-number');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count || 0);
      let start = null;
      const duration = 1100;
      function tick(timestamp) {
        if (!start) start = timestamp;
        const progress = clamp((timestamp - start) / duration, 0, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased).toLocaleString('en-US') + '+';
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: .45 });
  counters.forEach(counter => observer.observe(counter));
}

function renderUniversityFilters() {
  const target = $('#universityTypeFilters');
  if (!target) return;
  const types = ['All', ...uniq(universityData.map(u => u.type))];
  target.innerHTML = types.map(type => `<button class="pill-button ${type === state.universityType ? 'active' : ''}" data-type="${type}">${type}</button>`).join('');
  target.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
    state.universityType = button.dataset.type;
    renderUniversityFilters();
    renderUniversityCards();
  }));
}

function renderUniversityCards() {
  const grid = $('#universityGrid');
  if (!grid) return;
  const rows = state.universityType === 'All' ? universityData : universityData.filter(u => u.type === state.universityType);
  grid.innerHTML = rows.map(univ => {
    const subjectCount = getSubjectCount(univ.id);
    const seats = getSeatCount(univ.id);
    const fallback = gradientFrom(univ);
    const img = univ.image ? `<img src="${univ.image}" alt="${univ.name}" loading="lazy" onerror="this.remove()">` : '';
    const units = univ.units.map(unit => `<span class="unit-chip">${unit}</span>`).join('');
    return `
      <article class="university-card" style="--fallback-gradient:${fallback}">
        <div class="uni-image">
          ${img}
          <span class="uni-badge">${univ.shortName}</span>
          <span class="uni-type">${univ.type}</span>
        </div>
        <div class="uni-body">
          <h3>${univ.name}</h3>
          <div class="uni-meta">${univ.location} · Est. ${univ.established}</div>
          <p class="uni-desc">${univ.description}</p>
          <div class="uni-stats">
            <div><strong>${univ.units.length}</strong><span>Units</span></div>
            <div><strong>${subjectCount}</strong><span>Data Rows</span></div>
            <div><strong>${seats ? formatNumber(seats) : 'N/A'}</strong><span>Seats</span></div>
          </div>
          <div class="unit-list">${units}</div>
          <div class="card-actions">
            <button class="btn btn-primary" type="button" data-predict="${univ.id}">Predict Now</button>
            <button class="btn btn-secondary" type="button" data-subjects="${univ.id}">View Subjects</button>
          </div>
        </div>
      </article>`;
  }).join('');
  grid.querySelectorAll('[data-predict]').forEach(button => button.addEventListener('click', () => selectUniversityForPrediction(button.dataset.predict)));
  grid.querySelectorAll('[data-subjects]').forEach(button => button.addEventListener('click', () => filterTableByUniversity(button.dataset.subjects)));
}

function renderGallery() {
  const grid = $('#galleryGrid');
  if (!grid) return;
  const items = universityData.slice(0, 12);
  grid.innerHTML = items.map(univ => {
    const img = univ.image ? `<img src="${univ.image}" alt="${univ.name}" loading="lazy" onerror="this.remove()">` : '';
    return `<article class="gallery-card" style="--fallback-gradient:${gradientFrom(univ)}" data-gallery="${univ.id}">${img}<div class="gallery-content"><strong>${univ.name}</strong><span>${univ.shortName} · ${univ.location}</span></div></article>`;
  }).join('');
  grid.querySelectorAll('[data-gallery]').forEach(card => card.addEventListener('click', () => selectUniversityForPrediction(card.dataset.gallery)));
}

function populateSelects() {
  const systems = ['All Systems', 'DU', 'RU', 'CU', 'JU', 'GST', 'BUET', 'Medical', 'Dental', 'Agricultural Cluster', 'KU', 'IU', 'JnU'];
  const years = ['All Years', '2025', '2024', '2023'];
  const units = ['All Units', 'A Unit', 'B Unit', 'C Unit', 'D Unit', 'Engineering', 'MBBS', 'BDS', 'Agriculture'];

  $('#examSystem').innerHTML = systems.map(system => `<option value="${system === 'All Systems' ? 'all' : system}">${system}</option>`).join('');
  $('#universitySelect').innerHTML = ['<option value="all">All Universities</option>', ...universityData.map(u => `<option value="${u.id}">${u.name}</option>`)].join('');
  $('#unitSelect').innerHTML = units.map(unit => `<option value="${unit === 'All Units' ? 'all' : unit}">${unit}</option>`).join('');
  $('#yearSelect').innerHTML = years.map(year => `<option value="${year === 'All Years' ? 'all' : year}">${year}</option>`).join('');

  const universityOptions = ['<option value="all">All Universities</option>', ...universityData.map(u => `<option value="${u.id}">${u.shortName} — ${u.name}</option>`)];
  $('#tableUniversityFilter').innerHTML = universityOptions.join('');
  $('#tableSystemFilter').innerHTML = ['<option value="all">All Systems</option>', ...uniq(subjectData.map(r => r.examSystem)).map(v => `<option value="${v}">${v}</option>`)].join('');
  $('#tableUnitFilter').innerHTML = ['<option value="all">All Units</option>', ...uniq(subjectData.map(r => r.unit)).map(v => `<option value="${v}">${v}</option>`)].join('');
  $('#tableGroupFilter').innerHTML = ['<option value="all">All Groups</option>', ...uniq(subjectData.map(r => r.group)).map(v => `<option value="${v}">${v}</option>`)].join('');
}

function selectUniversityForPrediction(univId) {
  $('#universitySelect').value = univId;
  smoothScrollTo('#predictor');
}

function filterTableByUniversity(univId) {
  $('#tableUniversityFilter').value = univId;
  state.tablePage = 1;
  applyTableFilters();
  smoothScrollTo('#data-table');
}

function getChanceData(level) {
  const map = {
    High: { color: '#34d399', bg: 'rgba(52,211,153,.14)', border: 'rgba(52,211,153,.3)' },
    Medium: { color: '#60a5fa', bg: 'rgba(96,165,250,.14)', border: 'rgba(96,165,250,.3)' },
    Low: { color: '#fbbf24', bg: 'rgba(251,191,36,.14)', border: 'rgba(251,191,36,.3)' },
    'Very Low': { color: '#fb7185', bg: 'rgba(251,113,133,.14)', border: 'rgba(251,113,133,.3)' }
  };
  return map[level] || map.Low;
}

function calculatePossibility(row, userMerit, userScore, quota) {
  const ratio = userMerit / row.lastMerit;
  let possibility;
  let chanceLevel;

  if (ratio <= 1) {
    possibility = 75 + ((1 - ratio) * 23);
    chanceLevel = 'High';
  } else if (ratio <= 1.15) {
    possibility = 74 - ((ratio - 1) / 0.15) * 24;
    chanceLevel = 'Medium';
  } else if (ratio <= 1.35) {
    possibility = 49 - ((ratio - 1.15) / 0.20) * 24;
    chanceLevel = 'Low';
  } else {
    possibility = Math.max(5, 24 - ((ratio - 1.35) * 20));
    chanceLevel = 'Very Low';
  }

  let adjustmentText = '';
  if (!Number.isNaN(userScore) && userScore !== null && row.lastScore) {
    const diff = userScore - row.lastScore;
    if (diff >= 0) {
      const add = clamp(3 + diff * 0.25, 3, 5);
      possibility += add;
      adjustmentText = ` Your score is ${diff.toFixed(1)} higher than/equal to the previous last score, so a small score bonus was added.`;
    } else if (diff >= -5) {
      const reduce = clamp(3 + Math.abs(diff) * 0.8, 3, 7);
      possibility -= reduce;
      adjustmentText = ` Your score is ${Math.abs(diff).toFixed(1)} lower than the previous last score, so a small score penalty was applied.`;
    } else {
      possibility -= 9;
      adjustmentText = ` Your score is more than 5 marks below the previous last score, so the estimate was reduced.`;
    }
  }

  if (quota === 'yes') possibility += 4;

  const finalPossibility = Math.round(clamp(possibility, 1, 99));
  const meritGap = row.lastMerit - userMerit;
  const reason = meritGap >= 0
    ? `Your merit position is ${formatNumber(userMerit)} and the previous year last merit for ${row.subject} was ${formatNumber(row.lastMerit)}. You are inside the previous cutoff range, so the possibility is ${chanceLevel.toLowerCase()}.${adjustmentText}`
    : `Your merit position is ${formatNumber(userMerit)} and the previous year last merit for ${row.subject} was ${formatNumber(row.lastMerit)}. You are ${formatNumber(Math.abs(meritGap))} positions outside the previous cutoff range, so the possibility is ${chanceLevel.toLowerCase()}.${adjustmentText}`;

  return { possibility: finalPossibility, chanceLevel, meritGap, reason };
}

function initPredictor() {
  $('#predictorForm')?.addEventListener('submit', event => {
    event.preventDefault();
    const examSystem = $('#examSystem').value;
    const univId = $('#universitySelect').value;
    const unit = $('#unitSelect').value;
    const group = $('#groupSelect').value;
    const year = $('#yearSelect').value;
    const userMerit = Number($('#meritInput').value);
    const userScore = $('#scoreInput').value === '' ? null : Number($('#scoreInput').value);
    const quota = $('#quotaSelect').value;

    if (!userMerit || userMerit < 1) {
      alert('Please enter a valid merit position.');
      return;
    }

    let rows = subjectData.filter(row => {
      return (examSystem === 'all' || row.examSystem === examSystem)
        && (univId === 'all' || row.univId === univId)
        && (unit === 'all' || row.unit === unit)
        && (group === 'all' || row.group === group)
        && (year === 'all' || row.year === year);
    });

    state.latestResults = rows.map(row => {
      const calc = calculatePossibility(row, userMerit, userScore, quota);
      return { ...row, ...calc, userMerit };
    }).sort((a, b) => {
      return (b.possibility - a.possibility)
        || (b.meritGap - a.meritGap)
        || a.university.localeCompare(b.university)
        || a.subject.localeCompare(b.subject);
    });

    state.resultFilter = 'All';
    state.resultQuery = '';
    $('#resultSearch').value = '';
    $('#quotaDisclaimer')?.classList.toggle('hidden', quota !== 'yes');
    renderResults();
    smoothScrollTo('#prediction-results');
  });

  $('#resultSearch')?.addEventListener('input', event => {
    state.resultQuery = event.target.value.toLowerCase().trim();
    renderResultCards();
  });
}

function renderResults() {
  const empty = $('#resultsEmpty');
  const dash = $('#resultsDashboard');
  if (!state.latestResults.length) {
    empty.classList.remove('hidden');
    dash.classList.add('hidden');
    empty.innerHTML = `<span>⚠️</span><h3>No matching data found</h3><p>Try selecting All Universities, All Units, or All Years. Also update subjectData with more official rows.</p>`;
    return;
  }
  empty.classList.add('hidden');
  dash.classList.remove('hidden');
  renderSummary();
  renderResultFilters();
  renderResultCards();
}

function renderSummary() {
  const results = state.latestResults;
  const counts = {
    High: results.filter(r => r.chanceLevel === 'High').length,
    Medium: results.filter(r => r.chanceLevel === 'Medium').length,
    Low: results.filter(r => r.chanceLevel === 'Low').length,
    'Very Low': results.filter(r => r.chanceLevel === 'Very Low').length
  };
  const best = results[0];
  $('#summaryGrid').innerHTML = `
    <article class="summary-card"><span>Total matching subjects</span><strong>${results.length}</strong></article>
    <article class="summary-card"><span>High / Medium / Low / Very Low</span><strong>${counts.High} / ${counts.Medium} / ${counts.Low} / ${counts['Very Low']}</strong></article>
    <article class="summary-card"><span>Best possible subject</span><strong>${best.subject}</strong></article>
    <article class="summary-card"><span>Best university · Merit</span><strong>${best.univShort} · ${formatNumber(best.userMerit)}</strong></article>
  `;
}

function renderResultFilters() {
  const levels = ['All', 'High', 'Medium', 'Low', 'Very Low'];
  $('#resultFilterButtons').innerHTML = levels.map(level => `<button type="button" class="pill-button ${state.resultFilter === level ? 'active' : ''}" data-level="${level}">${level === 'All' ? 'Show All' : level + ' Chance'}</button>`).join('');
  $('#resultFilterButtons').querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
    state.resultFilter = button.dataset.level;
    renderResultFilters();
    renderResultCards();
  }));
}

function renderResultCards() {
  const grid = $('#resultGrid');
  let rows = state.latestResults.filter(row => state.resultFilter === 'All' || row.chanceLevel === state.resultFilter);
  if (state.resultQuery) {
    rows = rows.filter(row => `${row.subject} ${row.university} ${row.examSystem} ${row.unit}`.toLowerCase().includes(state.resultQuery));
  }
  if (!rows.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><span>🔎</span><h3>No results found</h3><p>Try another filter or search keyword.</p></div>`;
    return;
  }
  grid.innerHTML = rows.map(row => {
    const colors = getChanceData(row.chanceLevel);
    const meritGapLabel = row.meritGap >= 0 ? `Inside by ${formatNumber(row.meritGap)}` : `Outside by ${formatNumber(Math.abs(row.meritGap))}`;
    return `
      <article class="result-card" style="--chance-color:${colors.color};--progress:${row.possibility}%;--badge-color:${colors.color};--badge-bg:${colors.bg};--badge-border:${colors.border}">
        <div class="result-top">
          <div>
            <h3>${row.subject}</h3>
            <p>${row.university} · ${row.examSystem} · ${row.unit} · ${row.group}</p>
          </div>
          <span class="chance-badge">${row.chanceLevel} · ${row.possibility}%</span>
        </div>
        <div class="progress-track"><div class="progress-bar"></div></div>
        <div class="result-facts">
          <div><span>Year</span><strong>${row.year}</strong></div>
          <div><span>Last Merit</span><strong>${formatNumber(row.lastMerit)}</strong></div>
          <div><span>User Merit</span><strong>${formatNumber(row.userMerit)}</strong></div>
          <div><span>Merit Gap</span><strong>${meritGapLabel}</strong></div>
          <div><span>Last Score</span><strong>${row.lastScore ?? 'N/A'}</strong></div>
          <div><span>Seats</span><strong>${formatNumber(row.seats)}</strong></div>
          <div><span>Chance</span><strong>${row.possibility}%</strong></div>
          <div><span>Badge</span><strong>${row.chanceLevel}</strong></div>
        </div>
        <p class="reason">${row.reason}</p>
        <div class="source-note"><strong>Source:</strong> ${row.source}<br><strong>Note:</strong> ${row.note}</div>
      </article>`;
  }).join('');
}

function initGpaCalculator() {
  const subjects = ['Bangla', 'English', 'ICT', 'Subject 1', 'Subject 2', 'Subject 3', 'Optional Subject'];
  const form = $('#gpaForm');
  form.innerHTML = subjects.map((subject, index) => `
    <div class="form-group">
      <label for="gpa-${index}">${subject}</label>
      <select id="gpa-${index}" data-required="${index < 6 ? 'yes' : 'no'}">
        ${Object.keys(gradePoints).map(grade => `<option value="${grade}">${grade} — ${gradePoints[grade].toFixed(2)}</option>`).join('')}
      </select>
    </div>`).join('');
  $('#calculateGpa').addEventListener('click', calculateGpa);
}

function gradeFromGpa(gpa) {
  if (gpa >= 5) return 'A+';
  if (gpa >= 4) return 'A';
  if (gpa >= 3.5) return 'A-';
  if (gpa >= 3) return 'B';
  if (gpa >= 2) return 'C';
  if (gpa >= 1) return 'D';
  return 'F';
}

function calculateGpa() {
  const selects = [...$('#gpaForm').querySelectorAll('select')];
  const required = selects.slice(0, 6).map(sel => gradePoints[sel.value]);
  const optionalGp = gradePoints[selects[6].value];
  const hasFailedRequired = required.some(point => point === 0);
  const optionalExtra = optionalGp >= 2 ? Math.max(0, optionalGp - 2) : 0;
  let gpa = hasFailedRequired ? 0 : (required.reduce((sum, point) => sum + point, 0) + optionalExtra) / required.length;
  gpa = clamp(gpa, 0, 5);
  const grade = gradeFromGpa(gpa);
  $('#gpaOutput').innerHTML = `<strong>Final GPA: ${gpa.toFixed(2)} (${grade})</strong><br>Optional subject extra point = max(optional GP - 2, 0), so your extra point is ${optionalExtra.toFixed(2)}. ${hasFailedRequired ? 'Because a required subject is F, final GPA is counted as 0.00.' : 'Final GPA is capped at 5.00.'}`;
}

function initCgpaCalculator() {
  $('#addCourse').addEventListener('click', () => addCourseRow());
  $('#resetCourses').addEventListener('click', () => resetCourses());
  $('#calculateCgpa').addEventListener('click', calculateCgpa);
  resetCourses();
}

function addCourseRow(course = '', credit = '', gp = '') {
  const tbody = $('#courseRows');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td><input type="text" placeholder="Course name" value="${course}"></td>
    <td><input type="number" min="0" step="0.25" placeholder="3.00" value="${credit}"></td>
    <td><input type="number" min="0" max="4" step="0.01" placeholder="4.00" value="${gp}"></td>
    <td><button type="button" class="icon-button" aria-label="Delete course">×</button></td>`;
  tr.querySelector('button').addEventListener('click', () => tr.remove());
  tbody.appendChild(tr);
}

function resetCourses() {
  $('#courseRows').innerHTML = '';
  addCourseRow('Course 1', 3, 4);
  addCourseRow('Course 2', 3, 3.75);
  addCourseRow('Course 3', 2, 3.5);
  $('#cgpaOutput').innerHTML = 'Add your courses and click Calculate CGPA.';
}

function calculateCgpa() {
  const rows = [...$('#courseRows').querySelectorAll('tr')];
  let totalCredits = 0;
  let weighted = 0;
  rows.forEach(row => {
    const inputs = row.querySelectorAll('input');
    const credit = Number(inputs[1].value);
    const gp = Number(inputs[2].value);
    if (credit > 0 && gp >= 0 && gp <= 4) {
      totalCredits += credit;
      weighted += credit * gp;
    }
  });
  if (!totalCredits) {
    $('#cgpaOutput').innerHTML = '<strong>Please enter at least one valid course credit.</strong>';
    return;
  }
  const cgpa = weighted / totalCredits;
  let standing = 'Needs improvement';
  if (cgpa >= 3.75) standing = 'Excellent standing';
  else if (cgpa >= 3.5) standing = 'Very good standing';
  else if (cgpa >= 3) standing = 'Good standing';
  else if (cgpa >= 2.5) standing = 'Satisfactory standing';
  $('#cgpaOutput').innerHTML = `<strong>Final CGPA: ${cgpa.toFixed(2)} / 4.00</strong><br>Total credits: ${totalCredits.toFixed(2)} · Total weighted points: ${weighted.toFixed(2)}<br>${standing}.`;
}

function renderCountdown() {
  const grid = $('#countdownGrid');
  const now = new Date();
  grid.innerHTML = examData.map(exam => {
    const target = new Date(exam.date);
    const diff = target - now;
    const passed = diff < 0;
    const safeDiff = Math.max(0, diff);
    const days = Math.floor(safeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((safeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((safeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((safeDiff / 1000) % 60);
    const statusClass = passed ? 'passed' : exam.demo ? 'update' : 'upcoming';
    const statusText = passed ? 'Passed' : exam.demo ? 'Update Required' : 'Upcoming';
    return `
      <article class="countdown-card">
        <span class="exam-type">${exam.type}</span>
        <h3>${exam.title}</h3>
        <p class="exam-date">${target.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}</p>
        <div class="time-grid">
          <div class="time-box"><strong>${days}</strong><span>Days</span></div>
          <div class="time-box"><strong>${hours}</strong><span>Hours</span></div>
          <div class="time-box"><strong>${minutes}</strong><span>Minutes</span></div>
          <div class="time-box"><strong>${seconds}</strong><span>Seconds</span></div>
        </div>
        <span class="status ${statusClass}">${statusText}</span>
        <p class="source-note">${exam.description}</p>
      </article>`;
  }).join('');
}

function initDataTable() {
  ['tableSearch', 'tableUniversityFilter', 'tableSystemFilter', 'tableUnitFilter', 'tableGroupFilter', 'tableSort'].forEach(id => {
    $('#' + id)?.addEventListener('input', () => { state.tablePage = 1; applyTableFilters(); });
    $('#' + id)?.addEventListener('change', () => { state.tablePage = 1; applyTableFilters(); });
  });
  applyTableFilters();
}

function applyTableFilters() {
  const query = ($('#tableSearch').value || '').toLowerCase().trim();
  const univ = $('#tableUniversityFilter').value;
  const system = $('#tableSystemFilter').value;
  const unit = $('#tableUnitFilter').value;
  const group = $('#tableGroupFilter').value;
  const sort = $('#tableSort').value;

  state.tableRows = subjectData.filter(row => {
    const haystack = `${row.university} ${row.univShort} ${row.examSystem} ${row.unit} ${row.group} ${row.year} ${row.subject} ${row.source} ${row.note}`.toLowerCase();
    return (!query || haystack.includes(query))
      && (univ === 'all' || row.univId === univ)
      && (system === 'all' || row.examSystem === system)
      && (unit === 'all' || row.unit === unit)
      && (group === 'all' || row.group === group);
  });

  state.tableRows.sort((a, b) => {
    if (sort === 'meritDesc') return b.lastMerit - a.lastMerit;
    if (sort === 'universityAsc') return a.university.localeCompare(b.university);
    if (sort === 'subjectAsc') return a.subject.localeCompare(b.subject);
    return a.lastMerit - b.lastMerit;
  });

  renderDataTable();
}

function renderDataTable() {
  const tbody = $('#dataTableBody');
  const totalPages = Math.max(1, Math.ceil(state.tableRows.length / state.rowsPerPage));
  state.tablePage = clamp(state.tablePage, 1, totalPages);
  const start = (state.tablePage - 1) * state.rowsPerPage;
  const rows = state.tableRows.slice(start, start + state.rowsPerPage);

  tbody.innerHTML = rows.length ? rows.map(row => `
    <tr>
      <td><span class="badge-mini">${row.univShort}</span><br>${row.university}</td>
      <td>${row.examSystem}</td>
      <td>${row.unit}</td>
      <td>${row.group}</td>
      <td>${row.year}</td>
      <td><strong style="color:white">${row.subject}</strong></td>
      <td>${formatNumber(row.lastMerit)}</td>
      <td>${row.lastScore ?? 'N/A'}</td>
      <td>${formatNumber(row.seats)}</td>
      <td>${row.source}<br><small>${row.note}</small></td>
    </tr>`).join('') : `<tr><td colspan="10" style="text-align:center;padding:2rem">No data found.</td></tr>`;

  $('#tableInfo').textContent = state.tableRows.length
    ? `Showing ${start + 1}–${Math.min(start + state.rowsPerPage, state.tableRows.length)} of ${state.tableRows.length} rows`
    : 'No rows to show';

  const pagination = $('#pagination');
  let buttons = `<button class="page-btn" type="button" ${state.tablePage === 1 ? 'disabled' : ''} data-page="${state.tablePage - 1}">‹</button>`;
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - state.tablePage) <= 2) {
      buttons += `<button class="page-btn ${i === state.tablePage ? 'active' : ''}" type="button" data-page="${i}">${i}</button>`;
    } else if (Math.abs(i - state.tablePage) === 3) {
      buttons += `<span style="color:var(--muted);padding:.45rem .2rem">…</span>`;
    }
  }
  buttons += `<button class="page-btn" type="button" ${state.tablePage === totalPages ? 'disabled' : ''} data-page="${state.tablePage + 1}">›</button>`;
  pagination.innerHTML = buttons;
  pagination.querySelectorAll('[data-page]').forEach(btn => btn.addEventListener('click', () => {
    state.tablePage = Number(btn.dataset.page);
    renderDataTable();
  }));
}

function initApp() {
  initNavigation();
  initCounters();
  renderUniversityFilters();
  renderUniversityCards();
  renderGallery();
  populateSelects();
  initPredictor();
  initGpaCalculator();
  initCgpaCalculator();
  renderCountdown();
  setInterval(renderCountdown, 1000);
  initDataTable();
}

document.addEventListener('DOMContentLoaded', initApp);