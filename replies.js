module.exports={
'hello':{text:'привет[а-я]*|здраствуй[а-я]*|добр[а-я]* (д|вечер|утр)[а-я]*',reply:'0',type:'text',value:['Здраствуйте!','Привет!']},
'adress':{text:'(почтовый|юридический).*адрес|адрес.*(фабрик[иа]|предприяти[яе]|организаци[ия]|фирм[ыа]|компани[ия])',type:'text',value:'Адрес:\n247760, Республика Беларусь, Гомельская область, г. Мозырь, ул. Пролетарская, 51.'},
'map':{text:'карта',type:'location',value:'Карта',lat:'52.049',lon:'29.245'}, 
'name':{text:'(|официальное|юридическое|полное).*(наименование|название|называется).*(фабрик[иа]|предприяти[яе]|организаци[ия]|фирм[ыа]|компани[ия])',type:'text',value:'Название:\nОткрытое акционерное общество «Мозырская швейная фабрика «Надэкс».'},
'iban':{text:'iban|(банковск[а-я]*|расчетн[а-я]*).*счет[а-я]*',type:'text',value:'IBAN: BY75BAPB30124405000130000000(BYN🇧🇾) в ОАО "Белагропромбанк", BIC: BAPBBY2X.'},
'unn':{text:'унп|унн|инн',type:'text',value:'УНП: 400086726.'},
'time':{text:'(время|график|режим).*работы|рабочее время',type:'text',value:'Режим работы:\n🕐8:30-17:00(GMT+3:00), ☕️обед: 13:15-13:45, рабочие дни: понедельник-пятница.'},
'www':{text:'(|веб)сайт',type:'text',value:'Cайт: http://www.nadex.by.'},
'eshop':{text:'интернет.*магазин[а-я]*',type:'text',value:'Интернет-магазин: https://рубашки.бел.'},
'ging':{text:'федоренко|главн[а-я]* инженер[а-я]*',type:'text',value:'Главный инженер:\nФедоренко Антонина Алексеевна.\n☎️+375(236)37-73-98, 📧a.fedorenko@nadex.by.'},
'gbuh':{text:'дробыш|(главбух[а-я]*|главн[а-я]* бухгалтер[а-я]*)',type:'text',value:'Главный бухгалтер:\nДробыш Мария Александровна.\n☎️+375(236)37-71-56, 📧gbuh@nadex.by.'},
'urist':{text:'сарнавская|(юрист|юрисконсульт)[а-я]*|(замдир[а-я]*|заместит[а-я]* директора).*(идеолог|правовы)[а-я]*',type:'text',value:'Заместитель директора по правовым, идеологическим вопросам и работе с персоналом, юрисконсульт:\nСарнавская Наталья Александровна.\n☎️+375(236)37-75-69, 📧urist@nadex.by.'},
'zamdir_commerce':{text:'фицнер|(коммерческ[а-я]* директор[а-я]*|замдир[а-я]*|заместит[а-я]* директора).*коммер[а-я]*',type:'text',value:'Заместитель директора по коммерческим вопросам:\nФицнер Елена Ивановна.\n☎️+375(236)37-72-20, 📧zamdir@nadex.by.'},
'zamdir_logistic':{text:'прокопцов|(замдир[а-я]*|заместит[а-я]* директора).*логист[а-я]*',type:'text',value:'Заместитель директора по логистике:\nПрокопцов Евгений Викторович.\n☎️+375(236)37-00-01, 📧e.prokoptsov@nadex.by.'},
'zamdir':{text:'(замдир[а-я]*|заместит[а-я]* директора)',type:'text',reply:'0', value:'У нас четыре заместителя директора:\n-по коммерческим вопросам;\n-логистике;\n-развитию;\n-идеологическим вопросам.'},  
'boss':{text:'ермоленко|директор[а-я]*|босс',type:'text',value:'Директор:\nЕрмоленко Екатерина Михайловна.\n☎️+375(236)37-78-84(приемная).'},
'reception':{text:'шевко|приемн[а-я]*|секретар[а-я]*',type:'text',value:'Приемная:\n☎️+375(236)37-78-84, 📠+375(236)37-98-45, 📧info@nadex.by.\nШевко Валентина Владимировна, секретарь.'},
'it':{text:'липу|прокопченко|программист[а-я]*|ит|информационны[а-я]* технологи[а-я]*|асуп',type:'text',value:'Отдел информационных технологий:\n☎️+375(236)37-75-76, 📧it@nadex.by.\nПрокопченко Виктор Петрович, начальник отдела.\nЛипу Елена Калевовна, инженер-программист.'},
'sales':{text:'сигай|дриго|продаж[а-я]*|сбыт[а-я]*|(|розничн[а-я]* )торговл[а-я]*',type:'text',value:'Отдел продаж:\n☎️+375(236)37-70-09, +375(236)37-73-43, +375(236)37-75-54, 📧sales@nadex.by.\nСигай Татьяна Сергеевна, начальник отдела.'},
'marketing':{text:'таланова|вик(а|тория)|маркетинг[а-я]*|реклам[а-я]*',type:'text',value:'Отдел маркетинга:\n☎️+375(236)37-73-41, 📧marketing@nadex.by.\nТаланова Виктория Рустамовна, начальник отдела.'},
'buh':{text:'васько|бухгалтери[а-я]*',type:'text',value:'Бухгалтерия:\n☎️+375(236)37-75-39, 📧buh@nadex.by.\nВасько Ирина Семеновна, заместитель главного бухгалтера.\n\nГруппа по учету заработной платы:\n☎️+375(236)37-73-08.\nПелипейко Татьяна Евгеньевна, бухгалтер.'},
'hr':{text:'тупик|кадр[а-я]*|персонал[а-я]*',type:'text',value:'Отдел по работе с персоналом:\n☎️+375(236)37-73-80, 📧kadry@nadex.by.\nТупик Татьяна Адамовна, начальник отдела.'},
'oroz':{text:'макаренко|ороз|механик[а-я]*|энергетик[а-я]*',type:'text',value:'Отдел по ремонту оборудования, зданий и энергетического обслуживания:\n☎️+375(236)37-73-77, 📧oroz@nadex.by.\nМакаренко Дмитрий Николаевич, начальник отдела.'},
'plan':{text:'глухова|(фэо|планов(ый|ого)|экономическ(ий|ого)|финансов(ый|ого))',type:'text',value:'Финансово-экономический отдел:\n☎️+375(236)37-73-71, 📧plan@nadex.by.\nГлухова Людмила Викторовна, начальник отдела.'},
'ouk':{text:'дука|отк|качеств[а-я]*',type:'text',value:'Отдел управления качеством:\n☎️+375(236)37-72-20, 📧ouk@nadex.by.\nДука Галина Викторовна, начальник отдела.'},
'bpp':{text:'бибик|бпп|производств[а-я]*',type:'text',value:'Бюро по подготовке производства:\n☎️+375(236)37-70-64, 📧tex@nadex.by.\nБибик Анна Николаевна, начальник бюро.'},
'ves':{text:'бай|тарасевич|вэс|внешне-экономическ[а-я]*|снабжен[а-я]*|закуп[а-я]*',type:'text',value:'Отдел ВЭС и МТС:\n☎️+375(236)37-70-97, 📧ves@nadex.by.\nБай Елена Ивановна, начальник отдела.\nТарасевич Татьяна Олеговна, специалист по снабжению.'},
'news':{text:'новости',type:'text',value:'Пока новостей нет.'},
'akcii':{text:'акци[яию]',type:'text',value:'Акции:\nВ фирменных магазинах с 7 по 15 июля скидка 15% на женский ассортимент.\n📌Скидка не распространяется на продукцию из льна.'},
'citizen':{text:'жалоб[а-я]*|пожаловаться|претензи[а-я]*|горяч[а-я]* лини[а-я]*',type:'text',value:'Если при взаимоотношениях с сотрудниками компании вы стали свидетелем правонарушения, или желаете обратиться с предложением, заявлением, жалобой, вы можете направить свое обращение на почтовый адрес компании или на факс 📠+375(236)37-98-45.\nВы можете также обратиться по телефону «горячей линии» ☎️+375(236)37-78-84 в будние дни, 🕐08:30-17:00.'},
'certif':{text:'подарочны[а-я]* сертификат[а-я]*',type:'text',value:'Во всех наших фирменных магазинах вы можете приобрести подарочные сертификаты номиналом 20, 30 и 50 BYN.'},
'vakancii':{text:'ваканси[а-я]*|трудоустройств[а-я]*',type:'text',value:'По всем вопросам, связанным с трудоустройством, вы можете обращаться в отдел по работе с персоналом.\n☎️+375(236)37-73-80.'},
'shop_mozyr':{text:'мозырь|магазин[а-я]*.*мозыр[а-я]*',type:'text',value:'Фирменные магазины в Мозыре:\nул. Пролетарская, 49.\n🕐Время работы: понедельник-суббота 9:30-18:30, воскресенье 9:30-16:00, без обеда.\nТЦ «Малининский».\n🕐Время работы: понедельник-суббота 10:00-19:00, воскресенье 10:00-18:00, без обеда.'},
'shop_gomel':{text:'гомель|магазин[а-я]*.*гомел[а-я]*',type:'text',value:'Фирменные магазины в Гомеле:'},
'shop_kalinkovichi':{text:'калинкович[а-я]*',type:'text',value:'Фирменный магазин в Калинковичах:\nТРЦ «Global Market», ул. 50 лет Октября, 2-й этаж.\n🕐Время работы: понедельник-суббота 10:00-20:00, воскресенье 10:00-18:00, без обеда.'},
'shop_pinsk':{text:'пинск[а-я]*',type:'text',value:'Фирменный магазин в Пинске:\nул. Заслонова, 10.\n🕐Время работы: вторник-пятница 10:00-19:00, суббота 10:00-18:00, воскресенье 10:00-15:00, без обеда, выходной-понедельник.'},
'shop_minsk':{text:'минск[а-я]*',type:'text',value:'Фирменный магазин в Минске:'},
'shop_bobruisk':{text:'боруйск[а-я]*',type:'text',value:'Фирменный магазин в Бобруйске:'},
'shop_svetlogorsk':{text:'светлогорск[а-я]*',type:'text',value:'Фирменный магазин в Светлогорске:'},
'shops':{text:'(розничн|фирменн)[а-я]* (магазин[а-я]*|торговля|сеть)|магазин[а-я]*|где купить|(|купить).*розни[а-я]*',reply:'0',type:'text',value:'Наши фирменные магазины есть в Бобруйске, Гомеле, Калинковичах, Минске, Мозыре, Пинске и Светлогорске.\nКакой город вас интересует?'},
'opt':{text:'сотрудничество|(|купить).*опт[а-я]*',type:'text',value:'Если Вы занимаетесь оптовой или розничной продажей и желаете продавать нашу продукцию, обращайтесь в отдел продаж.\n☎️+375(236)37-73-43, 📧sales@nadex.by.'},
'help':{text:'помо(щь|чь)|поддержка',type:'text',value:'Если Вам нужно получить какую-либо информацию, просто напишите мне об этом, и я тут же отвечу.\nВ любой непонятной ситуации используйте команду /start.'},
'weather':{text:'(погода|прогноз).*мозыр[а-я]*',type:'text',value:'Прогноз погоды с openweathermap.org.'},
'thanks':{text:'спасибо',reply:'0',type:'text',value:['Пожалуйста!','Рад был помочь!','Не за что!']},
'hi':{text:'как.*дела',type:'text',value:['У меня все хорошо!','Отлично!']},
'bye':{text:'пока|до свидания',reply:'0',type:'text',value:['Пока!','До свидания!']}
}                                                                          
