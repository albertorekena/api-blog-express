USE `blog`;

INSERT INTO `authors` (`name`, `image`) VALUES
('María García López', 'https://i.pravatar.cc/150?img=1'),
('Juan Martínez Rodríguez', 'https://i.pravatar.cc/150?img=2'),
('Carmen Fernández Pérez', 'https://i.pravatar.cc/150?img=3'),
('Antonio López González', 'https://i.pravatar.cc/150?img=4'),
('Ana Sánchez Martín', 'https://i.pravatar.cc/150?img=5'),
('José Rodríguez Hernández', 'https://i.pravatar.cc/150?img=6'),
('Isabel Jiménez Díaz', 'https://i.pravatar.cc/150?img=7'),
('Francisco Ruiz Moreno', 'https://i.pravatar.cc/150?img=8'),
('Laura González Álvarez', 'https://i.pravatar.cc/150?img=9'),
('Manuel Díaz Romero', 'https://i.pravatar.cc/150?img=10'),
('Pilar Moreno Navarro', 'https://i.pravatar.cc/150?img=11'),
('Carlos Torres Jiménez', 'https://i.pravatar.cc/150?img=12'),
('Rosa Ramírez Muñoz', 'https://i.pravatar.cc/150?img=13'),
('Miguel Ángel Vázquez Cruz', 'https://i.pravatar.cc/150?img=14'),
('Teresa Gómez Ortega', 'https://i.pravatar.cc/150?img=15'),
('Rafael Serrano Castro', 'https://i.pravatar.cc/150?img=16'),
('Dolores Blanco Ramos', 'https://i.pravatar.cc/150?img=17'),
('Javier Molina Gil', 'https://i.pravatar.cc/150?img=18'),
('Cristina Delgado Medina', 'https://i.pravatar.cc/150?img=19'),
('Pablo Castillo Santos', 'https://i.pravatar.cc/150?img=20'),
('Mercedes Herrera León', 'https://i.pravatar.cc/150?img=21'),
('Pedro Iglesias Vargas', 'https://i.pravatar.cc/150?img=22'),
('Beatriz Guerrero Cabrera', 'https://i.pravatar.cc/150?img=23'),
('Alberto Rubio Núñez', 'https://i.pravatar.cc/150?img=24'),
('Montserrat Méndez Prieto', 'https://i.pravatar.cc/150?img=25'),
('Fernando Ortiz Garrido', 'https://i.pravatar.cc/150?img=26'),
('Silvia Marín Santana', 'https://i.pravatar.cc/150?img=27'),
('Enrique Peña Domínguez', 'https://i.pravatar.cc/150?img=28'),
('Lucía Vega Vidal', 'https://i.pravatar.cc/150?img=29'),
('David Santos Aguilar', 'https://i.pravatar.cc/150?img=30');

INSERT INTO `posts` (`title`, `description`, `category`, `authors_id`) VALUES
-- Posts de autor 1
('Introducción a JavaScript moderno', 'Descubre las últimas características de JavaScript ES6+ y cómo pueden mejorar tu código. Aprenderás sobre arrow functions, destructuring, y mucho más.', 'Tecnología', 1),
('Recetas saludables para el verano', 'Una selección de recetas frescas y nutritivas perfectas para los días calurosos. Incluye ensaladas, smoothies y platos ligeros.', 'Cocina', 1),
('Los mejores destinos de Europa', 'Guía completa de los lugares más fascinantes para visitar en Europa, desde las playas del Mediterráneo hasta los Alpes nevados.', 'Viajes', 1),

-- Posts de autor 2
('Cómo mejorar tu productividad', 'Técnicas probadas para optimizar tu tiempo y ser más eficiente en el trabajo. Incluye métodos como Pomodoro y GTD.', 'Desarrollo Personal', 2),
('Historia del arte renacentista', 'Un recorrido por las obras maestras del Renacimiento italiano y sus artistas más influyentes como Leonardo da Vinci y Miguel Ángel.', 'Arte', 2),
('Guía de inversión para principiantes', 'Conceptos básicos de inversión en bolsa, fondos indexados y diversificación de cartera para empezar con buen pie.', 'Finanzas', 2),

-- Posts de autor 3
('Yoga para principiantes', 'Posturas básicas de yoga que puedes practicar en casa para mejorar tu flexibilidad y reducir el estrés.', 'Salud', 3),
('Diseño web responsive', 'Aprende a crear sitios web que se adapten perfectamente a cualquier dispositivo usando CSS Grid y Flexbox.', 'Tecnología', 3),
('Literatura latinoamericana contemporánea', 'Análisis de las obras más importantes de autores como García Márquez, Vargas Llosa y Bolaño.', 'Literatura', 3),

-- Posts de autor 4
('Cuidado de plantas de interior', 'Consejos prácticos para mantener tus plantas saludables: riego, luz, sustrato y solución de problemas comunes.', 'Jardinería', 4),
('Fotografía nocturna', 'Técnicas para capturar imágenes espectaculares de noche: configuración de cámara, composición y edición.', 'Fotografía', 4),
('Recorrido por la Barcelona modernista', 'Descubre las joyas arquitectónicas de Gaudí y otros maestros del modernismo catalán.', 'Viajes', 4),

-- Posts de autor 5
('Inteligencia artificial en medicina', 'Cómo la IA está revolucionando el diagnóstico médico y el desarrollo de tratamientos personalizados.', 'Ciencia', 5),
('Cocina mediterránea tradicional', 'Recetas clásicas de la dieta mediterránea: paella, gazpacho, ensalada griega y más.', 'Cocina', 5),
('Mindfulness y meditación', 'Técnicas de meditación para reducir la ansiedad y mejorar tu bienestar mental en solo 10 minutos al día.', 'Salud', 5),

-- Posts de autor 6
('Python para análisis de datos', 'Introducción a pandas, numpy y matplotlib para analizar y visualizar datos de forma efectiva.', 'Tecnología', 6),
('Historia de la música clásica', 'Un viaje desde el Barroco hasta el Romanticismo: Bach, Mozart, Beethoven y Chopin.', 'Música', 6),
('Marketing digital efectivo', 'Estrategias de SEO, redes sociales y email marketing para hacer crecer tu negocio online.', 'Marketing', 6),

-- Posts de autor 7
('Running: entrenamiento básico', 'Plan de entrenamiento para correr tu primera carrera de 5K en 8 semanas.', 'Deporte', 7),
('Arquitectura sostenible', 'Principios del diseño arquitectónico ecológico: eficiencia energética, materiales y integración con el entorno.', 'Arquitectura', 7),
('Vinos españoles: guía completa', 'Recorrido por las denominaciones de origen españolas: Rioja, Ribera del Duero, Priorat y más.', 'Gastronomía', 7),

-- Posts de autor 8
('Desarrollo de apps móviles', 'Comparativa entre desarrollo nativo, híbrido y multiplataforma: React Native vs Flutter.', 'Tecnología', 8),
('Psicología infantil', 'Claves para entender el desarrollo emocional de los niños y fomentar una crianza positiva.', 'Educación', 8),
('Cine español contemporáneo', 'Análisis de los directores más importantes: Almodóvar, Amenábar, Bayona y la nueva generación.', 'Cine', 8),

-- Posts de autor 9
('Yoga avanzado: inversiones', 'Progresión segura hacia posturas invertidas como parada de manos y parada de cabeza.', 'Salud', 9),
('Blockchain y criptomonedas', 'Entendiendo la tecnología blockchain: Bitcoin, Ethereum y contratos inteligentes.', 'Tecnología', 9),
('Rutas de senderismo en España', 'Las mejores rutas de trekking: Camino de Santiago, Picos de Europa y Sierra de Grazalema.', 'Viajes', 9),

-- Posts de autor 10
('Cocina vegana sabrosa', 'Recetas veganas deliciosas que sorprenderán hasta a los más carnívoros: hamburguesas, lasaña y postres.', 'Cocina', 10),
('Finanzas personales', 'Cómo hacer un presupuesto efectivo, ahorrar e invertir para alcanzar tus metas financieras.', 'Finanzas', 10),
('Astronomía para aficionados', 'Guía para observar el cielo nocturno: planetas, constelaciones y eventos astronómicos.', 'Ciencia', 10),

-- Posts de autor 11
('Diseño UX/UI moderno', 'Principios de diseño de experiencia de usuario: investigación, wireframes, prototipos y testing.', 'Diseño', 11),
('Literatura española del Siglo de Oro', 'Cervantes, Lope de Vega, Calderón de la Barca y el esplendor del teatro barroco.', 'Literatura', 11),
('Entrenamiento de fuerza', 'Rutina completa de pesas para principiantes: técnica correcta y progresión segura.', 'Deporte', 11),

-- Posts de autor 12
('Machine Learning básico', 'Introducción al aprendizaje automático: regresión lineal, clasificación y redes neuronales.', 'Tecnología', 12),
('Jardines verticales urbanos', 'Cómo crear tu propio jardín vertical en espacios reducidos: plantas adecuadas y sistemas de riego.', 'Jardinería', 12),
('Psicología positiva', 'Técnicas basadas en ciencia para aumentar tu felicidad y bienestar emocional.', 'Desarrollo Personal', 12),

-- Posts de autor 13
('Fotografía de retrato', 'Iluminación, composición y dirección de modelos para crear retratos profesionales.', 'Fotografía', 13),
('Cocina asiática fusion', 'Recetas que combinan técnicas asiáticas con ingredientes locales: sushi, pad thai y dim sum.', 'Cocina', 13),
('Historia de Roma antigua', 'Desde la fundación de Roma hasta la caída del Imperio: política, cultura y legado.', 'Historia', 13),

-- Posts de autor 14
('DevOps y CI/CD', 'Implementando integración y despliegue continuos con Docker, Kubernetes y Jenkins.', 'Tecnología', 14),
('Pintura al óleo para principiantes', 'Materiales necesarios, técnicas básicas y primeros proyectos para iniciarte en el óleo.', 'Arte', 14),
('Nutrición deportiva', 'Qué comer antes, durante y después del ejercicio para maximizar el rendimiento.', 'Salud', 14),

-- Posts de autor 15
('Ciudades medievales de España', 'Recorrido por Toledo, Ávila, Segovia y otras joyas medievales españolas.', 'Viajes', 15),
('Guitarra española clásica', 'Aprende los fundamentos de la guitarra clásica: postura, técnica y primeras piezas.', 'Música', 15),
('E-commerce exitoso', 'Cómo montar una tienda online rentable: plataformas, logística y estrategias de venta.', 'Negocios', 15),

-- Posts de autor 16
('Ciberseguridad personal', 'Protege tu información online: contraseñas seguras, autenticación de dos factores y VPN.', 'Tecnología', 16),
('Cerámica artesanal', 'Técnicas de modelado, esmaltado y cocción para crear piezas únicas de cerámica.', 'Artesanía', 16),
('Setas comestibles de España', 'Guía para identificar setas: boletus, níscalos, rebozuelos y precauciones importantes.', 'Naturaleza', 16),

-- Posts de autor 17
('Inglés para viajeros', 'Frases y vocabulario esencial para desenvolverte en países de habla inglesa.', 'Idiomas', 17),
('Rutinas de estiramiento', 'Ejercicios de flexibilidad para prevenir lesiones y mejorar el rendimiento deportivo.', 'Deporte', 17),
('Cine de ciencia ficción', 'Análisis de los clásicos del género: Blade Runner, 2001, Matrix y su impacto cultural.', 'Cine', 17),

-- Posts de autor 18
('React y hooks modernos', 'Domina los hooks de React: useState, useEffect, useContext y custom hooks.', 'Tecnología', 18),
('Repostería francesa', 'Recetas clásicas de la pastelería francesa: croissants, macarons y tarta tatin.', 'Cocina', 18),
('Filosofía existencialista', 'Sartre, Camus y Heidegger: la búsqueda del sentido de la existencia humana.', 'Filosofía', 18),

-- Posts de autor 19
('Fotografía de paisaje', 'Técnicas para capturar la naturaleza: composición, filtros y la hora dorada.', 'Fotografía', 19),
('Programación funcional', 'Introducción a los conceptos de programación funcional con ejemplos en JavaScript.', 'Tecnología', 19),
('Mindset emprendedor', 'Desarrolla la mentalidad necesaria para crear y hacer crecer tu propio negocio.', 'Emprendimiento', 19),

-- Posts de autor 20
('Jardinería ecológica', 'Cultiva tus propias verduras sin químicos: compostaje, control de plagas natural.', 'Jardinería', 20),
('Jazz: historia y evolución', 'Desde Nueva Orleans hasta el jazz moderno: Louis Armstrong, Miles Davis y John Coltrane.', 'Música', 20),
('Ajedrez para principiantes', 'Reglas básicas, aperturas fundamentales y tácticas para mejorar tu juego.', 'Juegos', 20),

-- Posts de autor 21
('Pilates en casa', 'Ejercicios de pilates para fortalecer el core y mejorar la postura sin equipamiento.', 'Salud', 21),
('CSS Grid y Flexbox', 'Domina los layouts modernos de CSS para crear diseños web profesionales y responsive.', 'Tecnología', 21),
('Turismo rural en Andalucía', 'Descubre los pueblos blancos, rutas naturales y la gastronomía de la Andalucía interior.', 'Viajes', 21),

-- Posts de autor 22
('Escritura creativa', 'Técnicas para desarrollar personajes, tramas y diálogos que cautiven a tus lectores.', 'Literatura', 22),
('Economía circular', 'Principios de sostenibilidad: reducir, reutilizar, reciclar en tu vida cotidiana.', 'Medio Ambiente', 22),
('Cocina de aprovechamiento', 'Recetas para no desperdiciar alimentos y ahorrar en la compra sin sacrificar sabor.', 'Cocina', 22),

-- Posts de autor 23
('Data Science con R', 'Análisis estadístico y visualización de datos usando el lenguaje R y RStudio.', 'Tecnología', 23),
('Danza contemporánea', 'Historia y técnicas de la danza moderna: expresión corporal y coreografía.', 'Arte', 23),
('Gestión del tiempo', 'Métodos efectivos para priorizar tareas y eliminar la procrastinación.', 'Productividad', 23),

-- Posts de autor 24
('Escalada deportiva', 'Guía de iniciación a la escalada: técnica, seguridad y entrenamiento específico.', 'Deporte', 24),
('APIs REST con Node.js', 'Crea APIs robustas y escalables usando Express, MongoDB y buenas prácticas.', 'Tecnología', 24),
('Viajar solo por Asia', 'Consejos prácticos para viajar en solitario por Tailandia, Vietnam y Japón.', 'Viajes', 24),

-- Posts de autor 25
('Acuarela botánica', 'Técnicas de acuarela para pintar flores y plantas con realismo y delicadeza.', 'Arte', 25),
('Mitología griega', 'Dioses del Olimpo, héroes y criaturas míticas: historias que han inspirado la cultura occidental.', 'Cultura', 25),
('Alimentación consciente', 'Practica el mindful eating para mejorar tu relación con la comida y disfrutar más.', 'Salud', 25),

-- Posts de autor 26
('TypeScript avanzado', 'Genéricos, tipos condicionales y utility types para llevar tu TypeScript al siguiente nivel.', 'Tecnología', 26),
('Flamenco: arte y pasión', 'Historia del flamenco español: cante, baile y toque desde sus orígenes hasta hoy.', 'Música', 26),
('Inversión inmobiliaria', 'Estrategias para invertir en propiedades: compra, alquiler y crowdfunding inmobiliario.', 'Finanzas', 26),

-- Posts de autor 27
('Birdwatching en España', 'Guía de aves ibéricas: dónde y cuándo observar las especies más interesantes.', 'Naturaleza', 27),
('Scrum y metodologías ágiles', 'Implementa Scrum en tu equipo: sprints, daily standups y retrospectivas efectivas.', 'Gestión', 27),
('Cocina mexicana auténtica', 'Recetas tradicionales mexicanas: tacos, mole, ceviche y salsas picantes caseras.', 'Cocina', 27),

-- Posts de autor 28
('Fotografía macro', 'Descubre el mundo en miniatura: técnicas para fotografiar insectos, flores y detalles.', 'Fotografía', 28),
('Neurociencia y aprendizaje', 'Cómo funciona el cerebro al aprender: memoria, atención y técnicas de estudio efectivas.', 'Ciencia', 28),
('Marketing de contenidos', 'Crea contenido valioso que atraiga clientes: estrategia, SEO y distribución.', 'Marketing', 28),

-- Posts de autor 29
('Vue.js 3 Composition API', 'Aprende la nueva API de composición de Vue 3 y mejora la organización de tu código.', 'Tecnología', 29),
('Ópera italiana', 'Verdi, Puccini y Rossini: las grandes óperas que debes conocer y dónde escucharlas.', 'Música', 29),
('Minimalismo y decluttering', 'Simplifica tu vida: cómo deshacerte de lo innecesario y vivir con menos pero mejor.', 'Estilo de Vida', 29),

-- Posts de autor 30
('Natación técnica', 'Mejora tu técnica en crol, espalda, braza y mariposa con ejercicios específicos.', 'Deporte', 30),
('GraphQL vs REST', 'Comparativa de arquitecturas de APIs: ventajas, desventajas y cuándo usar cada una.', 'Tecnología', 30),
('Caminos de Santiago', 'Guía completa del Camino Francés: etapas, albergues, preparación física y consejos.', 'Viajes', 30);