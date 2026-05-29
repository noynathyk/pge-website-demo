export type Language = 'en' | 'lo';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      programs: 'Programs',
      team: 'Team',
      parents: 'Parents',
      students: 'Students',
      contact: 'Contact',
    },
    hero: {
      title: "Pingu\'s English Laos",
      subtitle: "Premium UK Curriculum",
      content: "Pingu\'s English is a global education brand from the UK based Linguaphone Group. Our award winning program nurtures kids' development through first class courses designed alongside Kingston University London for children aged 3 to 10.",
      cta: 'Book a Free Trial Class',
      learnMore: 'Learn More'
    },
    benefits: [
      { icon: '🌍', title: 'Experienced Global Leader in Education', desc: 'A century of language teaching excellence from Linguaphone Group, combined with the playful world of Pingu\'s English.' },
      { icon: '🎨', title: 'Creative Skills', desc: 'Children grow confidence, imagination, and expression through art, storytelling, music, dance, and crafts.' },
      { icon: '📚', title: 'Educational Introduction', desc: 'Pingu\'s English goes beyond language to teach real life skills. Your child will explore Maths, Literacy, and STEM in a way that builds a strong foundation and the confidence to succeed in the future.' },
      { icon: '💡', title: 'Interactive', desc: 'Children learn through words, videos, and pictures using our innovative digital resources. Along with English, they develop problem solving, emotional, and social skills. All of these are equally important for their growth.' },
      { icon: '✅', title: 'Proven Methodology', desc: 'Our teaching is built on globally recognized methods like the EYFS. This proven approach ensures your child develops the right skills at the right time, meeting the highest international standards.' },
      { icon: '🐧', title: 'Iconic TV Show', desc: 'An award winning global superstar loved by over 1 billion fans and broadcast in 160+ countries, Pingu brings his world class charm to Laos to make English learning an unforgettable adventure for your child.' }
    ],
    about: {
      title: 'Our History & School',
      historyTitle: 'History of Linguaphone',
      historyText: 'Linguaphone was founded in 1901 and is one of the most established international language education providers in the world. Over the years, millions of people in more than 60 countries have improved their careers and enhanced their lives by learning a new language with The Linguaphone Group. Linguaphone uses a global network of trusted licensed partners and distributors to make sure its courses are available to both adults and children around the world. This includes licensed language schools such as Direct English and Pingu\'s English. As one of the first to combine written course materials with audio resources, Linguaphone quickly became a leader in international language teaching. Today, Linguaphone\'s well-known language programs include Linguaphone, Pingu\'s English, and Direct English, which now also incorporate modern teaching methods and digital learning tools.',
      schoolTitle: "Pingu\'s English School",
      schoolText: "Pingu is an award winning, globally loved TV show cherished by both children and parents for its universal appeal, entertaining storylines, and positive moral lessons. Building on this beloved character, Pingu\'s English was developed after HIT Entertainment (now part of the global toy giant Mattel) granted exclusive English teaching rights to the Linguaphone Group in February 2006. This partnership created a premier international English language course designed specifically for young learners. Combining over a century of language training expertise from the UK based Linguaphone Group with high quality resources, our program provides a solid foundation, helping children master all four key language skills, including listening, speaking, reading, and writing from an early age.",
      directorTitle: 'A Message From the Director',
      directorName: 'Director May',
      directorMessage: "A leader who speaks English effectively and can communicate with people around the world is a valuable leader. English is spoken in more than 90 countries around the world, and more than 1 billion people use English as their first and second language. Pingu\'s English School aims to develop Lao children into children who can speak English fluently, use a variety of vocabulary and motivate listeners. We want to lay the foundation for Lao children to become good leaders in the future. When it comes to developing children into high-quality adults in the future, we need to develop and nurture children from an early age. Especially language learning, as children\'s brains develop and grow from 0 to 8 years old. The younger the child the better. They will learn faster and more effectively. I strongly believe that the Pingu\'s English Laos, designed by a group of linguists with 110 years of experience teaching English, will inspire Lao children to have fun, and enjoy learning English effectively and comprehensively.",
    },
    programs: {
      title: 'Our Programs',
      subtitle: 'Choose the perfect path for your child\'s educational journey.',
      totsTab: 'Tots Program',
      totsAge: 'For students ages 1 to 3',
      eltTab: 'ELT Program',
      eltAge: 'For students ages 3 and up',
      tots: {
        title: 'Tots Program',
        description: 'We believe the first steps into education should be filled with warmth and security. The Tots Program is a unique "bridge" designed for our youngest learners (ages 1 to 3). By allowing parents to join the classroom initially, we create a safe emotional foundation. Our goal is to transform "separation anxiety" into "classroom curiosity," building the confidence a child needs to eventually stand on their own two feet.',
        features: [
          {
            text: 'The program begins with Parent and Child participation. This phased approach allows for a supportive start, gradually moving toward independent student attendance as confidence builds.',
            img: './pingu-images/Tots1.webp'
          },
          {
            text: 'Preparation for Full Time School or Level 1 ELT through structured, age appropriate development.',
            img: './pingu-images/Tots2.webp'
          },
          {
            text: 'Through sensory play and social interaction, children naturally develop their first English phonetic foundations. This immersive, hands on environment makes discovering new sounds an intuitive and joyful experience.',
            img: './pingu-images/Tots3.webp'
          },
          {
            text: 'A premium, low ratio environment with a maximum of 2 students per class to ensure total individual attention for every child.',
            img: './pingu-images/Tots4.webp'
          }
        ]
      },
      eltTitle: 'Four Levels of Excellence',
      eltSubtitle: 'Each level builds on the last, taking children from their first English words to confident communication at their own pace.',
      levels: [
        { name: 'Beginners', badge: 'Level 1', stat: '12 Units', img: './pingu-images/pingu-lvl-1.webp' },
        { name: 'Elementary', badge: 'Level 2', stat: '12 Units', img: './pingu-images/pingu-lvl-2.webp' },
        { name: 'Pre-Intermediate', badge: 'Level 3', stat: '12 Units', img: './pingu-images/pingu-lvl-3.webp' },
        { name: 'Intermediate', badge: 'Level 4', stat: '12 Units', img: './pingu-images/pingu-lvl-4.webp' }
      ],
      activitiesTitle: 'Our Activities',
      activities: [
        { num: '01', title: 'Conversation', desc: 'At Pingu\'s English Laos, our teachers are more than just educators, they are experts in early childhood development who truly care about your child\'s growth. Every member of our team is highly qualified and dedicated to providing a supportive, encouraging, and joyful environment. Our teachers are constantly creating innovative games and activities, ensuring that every lesson is a fun filled adventure that keeps your child excited to learn!', img: './pingu-images/Pingu-img-3-Conversation.webp' },
        { num: '02', title: 'Story Time', desc: 'Storytime is a classroom favorite! Our beautifully and interestingly illustrated story books bring Pingu\'s adventures to life, sparking a true love for reading. We believe in a well rounded approach, ensuring students flourish in every area while building essential reading skills for a lifetime.', img: './pingu-images/Pingu-img-4-StoryTime.webp' },
        { num: '03', title: 'Writing', desc: 'Writing is a key part of every lesson at Pingu\'s English. We guide our students through every step, from the first time a Level 1 student holds a pencil to the complex sentences written by our Level 4 learners. By learning to write well early on, our students gain an important tool for their future success in school.', img: './pingu-images/Pingu-img-5-Writing.webp' },
        { num: '04', title: 'Computer Time', desc: 'We introduce our students to technology and help them develop essential IT skills through engaging educational activities. In today\'s digital world, being digitally confident is vital, and we ensure our students are well prepared for a future that is increasingly online.', img: './pingu-images/Pingu-img-6-ComputerTime.webp' },
        { num: '05', title: 'Song Time', desc: 'We love Song Time! At the end of almost every class, students sing and dance to a fun Pingu song. We provide songbooks to guide them with the lyrics, but our main goal is for your child to have FUN! By making English exciting rather than scary, we keep children lively and curious to learn more.', img: './pingu-images/Pingu-img-7-SongTime.webp' },
        { num: '06', title: 'Activity Time', desc: 'Activity time looks different in every class. Students enjoy the wide variety of activities and games found in the Pingu\'s English activity book, as well as those created by our teachers. This dedicated time allows students to focus on multiple skills, including reading, writing, speaking, and problem solving.', img: './pingu-images/Pingu-img-8-ActivityTime.webp' },
        { num: '07', title: 'Social Time', desc: 'A huge part of the Pingu\'s English experience is social time! From the very second students walk through the door, they are diving into a world of interaction. Students will be conversing with their teachers and peers from all different backgrounds, making every moment a chance to learn and play. It\'s the perfect time for them to make new friends and find their confidence while chatting in English together!', img: './pingu-images/Pingu-img-9-SocialTime.webp' }
      ]
    },
    team: {
      title: 'Meet Our Educators',
      subtitle: "The teaching team at Pingu\'s English Laos is highly qualified and exceptionally talented. Our educators provide constant support, encouragement, and most of all, FUN!",
      members: [
        { name: 'Teacher May', role: 'Managing Director', bio: "I never believed the people around me when they said I was meant to be a teacher. I had always dreamed of becoming a doctor or something else. But destiny had other plans, it gently guided me toward teaching, and that\'s when I realized it was in my DNA all along. There\'s something even more precious than doing what we love, it is to love what we do and to be loved for doing it.", img: './pingu-images/Pingu-teacher-May-1.webp' },
        { name: 'Teacher Pin', role: 'Customer Service Manager', bio: "A teacher\'s joy doesn\'t lie in praise, but in seeing students grow with knowledge, skills, confidence, and true happiness in their own path. \"Happy School, Happy Teachers, Happy Students, Happy Parents.\"", img: './pingu-images/Pingu-teacher-Pin-2.webp' },
        { name: 'Teacher Jamie', role: 'Teacher', bio: "It is because I love children. It is because I want to make an impact. It is because I want to try and make a difference. It is because I want to educate and instill knowledge. Most importantly, it is because I CARE, and that is why I am a teacher. \"I will teach you in a room. I will teach you now on Zoom. I will teach you in your house. I will teach you with a mouse. I will teach you here and there. I will teach you because I care. So just do your very best. And do not worry about the rest.\"", img: './pingu-images/Pingu-teacher-Jamie-3.webp' },
        { name: 'Teacher Monette', role: 'Teacher', bio: "I\'ve always found joy in teaching, not just in sharing knowledge, but in building confidence and sparking inspiration in every student I meet. Seeing their eyes light up with belief in themselves, that\'s when I know I\'m exactly where I\'m meant to be.", img: './pingu-images/Pingu-teacher-Montete-4.webp' },
        { name: 'Teacher Natalia', role: 'Teacher', bio: "To me, being a teacher means sparking curiosity and helping each child find their own path. I believe that through support, play, and a kind atmosphere, children grow in confidence and a love for learning.", img: './pingu-images/Pingu-teacher-Natalia-5.webp' },
        { name: 'Teacher Nery', role: 'Teacher', bio: "To be a teacher is not merely to share knowledge, but to sow the seeds of humility and empathy, nurturing hearts to grow into kinder souls for the days to come.", img: './pingu-images/Pingu-teacher-Nery-6.webp' },
        { name: 'Teacher Nok', role: 'Teacher Assistant', bio: "I became a teacher to help others pursue their dreams and shape their future, and along the way, I have found a joy I never expected and have come to see that my own dreams are coming true as well.", img: './pingu-images/Pingu-teacher-Nok-7.webp' },
        { name: 'Teacher Alice', role: 'Teacher Assistant', bio: "Teaching is more than sharing knowledge; it\'s walking alongside children as they grow, guiding them not only through lessons in books but through the real lessons of life, with care, patience, and heart.", img: './pingu-images/Pingu-teacher-Alice-8.webp' },
        { name: 'Teacher Meenar', role: 'Teacher Assistant', bio: "Teaching with heart, inspired by the love I have for children and teaching, brings me joy through the smiles of my students. Teaching children also helps me grow and improve my language skills.", img: './pingu-images/Pingu-teacher-Meenar-9.webp' }
      ]
    },
    parents: {
      title: 'Pingu Parents',
      tipsTitle: 'Tips for Parents',
      tips: [
        { title: 'Tip 1: Head Start', desc: "Give your little one a head start in life with Pingu\'s English, an innovative International Kindergarten and English Language Teaching program for kids aged 3 to 9+.", img: './pingu-images/pingu-parent-1.webp' },
        { title: 'Tip 2: Open Doors', desc: "Enable your child to communicate effortlessly in a language spoken by over 1.5 billion people in 94 countries. Open their eyes to a whole new world of education, culture and business potential.", img: './pingu-images/pingu-parent-2.webp' },
        { title: 'Tip 3: Practice at Home', desc: "Help your child improve their English skills by practising with them at home by encouraging homework, reading an English story, or watching a Pingu episode together.", img: './pingu-images/pingu-parent-3.webp' }
      ],
      testimonial: "Pingu\'s English School has been a wonderful experience for my child. The teachers are incredibly supportive, and the play based learning approach makes every lesson exciting. My son\'s confidence in speaking English has grown tremendously in just a few months!",
      testimonials: [
        { stars: 5, quote: "As one of Pingu\'s educators, I am highly impressed with the lesson plans, materials and environment. The children love the lessons and I\'m pleased to say we have seen major improvement in confidence and spoken English.", author: "Parent Review" },
        { stars: 5, quote: "Pingu is a wonderful English school. My son really loves Pingu, he always tells me that he wants to study at Pingu everyday, he is excited to see Pingu every Wednesday.", author: "Parent Review" }
      ]
    },
    students: {
      title: 'Our Students',
      subtitle: 'Celebrating the achievements and joyful milestones of our young learners.',
      gallery: [
        { title: 'Creative Arts', desc: 'Developing fine motor skills through fun crafts.', img: './pingu-images/Pingu-img-4-StoryTime.webp' },
        { title: 'Interactive Learning', desc: 'Exploring technology with educational games.', img: './pingu-images/Pingu-img-6-ComputerTime.webp' },
        { title: 'Group Play', desc: 'Building social skills and making new friends.', img: './pingu-images/Pingu-img-9-SocialTime.webp' },
        { title: 'Story Time', desc: 'Imaginations running wild through storytelling.', img: './pingu-images/Pingu-img-2-Classroom.webp' },
        { title: 'Graduation', desc: 'Celebrating milestones and level completions.', img: './pingu-images/Students.webp' },
        { title: 'Outdoor Fun', desc: 'Physical activities for healthy development.', img: './pingu-images/pingu-img-8.webp' }
      ]
    },
    contact: {
      title: 'Contact Us',
      mapTitle: 'Visit Our School',
      address: 'K & C Building Unit 12, Prime Minister Office Road, Sisavath Village, Chanthabouly District, P.O Box: 10344, Vientiane Laos PDR',
      phone: '020 28 939 359',
      email: 'may@pingusenglishlaos.edu.la',
      direction: 'Get Directions'
    },
    introSections: [
      { 
        title: 'Classroom', 
        desc: "Welcome to the fun side of learning! At Pingu\'s English Laos, we\'ve built a bright, cozy world where your child can flourish. Alongside Pingu, their friendly Antarctic companion, students discover the joy of English through award winning stories and hands on activities. It\'s a place where curiosity is celebrated and every child is empowered to turn their new skills into real world confidence, using English naturally in their daily lives.", 
        img: './pingu-images/Pingu-img-2-Classroom.webp', 
        link: '#programs',
        cta: 'Learn More'
      },
      { 
        title: 'Teachers', 
        desc: 'The teaching team at Pingu\'s English Laos is highly qualified and exceptionally talented. Our educators do not just teach; they provide constant support, encouragement, and most of all FUN! They always create innovative games and activities to ensure the classroom is an exciting and joyful place for every student.', 
        img: './pingu-images/Teachers.webp', 
        link: '#team',
        cta: 'Meet the Team'
      },
      { 
        title: 'Students', 
        desc: "Our students are the reason we teach. Every day, we dedicate ourselves to their growth because they are our greatest pride and our world\'s future. Beyond the classroom, we are here to nurture their hearts, shape their character, and guide them toward a bright, successful tomorrow.", 
        img: './pingu-images/Students.webp', 
        link: '#students',
        cta: 'Our Students'
      },
      { 
        title: 'Parents', 
        desc: "We have a wonderful community of parents at Pingu\'s English Laos. Parents who support and encourage their children to study and work hard. We wouldn\'t have a school without the wonderful parents who trust us with their child\'s education. Thank you for choosing Pingu\'s English School!", 
        img: './pingu-images/pingu-img-8.webp', 
        link: '#parents',
        cta: 'Parents Corner'
      }
    ],
    footer: {
      tagline: 'Learning is Fun',
      rights: '© 2026 Pingu\'s English Laos | All Rights Reserved',
      dev: 'Website by: Kaona Tech',
      tiktok: 'https://www.tiktok.com/@pingulaos'
    }
  },
  lo: {
    nav: {
      home: 'ໜ້າຫຼັກ',
      about: 'ກ່ຽວກັບພິນກຸ',
      programs: 'ຫຼັກສູດ',
      team: 'ທີມງານ',
      parents: 'ພໍ່ແມ່ນັກຮຽນ',
      students: 'ນັກຮຽນ',
      contact: 'ຕິດຕໍ່ພວກເຮົາ',
    },
    hero: {
      title: "Pingu\'s English Laos",
      subtitle: "ຫຼັກສູດມາດຕະຖານສາກົນຈາກປະເທດອັງກິດ",
      content: "ຫຼັກສູດພາສາອັງກິດພິນກຸແມ່ນຫຼັກສູດສາກົນຈາກປະເທດອັງກິດໂດຍກົງ, ສ້າງຂຶ້ນເພື່ອພັດທະນາພາສາອັງກິດໃຫ້ແກ່ເດັກຊ່ວງອາຍຸ 3 ຫາ 10 ປີ.",
      cta: 'ລົງທະບຽນຮຽນທົດລອງຟຣີ',
      learnMore: 'ຂໍ້ມູນເພີ່ມເຕີມ'
    },
    benefits: [
      { icon: '🌍', title: 'ປະສົບການລະດັບສາກົນ', desc: 'ດ້ວຍປະສົບການ ແລະ ຄວາມເປັນມືອາຊີບໃນການສອນພາສາຫຼາຍກວ່າໜຶ່ງສະຕະວັດຂອງ Linguaphone Group ແລະ ໂລກແຫ່ງການຮຽນຮູ້ທີ່ມ່ວນຊື່ນຂອງ Pingu\'s English.' },
      { icon: '🎨', title: 'ທັກສະການສ້າງສັນ', desc: 'ເດັກນ້ອຍຈະມີຄວາມໝັ້ນໃຈ, ມີຈິນຕະນາການ ແລະ ຮູ້ຈັກການສະແດງອອກ ຜ່ານການຮຽນຮູ້ສິລະປະ, ການເລົ່າເລື່ອງ, ສຽງເພງ, ການເຕັ້ນ ແລະ ວຽກປະດິດສ້າງຕ່າງໆ.' },
      { icon: '📚', title: 'ພື້ນຖານການສຶກສາ', desc: 'Pingu\'s English ໃຫ້ຫຼາຍກວ່າພຽງແຕ່ພາສາ, ແຕ່ພວກເຮົາສ້າງທັກສະຊີວິດທີ່ຈຳເປັນ. ລູກຂອງທ່ານຈະໄດ້ຮຽນຮູ້ທັງ ຄະນິດສາດ, ການອ່ານ-ຂຽນ ແລະ STEM ເພື່ອວາງຮາກຖານທີ່ເຂັ້ມແຂງ ແລະ ສ້າງຄວາມໝັ້ນໃຈໃຫ້ພວກເຂົາກ້າວໄປສູ່ອະນາຄົດ.' },
      { icon: '💡', title: 'ການຮຽນຮູ້ແບບໂຕ້ຕອບ', desc: 'ເດັກນ້ອຍຈະໄດ້ຮຽນຮູ້ຜ່ານຄຳສັບ, ວິດີໂອ ແລະ ຮູບພາບ ໂດຍນຳໃຊ້ສື່ການຮຽນການສອນແບບດິຈິຕອນທີ່ທັນສະໄໝ. ນອກຈາກທັກສະທາງດ້ານພາສາອັງກິດແລ້ວ, ພວກເຂົາຍັງຈະໄດ້ພັດທະນາທັກສະການແກ້ໄຂບັນຫາ, ທັກສະທາງດ້ານອາລົມ ແລະ ທັກສະດ້ານການເຂົ້າສັງຄົມ ເຊິ່ງລ້ວນແຕ່ມີຄວາມສຳຄັນເທົ່າທຽມກັນຕໍ່ການພັດທະນາການຮອບດ້ານຂອງພວກເຂົາ.' },
      { icon: '✅', title: 'ຫຼັກສູດທີ່ໄດ້ຮັບການຮັບຮອງ', desc: 'ວິທີການສອນຂອງພວກເຮົາໄດ້ຮັບການຍອມຮັບໃນລະດັບສາກົນ ໂດຍອີງຕາມຫຼັກສູດ EYFS ເຊິ່ງເປັນລະບົບການສອນທີ່ຜ່ານການພິສູດແລ້ວວ່າ ສາມາດຊ່ວຍໃຫ້ເດັກນ້ອຍພັດທະນາທັກສະຕ່າງໆໄດ້ຢ່າງຖືກຕ້ອງ ແລະ ເໝາະສົມຕາມໄວ.' },
      { icon: '🐧', title: 'ຕົວລະຄອນທີ່ໜ້າຮັກ', desc: 'Pingu ເປັນຕົວລະຄອນທີ່ມີຊື່ສຽງໂດ່ງດັງລະດັບໂລກ ທີ່ມີຄົນຮັກຫຼາຍກວ່າ 1 ຕື້ຄົນ ແລະ ເຄີຍອອກອາກາດໃນ 160 ກວ່າປະເທດ. ຕອນນີ້ Pingu ມາຢູ່ທີ່ປະເທດລາວແລ້ວ ເພື່ອເຮັດໃຫ້ການຮຽນພາສາອັງກິດຂອງນ້ອງໆກາຍເປັນການຜະຈົນໄພທີ່ມ່ວນຊື່ນ ແລະ ໜ້າປະທັບໃຈ.' }
    ],
    about: {
      title: 'ປະຫວັດ ແລະ ໂຮງຮຽນ',
      historyTitle: 'ປະຫວັດຄວາມເປັນມາຂອງລິງກົວໂຟນ',
      historyText: 'ບໍລິສັດ Linguaphone ໄດ້ຖືກສ້າງຕັ້ງຂຶ້ນໃນປີ 1901 ແລະ ເປັນໜຶ່ງໃນຜູ້ໃຫ້ບໍລິການດ້ານການສອນພາສາທີ່ມີຊື່ສຽງໂດ່ງດັງໃນທົ່ວໂລກ. ຕະຫຼອດໄລຍະເວລາຫຼາຍປີ Linguaphone ໄດ້ຊ່ວຍໃຫ້ຜູ້ຄົນຫຼາຍລ້ານຄົນທົ່ວໂລກໄດ້ມີໂອກາດກ້າວໜ້າໃນດ້ານອາຊີບ ແລະ ມີຊີວິດທີ່ດີກວ່າເກົ່າດ້ວຍການຮຽນຮູ້ພາສາໃໝ່ໆ. Linguaphone ໃຫ້ບໍລິການຫຼັກສູດພາສາສຳລັບ ຜູ້ໃຫຍ່ ແລະ ເດັກນ້ອຍ ໂດຍຜ່ານຕົວແທນສະຖາບັນດ້ານການສຶກສາທີ່ໜ້າເຊື່ອຖືຢູ່ໃນທົ່ວໂລກ ເຊິ່ງລວມມີໂຮງຮຽນສອນພາສາທີ່ໄດ້ມາດຕະຖານເຊິ່ງກໍຄື Direct English ແລະ Pingu\'s English. Linguaphone ກ້າວຂຶ້ນເປັນຜູ້ນຳລະດັບສາກົນໃນດ້ານການສອນພາສາຢ່າງວ່ອງໄວ ຍ້ອນເປັນຜູ້ບຸກເບີກທີ່ນຳໃຊ້ຕຳລາຮຽນຄວບຄູ່ໄປກັບສື່ການຮຽນແບບມີສຽງ ເຊິ່ງຖືເປັນວິທີການຮຽນທີ່ທັນສະໄໝ ແລະ ມີປະສິດທິພາບ. ໃນປັດຈຸບັນນີ້, ຫຼັກສູດພາສາທີ່ມີຊື່ສຽງຂອງ Linguaphoneແມ່ນລວມມີ Linguaphone, Pingu\'s English, ແລະ Direct English ເຊິ່ງໃນປັດຈຸບັນນິກໍຍັງໄດ້ມີການນຳໃຊ້ວິທີການສອນແບບທັນສະໄໝ ແລະ ເຄື່ອງມືການຮຽນຮູ້ແບບດິຈິຕອນເຂົ້າຊ່ວຍນຳອີກ.',
      schoolTitle: "ຫຼັກສູດພາສາອັງກິດພິນກຸ",
      schoolText: "Pingu ເປັນກາຕູນທີ່ໂດ່ງດັງໄປທົ່ວໂລກ ແລະ ເປັນເຈົ້າຂອງລາງວັນອັນຊົງກຽດ ທີ່ຄອງໃຈທັງເດັກນ້ອຍ ແລະ ຜູ້ປົກຄອງມາຢ່າງຍາວນານ ດ້ວຍເນື້ອຫາທີ່ໜ້າຮັກ, ເຂົ້າໃຈງ່າຍ ແລະ ແຝງຂໍ້ຄິດດີໆ ໃນການດຳລົງຊີວິດຕ່າງໆ. ເພື່ອຕໍ່ຍອດຄວາມຮັກ ແລະ ຄວາມຜູກພັນທີ່ມີຕໍ່ຕົວລະຄອນອັນເປັນທີ່ຮັກນີ້, ສະຖາບັນ Linguaphone Group ຈຶ່ງໄດ້ຮັບຄວາມໄວ້ວາງໃຈຈາກ HIT Entertainment (ເຊິ່ງປັດຈຸບັນເປັນສ່ວນໜຶ່ງຂອງ Mattel) ໃນເດືອນກຸມພາ ປີ 2006 ເພື່ອຮ່ວມກັນຄິດຄົ້ນ ແລະ ພັດທະນາຫຼັກສູດພາສາອັງກິດສາກົນສຳລັບເດັກນ້ອຍ ໂດຍໃຊ້ຊື່ວ່າ 'Pingu\'s English'. ດ້ວຍປະສົບການອັນຍາວນານ ແລະ ຄວາມເປັນຜູ້ນຳດ້ານການສອນພາສາມາຫຼາຍກວ່າໜຶ່ງສະຕະວັດຂອງ Linguaphone Group, ຫຼັກສູດຂອງພວກເຮົາຈຶ່ງຖືກອອກແບບມາເປັນພິເສດເພື່ອເປັນການປູພື້ນຖານ ແລະ ຊ່ວຍໃຫ້ເດັກນ້ອຍໄດ້ພັດທະນາທັກສະພາສາອັງກິດຢ່າງຮອບດ້ານ ທັງການຟັງ, ການເວົ້າ, ການອ່ານ ແລະ ການຂຽນ ຕັ້ງແຕ່ກ້າວທຳອິດຂອງການຮຽນຮູ້ຢ່າງມີປະສິດທິພາບ.",
      directorTitle: 'ຄໍາທັກທາຍຈາກຜູ້ອໍານວຍການ',
      directorName: 'ຜູ້ອໍານວຍການ ເມ (May)',
      directorMessage: "ຜູ້ນໍາທີ່ໃຊ້ພາສາອັງກິດໄດ້ຢ່າງມີປະສິດທິພາບ ແລະ ສາມາດສື່ສານກັບຄົນທົ່ວໂລກໄດ້ເປັນຜູ້ນໍາທີ່ຊົງຄຸນຄ່າຢ່າງສະຫງ່າງາມ. ພາສາອັງກິດຖືກໃຊ້ຫຼາຍກ່ວາ 90 ປະເທດທົ່ວໂລກ ແລະ ມີຫຼາຍກ່ວາ 1,000 ລ້ານຄົນທີ່ໃຊ້ພາສາອັງກິດເປັນພາສາແມ່ ແລະ ພາສາທີສອງ. ການສຶກສາພິງກຸມີຈຸດປະສົງໃນການພັດທະນາເດັກນ້ອຍລາວໃຫ້ກາຍເປັນເດັກທີ່ສາມາດເວົ້າພາສາອັງກິດໄດ້ເກັ່ງ, ເວົ້າພາສາອັງກິດໄດ້ຢ່າງລ່ຽນໄຫຼດີ, ສາມາດນໍາໃຊ້ຄໍາສັບຫຼາກຫຼາຍຢ່າງອຸດົມສົມບູນ ແລະ ເວົ້າຢ່າງມີພະລັງສາມາດຈູງໃຈຜູ້ຄົນທີ່ເຂົ້າມາຟັງໄດ້ເພື່ອປູພື້ນຖານສ້າງເດັກນ້ອຍລາວໃຫ້ກາຍເປັນຜູ້ນໍາທີ່ດີໃນອະນາຄົດ. ເມື່ອເວົ້າເຖິງການພັດທະນາເດັກໃຫ້ກາຍເປັນຜູ້ໃຫຍ່ທີ່ມີຄຸນະພາບສູງໃນອະນາຄົດນັ້ນ, ພວກເຮົາຕ້ອງໄດ້ພັດທະນາ ແລະ ສ້າງເດັກຕັ້ງແຕ່ຕອນຍັງນ້ອຍໆໂດຍສະເພາະແມ່ນການຮຽນຮູ້ພາສາ ຍ້ອນວ່າສະໝອງຂອງເດັກນ້ອຍຈະຖືກພັດທະນາ ແລະ ເຕີບໃຫຍ່ຂະຫຍາຍຕົວຕັ້ງແຕ່ຕອນ 0 ປີ ຫາ 8 ປີ. ຍິ່ງນ້ອຍເທົ່າໃດຍິ່ງດີ, ຍິ່ງນ້ອຍເທົ່າໃດຍິ່ງຮຽນຮູ້ໄດ້ໄວ, ຍິ່ງນ້ອຍເທົ່າໃດຍິ່ງເຫັນປະສິດທິຜົນສູງ. ຂ້າພະເຈົ້າມີຄວາມເຊື່ອໝັ້ນຢ່າງແຮງກ້າວ່າການສຶກສາແບບພິງກຸທີ່ຖືກອອກແບບໂດຍກຸ່ມລິງກົວໂຟນທີ່ມີປະສົບການສອນພາສາອັງກິດມາເປັນເວລາ 110 ປີ ຈະສ້າງແຮງບັນດານໃຈປຸກຄວາມກະຕືລືລົ້ນໃຫ້ເດັກນ້ອຍລາວມີຄວາມສະໜຸກສະໜານ, ເພີດເພີນ ແລະ ມ່ວນຊື່ນໃນການຮຽນຮູ້ພາສາອັງກິດໄດ້ຢ່າງເຂົ້າໃຈ ແລະ ມີປະສິດທິພາບສູງ.",
    },
    programs: {
      title: 'ຫຼັກສູດຂອງພວກເຮົາ',
      subtitle: 'ເລືອກເສັ້ນທາງການຮຽນຮູ້ທີ່ເໝາະສົມທີ່ສຸດສຳລັບລູກຫຼານຂອງທ່ານ.',
      totsTab: 'ຫຼັກສູດ Tots Program',
      totsAge: 'ສໍາລັບນັກຮຽນອາຍຸ 1 ຫາ 3 ປີ',
      eltTab: 'ຫຼັກສູດ ELT Program',
      eltAge: 'ສໍາລັບນັກຮຽນອາຍຸ 3 ປີຂຶ້ນໄປ',
      tots: {
        title: 'Tots Program',
        description: 'ພວກເຮົາເຊື່ອວ່າບາດກ້າວທຳອິດຂອງການຮຽນຮູ້ຄວນເລີ່ມຕົ້ນດ້ວຍຄວາມຮູ້ສຶກອົບອຸ່ນ ແລະ ຮູ້ສຶກປອດໄພ. ຫຼັກສູດນີ້ຈຶ່ງອອກແບບມາເປັນພິເສດເພື່ອເປັນ "ບ່ອນກຽມຄວາມພ້ອມ" ສຳລັບເດັກນ້ອຍ (ອາຍຸ 1 ຫາ 3 ປີ) ໂດຍເປີດໂອກາດໃຫ້ຜູ້ປົກຄອງສາມາດເຂົ້າຮ່ວມກິດຈະກຳໃນຫ້ອງຮຽນນຳນ້ອງໆໄດ້ໃນໄລຍະທຳອິດ ເພື່ອຊ່ວຍໃຫ້ເດັກນ້ອຍຮູ້ສຶກອຸ່ນໃຈ. ເປົ້າໝາຍຂອງພວກເຮົາແມ່ນເພື່ອປ່ຽນ "ຄວາມຢ້ານໃນການຫ່າງຈາກພໍ່ແມ່" ໃຫ້ກາຍເປັນ "ຄວາມມ່ວນຊື່ນໃນການຢາກຮຽນຮູ້", ເພື່ອສ້າງຄວາມໝັ້ນໃຈໃຫ້ນ້ອງໆກ້າວໄປສູ່ການຮຽນຮູ້ດ້ວຍຕົນເອງຢ່າງມີຄວາມສຸກໃນອະນາຄົດ.',
        features: [
          {
            text: 'ຫຼັກສູດນີ້ແມ່ນອະນຸຍາດໃຫ້ຜູ້ປົກຄອງເຂົ້າຮ່ວມຫ້ອງຮຽນນຳນ້ອງໆໄດ້ໃນຊ່ວງທຳອິດ ເນື່ອງຈາກພວກເຮົາເນັ້ນການປັບຕົວແບບຄ່ອຍເປັນຄ່ອຍໄປເພື່ອຊ່ວຍໃຫ້ນ້ອງໆມີຄວາມລຶ້ງເຄີຍ ແລະ ໝັ້ນໃຈ ພ້ອມທີ່ຈະເຂົ້າຮຽນດ້ວຍຕົນເອງໃນຂັ້ນຕໍ່ໄປ.',
            img: './pingu-images/Tots1.webp'
          },
          {
            text: 'ເພື່ອກຽມຄວາມພ້ອມໃຫ້ນ້ອງໆກ່ອນເຂົ້າໂຮງຮຽນ ຫຼື ກຽມກ່ອນຈະໄປຮຽນພາສາອັງກິດໃນຂັ້ນຕໍ່ໄປ (Level 1 ELT) ຜ່ານການພັດທະນາທັກສະຕາມຊ່ວງໄວຢ່າງເປັນລະບົບ.',
            img: './pingu-images/Tots2.webp'
          },
          {
            text: 'ນ້ອງໆຈະໄດ້ພັດທະນາພື້ນຖານການອອກສຽງພາສາອັງກິດຢ່າງເປັນທຳມະຊາດຜ່ານການຫຼິ້ນທີ່ໄດ້ສຳຜັດຕົວຈິງ ແລະ ການປັບຕົວເຂົ້າກັບໝູ່ເພື່ອນ. ສະພາບແວດລ້ອມທີ່ເນັ້ນການລົງມືເຮັດນີ້ ຈະຊ່ວຍໃຫ້ການຮຽນຮູ້ການອອກສຽງໃໝ່ໆ(ສຽງໃນພາສາອັງກິດ) ກາຍເປັນເລື່ອງທີ່ງ່າຍ ແລະ ໜ້າຕື່ນເຕັ້ນສຳລັບເດັກນ້ອຍ.',
            img: './pingu-images/Tots3.webp'
          },
          {
            text: 'ຫ້ອງຮຽນລະດັບພິເສດທີ່ຈຳກັດນັກຮຽນສູງສຸດພຽງ 2 ຄົນຕໍ່ຫ້ອງເພື່ອໃຫ້ຄູສາມາດສິດສອນ ແລະ ເອົາໃຈໃສ່ນ້ອງໆ ແຕ່ລະຄົນໄດ້ຢ່າງໃກ້ຊິດ ແລະ ທົ່ວເຖິງທີ່ສຸດ.',
            img: './pingu-images/Tots4.webp'
          }
        ]
      },
      eltTitle: '4 ລະດັບຫຼັກສູດຮຽນພາສາອັງກິດຂອງພິນກຸ',
      eltSubtitle: 'ແຕ່ລະລະດັບຈະຕໍ່ຍອດຈາກພື້ນຖານເກົ່າ, ເພື່ອພາເດັກນ້ອຍເລີ່ມຕົ້ນຮຽນຮູ້ຕັ້ງແຕ່ຄຳສັບທຳອິດ ໄປຈົນເຖິງຂັ້ນສາມາດສື່ສານໄດ້ຢ່າງໝັ້ນໃຈ.',
      levels: [
        { name: 'ຜູ້ເລີ່ມຕົ້ນ', badge: 'ລະດັບ 1', stat: '12 ບົດ', img: './pingu-images/pingu-lvl-1.webp' },
        { name: 'ພື້ນຖານ', badge: 'ລະດັບ 2', stat: '12 ບົດ', img: './pingu-images/pingu-lvl-2.webp' },
        { name: 'ກາງ', badge: 'ລະດັບ 3', stat: '12 ບົດ', img: './pingu-images/pingu-lvl-3.webp' },
        { name: 'ສູງ', badge: 'ລະດັບ 4', stat: '12 ບົດ', img: './pingu-images/pingu-lvl-4.webp' }
      ],
      activitiesTitle: 'ກິດຈະກຳຂອງພວກເຮົາ',
      activities: [
        { num: '01', title: 'ການສົນທະນາ', desc: 'ຄູອາຈານທຸກທ່ານທີ່ Pingu\'s English Laos ບໍ່ພຽງແຕ່ເປັນຜູ້ຊ່ຽວຊານທີ່ມີຄຸນວຸດທິສູງເທົ່ານັ້ນ, ແຕ່ຍັງມີຄວາມເຂົ້າໃຈ ແລະ ຮັກເດັກນ້ອຍຢ່າງແທ້ຈິງ. ທີມງານຂອງພວກເຮົາຕັ້ງໃຈມອບທັງຄວາມຮູ້, ການສະໜັບສະໜູນ ແລະ ກຳລັງໃຈ ທີ່ສຳຄັນທີ່ສຸດແມ່ນການສ້າງບັນຍາກາດທີ່ເຕັມໄປດ້ວຍຄວາມມ່ວນຊື່ນ! ຄູອາຈານຂອງພວກເຮົາໄດ້ມີການຄິດຄົ້ນເກມ ແລະ ກິດຈະກຳໃໝ່ໆຢູ່ສະເໝີ ເພື່ອເຮັດໃຫ້ຫ້ອງຮຽນກາຍເປັນພື້ນທີ່ແຫ່ງຄວາມສຸກ, ຊ່ວຍໃຫ້ລູກນ້ອຍຂອງທ່ານຮູ້ສຶກຕື່ນເຕັ້ນ ແລະ ຮັກການຮຽນຮູ້ໃນທຸກໆມື້.', img: './pingu-images/Pingu-img-3-Conversation.webp' },
        { num: '02', title: 'ເວລາເລົ່ານິທານ', desc: 'ນ້ອງໆທຸກຄົນຕ່າງກໍລໍຄອຍຊ່ວງເວລາແຫ່ງການເລົ່ານິທານ! ດ້ວຍປຶ້ມນິທານທີ່ອອກແບບມາຢ່າງສວຍງາມ ແລະ ໜ້າຕື່ນຕາຕື່ນໃຈ ເຊິ່ງເປັນເລື່ອງລາວຂອງ Pingu ຈະຊ່ວຍຈຸດປະກາຍໃຫ້ນ້ອງໆມີຄວາມສຸກກັບການອ່ານ. ພວກເຮົາໃຫ້ຄວາມສຳຄັນກັບການຮຽນຮູ້ທີ່ຮອບດ້ານ ເພື່ອໃຫ້ນ້ອງໆເກັ່ງໃນທຸກທັກສະ ໂດຍສະເພາະແມ່ນການປູພື້ນຖານການອ່ານທີ່ຈະຕິດໂຕເຂົາເຈົ້າໄປຕະຫຼອດ.', img: './pingu-images/Pingu-img-4-StoryTime.webp' },
        { num: '03', title: 'ການຂຽນ', desc: 'ການຂຽນແມ່ນພາກສ່ວນສຳຄັນໃນທຸກໆບົດຮຽນຂອງພວກເຮົາ. ພວກເຮົານຳພາເດັກໆໃຫ້ພັດທະນາໄປເທື່ອລະຂັ້ນ, ເລີ່ມຕັ້ງແຕ່ການເຝິກຈັບສໍໃນ Level 1 ໄປຈົນເຖິງການແຕ່ງປະໂຫຍກພາສາອັງກິດທີ່ມີຄວາມຫຼາກຫຼາຍ ແລະ ສົມບູນແບບໃນ Level 4. ການເຝິກຂຽນໃຫ້ເກັ່ງຕັ້ງແຕ່ຕອນຍັງນ້ອຍ ຈະຊ່ວຍໃຫ້ນ້ອງໆມີທັກສະຕິດໂຕທີ່ດີ ແລະ ຈະສ້າງຄວາມສຳເລັດໃນການຮຽນໄດ້ໃນໄລຍະຍາວ.', img: './pingu-images/Pingu-img-5-Writing.webp' },
        { num: '04', title: 'ເວລາຄອມພິວເຕີ', desc: 'ພວກເຮົາແນະນຳໃຫ້ເດັກໆໄດ້ຮູ້ຈັກກັບເຕັກໂນໂລຊີ ແລະ ຊ່ວຍພັດທະນາທັກສະດ້ານໄອທີ (IT) ທີ່ຈຳເປັນ ຜ່ານກິດຈະກຳການຮຽນຮູ້ທີ່ມ່ວນຊື່ນ. ໃນໂລກຍຸກດິຈິຕອນປັດຈຸບັນນີ້ ການມີຄວາມຊຳນານດ້ານເຕັກໂນໂລຊີແມ່ນສິ່ງທີ່ສຳຄັນຫຼາຍ, ພວກເຮົາຈຶ່ງມຸ່ງໝັ້ນທີ່ຈະກຽມຄວາມພ້ອມໃຫ້ນ້ອງໆ ສຳລັບອະນາຄົດທີ່ທຸກຢ່າງເຊື່ອມຕໍ່ຜ່ານທາງອອນລາຍ.', img: './pingu-images/Pingu-img-6-ComputerTime.webp' },
        { num: '05', title: 'ເວລາຮ້ອງເພງ', desc: 'ພວກເຮົາມັກ \'ຊ່ວງເວລາແຫ່ງສຽງເພງ\' ທີ່ສຸດ! ເພາະເກືອບທຸກທ້າຍຊົ່ວໂມງຮຽນ, ນ້ອງໆຈະໄດ້ຮ້ອງ ແລະ ເຕັ້ນນຳເພງ Pingu ມ່ວນໆ ໂດຍພວກເຮົາມີປຶ້ມເພງໃຫ້ນ້ອງໆໄດ້ເບິ່ງເນື້ອຮ້ອງປະກອບນຳພ້ອມ. ເປົ້າໝາຍຫຼັກຂອງພວກເຮົາ ຄືການປ່ຽນພາສາອັງກິດໃຫ້ເປັນເລື່ອງໜ້າທີ່ຕື່ນເຕັ້ນ, ເພື່ອໃຫ້ເດັກນ້ອຍໄດ້ຮຽນຮູ້ຢ່າງມ່ວນຊື່ນ, ມີຊີວິດຊີວາ ແລະ ກະຕືລືລົ້ນຢູ່ສະເໝີ.', img: './pingu-images/Pingu-img-7-SongTime.webp' },
        { num: '06', title: 'ເວລາກິດຈະກໍາ', desc: 'ຊົ່ວໂມງກິດຈະກຳຂອງແຕ່ລະຫ້ອງຮຽນແມ່ນມີຄວາມຫຼາກຫຼາຍ ແລະ ແຕກຕ່າງກັນໄປ. ພວກນ້ອງໆຈະໄດ້ມ່ວນຊື່ນໄປກັບເກມ ແລະ ກິດຈະກຳຕ່າງໆທີ່ມີຢູ່ໃນປຶ້ມແບບຮຽນຂອງ Pingu\'s English ລວມເຖິງກິດຈະກຳທີ່ຄູ-ອາຈານໄດ້ສ້າງສັນຂຶ້ນມາໂດຍສະເພາະ. ການຮຽນຮູ້ຜ່ານກິດຈະກຳນີ້ຈະຊ່ວຍໃຫ້ພວກນ້ອງໆ ໄດ້ພັດທະນາທັກສະຮອບດ້ານ ບໍ່ວ່າຈະເປັນການອ່ານ, ການຂຽນ, ການເວົ້າ ແລະ ທັກສະການແກ້ໄຂບັນຫາ.', img: './pingu-images/Pingu-img-8-ActivityTime.webp' },
        { num: '07', title: 'ເວລາເຂົ້າສັງຄົມ', desc: 'ການສ້າງປະຕິສຳພັນທາງສັງຄົມແມ່ນພາກສ່ວນທີ່ສຳຄັນທີ່ສຸດຂອງຫຼັກສູດຂອງພວກເຮົາ! ນັກຮຽນຈະໄດ້ເລີ່ມສື່ສານ ແລະ ຮຽນຮູ້ການເຂົ້າສັງຄົມທັນທີນັບຕັ້ງແຕ່ວິນາທີທຳອິດທີ່ກ້າວເຂົ້າປະຕູມາ. ນັກຮຽນຈະໄດ້ສົນທະນາຮ່ວມກັບຄູອາຈານ ແລະ ໝູ່ເພື່ອນທີ່ມາຈາກທຸກພື້ນຖານທີ່ຫຼາກຫຼາຍ. ນີ້ຄືໂອກາດອັນດີທີ່ເຂົາເຈົ້າຈະໄດ້ສ້າງມິດພາບໃໝ່ໆ ແລະ ເພີ່ມຄວາມໝັ້ນໃຈໃນການສື່ສານພາສາອັງກິດຮ່ວມກັບໝູ່ເພື່ອນຢ່າງເປັນທຳມະຊາດ.', img: './pingu-images/Pingu-img-9-SocialTime.webp' }
      ]
    },
    team: {
      title: 'ພົບກັບຄູຂອງພວກເຮົາ',
      subtitle: 'ຄູອາຈານທຸກທ່ານຢູ່ Pingu\'s English Laos ລ້ວນແຕ່ມີຄວາມຮູ້ຄວາມສາມາດສູງ ແລະ ອຸທິດຕົນເພື່ອສ້າງຮອຍຍິ້ມ!',
      members: [
        { name: 'ຄູ ເມ (May)', role: 'ຜູ້ອໍານວຍການ', bio: 'I never believed the people around me when they said I was meant to be a teacher. But destiny had other plans, it gently guided me toward teaching, and that\'s when I realized it was in my DNA all along.', img: './pingu-images/Pingu-teacher-May-1.webp' },
        { name: 'ຄູ ປິ່ນ (Pin)', role: 'ຜູ້ຈັດການຝ່າຍບໍລິການ', bio: 'A teacher\'s joy doesn\'t lie in praise, but in seeing students grow with knowledge, skills, confidence, and true happiness in their own path.', img: './pingu-images/Pingu-teacher-Pin-2.webp' },
        { name: 'ຄູ ເຈມີ່ (Jamie)', role: 'ຄູສອນ', bio: 'It is because I love children. It is because I want to make an impact. Most importantly, it is because I CARE, and that is why I am a teacher.', img: './pingu-images/Pingu-teacher-Jamie-3.webp' },
        { name: 'ຄູ ໂມເນັດ (Monette)', role: 'ຄູສອນ', bio: 'I\'ve always found joy in teaching, not just in sharing knowledge, but in building confidence and sparking inspiration in every student I meet.', img: './pingu-images/Pingu-teacher-Montete-4.webp' },
        { name: 'ຄູ ນາຕາເລຍ (Natalia)', role: 'ຄູສອນ', bio: 'To me, being a teacher means sparking curiosity and helping each child find their own path. I believe that children grow in confidence and a love for learning.', img: './pingu-images/Pingu-teacher-Natalia-5.webp' },
        { name: 'ຄູ ແນຣີ່ (Nery)', role: 'ຄູສອນ', bio: 'To be a teacher is not merely to share knowledge, but to sow the seeds of humility and empathy, nurturing hearts to grow into kinder souls.', img: './pingu-images/Pingu-teacher-Nery-6.webp' },
        { name: 'ຄູ ນົກ (Nok)', role: 'ຜູ້ຊ່ວຍຄູ', bio: 'I became a teacher to help others pursue their dreams and shape their future, and along the way, I have found a joy I never expected.', img: './pingu-images/Pingu-teacher-Nok-7.webp' },
        { name: 'ຄູ ອາລີສ (Alice)', role: 'ຜູ້ຊ່ວຍຄູ', bio: 'Teaching is more than sharing knowledge; it\'s walking alongside children as they grow, guiding them through the real lessons of life.', img: './pingu-images/Pingu-teacher-Alice-8.webp' },
        { name: 'ຄູ ມີນາ (Meenar)', role: 'ຜູ້ຊ່ວຍຄູ', bio: 'Teaching with heart, inspired by the love I have for children and teaching, brings me joy through the smiles of my students.', img: './pingu-images/Pingu-teacher-Meenar-9.webp' }
      ]
    },
    parents: {
      title: 'ພໍ່ແມ່ນັກຮຽນ',
      tipsTitle: 'ຄຳແນະນຳສຳລັບຜູ້ປົກຄອງ',
      tips: [
        { title: 'ຄຳແນະນຳ 1: ໃຫ້ລູກໄດ້ເລີ່ມຕົ້ນ', desc: 'ໃຫ້ລູກຂອງທ່ານໄດ້ເລີ່ມຕົ້ນຮຽນພາສາອັງກິດ ດ້ວຍ Pingu\'s English, ຫຼັກສູດສາກົນສໍາລັບເດັກ 3 ຫາ 9+ ປີ.', img: './pingu-images/pingu-parent-1.webp' },
        { title: 'ຄຳແນະນຳ 2: ເປີດໂລກກ້ວາງ', desc: 'ຊ່ວຍໃຫ້ລູກສາມາດສື່ສານໄດ້ຢ່າງຄ່ອງໃນພາສາທີ່ ຫຼາຍກວ່າ 1.5 ຕື້ຄົນ ໃຊ້ ໃນ 94 ປະເທດ ທົ່ວໂລກ.', img: './pingu-images/pingu-parent-2.webp' },
        { title: 'ຄຳແນະນຳ 3: ຝຶກຢູ່ເຮືອນ', desc: 'ຊ່ວຍລູກຝຶກທີ່ເຮືອນ ໂດຍໃຫ້ລູກເຮັດການບ້ານ, ອ່ານໜັງສືພາສາອັງກິດ, ຫຼືຮ່ວມກັນເບິ່ງ Pingu ດ້ວຍກັນ.', img: './pingu-images/pingu-parent-3.webp' }
      ],
      testimonial: "ໂຮງຮຽນພາສາອັງກິດພິນກຸ ເປັນປະສົບການທີ່ດີເລີດສໍາລັບລູກຂອງຂ້ອຍ. ຄູອາຈານໃຫ້ການສະໜັບສະໜູນເປັນຢ່າງດີ ແລະ ວິທີການຮຽນຜ່ານການຫຼິ້ນເຮັດໃຫ້ທຸກບົດຮຽນໜ້າມ່ວນ. ຄວາມໝັ້ນໃຈໃນການເວົ້າພາສາອັງກິດຂອງລູກຊາຍຂ້ອຍເພີ່ມຂຶ້ນຫຼາຍພາຍໃນເວລາພຽງບໍ່ເທົ່າໃດເດືອນ!",
      testimonials: [
        { stars: 5, quote: "ຮູ້ສຶກວ່າລູກມັກ ແລະ ຢາກໄປຮຽນທຸກອາທິດ. ຂອບໃຈ ໂຮງຮຽນ ພິງກູ ທີ່ເຮັດໃຫ້ເດັກມ່ວນ.", author: "ຄໍາຕິຊົມ" },
        { stars: 5, quote: "ເປັນບ່ອນຮຽນພາສາອັງກິດທີ່ມ່ວນເພາະມີກິດຈະກໍາທີ່ເດັກນ້ອຍມັກຫລາກຫລາຍຮູບແບບ ບໍ່ວ່າຈະເປັນການຫລິ້ນເກມ, ຟັງເພງ, ເຕັ້ນ... ທີ່ສໍາຄັນແມ່ນໄດ້ຮຽນກັບຄູ Native ຊ່ວຍໃຫ້ເດັກໄດ້ຈື່ຈໍາສໍານຽງທີ່ຖືກຕ້ອງ.", author: "ຄໍາຕິຊົມ" }
      ]
    },
    students: {
      title: 'ນັກຮຽນຂອງພວກເຮົາ',
      subtitle: 'ຮູບພາບແຫ່ງຄວາມປະທັບໃຈຂອງນ້ອງໆນັກຮຽນ ໃນການຮຽນຮູ້ ແລະ ການຫຼິ້ນຢ່າງມີຄວາມສຸກ.',
      gallery: [
        { title: 'ກິດຈະກຳສ້າງສັນ', desc: 'ພັດທະນາທັກສະຜ່ານງານຝີມືທີ່ມ່ວນຊື່ນ.', img: './pingu-images/Pingu-img-4-StoryTime.webp' },
        { title: 'ການຮຽນຮູ້ແບບໂຕ້ຕອບ', desc: 'ສຳຫຼວດທັກສະ IT ຜ່ານເກມການສຶກສາ.', img: './pingu-images/Pingu-img-6-ComputerTime.webp' },
        { title: 'ການຫຼິ້ນເປັນກຸ່ມ', desc: 'ສ້າງທັກສະທາງສັງຄົມ ແລະ ຮຽນຮູ້ການຢູ່ຮ່ວມກັນ.', img: './pingu-images/Pingu-img-9-SocialTime.webp' },
        { title: 'ເວລາເລົ່ານິທານ', desc: 'ເສີມສ້າງຈິນຕະນາການຜ່ານການເລົ່ານິທານ.', img: './pingu-images/Pingu-img-2-Classroom.webp' },
        { title: 'ການມອບໃບຢັ້ງຢືນ', desc: 'ສະຫຼອງຄວາມສຳເລັດໃນການຮຽນແຕ່ລະລະດັບ.', img: './pingu-images/Students.webp' },
        { title: 'ກິດຈະກຳກາງແຈ້ງ', desc: 'ອອກກຳລັງກາຍເພື່ອສຸຂະພາບ ແລະ ພັດທະນາການທີ່ດີ.', img: './pingu-images/pingu-img-8.webp' }
      ]
    },
    contact: {
      title: 'ຕິດຕໍ່ພວກເຮົາ',
      mapTitle: 'ທີ່ຕັ້ງໂຮງຮຽນຂອງພວກເຮົາ',
      address: 'ຕຶກເຄຊີ ຊັ້ນ II, ຖະໜົນສໍານັກງານນາຍົກ, ບ້ານ ສີສະຫວາດ, ນະຄອນຫຼວງວຽງຈັນ',
      phone: '020 28 939 359',
      email: 'may@pingusenglishlaos.edu.la',
      direction: 'ເບິ່ງທິດທາງ'
    },
    introSections: [
      { 
        title: 'ຫ້ອງຮຽນ', 
        desc: 'ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ໂລກແຫ່ງການຮຽນຮູ້ທີ່ເຕັມໄປດ້ວຍຄວາມມ່ວນຊື່ນ! ທີ່ Pingu\'s English Laos, ພວກເຮົາໄດ້ສ້າງສັນສະພາບແວດລ້ອມທີ່ສົດໃສ ແລະ ເປັນກັນເອງ ເພື່ອໃຫ້ລູກນ້ອຍຂອງທ່ານໄດ້ເຕີບໃຫຍ່ຢ່າງມີຄຸນນະພາບ. ນ້ອງໆຈະໄດ້ຄົ້ນພົບຄວາມມ່ວນຊື່ນໃນການຮຽນພາສາອັງກິດໄປພ້ອມໆກັບ Pingu ເພື່ອນຮັກຈາກຂົ້ວໂລກໃຕ້ ຜ່ານເລື່ອງລາວການຜະຈົນໄພທີ່ໂດ່ງດັງ ແລະ ກິດຈະກຳທີ່ເນັ້ນການລົງມືປະຕິບັດຕົວຈິງ. ທີ່ນີ້ແມ່ນບ່ອນທີ່ສົ່ງເສີມຄວາມມັກຮັກໃນການຮຽນຮູ້ ແລະ ຊ່ວຍສ້າງຄວາມໝັ້ນໃຈໃຫ້ເດັກນ້ອຍ ໃນການປ່ຽນສິ່ງທີ່ໄດ້ຮຽນຮູ້ມາເປັນທັກສະທີ່ໃຊ້ໄດ້ແທ້ ແລະ ເພື່ອໃຫ້ນ້ອງໆກ້າສື່ສານພາສາອັງກິດໃນຊີວິດປະຈຳວັນໄດ້ຢ່າງເປັນທຳມະຊາດ.', 
        img: './pingu-images/Pingu-img-2-Classroom.webp', 
        link: '#programs',
        cta: 'ຂໍ້ມູນເພີ່ມເຕີມ'
      },
      { 
        title: 'ຄູສອນ', 
        desc: 'ຄູອາຈານທຸກທ່ານຢູ່ Pingu\'s English Laos ລ້ວນແຕ່ມີຄວາມຮູ້ຄວາມສາມາດສູງ ແລະ ມີພອນສະຫວັນເປັນພິເສດໃນການສິດສອນເດັກນ້ອຍ. ຄູຂອງພວກເຮົາບໍ່ໄດ້ມາພຽງແຕ່ບອກສອນຄວາມຮູ້ເທົ່ານັ້ນ ແຕ່ຍັງຄອຍເປັນທີ່ປຶກສາ, ໃຫ້ກຳລັງໃຈ ແລະ ທີ່ສຳຄັນທີ່ສຸດແມ່ນການສ້າງຮອຍຍິ້ມ ແລະ ຄວາມມ່ວນຊື່ນໃຫ້ກັບນ້ອງໆ! ພວກເພິ່ນມັກຄິດຄົ້ນເກມ ແລະ ກິດຈະກຳໃໝ່ໆຢູ່ສະເໝີ ເພື່ອເຮັດໃຫ້ຫ້ອງຮຽນກາຍເປັນສະຖານທີ່ທີ່ໜ້າຕື່ນເຕັ້ນ ແລະ ເຕັມໄປດ້ວຍຄວາມສຸກສຳລັບນັກຮຽນທຸກໆຄົນ.', 
        img: './pingu-images/Teachers.webp', 
        link: '#team',
        cta: 'ພົບກັບທີມງານ'
      },
      { 
        title: 'ນັກຮຽນ', 
        desc: "ເພາະນັກຮຽນຄືຫົວໃຈສຳຄັນໃນການສອນຂອງພວກເຮົາ. ພວກເຮົາທຸ່ມເທທັງກາຍແລະໃຈທຸກໆມື້ເພື່ອໃຫ້ພວກນ້ອງໆໄດ້ພັດທະນາຕົນເອງ ເພາະເດັກນ້ອຍເຫຼົ່ານີ້ຄືຄວາມພາກພູມໃຈ ແລະ ຄືອະນາຄົດຂອງພວກເຮົາ. ນອກຈາກຄວາມຮູ້ໃນຫ້ອງຮຽນແລ້ວ, ພວກເຮົາຍັງເນັ້ນໃສ່ການປູກຝັງຈິດສຳນຶກ, ຫຼໍ່ຫຼອມຈິດໃຈ, ແລະ ພ້ອມທີ່ຈະນຳພາພວກນ້ອງໆໄປສູ່ຄວາມສຳເລັດໃນວັນຂ້າງໜ້າ.", 
        img: './pingu-images/Students.webp', 
        link: '#students',
        cta: 'ນັກຮຽນຂອງພວກເຮົາ'
      },
      { 
        title: 'ພໍ່ແມ່ນັກຮຽນ', 
        desc: "ຮູ້ສຶກວ່າລູກມັກ ແລະ ຢາກໄປຮຽນທຸກອາທິດ ເວົ້າຊື່ຄູທຸກຄົນຕະຫຼອດ. ຂອບໃຈ ໂຮງຮຽນ ພິງກູ ທີ່ເຮັດໃຫ້ເດັກມ່ວນ ແລະ ມັກໃນການຮຽນພາສາອັງກິດ.", 
        img: './pingu-images/pingu-img-8.webp', 
        link: '#parents',
        cta: 'ມຸມມອງຜູ້ປົກຄອງ'
      }
    ],
    footer: {
      tagline: 'ການຮຽນຮູ້ຄືຄວາມມ່ວນ',
      rights: '© 2026 Pingu\'s English Laos | ສະຫງວນລິຂະສິດ',
      dev: 'ສ້າງໂດຍ: Kaona Tech',
      tiktok: 'https://www.tiktok.com/@pingulaos'
    }
  }
};
