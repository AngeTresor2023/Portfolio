export type Lang = "fr" | "en";

export interface Waypoint {
  period: string;
  title: string;
  place: string;
  detail: string;
  kind: "formation" | "role" | "credential" | "target";
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  facts: string[];
  href?: string;
  preview?: string;
  status: string;
}

export interface Job {
  period: string;
  title: string;
  org: string;
  place: string;
  detail: string;
  tags: string[];
}

export interface Content {
  meta: {
    title: string;
    description: string;
  };
  nav: { about: string; path: string; work: string; projects: string; contact: string };
  hero: {
    status: string;
    headline: { text: string; accent?: boolean }[];
    eyebrow: string;
    name: string;
    roles: string[];
    pitch: string;
    ctaPrimary: string;
    ctaSecondary: string;
    location: string;
    tagTop: string;
    tagBottom: string;
    statBadge: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  pathHeading: string;
  pathSub: string;
  waypoints: Waypoint[];
  experienceHeading: string;
  experienceSub: string;
  jobs: Job[];
  projectsHeading: string;
  projectsSub: string;
  projects: Project[];
  visitLabel: string;
  skillsHeading: string;
  skillGroups: { label: string; items: string[] }[];
  credentialsHeading: string;
  education: { school: string; degree: string; period: string; note: string }[];
  certifications: { name: string; issuer: string; date: string }[];
  languages: { name: string; level: string }[];
  contact: {
    heading: string;
    body: string;
    email: string;
    linkedin: string;
    github: string;
    location: string;
  };
  footer: string;
}

export const content: Record<Lang, Content> = {
  fr: {
    meta: {
      title: "Ange Trésor Djomo · Développeur & Conseiller financier agréé",
      description:
        "Portfolio d'Ange Trésor Pegue Djomo : conseiller bancaire agréé AMF, développeur full-stack (KargoJet, KÖLÖ) et ancien enseignant, en route vers un poste de Quantitative Developer.",
    },
    nav: { about: "Profil", path: "Parcours", work: "Expérience", projects: "Projets", contact: "Contact" },
    hero: {
      status: "Ouvert aux opportunités · Quant Developer",
      headline: [
        { text: "Conseiller " },
        { text: "bancaire agréé", accent: true },
        { text: " et développeur " },
        { text: "full-stack", accent: true },
        { text: "." },
      ],
      eyebrow: "Conseiller bancaire agréé AMF · Développeur full-stack",
      name: "Ange Trésor Djomo",
      roles: ["Enseignant", "Technicien informatique", "Conseiller financier", "Développeur", "→ Quant Developer"],
      pitch:
        "J'ai enseigné la technologie, dépanné des ministères, conseillé des épargnants et lancé des plateformes de paiement en production. Aujourd'hui, je vise l'endroit où tout ça se rejoint : les marchés financiers et le code, avec la rigueur qu'il faut pour les faire tenir ensemble.",
      ctaPrimary: "Voir les projets",
      ctaSecondary: "Parcours complet",
      location: "Rouyn-Noranda, Québec, Canada",
      tagTop: "Agréé AMF",
      tagBottom: "Full-stack",
      statBadge: "4 · projets menés de bout en bout",
    },
    about: {
      heading: "Profil",
      paragraphs: [
        "Je suis conseiller bancaire à la Banque Nationale du Canada et représentant en épargne collective agréé par l'Autorité des marchés financiers du Québec. J'accompagne des clients dans des décisions financières concrètes (épargne, placements, produits bancaires) avec la rigueur qu'exige un cadre réglementé.",
        "En parallèle, je conçois et je déploie des systèmes logiciels qui tournent réellement en production : KargoJet, une plateforme logistique multimodale avec paiements en séquestre, et KÖLÖ, une marketplace e-commerce entre la Chine et l'Afrique avec une sécurité poussée jusqu'aux lignes de la base de données. Ce ne sont pas des démos. Ils gèrent de l'argent et des utilisateurs réels, tous les jours.",
        "Avant la finance et le code, j'ai passé cinq ans à enseigner la technologie et deux autres à dépanner des systèmes, en présentiel et à distance, d'abord au Cameroun, puis pour le ministère de la Justice du Canada. C'est cette base qui fait que je peux traduire un problème financier en spécification technique, et l'inverse.",
        "Bilingue français-anglais. L'objectif : un poste de Quantitative Developer, où le code rencontre les marchés.",
      ],
      stats: [
        { value: "6", label: "ans d'expérience professionnelle" },
        { value: "2", label: "systèmes fintech en production" },
        { value: "3", label: "certifications professionnelles" },
        { value: "FR/EN", label: "bilingue professionnel" },
      ],
    },
    pathHeading: "Le parcours",
    pathSub:
      "Sept étapes, un seul fil conducteur : comprendre un système, humain, financier ou logiciel, assez profondément pour pouvoir le faire évoluer.",
    waypoints: [
      { period: "2017–2020", title: "Technologie du matériel informatique", place: "ENSET Ebolowa, Cameroun", detail: "Baccalauréat professionnel, mention très bien.", kind: "formation" },
      { period: "2019–2025", title: "Enseignant", place: "Cetic de Mbol II, Cameroun", detail: "5 ans à rendre la technologie compréhensible à des classes entières.", kind: "role" },
      { period: "2020–2024", title: "Support & conseil informatique", place: "Info&Tech puis en indépendant, Cameroun", detail: "Dépannage matériel et logiciel, sauvegardes, utilisateurs à distance et sur site.", kind: "role" },
      { period: "2023–2024", title: "Computer Programming (DEC)", place: "Collège La Cité, Ontario", detail: "Mention très bien, avec un accent sur les bases de données et le développement logiciel structuré.", kind: "formation" },
      { period: "2024", title: "Technicien informatique & AWS Cloud Practitioner", place: "Ministère de la Justice du Canada, Ottawa", detail: "Support technique en environnement gouvernemental, et certification AWS obtenue la même année.", kind: "credential" },
      { period: "2025", title: "Conseiller bancaire & représentant en épargne collective", place: "Banque Nationale du Canada, licence AMF", detail: "Conseil financier réglementé, en parallèle du développement de KargoJet et KÖLÖ.", kind: "role" },
      { period: "Cible", title: "Quantitative Developer", place: "Marchés financiers × ingénierie logicielle", detail: "Là où la licence AMF et le code de production se rejoignent.", kind: "target" },
    ],
    experienceHeading: "Expérience",
    experienceSub: "L'ordre chronologique complet, du terrain à la banque.",
    jobs: [
      {
        period: "Depuis fév. 2025",
        title: "Conseiller bancaire",
        org: "Banque Nationale du Canada",
        place: "Rouyn-Noranda, Québec · sur site",
        detail: "Épargne collective, vente de produits financiers, accompagnement client sur des décisions d'épargne et de placement dans un cadre réglementé.",
        tags: ["Épargne collective", "Produits financiers", "Conseil client"],
      },
      {
        period: "Jan. à juin 2024",
        title: "Technicien informatique",
        org: "Ministère de la Justice du Canada",
        place: "Ottawa, Ontario · sur site",
        detail: "Support technique en environnement fédéral : outils de support à distance, suite Microsoft 365, résolution d'incidents.",
        tags: ["TeamViewer / Remote Desktop", "Microsoft 365", "Support N2"],
      },
      {
        period: "Mars 2021 à mai 2024",
        title: "Consultant en informatique",
        org: "Cetic de Mboll II",
        place: "Cameroun · sur appel",
        detail: "Maintien et support des systèmes informatiques de l'établissement, en parallèle de l'enseignement.",
        tags: ["Maintenance système", "Support ponctuel"],
      },
      {
        period: "Sept. 2019 à janv. 2025",
        title: "Enseignant",
        org: "Cetic de Mbol II",
        place: "Cameroun · hybride",
        detail: "Cinq ans à enseigner la technologie. C'est cette compétence qui me permet aujourd'hui de vulgariser un système complexe, que ce soit pour un client ou pour quelqu'un qui lit mon code.",
        tags: ["Pédagogie", "Vulgarisation technique"],
      },
      {
        period: "Sept. 2020 à oct. 2022",
        title: "Technicien informatique niveau II",
        org: "Info&Tech",
        place: "Cameroun · sur site",
        detail: "Support utilisateurs à distance et en présentiel sur pannes matérielles et logicielles, implémentation et suivi de sauvegardes et restaurations.",
        tags: ["Support N2", "Sauvegardes & restauration"],
      },
    ],
    projectsHeading: "Projets",
    projectsSub: "Des projets que j'ai conçus et codés, du prototype au système en production, argent réel compris quand c'est le cas.",
    projects: [
      {
        name: "KargoJet",
        tagline: "Logistique multimodale Cameroun ↔ Canada, paiements en séquestre",
        description:
          "Une plateforme qui connecte expéditeurs et transporteurs terrestres, maritimes et aériens entre le Cameroun et le Canada. Devis automatiques par corridor et devise, marketplace de tronçons en temps réel où les transporteurs revendiquent une mission au premier arrivé, et paiement Stripe en séquestre, libéré par un administrateur une fois la livraison confirmée.",
        stack: ["Next.js 15", "Express 5", "PostgreSQL", "Stripe", "Socket.io", "Redis", "OSRM"],
        facts: [
          "4 corridors tarifaires, chacun calculé dans sa devise native",
          "Commission variable par mode (0 % aérien, 25 % maritime/routier), pilotée depuis la base plutôt qu'en dur",
          "Séquestre Stripe : le transporteur n'est payé qu'après livraison confirmée",
          "Diffusion automatique des tronçons aux transporteurs compatibles, revendication atomique contre les doublons",
        ],
        status: "En production",
        href: "https://kargo-jet.com",
        preview: "/previews/kargojet.jpg",
      },
      {
        name: "KÖLÖ",
        tagline: "Marketplace e-commerce Chine ↔ Afrique, sécurité au niveau des lignes",
        description:
          "Une plateforme d'import-groupage qui relie acheteurs, fournisseurs chinois et transitaires. 3 applications Flutter (acheteur, fournisseur, transitaire) et un site web Next.js sur une base Supabase commune, avec paiements échelonnés en séquestre et un moteur de tarification dupliqué à l'identique entre Dart et TypeScript.",
        stack: ["Flutter/Dart", "Next.js", "Supabase", "PostgreSQL RLS", "Edge Functions"],
        facts: [
          "Row-Level Security sur 38 tables, y compris les colonnes sensibles (rôle, KYC, statut vérifié)",
          "Authentification à deux facteurs obligatoire, vérifiée côté serveur (niveau AAL2), pas seulement côté client",
          "Escrow par jalons pour les commandes groupées, prix figés à l'achat",
          "Moteur de tarification vérifié mathématiquement identique entre le mobile (Dart) et le web (TypeScript)",
        ],
        status: "En production",
        href: "https://koloafrique.com",
        preview: "/previews/kolo.jpg",
      },
      {
        name: "Shamba",
        tagline: "Application agricole tout-en-un pour l'Afrique subsaharienne",
        description:
          "Une application pour les éleveurs, agriculteurs et pisciculteurs, pensée pour fonctionner même avec une connexion instable. Elle combine formation hors-ligne, suivi de production façon jumeau numérique et un conseiller IA contextuel, sur un monorepo mobile et web partagé.",
        stack: ["React Native (Expo)", "Next.js", "NestJS", "Prisma", "PostgreSQL", "Supabase"],
        facts: [
          "Catalogue de formation hors-ligne : vidéos, PDF et quiz consultables sans connexion",
          "Suivi de production par exploitation, façon jumeau numérique, pour l'élevage, l'agriculture et la pisciculture",
          "Conseiller IA contextuel et forum communautaire entre producteurs",
          "Abonnement Pay as You Grow avec paiement carte et mobile money multi-pays",
        ],
        status: "En développement",
      },
      {
        name: "MyPrepGenius",
        tagline: "Plateforme de révision assistée par IA",
        description:
          "Une application de préparation aux examens construite sur Next.js et Supabase, pensée pour transformer du contenu de cours en parcours de révision structuré.",
        stack: ["Next.js 15", "Supabase", "TypeScript", "Tailwind CSS"],
        facts: ["Authentification et données gérées via Supabase", "Interface pensée pour un usage répété, pas pour une démo ponctuelle"],
        status: "En développement",
      },
    ],
    visitLabel: "Visiter le site",
    skillsHeading: "Compétences",
    skillGroups: [
      {
        label: "Ingénierie logicielle",
        items: ["TypeScript / JavaScript", "Next.js & React", "Node.js / Express", "PostgreSQL & SQL", "Flutter / Dart", "Supabase", "Stripe & paiements", "Sécurité applicative (RLS, auth 2FA)"],
      },
      {
        label: "Finance & conseil",
        items: ["Épargne collective", "Vente de produits financiers", "Conseil client réglementé", "Lecture de dossiers financiers"],
      },
      {
        label: "Pédagogie & support",
        items: ["Vulgarisation technique", "Formation & enseignement", "Support N2 (matériel/logiciel)", "Documentation claire"],
      },
    ],
    credentialsHeading: "Formation & certifications",
    education: [
      { school: "Collège La Cité", degree: "DEC, Computer Programming", period: "2023–2024", note: "Mention très bien" },
      { school: "ENSET Ebolowa", degree: "Baccalauréat professionnel, technologie du matériel informatique", period: "2017–2020", note: "Mention très bien" },
    ],
    certifications: [
      { name: "Représentant en épargne collective", issuer: "Autorité des marchés financiers (Québec)", date: "Mai 2025" },
      { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "Sept. 2024, valide jusqu'en oct. 2027" },
    ],
    languages: [
      { name: "Français", level: "Langue maternelle" },
      { name: "Anglais", level: "Capacité professionnelle complète" },
    ],
    contact: {
      heading: "Parlons-en",
      body: "Ouvert aux échanges autour de postes en développement, en fintech ou en quantitative development. Toute discussion où la finance et le code se rencontrent m'intéresse.",
      email: "Écrire un courriel",
      linkedin: "Profil LinkedIn",
      github: "Voir sur GitHub",
      location: "Rouyn-Noranda, Québec, Canada",
    },
    footer: "Conçu et codé par Ange Trésor Djomo.",
  },
  en: {
    meta: {
      title: "Ange Trésor Djomo · Developer & Licensed Financial Advisor",
      description:
        "Portfolio of Ange Trésor Pegue Djomo: AMF-licensed banking advisor, full-stack developer (KargoJet, KÖLÖ) and former teacher, working toward a Quantitative Developer role.",
    },
    nav: { about: "Profile", path: "Path", work: "Experience", projects: "Projects", contact: "Contact" },
    hero: {
      status: "Open to opportunities · Quant Developer",
      headline: [
        { text: "Licensed " },
        { text: "banking advisor", accent: true },
        { text: " and " },
        { text: "full-stack developer", accent: true },
        { text: "." },
      ],
      eyebrow: "AMF-licensed banking advisor · Full-stack developer",
      name: "Ange Trésor Djomo",
      roles: ["Teacher", "IT technician", "Financial advisor", "Developer", "→ Quant Developer"],
      pitch:
        "I've taught technology, fixed systems for a federal ministry, advised savers, and shipped payment platforms to production. These days I'm aiming for the place where it all meets: financial markets and code, with the rigor it takes to hold them together.",
      ctaPrimary: "See the projects",
      ctaSecondary: "Full path",
      location: "Rouyn-Noranda, Québec, Canada",
      tagTop: "AMF licensed",
      tagBottom: "Full-stack",
      statBadge: "4 · projects taken end to end",
    },
    about: {
      heading: "Profile",
      paragraphs: [
        "I work as a banking advisor at Banque Nationale du Canada and as a mutual fund representative licensed by the Autorité des marchés financiers du Québec. I help clients make concrete financial decisions (savings, investments, banking products) under a regulated framework.",
        "In parallel, I design and ship software systems that run in real production: KargoJet, a multimodal logistics platform with escrow payments, and KÖLÖ, a China-Africa e-commerce marketplace with security enforced down to the database row. These aren't demos. They handle real money and real users, every day.",
        "Before finance and code, I spent five years teaching technology and two more fixing systems, on-site and remotely, first in Cameroon, then for Canada's federal Department of Justice. That's the base that lets me translate a financial problem into a technical spec, and back again.",
        "Bilingual French-English. The target: a Quantitative Developer role, where code meets markets.",
      ],
      stats: [
        { value: "6", label: "years of professional experience" },
        { value: "2", label: "fintech systems in production" },
        { value: "3", label: "professional certifications" },
        { value: "FR/EN", label: "professional bilingual" },
      ],
    },
    pathHeading: "The path",
    pathSub: "Seven stops, one thread: understand a system, whether human, financial, or software, deeply enough to actually change it.",
    waypoints: [
      { period: "2017–2020", title: "Computer hardware technology", place: "ENSET Ebolowa, Cameroon", detail: "Professional baccalaureate, highest honors.", kind: "formation" },
      { period: "2019–2025", title: "Teacher", place: "Cetic de Mbol II, Cameroon", detail: "5 years making technology understandable to full classrooms.", kind: "role" },
      { period: "2020–2024", title: "IT support & consulting", place: "Info&Tech, then independent, Cameroon", detail: "Hardware and software troubleshooting, backups, remote and on-site users.", kind: "role" },
      { period: "2023–2024", title: "Computer Programming (DEC)", place: "Collège La Cité, Ontario", detail: "Highest honors, with a focus on databases and structured software development.", kind: "formation" },
      { period: "2024", title: "IT technician & AWS Cloud Practitioner", place: "Department of Justice Canada, Ottawa", detail: "Technical support in a federal environment, plus an AWS certification earned the same year.", kind: "credential" },
      { period: "2025", title: "Banking advisor & mutual fund representative", place: "Banque Nationale du Canada, AMF license", detail: "Regulated financial advisory, alongside building KargoJet and KÖLÖ.", kind: "role" },
      { period: "Target", title: "Quantitative Developer", place: "Financial markets × software engineering", detail: "Where the AMF license and production code meet.", kind: "target" },
    ],
    experienceHeading: "Experience",
    experienceSub: "The full chronological record, from the field to the bank.",
    jobs: [
      {
        period: "Since Feb. 2025",
        title: "Banking Advisor",
        org: "Banque Nationale du Canada",
        place: "Rouyn-Noranda, Québec · on-site",
        detail: "Mutual funds, financial product sales, client advisory on savings and investment decisions under a regulated framework.",
        tags: ["Mutual funds", "Financial products", "Client advisory"],
      },
      {
        period: "Jan. to June 2024",
        title: "IT Technician",
        org: "Department of Justice Canada",
        place: "Ottawa, Ontario · on-site",
        detail: "Technical support in a federal environment: remote support tooling, Microsoft 365 suite, incident resolution.",
        tags: ["TeamViewer / Remote Desktop", "Microsoft 365", "Tier-2 support"],
      },
      {
        period: "Mar. 2021 to May 2024",
        title: "IT Consultant",
        org: "Cetic de Mboll II",
        place: "Cameroon · on-call",
        detail: "Maintained and supported the institution's IT systems alongside teaching.",
        tags: ["System maintenance", "On-call support"],
      },
      {
        period: "Sept. 2019 to Jan. 2025",
        title: "Teacher",
        org: "Cetic de Mbol II",
        place: "Cameroon · hybrid",
        detail: "Five years teaching technology. That's the skill behind my ability to make a complex system clear, whether for a client or for someone reading my code.",
        tags: ["Pedagogy", "Technical communication"],
      },
      {
        period: "Sept. 2020 to Oct. 2022",
        title: "IT Technician, Level II",
        org: "Info&Tech",
        place: "Cameroon · on-site",
        detail: "Remote and on-site user support for hardware and software failures, implemented and monitored backup and restore procedures.",
        tags: ["Tier-2 support", "Backup & restore"],
      },
    ],
    projectsHeading: "Projects",
    projectsSub: "Projects I designed and coded, from prototype to production system, real money included where it applies.",
    projects: [
      {
        name: "KargoJet",
        tagline: "Multimodal logistics, Cameroon ↔ Canada, escrow payments",
        description:
          "A platform connecting shippers with land, sea, and air carriers between Cameroon and Canada. Automatic quotes per corridor and currency, a real-time segment marketplace where carriers claim missions first come first served, and Stripe escrow payments released by an admin once delivery is confirmed.",
        stack: ["Next.js 15", "Express 5", "PostgreSQL", "Stripe", "Socket.io", "Redis", "OSRM"],
        facts: [
          "4 pricing corridors, each computed in its native currency",
          "Commission rate varies by mode (0% air, 25% sea/road), driven from the database rather than hardcoded",
          "Stripe escrow: carriers only get paid once delivery is confirmed",
          "Segments auto-broadcast to matching carriers, atomic claim prevents double booking",
        ],
        status: "In production",
        href: "https://kargo-jet.com",
        preview: "/previews/kargojet.jpg",
      },
      {
        name: "KÖLÖ",
        tagline: "China ↔ Africa e-commerce marketplace, row-level security",
        description:
          "A group-buying import platform connecting buyers, Chinese suppliers, and freight forwarders. 3 Flutter apps (buyer, supplier, forwarder) and a Next.js website on a shared Supabase backend, with milestone escrow payments and a pricing engine kept mathematically identical across Dart and TypeScript.",
        stack: ["Flutter/Dart", "Next.js", "Supabase", "PostgreSQL RLS", "Edge Functions"],
        facts: [
          "Row-Level Security across 38 tables, including trust columns (role, KYC, verified status)",
          "Mandatory two-factor authentication enforced server-side (AAL2), not just on the client",
          "Milestone escrow for group orders, prices locked at purchase",
          "Pricing engine verified mathematically identical between mobile (Dart) and web (TypeScript)",
        ],
        status: "In production",
        href: "https://koloafrique.com",
        preview: "/previews/kolo.jpg",
      },
      {
        name: "Shamba",
        tagline: "All-in-one farming app for sub-Saharan Africa",
        description:
          "An app for livestock farmers, growers, and fish farmers, built to work even on an unstable connection. It combines offline training, farm production tracking as a kind of digital twin, and a contextual AI advisor, on a shared mobile and web monorepo.",
        stack: ["React Native (Expo)", "Next.js", "NestJS", "Prisma", "PostgreSQL", "Supabase"],
        facts: [
          "Offline training catalog: videos, PDFs, and quizzes available without a connection",
          "Per-farm production tracking, like a digital twin, for livestock, crops, and fish farming",
          "Contextual AI advisor and a community forum between producers",
          "Pay as You Grow subscription with card and multi-country mobile money",
        ],
        status: "In development",
      },
      {
        name: "MyPrepGenius",
        tagline: "AI-assisted exam revision platform",
        description:
          "An exam-prep app built on Next.js and Supabase, designed to turn course content into a structured revision path.",
        stack: ["Next.js 15", "Supabase", "TypeScript", "Tailwind CSS"],
        facts: ["Auth and data handled through Supabase", "Built for repeat use, not a one-off demo"],
        status: "In development",
      },
    ],
    visitLabel: "Visit the site",
    skillsHeading: "Skills",
    skillGroups: [
      {
        label: "Software engineering",
        items: ["TypeScript / JavaScript", "Next.js & React", "Node.js / Express", "PostgreSQL & SQL", "Flutter / Dart", "Supabase", "Stripe & payments", "Application security (RLS, 2FA)"],
      },
      {
        label: "Finance & advisory",
        items: ["Mutual funds", "Financial product sales", "Regulated client advisory", "Financial statement literacy"],
      },
      {
        label: "Teaching & support",
        items: ["Technical communication", "Training & instruction", "Tier-2 support (hardware/software)", "Clear documentation"],
      },
    ],
    credentialsHeading: "Education & certifications",
    education: [
      { school: "Collège La Cité", degree: "DEC, Computer Programming", period: "2023–2024", note: "Highest honors" },
      { school: "ENSET Ebolowa", degree: "Professional baccalaureate, computer hardware technology", period: "2017–2020", note: "Highest honors" },
    ],
    certifications: [
      { name: "Mutual Fund Representative", issuer: "Autorité des marchés financiers (Québec)", date: "May 2025" },
      { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "Sept. 2024, valid through Oct. 2027" },
    ],
    languages: [
      { name: "French", level: "Native" },
      { name: "English", level: "Full professional proficiency" },
    ],
    contact: {
      heading: "Let's talk",
      body: "Open to conversations about developer, fintech, or quantitative development roles. Really, any conversation where finance and code meet works for me.",
      email: "Send an email",
      linkedin: "LinkedIn profile",
      github: "View on GitHub",
      location: "Rouyn-Noranda, Québec, Canada",
    },
    footer: "Designed and built by Ange Trésor Djomo.",
  },
};

export const SITE = {
  name: "Ange Trésor Djomo",
  email: "angedjomo2@gmail.com",
  linkedin: "https://www.linkedin.com/in/ange-djomo-salazar",
  github: "https://github.com/AngeTresor2023",
  url: "https://angedjomo.com",
};
