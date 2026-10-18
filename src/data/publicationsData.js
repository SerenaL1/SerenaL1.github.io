// "me: true" marks Serena Liu so the UI can bold/highlight her name in the author list.
export const publications = [
  {
    id: 1,
    title:
      'Never Stop Learning: From Simulation to Hardware with Maximum a Posteriori Policy Optimization',
    authors: [
      { name: 'Serena Liu', affiliation: 1, me: true },
      { name: 'Mathieu Decker', affiliation: 2 },
      { name: 'Patrick Spieler', affiliation: 2 },
      { name: 'Harley Wiltzer', affiliation: 3 },
      { name: 'Andrej Orsula', affiliation: 4 },
      { name: 'Pedro Roque', affiliation: 5 },
      { name: 'Abbas Abdolmaleki', affiliation: 6 },
      { name: 'Amir Rahmani', affiliation: 2 },
      { name: 'Joel W. Burdick', affiliation: 5 },
      { name: 'Jean-Pierre de la Croix', affiliation: 2 },
      { name: 'Elena Sorina Lupu', affiliation: 5 },
    ],
    affiliations: [
      { name: 'Harvard University', url: 'https://harvard.edu' },
      { name: 'Jet Propulsion Laboratory', url: 'https://jpl.nasa.gov' },
      { name: 'Mila - Quebec Artificial Intelligence Institute', url: 'https://mila.quebec' },
      { name: 'University of Luxembourg', url: 'https://uni.lu' },
      { name: 'California Institute of Technology', url: 'https://caltech.edu' },
      { name: 'Google', url: 'https://google.com' },
    ],
    // No public venue yet — update once this is submitted/published.
    venue: null,
    links: [
      // No PDF link provided yet — add { label: 'PDF', url: '...' } once available.
    ],
  },
  {
    id: 2,
    title:
      'Setting-Matched and Semantics-Scaled Benchmarking of One-Step Generative Models Against Multistep Diffusion and Flow Models',
    authors: [
      { name: 'Advaith Ravishankar' },
      { name: 'Serena Liu', me: true },
      { name: 'Mingyang Wang' },
      { name: 'Todd Zhou' },
      { name: 'Jeffrey Zhou' },
      { name: 'Arnav Sharma' },
      { name: 'Ziling Hu' },
      { name: 'Léopold Das' },
      { name: 'Abdulaziz Sobirov' },
      { name: 'Faizaan Siddique' },
      { name: 'Freddy Yu' },
      { name: 'Seungjoo Baek' },
      { name: 'Yan Luo' },
      { name: 'Mengyu Wang' },
    ],
    venue: 'ICML 2026 Workshop on Foundations of Deep Generative Models (Spotlight)',
    year: 2026,
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2603.14186' },
      { label: 'PDF', url: 'https://arxiv.org/pdf/2603.14186' },
    ],
  },
  {
    id: 4,
    title: 'Characterization of the Mechanical Trash Compactor Bag Removal Force',
    authors: [
      { name: 'Serena Liu', affiliation: 1, me: true },
      { name: 'Lance Delzeit', affiliation: 2 },
      { name: 'Steven A. Sepka', affiliation: 2 },
      { name: 'Justine Richardson', affiliation: 2 },
      { name: 'Gregory S. Pace', affiliation: 2 },
    ],
    affiliations: [
      { name: 'Harvard University', url: 'https://harvard.edu' },
      { name: 'NASA Ames Research Center', url: 'https://www.nasa.gov/ames/' },
    ],
    venue: '2026 International Conference on Environmental Systems (ICES)',
    year: 2026,
    links: [
      {
        label: 'ResearchGate',
        url: 'https://www.researchgate.net/publication/410985046_Characterization_of_the_Mechanical_Trash_Compactor_Bag_Removal_Force',
      },
    ],
  },
  {
    id: 3,
    title:
      'Single-Slice-to-3D Reconstruction in Medical Imaging and Natural Objects: A Comparative Benchmark with SAM 3D',
    authors: [
      { name: 'Yan Luo' },
      { name: 'Advaith Ravishankar' },
      { name: 'Serena Liu', me: true },
      { name: 'Yutong Yang' },
      { name: 'Mengyu Wang' },
    ],
    venue: 'arXiv preprint',
    year: 2026,
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2602.09407' },
      { label: 'PDF', url: 'https://arxiv.org/pdf/2602.09407' },
    ],
  },
];
