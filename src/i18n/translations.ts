export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      projects: "Proyectos",
      resume: "Currículum",
      contact: "Contacto",
    },
    home: {
      welcome: "Hola, soy OscarDev",
      subtitle: "Frontend Developer expandiéndose al Backend con Go",
      description:
        "Desarrollador frontend especializado en crear interfaces modernas y funcionales con tecnologías como Astro, React y TypeScript. Actualmente ampliando mis habilidades hacia el desarrollo backend con Go.",
      enterButton: "Conóceme",
      stats: {
        experience: "Años de Experiencia",
        projects: "Proyectos Públicos",
        technologies: "Tecnologías",
        stars: "Estrellas en GitHub",
        forks: "Forks en GitHub",
      },
    },
    about: {
      title: "Sobre Mí",
      description:
        "Soy Oscar, desarrollador web apasionado por construir interfaces excepcionales y, cada vez más, sistemas robustos en backend. Mi camino comenzó por curiosidad y se ha convertido en una dedicación constante al desarrollo de software.",
      skills: "Habilidades Técnicas",
      tools: "Herramientas",
      experience: "Experiencia",
      learning: "Aprendiendo Actualmente",
    },
    projects: {
      title: "Proyectos",
      subtitle: "Una selección de lo que he construido y mantengo",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      viewAll: "Ver todos los proyectos",
      technologies: "Tecnologías",
      status: {
        completed: "Completado",
        inProgress: "En Progreso",
        maintained: "Mantenido",
      },
    },
    resume: {
      title: "Currículum",
      subtitle: "Mi trayectoria profesional y habilidades técnicas",
      download: "Descargar CV",
      summary: {
        title: "Resumen Profesional",
        description:
          "Desarrollador frontend con experiencia en tecnologías modernas, enfocado en crear interfaces de usuario de calidad y experiencias web rápidas. Actualmente ampliando conocimientos hacia desarrollo backend con Go.",
      },
      experience: {
        title: "Experiencia Profesional",
      },
      education: {
        title: "Formación Académica",
      },
      skills: {
        title: "Habilidades Técnicas",
      },
      languages: {
        title: "Idiomas",
      },
      sections: {
        experience: "Experiencia Profesional",
        education: "Formación Académica",
        skills: "Competencias Técnicas",
      },
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? Hablemos.",
      form: {
        title: "Enviar Mensaje",
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Correo Electrónico",
        emailPlaceholder: "tu@email.com",
        subject: "Asunto",
        subjectPlaceholder: "¿En qué puedo ayudarte?",
        message: "Mensaje",
        messagePlaceholder: "Escribe tu mensaje aquí...",
        send: "Enviar Mensaje",
      },
      info: {
        title: "Información de Contacto",
        availability: "Disponible para proyectos freelance",
      },
      social: {
        title: "Redes Sociales",
      },
      response: {
        title: "Tiempo de Respuesta",
        description:
          "Normalmente respondo en un plazo de 24-48 horas. Para proyectos urgentes, puedes contactarme directamente por email.",
      },
      success: "Mensaje enviado correctamente",
      error: "Error al enviar el mensaje",
    },
    theme: {
      light: "Modo Claro",
      dark: "Modo Oscuro",
      toggle: "Cambiar Tema",
    },
    loading: "Cargando...",
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      resume: "Resume",
      contact: "Contact",
    },
    home: {
      welcome: "Hi, I'm OscarDev",
      subtitle: "Frontend Developer expanding into Backend with Go",
      description:
        "Frontend developer focused on building modern, functional interfaces with Astro, React and TypeScript. Currently expanding my skills towards backend development with Go.",
      enterButton: "Get to know me",
      stats: {
        experience: "Years of Experience",
        projects: "Public Projects",
        technologies: "Technologies",
        stars: "GitHub Stars",
        forks: "GitHub Forks",
      },
    },
    about: {
      title: "About Me",
      description:
        "I'm Oscar, a developer passionate about building exceptional interfaces and, increasingly, robust backend systems. What started as curiosity has become a constant dedication to software development.",
      skills: "Technical Skills",
      tools: "Tools",
      experience: "Experience",
      learning: "Currently Learning",
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of things I've built and maintain",
      viewProject: "View Project",
      viewCode: "View Code",
      viewAll: "View all projects",
      technologies: "Technologies",
      status: {
        completed: "Completed",
        inProgress: "In Progress",
        maintained: "Maintained",
      },
    },
    resume: {
      title: "Resume",
      subtitle: "My professional journey and technical skills",
      download: "Download Resume",
      summary: {
        title: "Professional Summary",
        description:
          "Frontend developer with experience in modern technologies, focused on building quality user interfaces and fast web experiences. Currently expanding knowledge towards backend development with Go.",
      },
      experience: {
        title: "Professional Experience",
      },
      education: {
        title: "Education",
      },
      skills: {
        title: "Technical Skills",
      },
      languages: {
        title: "Languages",
      },
      sections: {
        experience: "Professional Experience",
        education: "Education",
        skills: "Technical Skills",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Got a project in mind? Let's talk.",
      form: {
        title: "Send Message",
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        subject: "Subject",
        subjectPlaceholder: "How can I help you?",
        message: "Message",
        messagePlaceholder: "Write your message here...",
        send: "Send Message",
      },
      info: {
        title: "Contact Information",
        availability: "Available for freelance projects",
      },
      social: {
        title: "Social Media",
      },
      response: {
        title: "Response Time",
        description:
          "I usually respond within 24-48 hours. For urgent projects, you can contact me directly by email.",
      },
      success: "Message sent successfully",
      error: "Error sending message",
    },
    theme: {
      light: "Light Mode",
      dark: "Dark Mode",
      toggle: "Toggle Theme",
    },
    loading: "Loading...",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.es;
