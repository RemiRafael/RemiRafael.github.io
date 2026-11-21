// =====================================================================
//  EDIT THIS FILE ONLY. All pages of the website are generated from it.
//  Images go in site/images/..., CV PDFs go in site/cv/...
//  Text in "summary"/"description" fields may contain simple HTML (<b>, <i>, <sub>).
// =====================================================================
const SITE = {
  name: "Rémi RAFAEL",
  postnominal: "PhD",
  authorName: "R. Rafael",          // highlighted in bold in author lists
  tagline: "Hybrid micro-fabrication & additive manufacturing · engineer-scientist · maker",
  intro: "I build fabrication processes and working hardware from scratch: hybrid 3D printing of copper electronics, " +
         "cleanroom thin-film sensors, two-photon micro-printing on flexible neural probes, and open-source precision " +
         "lab instruments. Mechanical engineer (MEng) and PhD in micro- and nano-electronics, with five years of " +
         "postdoctoral R&D in Hong Kong. Looking for R&D, engineering and research positions.",
  workRight: "Hong Kong resident · full right to work until 2029 · no sponsorship required",
  photo: "",                         // e.g. "images/me.jpg" (optional)

  email: "remi.rafael@laposte.net",
  links: [
    { label: "LinkedIn", url: "" },  // add your LinkedIn URL here
    { label: "ORCID", url: "https://orcid.org/0000-0003-1066-2545" },
    { label: "ResearchGate", url: "https://www.researchgate.net/profile/Remi-Rafael" },
    { label: "GitHub", url: "https://github.com/RemiRafael" },
    { label: "Thingiverse", url: "https://www.thingiverse.com/Remi-Rafael/designs" },
    { label: "Instructables", url: "https://www.instructables.com/member/Remi_Rafael/instructables/" },
  ],

  keyNumbers: [
    ["1", "US patent application"],
    ["8", "journal articles"],
    ["4", "oral conference talks"],
    ["3", "OSHWA-certified open hardware"],
    ["100k+", "downloads of open designs"],
  ],

  researchCV: {
    pdf: "cv/research-cv.pdf",
    updated: "Nov 2026",
    blurb: "For research fellow, postdoctoral and academic positions (3 pages, full publication and conference list).",
    highlights: [
      "<b>3D-printed electronics</b> – invented a hybrid FDM + laser-sintering process printing copper and thermoplastic in one machine (<i>Adv. Mater. Technol.</i> 2023; US patent application).",
      "<b>Neural interfaces</b> – freeform porous 3D microelectrodes on ultrathin polyimide probes: impedance at 1 kHz cut from 1.71 to 0.18 MΩ, stable recordings in rats over 80 days.",
      "<b>Open research hardware</b> – modular 3D-printed positioning and micromanipulation toolkit; 3 OSHWA certifications; GOSH 2026 talk; submitted to <i>HardwareX</i>.",
      "PhD INSA Lyon (2018) · MSc Cranfield University · MEng SUPMECA Paris",
    ],
  },

  industryCV: {
    pdf: "cv/industry-cv.pdf",
    updated: "Nov 2026",
    blurb: "For R&D engineer, process engineer and application engineer roles (2 pages).",
    highlights: [
      "Built a complete hybrid 3D-printing platform (2 FDM heads + laser, software, composite filament) from scratch.",
      "Micro-fabrication: photolithography, ALD, sputtering, evaporation, RIE, electroless gold plating, laser processing.",
      "Mechanical design & prototyping: SolidWorks, CATIA, precision stages, fixtures and test benches, PCB and firmware.",
      "Delivered working wearable ECG units to a partner team for a human study.",
    ],
  },

  // status: "published" | "submitted" | "in preparation" | "patent"
  // link: DOI / journal page when published; resources: preprints, data, files, talks...
  publications: [
    {
      title: "A modular open-source 3D-printed toolkit for laboratory positioning and micromanipulation",
      authors: "R. Rafael*",
      venue: "Submitted to HardwareX",
      year: 2026,
      status: "submitted",
      abstractImage: "images/abstracts/positioning-toolkit.jpg",
      summary: "Eight low-cost printed modules (US$3–18 each) – translation, rotation and tilt stages, a 3-axis micromanipulator and a probe station – that replace commercial positioning equipment in research labs.",
      reference: "R. Rafael. A modular open-source 3D-printed toolkit for laboratory positioning and micromanipulation. Submitted to HardwareX (Nov 2026).",
      link: "",
      resources: [
        { label: "GOSH 2026 talk (video, slides)", url: "https://doi.org/10.5281/zenodo.23008069" },
        { label: "OSHWA CN000031", url: "https://certification.oshwa.org/cn000031.html" },
        { label: "Build tutorials", url: "projects.html" },
      ],
    },
    {
      title: "Two-photon polymerization on flexible neural probes for multifunctional 3D microelectrodes",
      authors: "R. Rafael*, N. Xiao, N. Choi, R. Weng, A. Padilla, P. K. L. Chan",
      venue: "Manuscript in preparation",
      year: 2026,
      status: "in preparation",
      abstractImage: "images/projects/tv-7359024.jpg",
      summary: "Porous 3D microelectrodes printed by two-photon polymerization and selectively gold-plated on 2 µm-thick polyimide probes: impedance at 1 kHz cut from 1.71 to 0.18 MΩ, more than 2× anchoring force, drug-loadable hydrogel, and stable hippocampal recordings in rats for 80 days.",
      reference: "R. Rafael, N. Xiao, N. Choi, R. Weng, A. Padilla, P. K. L. Chan. Two-photon polymerization on flexible neural probes for multifunctional 3D microelectrodes. Manuscript in preparation.",
      link: "",
      resources: [
        { label: "Instrumentation 3D files", url: "https://www.thingiverse.com/thing:7359024" },
      ],
    },
    {
      title: "Copper composites and laser sintering: novel hybridization method for 3D printed electronics",
      authors: "R. Rafael*, P. K. L. Chan",
      venue: "Advanced Materials Technologies",
      year: 2023,
      status: "published",
      abstractImage: "images/abstracts/copper-composites.jpg",
      summary: "A single printer combines plastic and copper-composite filaments with a laser that sinters the copper in place, producing solderable conductive tracks (4 × 10<sup>−4</sup> Ω·cm) and embedded 3D vias inside printed parts.",
      reference: "R. Rafael, P. K. L. Chan. Copper composites and laser sintering: novel hybridization method for 3D printed electronics. Advanced Materials Technologies (2023). doi:10.1002/admt.202201900",
      link: "https://doi.org/10.1002/admt.202201900",
      resources: [
        { label: "Patent US20240189907A1", url: "https://patents.google.com/patent/US20240189907A1" },
      ],
    },
    {
      title: "Hybrid printing of copper conductive material",
      authors: "R. Rafael, P. K. L. Chan",
      venue: "US patent application US20240189907A1",
      year: 2024,
      status: "patent",
      abstractImage: "",
      summary: "Patent application covering the hybrid FDM + laser-sintering process for printing copper conductors.",
      reference: "R. Rafael, P. K. L. Chan. Hybrid printing of copper conductive material. US patent application US20240189907A1 (published 2024).",
      link: "https://patents.google.com/patent/US20240189907A1",
      resources: [],
    },
    {
      title: "Van der Waals assembled solution-processed organic monolayer single-crystal transistor for electrocardiograph sensing",
      authors: "Z. He, D. Dai, M. Chen, D. Zhou, K. K. G. Chik, R. Rafael, et al.",
      venue: "Advanced Functional Materials",
      year: 2022,
      status: "published",
      abstractImage: "",
      summary: "Ultrathin organic single-crystal transistors used as sensitive electrocardiogram (ECG) sensors.",
      reference: "Z. He, D. Dai, M. Chen, D. Zhou, K. K. G. Chik, R. Rafael, et al. Van der Waals assembled solution-processed organic monolayer single-crystal transistor for electrocardiograph sensing. Advanced Functional Materials (2022). doi:10.1002/adfm.202205129",
      link: "https://doi.org/10.1002/adfm.202205129",
      resources: [],
    },
    {
      title: "Piezo-tunneling strain sensors integrated on plastic by combining vacuum thin film coatings and 3D printing technologies",
      authors: "R. Rafael*, E. Puyoo, C. Malhaire",
      venue: "Microsystem Technologies",
      year: 2020,
      status: "published",
      abstractImage: "images/abstracts/piezo-tunneling-sensor.jpg",
      summary: "Metal/insulator/metal tunnel-junction strain sensors made by vacuum thin-film deposition and integrated into a 3D-printed plastic pressure sensor.",
      reference: "R. Rafael, E. Puyoo, C. Malhaire. Piezo-tunneling strain sensors integrated on plastic by combining vacuum thin film coatings and 3D printing technologies. Microsystem Technologies (2020). doi:10.1007/s00542-020-04832-7",
      link: "https://doi.org/10.1007/s00542-020-04832-7",
      resources: [],
    },
    {
      title: "Ultrahigh sensitivity to strain of cracked thin films based on metallic nanoparticles in a dielectric matrix",
      authors: "E. Puyoo, S. Brottet, R. Rafael, C. Malhaire",
      venue: "IEEE Sensors Letters",
      year: 2018,
      status: "published",
      abstractImage: "",
      summary: "Cracked thin films of metallic nanoparticles embedded in a dielectric show ultrahigh sensitivity to strain.",
      reference: "E. Puyoo, S. Brottet, R. Rafael, C. Malhaire. Ultrahigh sensitivity to strain of cracked thin films based on metallic nanoparticles in a dielectric matrix. IEEE Sensors Letters (2018). doi:10.1109/LSENS.2018.2865883",
      link: "https://doi.org/10.1109/LSENS.2018.2865883",
      resources: [],
    },
    {
      title: "Piezo-tunnel effect in Al/Al<sub>2</sub>O<sub>3</sub>/Al junctions elaborated by atomic layer deposition",
      authors: "R. Rafael*, E. Puyoo, C. Malhaire",
      venue: "Journal of Applied Physics 122, 184501",
      year: 2017,
      status: "published",
      abstractImage: "",
      summary: "How the tunnelling current through ALD-grown Al/Al<sub>2</sub>O<sub>3</sub>/Al junctions changes under strain – the physical basis of ultra-sensitive tunnel-junction strain gauges.",
      reference: "R. Rafael, E. Puyoo, C. Malhaire. Piezo-tunnel effect in Al/Al2O3/Al junctions elaborated by atomic layer deposition. Journal of Applied Physics 122, 184501 (2017). doi:10.1063/1.4994163",
      link: "https://doi.org/10.1063/1.4994163",
      resources: [],
    },
    {
      title: "Metallic nanoparticle-based strain sensors elaborated by atomic layer deposition",
      authors: "E. Puyoo, C. Malhaire, D. Thomas, R. Rafael, et al.",
      venue: "Applied Physics Letters 110, 123103",
      year: 2017,
      status: "published",
      abstractImage: "",
      summary: "Strain sensors made of metallic nanoparticles grown by atomic layer deposition.",
      reference: "E. Puyoo, C. Malhaire, D. Thomas, R. Rafael, et al. Metallic nanoparticle-based strain sensors elaborated by atomic layer deposition. Applied Physics Letters 110, 123103 (2017). doi:10.1063/1.4978778",
      link: "https://doi.org/10.1063/1.4978778",
      resources: [],
    },
  ],

  // category: used for the filter buttons on the projects page
  // links: Thingiverse files, Instructables tutorial, certifications...
  projects: [
    {
      title: "3D-printed micromanipulator V2 (switchable magnetic base)",
      category: "Lab & research hardware",
      image: "images/projects/ib-Build-a-3D-Printed-Micromanipulator-V2-w.jpg",
      description: "3-axis micromanipulator for handling objects at the micron scale, now on a printed on/off magnetic base. OSHWA-certified open hardware.",
      links: [
        { label: "Tutorial", url: "https://www.instructables.com/Build-a-3D-Printed-Micromanipulator-V2-with-a-Swit/" },
        { label: "Files", url: "https://www.thingiverse.com/thing:7403377" },
        { label: "Version 1", url: "https://www.instructables.com/Build-a-3D-Printed-Micro-manipulator/" },
        { label: "OSHWA CN000029", url: "https://certification.oshwa.org/cn000029.html" },
      ],
    },
    {
      title: "Precision silicon wafer scriber under US$100",
      category: "Lab & research hardware",
      image: "images/projects/ib-Build-a-High-Precision-Silicon-Wafer-Scr.jpg",
      description: "Low-cost precision scribing system for cutting silicon wafers into individual dies, for cleanroom sample preparation.",
      links: [
        { label: "Tutorial", url: "https://www.instructables.com/Build-a-High-Precision-Silicon-Wafer-Scriber-Under/" },
        { label: "Files", url: "https://www.thingiverse.com/thing:7340437" },
        { label: "OSHWA CN000030", url: "https://certification.oshwa.org/cn000030.html" },
      ],
    },
    {
      title: "3D-printed linear stage",
      category: "Lab & research hardware",
      image: "images/projects/ib-Build-a-3D-Printed-Linear-Stage.jpg",
      description: "Precise single-axis translation stage – part of a complete open-source positioning ecosystem (OSHWA CN000031).",
      links: [
        { label: "Tutorial", url: "https://www.instructables.com/Build-a-3D-Printed-Linear-Stage/" },
        { label: "OSHWA CN000031", url: "https://certification.oshwa.org/cn000031.html" },
      ],
    },
    {
      title: "3D-printed rotational platform",
      category: "Lab & research hardware",
      image: "images/projects/ib-Build-a-3D-Printed-Rotational-Platform.jpg",
      description: "360° rotation stage from the modular positioning toolkit.",
      links: [
        { label: "Tutorial", url: "https://www.instructables.com/Build-a-3D-Printed-Rotational-Platform/" },
      ],
    },
    {
      title: "3D-printed goniometric (tilt-correction) stage",
      category: "Lab & research hardware",
      image: "images/projects/ib-Build-a-3D-Printed-Goniometric-Stage-til.jpg",
      description: "Tilt-correction stage from the modular positioning toolkit.",
      links: [
        { label: "Tutorial", url: "https://www.instructables.com/Build-a-3D-Printed-Goniometric-Stage-tilt-Correcti/" },
      ],
    },
    {
      title: "Four-probe resistance measurement set-up",
      category: "Lab & research hardware",
      image: "images/projects/ib-Making-a-4-Probes-Resistance-Measurement.jpg",
      description: "Set-up that measures sample resistance precisely while removing the influence of contacts and wiring.",
      links: [
        { label: "Tutorial", url: "https://www.instructables.com/Making-a-4-Probes-Resistance-Measurement-Setup/" },
      ],
    },
    {
      title: "Converting a 3D printer into an automatic spray coater",
      category: "Lab & research hardware",
      image: "images/projects/ib-Converting-a-3D-Printer-Into-an-Automati.jpg",
      description: "Tips and hardware to turn a 3D printer into an automated spray-coating machine for thin films.",
      links: [
        { label: "Tutorial", url: "https://www.instructables.com/Converting-a-3D-Printer-Into-an-Automatic-Spray-Co/" },
      ],
    },
    {
      title: "Modular holder system (3rd hand / lab stand)",
      category: "Lab & research hardware",
      image: "images/projects/tv-7329310.jpg",
      description: "Versatile modular lab stand designed for electrochemistry experiments, with an optional precision translation axis.",
      links: [
        { label: "Files", url: "https://www.thingiverse.com/thing:7329310" },
        { label: "Translation axis", url: "https://www.thingiverse.com/thing:7334794" },
      ],
    },
    {
      title: "Vibrating plate",
      category: "Lab & research hardware",
      image: "images/projects/tv-7319583.jpg",
      description: "Mechanical agitation plate – an alternative to an ultrasonic bath for fragile samples.",
      links: [{ label: "Files", url: "https://www.thingiverse.com/thing:7319583" }],
    },
    {
      title: "Vacuum filtration system",
      category: "Lab & research hardware",
      image: "images/projects/tv-7316395.jpg",
      description: "Adapter for standard 50 mm filters on filtering flasks.",
      links: [{ label: "Files", url: "https://www.thingiverse.com/thing:7316395" }],
    },
    {
      title: "Robust and modular helper arm",
      category: "Workshop tools",
      image: "images/projects/ib-Build-a-Robust-and-Modular-Helper-Arm.jpg",
      description: "Almost entirely 3D-printed articulated arm for phones, cameras and tools. 200+ likes on Thingiverse.",
      links: [
        { label: "Tutorial", url: "https://www.instructables.com/Build-a-Robust-and-Modular-Helper-Arm/" },
        { label: "Files", url: "https://www.thingiverse.com/thing:7403716" },
      ],
    },
    {
      title: "3D-printed on/off magnetic base",
      category: "Workshop tools",
      image: "images/projects/ib-3D-Printed-OnOff-Magnetic-Base.jpg",
      description: "Compact switchable magnetic base compatible with the whole family of printed tools.",
      links: [
        { label: "Tutorial", url: "https://www.instructables.com/3D-Printed-OnOff-Magnetic-Base/" },
        { label: "Files", url: "https://www.thingiverse.com/thing:7403631" },
      ],
    },
    {
      title: "3D-printed suction mount",
      category: "Workshop tools",
      image: "images/projects/ib-Build-a-3D-Printed-Suction-Mount.jpg",
      description: "Suction base for the phone stand, camera stand, vice and other modular tools.",
      links: [
        { label: "Tutorial", url: "https://www.instructables.com/Build-a-3D-Printed-Suction-Mount/" },
        { label: "Files", url: "https://www.thingiverse.com/thing:7403625" },
      ],
    },
    {
      title: "Modular vice with auto-clamping",
      category: "Workshop tools",
      image: "images/projects/tv-7403644.jpg",
      description: "Vice that fits the magnetic, suction-cup and tabletop bases.",
      links: [{ label: "Files", url: "https://www.thingiverse.com/thing:7403644" }],
    },
    {
      title: "Knurled knobs for M2–M8 screws",
      category: "Workshop tools",
      image: "images/projects/tv-7316340.jpg",
      description: "Tool-free adjustment knobs, plus a fully parametric knob generator. 1,000+ likes on Thingiverse.",
      links: [
        { label: "Files", url: "https://www.thingiverse.com/thing:7316340" },
        { label: "Parametric generator", url: "https://www.thingiverse.com/thing:7419046" },
      ],
    },
    {
      title: "Customizable waterproof geocache container",
      category: "Home & creative",
      image: "images/projects/tv-7432312.jpg",
      description: "O-ring sealed screw-cap container, sized automatically from a customizable OpenSCAD file.",
      links: [{ label: "Files", url: "https://www.thingiverse.com/thing:7432312" }],
    },
    {
      title: "Reusing shower water to flush the toilet",
      category: "Home & creative",
      image: "images/projects/ib-Saving-Water-How-to-Reuse-Your-Shower-Wa.jpg",
      description: "A simple greywater system that saves clean water at home.",
      links: [{ label: "Tutorial", url: "https://www.instructables.com/Saving-Water-How-to-Reuse-Your-Shower-Water-to-Flu/" }],
    },
    {
      title: "Modular enamel pin display",
      category: "Home & creative",
      image: "images/projects/ib-Modular-3D-Printed-Enamel-Pin-Collection.jpg",
      description: "Hexagonal, wall-mounted modular display for pin collections.",
      links: [{ label: "Tutorial", url: "https://www.instructables.com/Modular-3D-Printed-Enamel-Pin-Collection-Display/" }],
    },
    {
      title: "3D-printed wine corks with ancient art",
      category: "Home & creative",
      image: "images/projects/ib-3D-Printing-Wine-Cork-to-Enjoy-World-Wid.jpg",
      description: "Miniature replicas of ancient artworks from around the world, printed as bottle corks.",
      links: [{ label: "Tutorial", url: "https://www.instructables.com/3D-Printing-Wine-Cork-to-Enjoy-World-Wide-Ancient-/" }],
    },
    {
      title: "Using customizable 3D models with OpenSCAD",
      category: "Home & creative",
      image: "images/projects/ib-Learn-How-to-Use-Customizable-3D-Models-.jpg",
      description: "Beginner tutorial on adapting parametric OpenSCAD designs to your own needs.",
      links: [{ label: "Tutorial", url: "https://www.instructables.com/Learn-How-to-Use-Customizable-3D-Models-With-OpenS/" }],
    },
  ],
  thingiverseProfile: "https://www.thingiverse.com/Remi-Rafael/designs",
  instructablesProfile: "https://www.instructables.com/member/Remi_Rafael/instructables/",
};
