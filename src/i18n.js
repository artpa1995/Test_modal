import { createI18n } from 'vue-i18n'
import  en  from './langs/en.json'
import  ru  from './langs/ru.json'
import  am  from './langs/am.json'

// const messages = {
//     ru :ru,
//     en :en,
//     amr :am
// }
//console.log(test);
var messages = {
    en: {
        not_found: "Page not found",
        home_page: "Web Design & Development Agency",
        about_page: "Development of turnkey websites and their subsequent promotion",
        contact_page: "How to contact us",
        service_page: "Web & Software development",
        team_page: "Highly qualified employees with extensive experience",
        home_content_text: "We build stunning websites and robust software applications",
        about_content_text: "Our qualified specialists will create a website in a short time according to your wishes, without complaints",
        contact_content_text: "For any inquiries, contact us, fill out the form on the website, and we will call you back!",
        service_content_text: "Our web development team have solid experience with small, medium, large and complex builds. We have built custom CRM systems, online subscription platforms, advanced booking applications, media distribution systems, accounting and management applications and many more.",
        team_content_text: "Our team consists of qualified specialists, including project managers, web developers, layout designers, designers, SEO specialists, content managers, copywriters.",
        head_button: "More",
        menu: {
            home: "Home",
            about: "About",
            service: "Service",
            team: "Team",
            contact: "Contact",
        },
        about_content_bloc_items: [
            { icon: require('./assets/svg/4.svg'), title: 'Information analysis', description: 'We receive data and discuss the wishes of the client. We analyze the specifics of the company`s activities, set tasks.'},
            { icon: require('./assets/svg/5.svg'), title: 'Structure design', description: 'We think over the presentation of information, data output, taking into account the behavioral factor. Laying conversion blocks.'},
            { icon: require('./assets/svg/6.svg'), title: 'Interface', description: 'We individually approach the formation of an adaptive interface, carefully work out the details and graphic elements.'},
        ],
        about_content_bloc_items_2: [
            {icon:require('./assets/svg/7.svg'), title: 'Technical implementation', description: 'We approach the resource in terms of its scalability. We take into account the usability indicator, i.e. ease of use.'},
            {icon:require("./assets/svg/8.svg"), title: 'Promotion and optimization', description: 'We are working hard on search promotion. Internal and external project optimization.'},
            {icon:require('./assets/svg/9.svg'), title: 'Follow-up site support', description: 'We accompany both those projects that we have done ourselves, and any others that have come to us for service.'},
        ],
        about_content_head: {
            title: "ABOUT COMPANY",
            description: "L-IT Armenia formed in 2021 with a motor power of providing outstaffing and outsourcing services ranging from strategic IT consultancy to solutions implementation. We are made up of bold and creative thinkers that come from every walk of life. Our open culture drives success for our clients and our focus on company-wide inclusion, which creates a great opportunity for our team.",
        },
        home_service_content_heads: {
            title: 'Our services',
            description: 'We create and promote sites for software applications of various types, we are engaged in their subsequent support.'
        },
        service_content_blocs: [
            {icon:require('./assets/svg/1.svg'), title: 'Website development', description: 'Our skillful team of developers take pride and care in every line of code to bring performant projects to life.'},
            {icon:require("./assets/svg/2.svg"), title: 'API system integration', description: 'We can tightly integrate your existing business systems using API integrations.'},
            {icon:require('./assets/svg/3.svg'), title: 'UI/UX website design', description: 'We will create for you an individual website design, with an attractive interface, with a well-thought-out website architecture and with convenience and ease of use that meets business goals.'},
        ],
        mission_content_heads: {
            title: 'OUR MISSION',
            description: 'To be a trusted digital technology partner to our customers by proactively engaging and understanding their business needs and deliver outcomes as one united team.'
        },
        home_team_content: {
            title: 'Team',
            description: 'Meet the L-IT Armenia Family! Our dynamic team of creatives and innovators love working collaboratively to turn your visions into a reality.'
        },
        more_info: "More",
        footer_contacts: {title:'contacts', tel: '+37455555555', email:'L-it@mail.com', addres:'Erevani komery eli'},
        info: "Info",
        info_menu: [
            {url: '/', name: 'Home'},
            {url: '/about', name: 'About'},
            {url: '/service', name: 'Service'},
            {url: '/team', name: 'Team'},
            {url: '/contact', name: 'Contact'},
        ], 
        contents_footer_mission: {
            title: 'OUR MISSION',
            description: 'To be a trusted digital technology partner to our customers by proactively engaging and understanding their business needs and deliver outcomes as one united team.'
        },
        dop_info:"For more information, you can subscribe to our news", 
        write_email:'write your email address',
        subscription:"Subscription",
        methods_content_bloc_items: [
            {icon:require('./assets/svg/10.svg'), title: 'Information analysis', description: 'We receive data and discuss the wishes of the client. We analyze the specifics of the company`s activities, set tasks.'},
            {icon:require('./assets/svg/11.svg'), title: 'Structure design', description: 'We think over the presentation of information, data output, taking into account the behavioral factor. Laying conversion blocks.'},
            {icon:require('./assets/svg/12.svg'), title: 'Interface', description: 'We individually approach the formation of an adaptive interface, carefully work out the details and graphic elements.'},
            {icon:require('./assets/svg/13.svg'), title: 'Technical implementation', description: 'We approach the resource in terms of its scalability. We take into account the usability indicator, i.e. ease of use.'},
            {icon:require('./assets/svg/14.svg'), title: 'Promotion and optimization', description: 'We think over the presentation of information, data output, taking into account the behavioral factor. Laying conversion blocks.'},
            {icon:require('./assets/svg/15.svg'), title: 'Follow-up site support', description: 'We accompany both those projects that we have done ourselves, and any others that have come to us for service.'},
            
        ],
        methods_content_head:{
            title: 'WEB DEVELOPMENT - OUR METHODS',
            description: 'We are a company engaged in the creation and development of websites, their optimization and maintenance.'
        },
        page_content_head:{
            title: 'ABOUT COMPANY',
            description: 'L-IT Armenia formed in 2021 with a motor power of providing outstaffing and outsourcing services ranging from strategic IT consultancy to solutions implementation. We are made up of bold and creative thinkers that come from every walk of life. ',
            description2: 'Our open culture drives success for our clients and our focus on company-wide inclusion, which creates a great opportunity for our team.'
        },
        advertising_title: { title: 'Our Services'},
        advertising_content: [
            { img:require('./assets/svg/16.svg'), title: 'Launch efficiency', description: 'Our professionals possess agile mindset and this allows our clients to quickly solve the problems of their business.'},
            { img:require('./assets/svg/17.svg'), title: 'Rational use of the budget', description: 'We don`t waste a single penny. The cost of the work is fully justified!'},
            { img:require('./assets/svg/18.svg'), title: 'Efficiency and guarantee of results', description: 'We are responsible for our work and do everything to achieve our goals.'},
            { img:require('./assets/svg/19.svg'), title: 'Only targeted traffic', description: 'It is important for us not only to create the visible popularity of the resource, but to convert it into your real income.'},
            { img:require('./assets/svg/20.svg'), title: 'Development and training', description: 'We will tell and show everything about professional programming.'}
        ],
        createds_title: { title: 'The working process',  title2: 'Creating a structure for the site pages'},
        createds_content: [
           { img:require('./assets/svg/21.svg'), description: 'The site structure is the logical construction of all pages of the resource. The scheme by which the path to folders, categories, subcategories is distributed'},
           { img:require('./assets/svg/21.svg'), description: 'Based on the website architecture, we prepare a design taking into account your brand book, corporate style and preferred colors'},
           { img:require('./assets/svg/21.svg'),  description: 'We start developing the site back to back, using different programming languages'},
           { img:require('./assets/svg/21.svg'), title: 'YOUR SITE IS READY!', description: 'Adding the last elements and that`s it',}
        ],
        our_team_content_head:  { title: 'Our employees', description: 'In our team, everything is debugged, everyone is doing their part in creating and promoting the project'},
        our_team_content_bloc_items: [
            {icon:require('./assets/team/1.jpg'), title: 'PROJECT MANAGER', description: 'We receive data and discuss the wishes of the client. We analyze the specifics of the company`s activities, set tasks.'},
            {icon:require('./assets/team/2.jpg'), title: 'WEB DESIGNER', description: 'We think over the presentation of information, data output, taking into account the behavioral factor. Laying conversion blocks.'},
            {icon:require('./assets/team/3.jpg'), title: 'DESIGNER', description: 'We individually approach the formation of an adaptive interface, carefully work out the details and graphic elements.'},
            {icon:require('./assets/team/4.jpg'), title: 'WEB PROGRAMMER', description: 'We approach the resource in terms of its scalability. We take into account the usability indicator, i.e. ease of use.'},
            {icon:require('./assets/team/5.jpg'), title: 'COPYWRITER', description: 'We are working hard on search promotion. Internal and external project optimization.'},
            {icon:require('./assets/team/6.jpg'), title: 'CONTENT MANAGER', description: 'We accompany both those projects that we have done ourselves, and any others that have come to us for service.'},
            {icon:require('./assets/team/7.jpg'), title: 'SEO Analyst and Optimizer', description: 'We accompany both those projects that we have done ourselves, and any others that have come to us for service.'},
            
        ],
        contacts_content_head: { title: 'Contact us', description: 'If you have further questions, please feel free to contact us.'},
        contacts_content_bloc_items: [
            {icon:require('./assets/svg/ph.svg'), title :'Phone', value: '+37496433673'},
            {icon:require('./assets/svg/em.svg'), title :'Email', value: 'info@l-it.am'},
            {icon:require('./assets/svg/ad.svg'), title :'Address', value: 'Azatutyan 24/17, E Plaza'},
        ],
        contact_for_footer :  {title:'Contacts', tel: '+37496433673', email:'info@l-it.am', addres:'Azatutyan 24/17, E Plaza'},
        form_content_head:{ title: 'Write your message', description: 'Our project manager will contact you after filling out this form'},
        form_inputs:{
            form_check_text:'By submitting the form, I consent to the processing of personal data',
            submit:'Order a Consultation',
            message:'Message',
            phone:'Phone',
            name:'Full name',
        },
        error_inputs:{
            names:'Name is required.',
            email: 'Email is required.',
            invalid_email: 'Please enter a valid email address.',
            check: 'It is not possible to send a message without your consent.',
            phone: 'Required to specify a  Phone.',
            message: 'A message is required.'
        }
               
    },
    ru: {
        not_found: "Страница не найдена",
        home_page: "Агентство веб-дизайна и разработки",
        about_page: "Разработка сайтов под ключ и их последующее продвижение",
        contact_page: "Как связаться с нами",
        service_page: "Веб-разработка и разработка программного обеспечения",
        team_page: "Высококлассные сотрудники с большим опытом",
        home_content_text: "Мы создаем потрясающие веб-сайты и надежные программные приложения",
        about_content_text: "Наши квалифицированные специалисты создадут сайт за короткий срок по вашим пожеланиям, без жалоб",
        contact_content_text: "По любым вопросам обращайтесь к нам, заполните форму на сайте, и мы Вам перезвоним!",
        service_content_text: "Наша команда веб-разработчиков имеет большой опыт работы с малыми, средними, большими и сложными сборками. Мы создали собственные CRM-системы, платформы онлайн-подписки, расширенные приложения для бронирования, системы распространения медиа, приложения для учета и управления и многое другое.",
        team_content_text: "Наша команда состоит из квалифицированных специалистов, в их числе менеджеры проектов, веб-разработчики, верстальщики, дизайнеры,  SEO специалисты, контент-менеджеры, копирайтеры.",
        head_button: "Больше",
        menu: {
            home: "Главная",
            about: "О Нас",
            service: "Услуги",
            team: "Команда",
            contact: "Контакты",
        },
        about_content_bloc_items: [
            { icon: require('./assets/svg/4.svg'), title: 'Анализ информации', description: 'Получаем данные и обсуждаем пожелания клиента. Анализируем специфику деятельности компании, ставим задачи.'},
            { icon: require('./assets/svg/5.svg'), title: 'Проектирование структурыа', description: 'Продумываем представление информации, вывод данных, учитывая поведенческий фактор. Закладываем конверсионные блоки.'},
            { icon: require('./assets/svg/6.svg'), title: 'Интерфейс', description: 'Индивидуально подходим к формированию адаптивного интерфейса, Тщательно прорабатываем детали и графические элементы.'},
            
         ],
        about_content_bloc_items_2: [
            {icon:require('./assets/svg/7.svg'), title: 'Техническая реализация', description: 'Подходим к ресурсу с точки зрения его масштабируемости. Учитываем показатель юзабилити, т.е. удобство пользования.'},
            {icon:require('./assets/svg/8.svg'), title: 'Продвижение и оптимизация', description: 'Проводим плотную работу по поисковому продвижению. Внутренняя и внешняя оптимизация проекта.'},
            {icon:require('./assets/svg/9.svg'), title: 'Последующая поддержка сайта', description: 'Сопровождаем как те проекты, которые сами сделали, так и любые другие, которые пришли к нам на обслуживание.'},
            
        ],
        about_content_head:{ 
            title: 'О КОМПАНИИ',
            description: 'L-IT Armenia была создана в 2021 году с целью предоставления услуг аутстаффинга и аутсорсинга, начиная от стратегического консультирования в области ИТ и заканчивая внедрением решений. Мы состоим из смелых и творческих мыслителей из разных слоев общества. Наша открытая культура способствует успеху наших клиентов, а наша ориентация на вовлечение всей компании открывает большие возможности для нашей команды.',
        },
        home_service_content_heads: {
            title: 'Наши услуги',
            description: 'Создаем и продвигаем сайты программных приложений различных типов, занимаемся их последующей поддержкой'
        },
        service_content_blocs: [
            {icon:require('./assets/svg/1.svg'), title: 'Создание сайтов', description: 'Наша опытная команда разработчиков с гордостью и заботой относится к каждой строке кода, чтобы воплотить в жизнь эффективные проекты.'},
            {icon:require("./assets/svg/2.svg"), title: 'Интеграция системы API', description: 'Мы можем тесно интегрировать ваши существующие бизнес-системы с помощью интеграции API.'},
            {icon:require('./assets/svg/3.svg'), title: 'UI/UX дизайн сайта', description: 'Создадим для вас индивидуальный дизайн сайта, с привлекательным интерфейсом, с продуманной архитектурой сайта и с удобством и простотой использования, отвечающей целям бизнеса.'},
        ],
        mission_content_heads: {
            title: 'НАША МИССИЯ',
            description: 'Быть надежным партнером по цифровым технологиям для наших клиентов, активно взаимодействуя и понимая их бизнес-потребности, и добиваясь результатов как одна сплоченная команда.'
        },
        home_team_content: {
            title: 'Команда',
            description: 'Знакомьтесь с семьей Л-ИТ Армения! Наша динамичная команда креативщиков и новаторов любит работать вместе, чтобы воплотить ваши идеи в реальность.'
        },
        more_info: "Больше",
        footer_contacts: {
            title:'контакты',
            tel: '+37455555555',
            email:'L-it@mail.com',
            address:'Erevani komery eli'
        },
        info:"Информация", 
        info_menu: [
            {url: '/', name: 'Главная'},
            {url: '/about', name: 'О Нас'},
            {url: '/service', name: 'Услуги'},
            {url: '/team', name: 'Команда'},
            {url: '/contact', name: 'Контакты'},
        ], 
        contents_footer_mission: {
            title: 'Наша миссия',
            description: 'Быть надежным партнером по цифровым технологиям для наших клиентов, активно взаимодействуя и понимая их бизнес-потребности, и добиваясь результатов как одна сплоченная команда.'
        },
        dop_info: "Для дополнительной информации вы можете подписаться на наши новости",
        write_email: 'напишите свой адрес электронной почты',
        subscription: "Подписаться",
        methods_content_bloc_items: [
            {icon:require('./assets/svg/10.svg'), title: 'Анализ информации', description: 'Получаем данные и обсуждаем пожелания клиента. Анализируем специфику деятельности компании, ставим задачи.'},
            {icon:require('./assets/svg/11.svg'), title: 'Проектирование структурыа', description: 'Продумываем представление информации, вывод данных, учитывая поведенческий фактор. Закладываем конверсионные блоки.'},
            {icon:require('./assets/svg/12.svg'), title: 'Интерфейс', description: 'Индивидуально подходим к формированию адаптивного интерфейса, Тщательно прорабатываем детали и графические элементы.'},
            {icon:require('./assets/svg/13.svg'), title: 'Техническая реализация', description: 'Подходим к ресурсу с точки зрения его масштабируемости. Учитываем показатель юзабилити, т.е. удобство пользования.'},
            {icon:require('./assets/svg/14.svg'), title: 'Продвижение и оптимизация', description: 'Проводим плотную работу по поисковому продвижению. Внутренняя и внешняя оптимизация проекта.'},
            {icon:require('./assets/svg/15.svg'), title: 'Последующая поддержка сайта', description: 'Сопровождаем как те проекты, которые сами сделали, так и любые другие, которые пришли к нам на обслуживание.'},
            
        ],
        methods_content_head: {
            title: 'ВЕБ РАЗРАБОТКА - НАШИ МЕТОДЫ',
            description: 'Мы компания, занимающаяся созданием и развитием сайтов, их оптимизацией и обслуживанием.'
        },
        page_content_head: {
                title: 'О КОМПАНИИ',
                description: 'L-IT Armenia была создана в 2021 году с целью предоставления услуг аутстаффинга и аутсорсинга, начиная от стратегического консультирования в области ИТ и заканчивая внедрением решений. Мы состоим из смелых и творческих мыслителей из разных слоев общества.',
                description2: 'Наша открытая культура способствует успеху наших клиентов, а наша ориентация на вовлечение всей компании открывает большие возможности для нашей команды.'
        },
        advertising_title: { title: 'Наши услуги'},
        advertising_content: [
            { img:require('./assets/svg/16.svg'), title: 'ЭФФЕКТИВНОСТЬ ЗАПУСКА', description: 'Наши специалисты обладают гибким мышлением, что позволяет нашим клиентам быстро решать задачи своего бизнеса.'},
            { img:require('./assets/svg/17.svg'), title: 'РАЦИОНАЛЬНОЕ ИСПОЛЬЗОВАНИЕ БЮДЖЕТА', description: 'Мы не тратим ни копейки. Стоимость работ полностью оправдана'},
            { img:require('./assets/svg/18.svg'), title: ' ЭФФЕКТИВНОСТЬ И ГАРАНТИЯ РЕЗУЛЬТАТА', description: 'Мы отвечаем за свою работу и делаем все для достижения поставленных целей'},
            { img:require('./assets/svg/19.svg'), title: 'Только целевой трафик', description: 'Нам важно не просто создать видимую популярность ресурса, а конвертировать ее в ваш реальный доход.'},
            { img:require('./assets/svg/20.svg'), title: 'Развитие и обучение', description: 'Подробно расскажем и покажем все о профессиональной програмирование.'}
        ],
        createds_title: { title: 'Рабочий процесс',  title2: 'Создаем структуру для страниц сайта'},
        createds_content: [
            { img:require('./assets/svg/21.svg'), description: 'Структура сайта - это логическое построение всех страниц ресурса. Схема, по которой распределяется путь к папкам, категориям, подкатегориям.'},
            { img:require('./assets/svg/21.svg'), description: 'На основе архитектуры сайта подготавливаем дизайн с учетом вашего брендбука, фирменной стилистики и предпочитаемых цветов.'},
            { img:require('./assets/svg/21.svg'), description: 'Начинаем разработку сайта вплотную, используя разные языки программирования.'},
            { img:require('./assets/svg/21.svg'), title: 'ВАШ САЙТ ГОТОВ!', description: 'Добавление последних элементов и все.'}
        ],
        our_team_content_head:  { title: 'Наши сотрудники ', description: 'В нашей команде все отлажено, каждый занимается своей частью в создании и продвижении проекта'},
        our_team_content_bloc_items: [
            {icon:require('./assets/team/1.jpg'), title: 'МЕНЕДЖЕР ПРОЕКТА ', description: 'Получаем данные и обсуждаем пожелания клиента. Анализируем специфику деятельности компании, ставим задачи'},
            {icon:require('./assets/team/2.jpg'), title: 'ВЭБ ДИЗАЙНЕР', description: 'Продумываем представление информации, вывод данных, учитывая поведенческий фактор. Закладываем конверсионные блоки'},
            {icon:require('./assets/team/3.jpg'), title: 'ВЕРСТАЛЬЩИК', description: 'Индивидуально подходим к формированию адаптивного интерфейса, Тщательно прорабатываем детали и графические элементы'},
            {icon:require('./assets/team/4.jpg'), title: 'ВЕБ-ПРОГРАММИСТ', description: 'Подходим к ресурсу с точки зрения его масштабируемости. Учитываем показатель юзабилити, т.е. удобство пользования'},
            {icon:require('./assets/team/5.jpg'), title: 'КОПИРАЙТЕР', description: 'Проводим плотную работу по поисковому продвижению. Внутренняя и внешняя оптимизация проекта'},
            {icon:require('./assets/team/6.jpg'), title: 'КОНТЕНТ МЕНЕДЖЕР', description: 'Сопровождаем как те проекты, которые сами сделали, так и любые другие, которые пришли к нам на обслуживание'},
            {icon:require('./assets/team/7.jpg'), title: 'SEO Аналитик и Оптимизатор', description: 'Сопровождаем как те проекты, которые сами сделали, так и любые другие, которые пришли к нам на обслуживание'},
         ],

        contacts_content_head: { title: 'Свяжитесь с нами', description: 'Если у вас есть дополнительные вопросы, пожалуйста, не стесняйтесь обращаться к нам.'},
        contacts_content_bloc_items: [
            {icon:require('./assets/svg/ph.svg'), title :'Телефон', value: '+37496433673'},
            {icon:require('./assets/svg/em.svg'), title :'Email', value: 'info`@`l-it.am'},
            {icon:require('./assets/svg/ad.svg'), title :'АДРЕС', value: 'Азатутян 24/17, E Plaza'},
         ],
        contact_for_footer :  {title:'Contacts', tel: '+37496433673', email:'info@l-it.am', addres:'Азатутян 24/17, E Plaza'},
        form_content_head:{ title: 'Напишите ваше сообщение', description: 'Наш проект менеджер свяжется с вами после заполнения данной формы'},
        form_inputs: {
            form_check_text:'Отправляя форму, я даю согласие на обработку персональных данных',
            submit:'Заказать Консультацию',
            message:'Сообщение',
            phone:'Телефон',
            name:'ФИО',
         },
         error_inputs:{
            names:'Требуется указать ФИО',
            email: 'Требуется указать Email.',
            invalid_email: 'Укажите корректный адрес электронной почты.',
            check: 'Без вашего согласие невозможно отправить сообщение.',
            phone: 'Требуется указать Телефон.',
            message: 'Требуется указать Сообщение'
        }
    },
    arm: {
        not_found: "Էջը չի գտնվել",
        home_page: "Վեբ դիզայնի և ծրագրավորման կազմակերպություն",
        about_page: "Ստանդարտ կայքերի մշակում և դրանց հետագա առաջխաղացում",
        contact_page: "Ինչպես կապվել մեզ հետ",
        service_page: "Վեբ կայքերի և ծրագրային ապահովման մշակում",
        team_page: "Բարձր որակավորում ունեցող աշխատակիցներ՝ մեծ փորձով",
        home_content_text: "Մենք ստեղծում ենք զարմանալի կայքեր և հուսալի ծրագրային հավելվածներ",
        about_content_text: "Մեր որակյալ մասնագետները կարճ ժամանակում կստեղծեն կայք ձեր ցանկությամբ՝ առանց բողոքների",
        contact_content_text: "Հարցերի դեպքում կապ հաստատեք մեզ հետ, լրացրեք կայքում տեղադրված ձևաչափը, և ​​մենք կզանգահարենք ձեզ:",
        service_content_text: "Մեր ծրագրավորողների թիմը մեծ փորձ ունի փոքր, միջին, մեծ և բարդ համակարգերի հետ: Մենք ստեղծել ենք մեր սեփական CRM համակարգերը, առցանց բաժանորդագրության հարթակներ, առաջադեմ ամրագրման հավելվածներ, լրատվամիջոցների բաշխման համակարգեր, հաշվապահական հաշվառման և կառավարման հավելվածներ և շատ ավելին:",
        team_content_text: "Ծանոթացեք L-IT Armenia ընտանիքին: Ստեղծագործների և նորարարների մեր դինամիկ թիմը սիրում է աշխատել միասին՝ ձեր գաղափարները կյանքի կոչելու համար:",
        head_button: "Ավելին",
        menu: {
            home: "Գլխավոր",
            about: "Մեր մասին",
            service: "Ծառայություններ",
            team: "Մեր թիմը",
            contact: "Կոնտակտներ",
        },
        about_content_bloc_items: [
            { icon: require('./assets/svg/4.svg'), title: 'Տեղեկատվության վերլուծություն', description: 'Մենք ստանում ենք տվյալներ և քննարկում հաճախորդի ցանկությունները: Մենք վերլուծում ենք ընկերության գործունեության առանձնահատկությունները:'},
            { icon: require('./assets/svg/5.svg'), title: 'Կառուցվածքի ձևավորում', description: 'Մենք մտածում ենք տեղեկատվության ներկայացման, տվյալների ելքի շուրջ՝ հաշվի առնելով վարքագծային գործոնը։'},
            { icon: require('./assets/svg/6.svg'), title: 'Ինտերֆեյս', description: 'Մենք անհատապես մոտենում ենք հարմարվողական ինտերֆեյսի ձևավորմանը, ուշադիր մշակում մանրամասները և գրաֆիկական տարրերը:'},
            
         ],
        about_content_bloc_items_2: [
            {icon:require('./assets/svg/7.svg'), title: 'Տեխնիկական իրականացում', description: 'Մենք ռեսուրսին մոտենում ենք իր մասշտաբայնությամբ, հաշվի ենք առնում օգտագործելիության ցուցանիշը, այսինքն օգտագործման հեշտությունը:'},
            {icon:require('./assets/svg/8.svg'), title: 'Առաջխաղացում և օպտիմալացում', description: 'Մենք քրտնաջան աշխատում ենք որոնման խթանման, նախագծի ներքին և արտաքին օպտիմիզացման վրա:'},
            {icon:require('./assets/svg/9.svg'), title: 'Հետագա կայքի աջակցություն', description: 'Մենք ուղեկցում ենք ինչպես այն նախագծերը, որոնք մենք ինքներս ենք արել, այնպես էլ ցանկացած այլ, որը եկել է մեզ ծառայության համար:'},
            
        ],
        about_content_head:{ 
            title: 'Մեր մասին',
            description: 'L-IT Armenia-ն հիմնադրվել է 2021 թվականին՝ նպատակ ունենալով տրամադրել աութսթաֆինգ և աութսորսինգ ծառայություններ՝ սկսած ՏՏ ռազմավարական խորհրդատվությունից մինչև լուծումների ներդրում: Մենք կազմված ենք բոլոր խավերի համարձակ և ստեղծագործ մտածողներից: Մեր բաց մշակույթը նպաստում է մեր հաճախորդների հաջողությանը, և մեր նվիրվածությունը ընկերության ամբողջ ներգրավվածությանը մեծ հնարավորություններ է ստեղծում մեր թիմի համար:',
        },
        home_service_content_heads: {
            title: 'Մեր ծառայությունները',
            description: 'Մենք ստեղծում և զարգացնում ենք տարբեր տեսակի ծրագրային հավելվածներ, զբաղվում ենք դրանց հետագա առաջխաղացմամբ'
        },
        service_content_blocs: [
            {icon:require('./assets/svg/1.svg'), title: 'Կայքի մշակում', description: 'Մեր փորձառու ծրագրավորողների թիմը հոգատարությամբ է վերաբերվում կոդի յուրաքանչյուր տողին՝ նախագծերը արդյունավետ կյանքի կոչելու համար:'},
            {icon:require("./assets/svg/2.svg"), title: 'API համակարգի ինտեգրում', description: 'Մենք կարող ենք ինտեգրել ձեր գործող բիզնես համակարգերը ցանկացած API համակարգի հետ:'},
            {icon:require('./assets/svg/3.svg'), title: 'UI/UX կայքի դիզայն', description: 'Մենք ձեզ համար կստեղծենք վեբ կայքի անհատական ​​դիզայն՝ գրավիչ ինտերֆեյսով, լավ մտածված վեբկայքի ճարտարապետությամբ և հարմարավետությամբ և օգտագործման հեշտությամբ, որը համապատասխանում է բիզնես նպատակներին:'},
            
        ],
        mission_content_heads: {
            title: 'ՄԵՐ ԱՌԱՔԵԼՈՒԹՅՈՒՆԸ',
            description: 'Լինել վստահելի թվային գործընկեր մեր հաճախորդների համար՝ ակտիվորեն ներգրավվելով և հասկանալով նրանց բիզնեսի կարիքները և արդյունք տալով որպես թիմ:'
        },
        home_team_content: {
            title: 'Մեր թիմը',
            description: 'Ծանոթացեք L-IT Armenia ընտանիքին: Ստեղծագործների և նորարարների մեր դինամիկ թիմը սիրում է աշխատել միասին՝ ձեր գաղափարները կյանքի կոչելու համար:'
        },
        more_info:"Ավելին",
        footer_contacts:{ title:'կոնտակտներ', tel: '+37455555555', email:'L-it@mail.com', addres:'Erevani komery eli'},
        info:"Տեղեկատվություն", 
        info_menu: [
            {url: '/', name: 'Գլխավոր'},
            {url: '/about', name: 'Մեր մասին'},
            {url: '/service', name: 'Ծառայություններ'},
            {url: '/team', name: 'Մեր թիմը'},
            {url: '/contact', name: 'Կոնտակտներ'},
        ], 
        contents_footer_mission: {
            title: 'Մեր առաքելությունը',
            description: 'Լինել վստահելի թվային գործընկեր մեր հաճախորդների համար՝ ակտիվորեն ներգրավվելով և հասկանալով նրանց բիզնեսի կարիքները և արդյունք տալով որպես թիմ:'
        },
        dop_info:"Լրացուցիչ տեղեկությունների համար կարող եք բաժանորդագրվել մեր նորություններին",
        write_email:'գրեք ձեր էլփոստի հասցեն',
        subscription:"Բաժանորդագրվել",
        methods_content_bloc_items: [
            {icon:require('./assets/svg/10.svg'), title: 'Տեղեկատվության վերլուծություն', description: 'Մենք ստանում ենք տվյալներ և քննարկում հաճախորդի ցանկությունները: Մենք վերլուծում ենք ընկերության գործունեության առանձնահատկությունները:'},
            {icon:require('./assets/svg/11.svg'), title: 'Կառուցվածքի ձևավորում', description: 'Մենք մտածում ենք տեղեկատվության ներկայացման, տվյալների ելքի շուրջ՝ հաշվի առնելով վարքագծային գործոնը։'},
            {icon:require('./assets/svg/12.svg'), title: 'Ինտերֆեյս', description: 'Մենք անհատապես մոտենում ենք հարմարվողական ինտերֆեյսի ձևավորմանը, ուշադիր մշակում մանրամասները և գրաֆիկական տարրերը:'},
            {icon:require('./assets/svg/13.svg'), title: 'Տեխնիկական իրականացում', description: 'Մենք ռեսուրսին մոտենում ենք իր մասշտաբայնությամբ, հաշվի ենք առնում օգտագործելիության ցուցանիշը, այսինքն օգտագործման հեշտությունը:'},
            {icon:require('./assets/svg/14.svg'), title: 'Առաջխաղացում և օպտիմալացում', description: 'Մենք քրտնաջան աշխատում ենք որոնման խթանման, նախագծի ներքին և արտաքին օպտիմիզացման վրա:'},
            {icon:require('./assets/svg/15.svg'), title: 'Հետագա կայքի աջակցություն', description: 'Մենք ուղեկցում ենք ինչպես այն նախագծերը, որոնք մենք ինքներս ենք արել, այնպես էլ ցանկացած այլ, որը եկել է մեզ ծառայության համար:'},
            
        ],
        methods_content_head: {
            title: 'ՎԵԲ ԶԱՐԳԱՑՈՒՄ - ՄԵՐ ՄԵԹՈԴՆԵՐԸ',
            description: 'Մենք ընկերություն ենք, որը զբաղվում է կայքերի ստեղծմամբ և մշակմամբ, դրանց օպտիմալացմամբ և սպասարկումով:'
        },
        page_content_head: {
            title: 'Մեր մասին',
            description: 'L-IT Armenia-ն ձևավորվել է 2021թ.-ին արտաքին անձնակազմի և աութսորսինգի ծառայություններ մատուցելու շարժիչ ուժով՝ սկսած ՏՏ ռազմավարական խորհրդատվությունից մինչև լուծումների ներդրում: Մենք կազմված ենք համարձակ և ստեղծագործ մտածողներից, որոնք գալիս են կյանքի բոլոր ոլորտներից:',
            description2: 'Մեր բաց մշակույթը հաջողություն է բերում մեր հաճախորդներին և մեր կենտրոնացումը ընկերության ամբողջ ընդգրկման վրա, ինչը հիանալի հնարավորություն է ստեղծում մեր թիմի համար:'
        },
        advertising_title: { title: 'Համատեքստային գովազդ'},
        advertising_content: [
            { img:require('./assets/svg/16.svg'), title: 'ԹՈՂԱՐԿՄԱՆ ԱՐԴՅՈՒՆԱՎԵՏՈՒԹՅՈՒՆ', description: 'Մեր մասնագետներն օժտված են ճկուն մտածելակերպով, և դա թույլ է տալիս մեր հաճախորդներին արագ լուծել իրենց բիզնեսի խնդիրները:'},
            { img:require('./assets/svg/17.svg'), title: 'Բյուջեի ռացիոնալ օգտագործումը', description: 'Լումա անգամ հենց այնպես չենք վատնում: Աշխատանքի արժեքը լիովին արդարացված է:'},
            { img:require('./assets/svg/18.svg'), title: 'Արդյունավետություն և արդյունքի երաշխիք', description: 'Մենք պատասխանատու ենք մեր կատարած աշխատանքի համար և անում ենք ամեն ինչ մեր նպատակներին հասնելու համար:'},
            { img:require('./assets/svg/19.svg'), title: 'Միայն նպատակային տրաֆիկ', description: 'Մեզ համար կարևոր է ոչ միայն ռեսուրսի տեսանելի ժողովրդականություն ստեղծելը, այլև այն վերածել ձեր իրական եկամտի:'},
            { img:require('./assets/svg/20.svg'), title: 'Զարգացում և ուսուցում', description: 'Պրոֆեսիոնալ ծրագրավորման մասին ամեն ինչ կպատմենք ու ցույց կտանք։'}
        ],
        createds_title: {title: 'Կայքի մշակում', title2: 'Կայքի էջերի համար կառուցվածքի ստեղծում'},
        createds_content: [
            { img:require('./assets/svg/21.svg'), description: 'Կայքի կառուցվածքը ռեսուրսի բոլոր էջերի տրամաբանական կառուցումն է: Սխեման, որով բաշխվում է դեպի թղթապանակներ, կատեգորիաներ, ենթակատեգորիաներ տանող ճանապարհը'},
            { img:require('./assets/svg/21.svg'), description: 'Կայքի ճարտարապետության հիման վրա մենք պատրաստում ենք դիզայն՝ հաշվի առնելով ձեր բրենդային գիրքը, կորպորատիվ ոճը և նախընտրած գույները'},
            { img:require('./assets/svg/21.svg'), description: 'Մենք սկսում ենք զարգացնել կայքը հետևաբար՝ օգտագործելով տարբեր ծրագրավորման լեզուներ'},
            { img:require('./assets/svg/21.svg'), title: 'ՔՈ ԿԱՅՔԸ ՊԱՏՐԱՍՏ Է:', description: 'Վերջին տարրերի ավելացում և վերջ',}
        ],
        our_team_content_head:  { title: 'Մեր աշխատակիցները', description: 'Մեր թիմում ամեն ինչ կարգաբերված է, յուրաքանչյուրն իր դերն է կատարում նախագծի ստեղծման և առաջմղման գործում'},
        our_team_content_bloc_items: [
            {icon:require('./assets/team/1.jpg'), title: 'ԾՐԱԳՐԻ ՂԵԿԱՎԱՐ ', description: 'Մենք ստանում ենք տվյալներ և քննարկում հաճախորդի ցանկությունները: Մենք վերլուծում ենք ընկերության գործունեության առանձնահատկությունները, առաջադրանքներ ենք դնում'},
            {icon:require('./assets/team/2.jpg'), title: 'ՎԵԲ ԴԻԶԱՅՆԵՐ', description: 'Մենք մտածում ենք տեղեկատվության ներկայացման, տվյալների ելքի շուրջ՝ հաշվի առնելով վարքագծային գործոնը։'},
            {icon:require('./assets/team/3.jpg'), title: 'ԴԻԶԱՅՆԵՐ', description: 'Մենք անհատապես մոտենում ենք հարմարվողական ինտերֆեյսի ձևավորմանը, ուշադիր մշակում մանրամասները և գրաֆիկական տարրերը:'},
            {icon:require('./assets/team/4.jpg'), title: 'ՎԵԲ ԾՐԱԳՐԱՎՈՐՈՂ', description: 'Մենք ռեսուրսին մոտենում ենք իր մասշտաբայնությամբ, հաշվի ենք առնում օգտագործելիության ցուցանիշը, այսինքն օգտագործման հեշտությունը: '},
            {icon:require('./assets/team/5.jpg'), title: 'ՔՈՓԱՅՐԻՏՐ', description: 'Մենք քրտնաջան աշխատում ենք որոնման խթանման, նախագծի ներքին և արտաքին օպտիմիզացման վրա:'},
            {icon:require('./assets/team/6.jpg'), title: 'ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ մենեջեր', description: 'Մենք ուղեկցում ենք ինչպես այն նախագծերը, որոնք մենք ինքներս ենք արել, այնպես էլ ցանկացած այլ, որը եկել է մեզ ծառայության համար:'},
            {icon:require('./assets/team/7.jpg'), title: 'SEO վերլուծաբան և օպտիմիզատոր', description: 'Մենք ուղեկցում ենք ինչպես այն նախագծերը, որոնք մենք ինքներս ենք արել, այնպես էլ ցանկացած այլ, որը եկել է մեզ ծառայության համար:'},
         ],

        contacts_content_head: { title: 'Կապվեք մեզ հետ', description: 'Եթե ​​ունեք լրացուցիչ հարցեր, խնդրում ենք ազատ զգալ կապվել մեզ հետ'},
        contacts_content_bloc_items: [
            {icon:require('./assets/svg/ph.svg'), title :'Հեռախոս', value: '+37496433673'},
            {icon:require('./assets/svg/em.svg'), title :'Էլ. ՀԱՍՑԵՆ', value: 'info@l-it.am'},
            {icon:require('./assets/svg/ad.svg'), title :'ՀԱՍՑԵՆ', value: 'Ազատության 24/17, E Plaza'},
         ],
         contact_for_footer :  {title:'Contacts', tel: '+37496433673', email:'info@l-it.am', addres:'Ազատության 24/17, E Plaza'},
         form_content_head:{ title: 'Գրեք ձեր հաղորդագրությունը', description: 'Մեր ծրագրի ղեկավարը կկապվի ձեզ հետ այս ձևը լրացնելուց հետո'},
         form_inputs:{
            form_check_text:'Ձևաթուղթը ներկայացնելով՝ ես համաձայնում եմ անձնական տվյալների մշակմանը',
            submit:'Պատվիրել խորհրդատվություն',
            message:'Հաղորդագրություն',
            phone:'Հեռախոս',
            name:'Ամբողջական անուն',
         },
         error_inputs:{
            names:'Անունը պարտադիր է',
            email: 'Требуется указать Email.',
            invalid_email: 'Խնդրում ենք մուտքագրել գործող էլեկտրոնային հասցե.',
            check: 'Առանց ձեր համաձայնության հնարավոր չէ հաղորդագրություն ուղարկել',
            phone: 'Հեռախոսահամարը պարտադիր է',
            message: 'Պահանջվում է հաղորդագրություն'
        }
    },
};
import axios from 'axios';
 
async function axiosData(){
    // const res = axios.get('http://127.0.0.1:8000/api/getHeaderDataVue');
    //  console.log(res.text());


   await axios.get('http://127.0.0.1:8000/api/getHeaderDataVue')
    
    
  
    .then(function(response){
 
        for (let iterator of response.data) {
            
            if(iterator.language == "RU"){
            //  console.log(messages.ru.home_page);
            // console.log(iterator.home_page_title);
            messages.ru.home_page = iterator.home_page_title;
            // console.log(messages.ru.home_page);
               
            }
        }
        return messages;
     })
     .catch(function(error){
            //console.log(error);
      });
      
}
console.log(axiosData());
console.log(messages);
function langs()
{
    axiosData()
    let lang = localStorage.getItem('lang');
    if(lang){return lang;}
    return "en";
}

var i18n = [];
function test(){
     i18n = createI18n({
        locale: langs(),
        messages:  messages,
    });
}

test()



export default i18n;