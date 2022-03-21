import { createI18n } from 'vue-i18n'


// function loadLocaleMessages() {
//     const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)

//     const messages = {}
//     locales.keys().forEach(key => {
//             const matched = key.match(/([A-Za-z0-9-_]+)\./i)

//             if (matched && matched.length > 1) {
//                 const locale = matched[1]
//                 messages[locale] = locales(key).default
//             }

//         })
//         // console.log(messages);
//     return messages
// }

// export default createI18n({
//     locale: 'en',
//     fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
//     messages: {
//         locale: 'en',
//         // set locale messages
//         messages: {
//             en: {
//                 message: {
//                     hello: 'hello world'
//                 }
//             },
//             ru: {
//                 message: {
//                     hello: 'こんにちは、世界'
//                 }
//             }
//         }
//     }
//     //loadLocaleMessages()
// })

const messages = {
    en: {
        home_page: "Contextual advertising and Website development",
        about_page:"Development of turnkey websites and their subsequent promotion",
        contact_page:"How to contact us",
        servise_page:"Contextual advertising for you and Web site development",
        team_page:"Highly qualified employees with extensive experience",
        home_content_text:"We will create an individual website, connect an advertising company, guarantee a flow of customers",
        about_content_text:"Our qualified specialists will create a website in a short time according to your wishes, without complaints",
        contact_content_text:"You can contact us, fill out the form on the website, and we will call you back!",
        servise_content_text:"Website development according to the presented design and the client's wishes, adding and changing functionality in a short time, website promotion, contextual advertising connection",
        team_content_text:"Our team consists of qualified specialists, including project managers, web developers, layout designers, designers, SEO specialists, content managers, copywriters.",
        head_button:"More",
        menu:{
            home:"Home",
            about:"About",
            servise:"Servise",
            team:"Team",
            contact:"Contact",
        },
        about_content_blok_items: [
            { icon: require('./assets/svg/4.svg'), title: 'Information analysis', description: 'We receive data and discuss the wishes of the client. We analyze the specifics of the company`s activities, set tasks'},
            { icon: require('./assets/svg/5.svg'), title: 'Structure design', description: 'We think over the presentation of information, data output, taking into account the behavioral factor. Laying conversion blocks'},
            { icon: require('./assets/svg/6.svg'), title: 'Interface', description: 'We individually approach the formation of an adaptive interface, carefully work out the details and graphic elements'},
         ],
         about_content_blok_items_2: [
            {icon:require('./assets/svg/7.svg'), title: 'Technical implementation', description: 'We approach the resource in terms of its scalability. We take into account the usability indicator, i.e. ease of use'},
            {icon:require("./assets/svg/8.svg"), title: 'Promotion and optimization', description: 'We are working hard on search promotion. Internal and external project optimization'},
            {icon:require('./assets/svg/9.svg'), title: 'Follow-up site support', description: 'We accompany both those projects that we have done ourselves, and any others that have come to us for service'},
            
         ],
         about_content_head:{
              title: "ABOUT COMPANY",
              description: "We are a company engaged in the creation and development of websites, their optimization and subsequent promotion.",
            },
            home_servise_content_heads: {
            title: 'Our services',
            description: 'We create and promote sites of various types, we are engaged in their subsequent support'
        },
        servise_content_bloks: [
            {icon:require('./assets/svg/1.svg'), title: 'Website development', description: 'We create different types of sites: online stores, business card sites, landing pages, promo sites. Layout according to our proposed design or according to yours, and the corresponding programming'},
            {icon:require("./assets/svg/2.svg"), title: 'Contextual advertising', description: 'We will create an effective advertising campaign that includes different formats for presenting information (text, graphics, video), we will select an incredible number of keywords.'},
            {icon:require('./assets/svg/3.svg'), title: 'UI/UX website design', description: 'We will create for you an individual website design, with an attractive interface, with a well-thought-out website architecture and with convenience and ease of use that meets business goals'},
            
         ],
         mission_content_heads: { title: 'OUR MISSION', description: 'Create successful Internet projects using modern technologies, an individual approach to each business'},
         home_team_content:{ title: 'Team', description: 'Our team consists of professional front-end and back-end developers, designers, advertising analysts and other employees with several years of experience in creating and promoting websites. We work with both small and medium businesses. Our customers only give the idea, and our team does the rest.'},
         more_info:"More Info", 
         footer_contacts:{title:'contacts', tel: '+37455555555', email:'L-it@mail.com', addres:'Erevani komery eli'},
         info:"Info", 
         info_menu: [
            {url: '/', name: 'Home'},
            {url: '/about', name: 'About'},
            {url: '/servise', name: 'Servise'},
            {url: '/teame', name: 'Team'},
            {url: '/contacts', name: 'Contact'},
        ], 
        contents_footer_mission: { title: 'OUR MISSION', description: 'We are a company engaged in the creation and development of websites, their optimization and subsequent promotion.'},
        dop_info:"For more information, you can subscribe to our news", 
        write_email:'write your email address',
        subscription:"Subscription",
        methods_content_blok_items: [
            {icon:require('./assets/svg/10.svg'), title: 'Information analysis', description: 'We receive data and discuss the wishes of the client. We analyze the specifics of the company`s activities, set tasks'},
            {icon:require('./assets/svg/11.svg'), title: 'Structure design', description: 'We think over the presentation of information, data output, taking into account the behavioral factor. Laying conversion blocks'},
            {icon:require('./assets/svg/12.svg'), title: 'Interface', description: 'We individually approach the formation of an adaptive interface, carefully work out the details and graphic elements'},
            {icon:require('./assets/svg/13.svg'), title: 'Information analysis', description: 'We receive data and discuss the wishes of the client. We analyze the specifics of the company`s activities, set tasks'},
            {icon:require('./assets/svg/14.svg'), title: 'Structure design', description: 'We think over the presentation of information, data output, taking into account the behavioral factor. Laying conversion blocks'},
            {icon:require('./assets/svg/15.svg'), title: 'Interface', description: 'We individually approach the formation of an adaptive interface, carefully work out the details and graphic elements'},
            
         ],
         methods_content_head:{ title: 'WEB DEVELOPMENT - OUR METHODS', description: 'We are a company engaged in the creation and development of websites, their optimization and subsequent promotio'},
         page_content_head:{ 
            title: 'ABOUT COMPANY',
            description: 'We are a company engaged in the creation and development of websites, their optimization and subsequent promotion.',
            description2: 'Integrated web development, creation and subsequent development of an Internet project, provided by one contractor, will allow you to reduce costs, and we will be able to create a resource with maximum efficiency for a long existence and successful activity on the Internet.'
             },
        advertising_title: { title: 'Contextual advertising'},
        advertising_content: [
            { img:require('./assets/svg/16.svg'), title: 'Launch efficiency', description: 'One specialist manages no more than 3 clients at the same time - this allows you to quickly solve the problems of your business'},
            { img:require('./assets/svg/17.svg'), title: 'Rational use of the budget', description: 'We don`t waste a single ruble. The cost of the work is fully justified!'},
            { img:require('./assets/svg/18.svg'), title: 'Efficiency and guarantee of results', description: 'We are responsible for our work and do everything to achieve our goals'},
            { img:require('./assets/svg/19.svg'), title: 'Only targeted traffic', description: 'It is important for us not only to create the visible popularity of the resource, but to convert it into your real income.'},
            { img:require('./assets/svg/20.svg'), title: 'Development and training', description: 'We will tell and show everything about marketing activities as clearly as possible.'}
        ],
        createds_title: { title: 'Contextual advertising',  title2: 'Creating a structure for the site pages'},
        createds_content: [
           { img:require('./assets/svg/21.svg'), description: 'One specialist manages no more than 3 clients at the same time - this allows you to quickly solve the problems of your business'},
           { img:require('./assets/svg/21.svg'), description: 'We don`t waste a single ruble. The cost of the work is fully justified!'},
           { img:require('./assets/svg/21.svg'), description: 'We are responsible for our work and do everything to achieve our goals'},
           { img:require('./assets/svg/21.svg'),  description: 'It is important for us not only to create the visible popularity of the resource, but to convert it into your real income.'},
           { img:require('./assets/svg/21.svg'), title: 'Development and training', description: 'We will tell and show everything about marketing activities as clearly as possible.',}
        ],
        our_team_content_head:  { title: 'Our employees', description: 'In our team, everything is debugged, everyone is doing their part in creating and promoting the project'},
        our_team_content_blok_items: [
            {icon:require('./assets/svg/achik.svg'), title: 'PROJECT MANAGER', description: 'We receive data and discuss the wishes of the client. We analyze the specifics of the company`s activities, set tasks'},
            {icon:require("./assets/svg/achik.svg"), title: 'WEB DESIGNER', description: 'We think over the presentation of information, data output, taking into account the behavioral factor. Laying conversion blocks'},
            {icon:require('./assets/svg/achik.svg'), title: 'DESIGNER', description: 'We individually approach the formation of an adaptive interface, carefully work out the details and graphic elements'},
            {icon:require('./assets/svg/achik.svg'), title: 'WEB PROGRAMMER', description: 'We approach the resource in terms of its scalability. We take into account the usability indicator, i.e. ease of use'},
            {icon:require("./assets/svg/achik.svg"), title: 'COPYWRITER', description: 'We are working hard on search promotion. Internal and external project optimization'},
            {icon:require('./assets/svg/achik.svg'), title: 'CONTENT MANAGER', description: 'We accompany both those projects that we have done ourselves, and any others that have come to us for service'},
            {icon:require('./assets/svg/achik.svg'), title: 'SEO Analyst and Optimizer', description: 'We accompany both those projects that we have done ourselves, and any others that have come to us for service'},
            
         ],
        contacts_content_head: { title: 'Contact us', description: 'If you have further questions, please feel free to contact us.'},
        contacts_content_blok_items: [
            {icon:require('./assets/svg/ph.svg'), title :'Phone', value: '+7 968 026 66 60 '},
            {icon:require('./assets/svg/em.svg'), title :'Email', value: 'L-it@mail.com'},
            {icon:require('./assets/svg/ad.svg'), title :'Addres', value: 'Yerevan '},
         ],
         form_content_head:{ title: 'write your messag', description: 'Наш проект менеджер свяжется с вами после заполнения данной формы'},
         form_inputs:{
            form_check_text:'By submitting the form, I consent to the processing of personal data',
            submit:'Order a Consultation',
            message:'Message',
            phone:'Phone',
            name:'Full name',
         }






    },
    ru: {
        home_page: "Контекстная реклама и Разработка сайтовen",
        about_page:"Разработка сайтов под ключ и их последующее продвижение",
        contact_page:"Как связаться с нами",
        servise_page:"Контекстная реклама для Вас и Веб разработка сайтов",
        team_page:"Высококлассные сотрудники с большим опытом",
        home_content_text:"Создадим индивидуальный сайт, подключим рекламную компанию, гарантируем поток клиентов ",
        about_content_text:"Наши квалифицированные специалисты создадут сайт за короткий срок по вашим пожеланиям, без жалоб",
        contact_content_text:"Вы  можете связаться с нами, заполним форму на сайте, и мы вам обязательно перезвоним!",
        servise_content_text:"Разработка сайта согласно представленному дизайну и пожеланиям клиента, добавление и изменение функционалов за короткий срок, продвижение сайта, подключение контекстной рекламы",
        team_content_text:"Наша команда состоит из квалифицированных специалистов, в их числе менеджеры проектов, веб-разработчики, верстальщики, дизайнеры,  SEO специалисты, контент-менеджеры, копирайтеры.",
        head_button:"Больше",
        menu:{
            home:"Главная",
            about:"О Нас",
            servise:"Услуги",
            team:"Команда",
            contact:"Контакты",
        },
        about_content_blok_items: [
            { icon: require('./assets/svg/4.svg'), title: 'Анализ информации', description: 'Получаем данные и обсуждаем пожелания клиента. Анализируем специфику деятельности компании, ставим задачи'},
            { icon: require('./assets/svg/5.svg'), title: 'Проектирование структурыа', description: 'Продумываем представление информации, вывод данных, учитывая поведенческий фактор. Закладываем конверсионные блоки'},
            { icon: require('./assets/svg/6.svg'), title: 'Интерфейс', description: 'Индивидуально подходим к формированию адаптивного интерфейса, Тщательно прорабатываем детали и графические элементы'},
            
         ],
        about_content_blok_items_2: [
            {icon:require('./assets/svg/7.svg'), title: 'Техническая реализация', description: 'Подходим к ресурсу с точки зрения его масштабируемости. Учитываем показатель юзабилити, т.е. удобство пользования'},
            {icon:require('./assets/svg/8.svg'), title: 'Продвижение и оптимизация', description: 'Проводим плотную работу по поисковому продвижению. Внутренняя и внешняя оптимизация проекта'},
            {icon:require('./assets/svg/9.svg'), title: 'Последующая поддержка сайта', description: 'Сопровождаем как те проекты, которые сами сделали, так и любые другие, которые пришли к нам на обслуживание'},
            
        ],
        about_content_head:{ 
            title: 'О КОМПАНИИ',
            description: 'Мы – компания, занимающая созданием и разработкой сайтов, их оптимизацией и последующим продвижением.',
        },
        home_servise_content_heads: { title: 'Наши услуги', description: 'Мы создаем и продвигаем сайты разных типов, занимаемся их последующим суппортом'},
        servise_content_bloks: [
            {icon:require('./assets/svg/1.svg'), title: 'Создание сайтов', description: 'Создаем разные виды сайтов: интернет магазины, сайт-визитки, лендинги, промо сайты. Верстка по нашему предложенному дизайну или по вашему, и соответствующее программирование'},
            {icon:require("./assets/svg/2.svg"), title: 'Контекстная реклама', description: 'Создадим эффективную рекламную компанию, включающую в себя разные форматы подачи информации (текстовые, графические, видео), подберем неимоверное количество ключевых слов.'},
            {icon:require('./assets/svg/3.svg'), title: 'UI/UX дизайн сайта', description: 'Создадим для вас индивидуальный дизайн сайта, с привлекательным интерфейсом, с продуманной архитектурой сайта и с удобством и простотой использования, отвечающей целям бизнеса'},
            
         ],
         mission_content_heads: { title: 'НАША МИССИЯ', description: 'Создавать успешные интернет проекты, используя современные технологии, индивидуальный подход к каждому бизнесу'},
         home_team_content:{ title: 'Команда', description: 'Наша команда состоит из профессиональных фронтенд и бэкэнд разработчиков, дизайнеров, рекламных аналитиков и других сотрудников, имеющих несколько лет опыта в сфере создания и продвижения сайтов. Мы работаем как с малым, так и со средним бизнесом. Наши заказчики только дают идею, а наша команда все остальное.'},
         more_info:"Больше информации", 
        footer_contacts:{title:'контакты', tel: '+37455555555', email:'L-it@mail.com', addres:'Erevani komery eli'},
        info:"Информация", 
        info_menu: [
            {url: '/', name: 'Главная'},
            {url: '/about', name: 'О Нас'},
            {url: '/servise', name: 'Услуги'},
            {url: '/teame', name: 'Команда'},
            {url: '/contacts', name: 'Контакты'},
        ], 
        contents_footer_mission: { title: 'Наша миссия', description: ' Мы – компания, занимающая созданием и разработкой сайтов, их оптимизацией и последующим продвижением.'},
        dop_info:"Для дополнительной информации вы можете подписаться на наши новости",
        write_email:'напишите свой адрес электронной почты',
        subscription:"Подписаться",
        methods_content_blok_items: [
            {icon:require('./assets/svg/10.svg'), title: 'Анализ информации', description: 'Получаем данные и обсуждаем пожелания клиента. Анализируем специфику деятельности компании, ставим задачи'},
            {icon:require('./assets/svg/11.svg'), title: 'Проектирование структурыа', description: 'Продумываем представление информации, вывод данных, учитывая поведенческий фактор. Закладываем конверсионные блоки'},
            {icon:require('./assets/svg/12.svg'), title: 'Интерфейс', description: 'Индивидуально подходим к формированию адаптивного интерфейса, Тщательно прорабатываем детали и графические элементы'},
            {icon:require('./assets/svg/13.svg'), title: 'Анализ информации', description: 'Получаем данные и обсуждаем пожелания клиента. Анализируем специфику деятельности компании, ставим задачи'},
            {icon:require('./assets/svg/14.svg'), title: 'Проектирование структурыа', description: 'Продумываем представление информации, вывод данных, учитывая поведенческий фактор. Закладываем конверсионные блоки'},
            {icon:require('./assets/svg/15.svg'), title: 'Интерфейс', description: 'Индивидуально подходим к формированию адаптивного интерфейса, Тщательно прорабатываем детали и графические элементы'},
            
         ],
         methods_content_head:{ title: 'ВЕБ РАЗРАБОТКА - НАШИ МЕТОДЫ', description: 'Мы – компания, занимающая созданием и разработкой сайтов, их оптимизацией и последующим продвижением.'},
         page_content_head:{ 
                title: 'О КОМПАНИИ',
                description: 'Мы – компания, занимающая созданием и разработкой сайтов, их оптимизацией и последующим продвижением.',
                description2: 'Комплексная web разработка, создание и последующее развитие интернет проекта, оказываемая одним исполнителем, позволит вам снизить расходы, а нам даст возможность с максимальной эффективностью создать ресурс для долгого существования и успешной деятельности на просторах интернета.'
          },

        advertising_title: { title: 'Контекстная реклама'},
        advertising_content: [
            { img:require('./assets/svg/16.svg'), title: 'Оперативность запуска', description: 'Один специалист ведет не более 3 клиентов одновременно — это позволяет оперативно решать задачи вашего бизнеса'},
            { img:require('./assets/svg/17.svg'), title: 'Рациональность использования бюджета', description: 'Мы не расходуем ни одного рубля впустую. Стоимость работ полностью оправдана!'},
            { img:require('./assets/svg/18.svg'), title: 'Эффективность и гарантия результата', description: 'Мы отвечаем за свою работу и делаем все, чтобы достичь поставленных целей'},
            { img:require('./assets/svg/19.svg'), title: 'Только целевой трафик', description: 'Нам важно не просто создать видимую популярность ресурса, а конвертировать ее в ваш реальный доход'},
            { img:require('./assets/svg/20.svg'), title: 'Развитие и обучение', description: 'Мы максимально доходчиво расскажем и покажем все про маркетинговые активности'}
         ],
         createds_title: { title: 'Контекстная реклама',  title2: 'Создаем структуру для страниц сайта'},
         createds_content: [
            { img:require('./assets/svg/21.svg'), description: 'Один специалист ведет не более 3 клиентов одновременно — это позволяет оперативно решать задачи вашего бизнеса'},
            { img:require('./assets/svg/21.svg'), description: 'Мы не расходуем ни одного рубля впустую. Стоимость работ полностью оправдана!'},
            { img:require('./assets/svg/21.svg'), description: 'Мы отвечаем за свою работу и делаем все, чтобы достичь поставленных целей'},
            { img:require('./assets/svg/21.svg'),  description: 'Нам важно не просто создать видимую популярность ресурса, а конвертировать ее в ваш реальный доход'},
            { img:require('./assets/svg/21.svg'), title: 'Развитие и обучение', description: 'Мы максимально доходчиво расскажем и покажем все про маркетинговые активности',}
         ],
         our_team_content_head:  { title: 'Наши сотрудники ', description: 'В нашей команде все отлажено, каждый занимается своей частью в создании и продвижении проекта'},
        our_team_content_blok_items: [
            {icon:require('./assets/svg/achik.svg'), title: 'МЕНЕДЖЕР ПРОЕКТА ', description: 'Получаем данные и обсуждаем пожелания клиента. Анализируем специфику деятельности компании, ставим задачи'},
            {icon:require("./assets/svg/achik.svg"), title: 'ВЭБ ДИЗАЙНЕР', description: 'Продумываем представление информации, вывод данных, учитывая поведенческий фактор. Закладываем конверсионные блоки'},
            {icon:require('./assets/svg/achik.svg'), title: 'ВЕРСТАЛЬЩИК', description: 'Индивидуально подходим к формированию адаптивного интерфейса, Тщательно прорабатываем детали и графические элементы'},
            {icon:require('./assets/svg/achik.svg'), title: 'ВЕБ-ПРОГРАММИСТ', description: 'Подходим к ресурсу с точки зрения его масштабируемости. Учитываем показатель юзабилити, т.е. удобство пользования'},
            {icon:require("./assets/svg/achik.svg"), title: 'КОПИРАЙТЕР', description: 'Проводим плотную работу по поисковому продвижению. Внутренняя и внешняя оптимизация проекта'},
            {icon:require('./assets/svg/achik.svg'), title: 'КОНТЕНТ МЕНЕДЖЕР', description: 'Сопровождаем как те проекты, которые сами сделали, так и любые другие, которые пришли к нам на обслуживание'},
            {icon:require('./assets/svg/achik.svg'), title: 'SEO Аналитик и Оптимизатор', description: 'Сопровождаем как те проекты, которые сами сделали, так и любые другие, которые пришли к нам на обслуживание'},
         ],

        contacts_content_head: { title: 'Свяжитесь с нами', description: 'Если у вас есть дополнительные вопросы, пожалуйста, не стесняйтесь обращаться к нам.'},
        contacts_content_blok_items: [
            {icon:require('./assets/svg/ph.svg'), title :'Телефон', value: '+7 968 026 66 60 '},
            {icon:require('./assets/svg/em.svg'), title :'Email', value: 'L-it@mail.com'},
            {icon:require('./assets/svg/ad.svg'), title :'АДРЕС', value: 'Yerevan '},
         ],
         form_content_head:{ title: 'напишите ваше сообщение', description: 'Наш проект менеджер свяжется с вами после заполнения данной формы'},
         form_inputs:{
            form_check_text:'Отправляя форму, я даю согласие на обработку персональных данных',
            submit:'Заказать Консультацию',
            message:'Сообщение',
            phone:'Телефон',
            name:'ФИО',
         }




    },
};

const i18n = createI18n({
    locale: "ru",
    messages: messages,
});

export default i18n;