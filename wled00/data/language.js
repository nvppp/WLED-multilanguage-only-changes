// ==========================================================================
// language.js v1.0.0
// https://github.com/nvppp/WLED-multilanguage/
// License: The MIT License (MIT)
// 2023-2024 nvppp
// ==========================================================================
export {langDef, langAll, langArr, lL, selectLang, changeLang, placeH, createLang, loadLang, countingDown}; // список экспортируемых переменных
const langDef = 'en';//Set one default language //Язык по умолчанию
const langAll = {"en":"EN", "ru":"RU", "pl":"PL", "wl":"wL",};//All supported languages// Языки которые добавлены
const langArr= {
  //wled_server.cpp
  "xxq" :  {
    "ru": "Не реализовано",
    "en": "Not implemented",
  },
  "xxw" :  {
    "ru": "Редактор FS отключен в этой сборке.",
    "en": "The FS editor is disabled in this build.",
  },
  "xxe" :  {
    "ru": "Идёт перезагрузка устройства",
    "en": "Rebooting now",
  },
  "xxr" :  {
    "ru": "Ожидайте примерно <span class=\"l-timer\">00</span><span class=\"l_load\">...</span>",
    "en": "Please wait ~<span class=\"l-timer\">00</span><span class=\"l_load\">...</span>",
  },
  "xxt" :  {
    "ru": "418. Я чайник.",
    "en": "418. I'm a teapot.",
  },
  "xxy" :  {
    "ru": "(Материальный встроенный продвинутый проект мерцания)",
    "en": "(Tangible Embedded Advanced Project Of Twinkling)",
  },
  "xxu" :  {
    "ru": "Доступ запрещен",
    "en": "Access Denied",
  },
  "xxi" :  {
    "ru": "Не удалось обновить!",
    "en": "Update failed!",
  },
  "xxo" :  {
    "ru": "Пожалуйста, проверьте файл и повторите попытку!",
    "en": "Please check your file and retry!",
  },
  "xxp" :  {
    "ru": "Успешно обновлено!",
    "en": "Update successful!",
  },
  "xxa" :  {
    "ru": "Перезагрузка<span class=\"l_load\">...</span>",
    "en": "Rebooting<span class=\"l_load\">...</span>",
  },
  "xxs" :  {
    "ru": "ОТА-обновление отключено в этой сборке.",
    "en": "OTA updating is disabled in this build.",
  },
  "xxd" :  {
    "ru": "DMX отключен в этой сборке.",
    "en": "DMX support is not enabled in this build.",
  },
  "xxf" :  {
    "ru": "Настройки заблокированы",
    "en": "Settings locked",
  },
  "xxg" :  {
    "ru": "PIN-код не установлен",
    "en": "No PIN set",
  },

  "xcq" :  {
    "ru": "Перенаправление<span class=\"l_load\">...</span>",
    "en": "Redirecting<span class=\"l_load\">...</span>",
  },
  "xce" :  {
    "ru": "Пожалуйста, разблокируйте OTA в настройках безопасности!",
    "en": "Please unlock OTA in security settings!",
  },
  "xcr" :  {
    "ru": "Пожалуйста, разблокируйте настройки с помощью PIN-кода!",
    "en": "Please unlock settings using PIN code!",
  },
  "xct" :  {
    "ru": "Загрузка ",
    "en": "Uploading ",
  },
  "xcy" :  {
    "ru": "Восстановление конфигурации завершено успешно.\nПерезагрузка<span class=\"l_load\">...</span>",
    "en": "Configuration restore successful.\nRebooting<span class=\"l_load\">...</span>",
  },
  "xcu" :  {
    "ru": "Файл успешно загружен!",
    "en": "File Uploaded!",
  },
  "xci" :  {
    "ru": "Началось ОТА-обновление",
    "en": "OTA Update Start",
  },
  "xco" :  {
    "ru": "Обновление прошло успешно",
    "en": "Update Success",
  },
  "xcp" :  {
    "ru": "Нам не удалось завершить обновление",
    "en": "Update Failed",
  },
  "xca" :  {
    "ru": "Настройки для этого запроса не реализованы.",
    "en": "Settings for this request are not implemented.",
  },
  "xcs" :  {
    "ru": "PIN-код неправильный",
    "en": "PIN incorrect.",
  },
  "xcd" :  {
    "ru": "WiFi",
    "en": "WiFi",
  },
  "xcf" :  {
    "ru": "Пожалуйста, подключитесь к новому IP-адресу (если он изменен)",
    "en": "Please connect to the new IP (if changed)",
  },
  "xcg" :  {
    "ru": "LED",
    "en": "LED",
  },
  "xch" :  {
    "ru": "Пользовательского интерфейса",
    "en": "UI",
  },
  "xcj" :  {
    "ru": "Синхронизация",
    "en": "Sync",
  },
  "xck" :  {
    "ru": "Время",
    "en": "Time",
  },
  "xcl" :  {
    "ru": "Безопасность",
    "en": "Security",
  },
  "xcz" :  {
    "ru": "Идёт перезагрузка устройства, пожалуйста ожидайте около <span class=\"l-timer\">00</span><span class=\"l_load\">...</span>",
    "en": "Rebooting, please wait ~<span class=\"l-timer\">00</span><span class=\"l_load\">...</span>",
  },
  "xcx" :  {
    "ru": "DMX",
    "en": "DMX",
  },
  "xcc" :  {
    "ru": "Пользовательские",
    "en": "Usermods",
  },
  "xcv" :  {
    "ru": "2D",
    "en": "2D",
  },
  "xcb" :  {
    "ru": "Языковые",
    "en": "Language",
  },
  "xcn" :  {
    "ru": "ПИН-код принят",
    "en": "PIN accepted",
  },
  "xcm" :  {
    "ru": "ПИН-код отклонён",
    "en": "PIN rejected",
  },
  "xcw" :  {
    "ru": " настройки сохранены.",
    "en": " settings saved.",
  },

  //set.cpp
  "xvq" :  {
    "ru": "Сброшено до заводских настроек.",
    "en": "All Settings erased.",
  },
  "xvw" :  {
    "ru": "Подключитесь к точке доступа \"WLED-AP\" для повторной настройки",
    "en": "Connect to WLED-AP to setup again",
  },


  "xzt" :  {
    "ru": "настройки сохранены",
    "en": "settings saved.",
  },
  "xzy" :  {
    "ru": "WiFi",
    "en": "WiFi",
  },
  "xzu" :  {
    "ru": "LED",
    "en": "LED",
  },
  "xzi" :  {
    "ru": "elfkbnm",
    "en": "UI",
  },
  "xzo" :  {
    "ru": "5632",
    "en": "Sync",
  },
  "xzp" :  {
    "ru": "Временные",
    "en": "Time",
  },
  "xza" :  {
    "ru": "Безопасность",
    "en": "Security",
  },
  "xzs" :  {
    "ru": "DMX",
    "en": "DMX",
  },
  "xzd" :  {
    "ru": "",
    "en": "Usermods",
  },
  "xzf" :  {
    "ru": "2D",
    "en": "2D",
  },
  "xzg" :  {
    "ru": "Языковые",
    "en": "Language",
  },


  // cpal/cpal.htm
  // "uq" :  {
  //   "ru": "Создание собственной цветовой палитры WLED",
  //   "en": "WLED Custom Palette Editor",
  // },
  // "uw" :  {
  //   "ru": "Редактор цветовой палитры WLED",
  //   "en": "WLED Custom Palette Editor",
  // },
  // "ue" :  {
  //   "ru": "Используемые в настоящее время пользовательские палитры",
  //   "en": "Currently in use custom palettes",
  // },
  // "ur" :  {
  //   "ru": "Нажмите на редактор градиента, чтобы добавить новый цветной слайдер, затем на цветное поле под слайдером, чтобы изменить его цвет. \n" +
  //       "      Нажмите на красное поле под индикатором (и подтвердите), чтобы удалить. \n" +
  //       "      Как только закончите, нажмите на значок со стрелкой, чтобы загрузить в нужный слот. \n" +
  //       "      Чтобы отредактировать существующую палитру, щелкните значок карандаша.",
  //   "en": "Click on the gradient editor to add new color slider, then the colored box below the slider to change its color. \n" +
  //       "      Click the red box below indicator (and confirm) to delete. \n" +
  //       "      Once finished, click the arrow icon to upload into the desired slot. \n" +
  //       "      To edit existing palette, click the pencil icon.",
  // },
  // "ut" :  {
  //   "ru": "Доступные статические палитры",
  //   "en": "Available static palettes",
  // },

  // 404.htm
  "pet" :  {
    "ru": "WLED Ошибка 404",
    "en": "Not found",
  },
  "pey" :  {
    "ru": "404 ошибка",
    "en": "404 Not Found",
  },
  "peu" :  {
    "ru": "Akemi не знает, куда вы направляетесь<span class=\"l_load\">...</span>",
    "en": "Akemi does not know where you are headed<span class=\"l_load\">...</span>",
  },
  "pei" :  {
    "ru": "Назад к управлению",
    "en": "Back to controls",
  },

  // dmxmap.htm


  // index.htm
  "piwq" :  {
    "ru": "Главная панель WLED",
    "en": "WLED",
  },
  "piww" :  {
    "ru": "Загрузка WLED<span class=\"l_load\">...</span>",
    "en": "Loading WLED UI<span class=\"l_load\">...</span>",
  },
  "piwe" :  {
    "ru": "Включите поддержку JavaScript!",
    "en": "Sorry, WLED UI needs JavaScript!",
  },
  "piwr" :  {
    "ru": "Питание",
    "en": "Power",
  },
  "piwt": {
    "ru": "Таймер",
    "en": "Timer",
  },
  "piwy": {
    "ru": "Синхр",//Синхронизация
    "en": "Sync",
  },
  "piwu": {
    "ru": "Визуал",//Визуализация
    "en": "Peek",
  },
  "piwi": {
    "ru": "Инфо",
    "en": "Info",
  },
  "piwo": {
    "ru": "Узлы",
    "en": "Nodes",
  },
  "piwp": {
    "ru": "Конфиг",
    "en": "Config",
  },
  "piwa": {
    "ru": "ПК",
    "en": "PC Mode",
  },
  "piws" :  {
    "ru": "Яркость",
    "en": "Brightness",
  },
  "piwd" :  {
    "ru": "Цвет",
    "en": "Colors",
  },
  "piwf" :  {
    "ru": "Эффекты",
    "en": "Effects",
  },
  "piwg" :  {
    "ru": "Сегменты",
    "en": "Segments",
  },
  "piwh" :  {
    "ru": "Пресеты",
    "en": "Presets",
  },
  "piwj" :  {
    "ru": "Загрузка<span class=\"l_load\">...</span>",
    "en": "Loading<span class=\"l_load\">...</span>",
  },
  "piwk" :  {
    "ru": "Обновить",
    "en": "Refresh",
  },
  "piwl" :  {
    "ru": "Список устройств",
    "en": "Instance List",
  },
  "piwz" :  {
    "ru": "Обновить WLED",
    "en": "Update WLED",
  },
  "piwx" :  {
    "ru": "Перезагрузить WLED",
    "en": "Reboot WLED",
  },
  "piwc" :  {
    "ru": "Сделано с <span id=\"heart\">&#10084;&#xFE0E;</span> от Aircoookie и <a href=\"https://wled.discourse.group/\" target=\"_blank\">WLED сообщества</a>",
    "en": "Made with <span id=\"heart\">&#10084;&#xFE0E;</span> by Aircoookie and the <a href=\"https://wled.discourse.group/\" target=\"_blank\">WLED community</a>",
  },
  "piwv" :  {
    "ru": "Контроллеры WLED",
    "en": "WLED instances",
  },
  "piwb" :  {
    "ru": "Чтобы использовать встроенные эффекты, воспользуйтесь кнопкой переопределения ниже.<br>Вы можете вернуться в режим реального времени, нажав на звездочку в левом верхнем углу.",
    "en": "To use built-in effects, use an override button below.<br>You can return to realtime mode by pressing the star in the top left corner.",
  },
  "piwn" :  {
    "ru": "Переопределить один раз",
    "en": "Override once",
  },
  "piwm" :  {
    "ru": "Переопределять до перезагрузки",
    "en": "Override until reboot",
  },
  "pirq" :  {
    "ru": "Для достижения наилучшей производительности рекомендуется выключать источник потоковой передачи, когда он не используется.",
    "en": "For best performance, it is recommended to turn off the streaming source when not in use.",
  },
  "pirw" :  {
    "ru": "Оттенок",
    "en": "Hue",
  },
  "pire" :  {
    "ru": "Насыщенность",
    "en": "Saturation",
  },
  "pirr" :  {
    "ru": "Уровень яркости",
    "en": "Value/Brightness",
  },
  "pirt" :  {
    "ru": "Цветовая температура",
    "en": "Kelvin/Temperature",
  },
  "piry" :  {
    "ru": "RGB канал",
    "en": "RGB color",
  },
  "piru" :  {
    "ru": "Красный канал",
    "en": "Red channel",
  },
  "piri" :  {
    "ru": "Зелёный канал",
    "en": "Green channel",
  },
  "piro" :  {
    "ru": "Синий канал",
    "en": "Blue channel",
  },
  "pirp" :  {
    "ru": "Белый канал",
    "en": "White channel",
  },
  "pira" :  {
    "ru": "Баланс белого",
    "en": "White balance",
  },
  "pirs" :  {
    "ru": "",
    "en": "Custom 1",
  },
  "pird" :  {
    "ru": "",
    "en": "Custom 2",
  },
  "pirf" :  {
    "ru": "",
    "en": "Custom 3",
  },
  "pirg" :  {
    "ru": "",
    "en": "Check 1",
  },
  "pirh" :  {
    "ru": "",
    "en": "Check 2",
  },
  "pirj" :  {
    "ru": "",
    "en": "Check 3",
  },
  "pirk" :  {
    "ru": "Сбросить сегменты",
    "en": "Reset segments",
  },
  "pirl" :  {
    "ru": "Переход",
    "en": "Transition",
  },
  "pirz" :  {
    "ru": "Поиск",
    "en": "Search",
  },















  "ix" :  {
    "ru": "Цветовая палитра",
    "en": "Color palette",
  },
  "iv" :  {
    "ru": "Режим эффекта",
    "en": "Effect mode ",
    "pl": "Эфектонама MODE",
  },
  "ib" :  {
    "ru": "Скорость",
    "en": "Effect speed",
  },
  "in" :  {
    "ru": "Интенсивность",
    "en": "Effect intensity",
  },





  // liveview.htm
  "pq" :  {
    "ru": "WLED Предварительный просмотр в режиме реального времени",
    "en": "WLED Live Preview",
  },
  // liveviewws2D.htm
  "lq" :  {
    "ru": "WLED Предварительный просмотр в режиме реального времени",
    "en": "WLED Live Preview",
  },
  // msg.htm
  "pmq" :  {
    "ru": "WLED Сообщение",
    "en": "WLED Message",
  },

  // settings.htm
  "psq" :  {
    "ru": "WLED Настройки",
    "en": "WLED Settings",
  },
  "psw" :  {
    "ru": "Настройка WiFi",
    "en": "WiFi Setup",
  },
  "psp" :  {
    "ru": "Настройка LED",
    "en": "LED Preferences",
  },
  "psc" :  {
    "ru": "Конфигурация 2D",
    "en": "2D Configuration",
  },
  "psi" :  {
    "ru": "Пользовательский интерфейс",
    "en": "User Interface",
  },
  "psd" :  {
    "ru": "Выход DMX",
    "en": "DMX Output",
  },
  "psf" :  {
    "ru": "Синхронизация",
    "en": "Sync Interfaces",
  },
  "pst" :  {
    "ru": "Время и Макросы",
    "en": "Time & Macros",
  },
  "psu" :  {
    "ru": "Пользовательские режимы",
    "en": "Usermods",
  },
  "psl" :  {
    "ru": "Язык",
    "en": "Language",
  },
  "pss" :  {
    "ru": "Безопасность и обновление",
    "en": "Security & Updates",
  },

  // settings_2D.htm
  "pldq" :  {
    "ru": "Настройка 2D",
    "en": "2D Setup",
  },
  "pldw" :  {
    "ru": "Настройка 2D",
    "en": "2D setup",
  },
  "plde" :  {
    "ru": "Лента или панель:",
    "en": "Strip or panel:",
  },
  "pldr" :  {
    "ru": "Лента (1D)",
    "en": "1D Strip",
  },
  "pldt" :  {
    "ru": "Матрица (2D)",
    "en": "2D Matrix",
  },
  "pldy" :  {
    "ru": "Генератор матрицы",
    "en": "Matrix Generator",
  },
  "pldu" :  {
    "ru": "Размеры панели (ШхВ):",
    "en": "Panel dimensions (WxH):",
  },
  "pldi" :  {
    "ru": "Горизонтальные панели:",
    "en": "Horizontal panels:",
  },
  "pldo" :  {
    "ru": "Вертикальные панели:",
    "en": "Vertical panels:",
  },
  "pldp" :  {
    "ru": "1<sup>я</sup> панель:",
    "en": "1<sup>st</sup> panel:",
  },
  "plda" :  {
    "ru": "верху",
    "en": "Top",
  },
  "plds" :  {
    "ru": "снизу",
    "en": "Bottom",
  },
  "pldd" :  {
    "ru": "слева",
    "en": "Left",
  },
  "pldf" :  {
    "ru": "справа",
    "en": "Right",
  },
  "pldg" :  {
    "ru": "Ориентация:",
    "en": "Orientation:",
  },
  "pldh" :  {
    "ru": "гризонтально",
    "en": "Horizontal",
  },
  "pldj" :  {
    "ru": "вертикально",
    "en": "Vertical",
  },
  "pldk" :  {
    "ru": "Змеевидно:",
    "en": "Serpentine:",
  },
  "pldl" :  {
    "ru": "Нажатие кнопки \"Заполнить\" создаст макет светодиодной панели с предварительно настроенной матрицей.<br>Приведенные выше значения <i> не повлияют на окончательный макет.<br>ПРЕДУПРЕЖДЕНИЕ: Возможно, вам потребуется обновить параметры каждой панели после их создания.",
    "en": "Pressing Populate will create LED panel layout with pre-arranged matrix.<br>Values above <i>will not</i> affect final layout.<br>WARNING: You may need to update each panel parameters after they are generated.",
  },
  "pldz" :  {
    "ru": "Заполнить",
    "en": "Populate",
  },
  "pldx" :  {
    "ru": "Настройка панели",
    "en": "Panel set-up",
  },
  "pldc" :  {
    "ru": "Настройка панели",
    "en": "Panel set-up",
  },
  "pldv" :  {
    "ru": "Матрица состоит из 1 или более физических светодиодных панелей.<br> Каждая панель может быть разного размера и/или иметь различную ориентацию светодиодов и/или начальную точку и/или расположение.",
    "en": "A matrix is made of 1 or more physical LED panels.<br>Each panel can be of different size and/or have different LED orientation and/or starting point and/or layout.",
  },
  "pldb" :  {
    "ru": "Расположение светодиодной панели",
    "en": "LED panel layout",
  },
  "pldn" :  {
    "ru": "Gap файл:",
    "en": "Gap file:",
  },
  "pldm" :  {
    "ru": "Примечание: Файл Gap представляет собой файл <b>.json</b>, содержащий массив с количеством элементов, равным размеру матрицы.Значение -1 означает, что пиксель в этой позиции отсутствует, значение 0 означает, что этот пиксель никогда не будет закрашен, а 1 означает обычный пиксель.",
    "en": "Note: Gap file is a <b>.json</b> file containing an array with number of elements equal to the matrix size.<br>A value of -1 means that pixel at that position is missing, a value of 0 means never paint that pixel, and 1 means regular pixel.",
  },

  "plxj" :  {
    "ru": "Панель",
    "en": "Panel",
  },
  "plxk" :  {
    "ru": "1<sup>й</sup> светодиод:",
    "en": "1<sup>st</sup> LED:",
  },
  "plxm" :  {
    "ru": "Размеры (ШхВ):",
    "en": "Dimensions (WxH):",
  },
  "plxl" :  {
    "ru": "(смещение от верхнего левого угла в #светодиодах)",
    "en": "(offset from top-left corner in # LEDs)",
  },
  "plxn" :  {
    "ru": "Размеры матрицы (Ш*В=Кол-во):",
    "en": "Matrix Dimensions (W*H=LC):",
  },
  "plxb" :  {
    "ru": "Смещение",
    "en": "Offset",
  },

  // settings_dmx.htm

  // settings_lang.htm
  "plq" :  {
    "ru": "WLED Настройка языка",
    "en": "WLED Language Settings",
  },
  "plw" :  {
    "ru": "Настройка языка",
    "en": "Language Settings",
  },
  "ple" :  {
    "ru": "Выберите свой язык:",
    "en": "Select your language:",
  },
  "plb" :  {
    "ru": "Назад",
    "en": "Back",
  },
  "pls" :  {
    "ru": "Сохранить",
    "en": "Save",
  },
  "pld" :  {
    "ru": "Сохранить и подключиться",
    "en": "Save & Connect",
  },

  "pzq" :  {
    "ru": "Ошибка при загрузке файла",
    "en": "Error on loading file",
  },
  "pzw" :  {
    "ru": "Не удалось загрузить конфигурационный скрипт.\nНеполные данные страницы!",
    "en": "Loading of configuration script failed.\nIncomplete page data!",
  },
  "pze" :  {
    "ru": "Файловый режим. Пожалуйста, введите WLED IP!",
    "en": "File Mode. Please enter WLED IP!",
  },

  // settings_leds.htm
  "plzw" :  {
    "ru": "Простите, пины",
    "en": "Sorry, pins",
  },
  "plze" :  {
    "ru": "не могут быть использованы",
    "en": "can't be used.",
  },
  "plzr" :  {
    "ru": "являются только входами.",
    "en": "are input only.",
  },
  "plzy" :  {
    "ru": "Конфликт между пинами",
    "en": "Pin conflict between",
  },
  "plzu" :  {
    "ru": "Слишком много светодиодов, чтобы я мог с ними справиться!",
    "en": "Too many LEDs for me to handle!",
  },
  "plzi" :  {
    "ru": "Рассмотрите возможность использования ESP32.",
    "en": "Consider using an ESP32.",
  },
  "plzo" :  {
    "ru": "Перевернутый (повернутый на 180°)",
    "en": "Reversed (rotated 180°)",
  },
  "plzp" :  {
    "ru": "Старт:",
    "en": "Start:",
  },
  "plza" :  {
    "ru": "80% от макс. LED память",
    "en": "80% of max. LED memory",
  },
  "plzd" :  {
    "ru": "ОШИБКА: Использовано около",
    "en": "ERROR: Using over",
  },
  "plzf" :  {
    "ru": "Вывод ESP 5В с питанием от USB 1A",
    "en": "ESP 5V pin with 1A USB supply",
  },
  "plzg" :  {
    "ru": "источник питания, подключенный к светодиодам",
    "en": "supply connected to LEDs",
  },
  "plzh" :  {
    "ru": "(для большинства эффектов",
    "en": "(for most effects",
  },
  "plzc" :  {
    "ru": "A - этого достаточно)",
    "en": "A is enough)",
  },
  "plzj" :  {
    "ru": "Порядок цветов:",
    "en": "Color Order:",
  },
  "plzk" :  {
    "ru": "Файловый API пока не поддерживается в этом браузере.",
    "en": "The file API isn't supported on this browser yet.",
  },
  "plzl" :  {
    "ru": "Этот браузер не поддерживает свойство `files` для ввода файлов.",
    "en": "This browser doesn't support the `files` property of file inputs.",
  },
  "plzz" :  {
    "ru": "Пожалуйста, сначала выберите файл JSON!",
    "en": "Please select a JSON file first!",
  },
  "plzx" :  {
    "ru": "Автоматический расчет белого канала по RGB:",
    "en": "Auto-calculate white channel from RGB:",
  },
  "plzm" :  {
    "ru": "Выкл обновление:",
    "en": "Off Refresh:",
  },
  "plzv" :  {
    "ru": "Пропустить первый светодиод:",
    "en": "Skip first LEDs:",
  },
  "plzb" :  {
    "ru": "Длина:",
    "en": "Length:",
  },
  "plzn" :  {
    "ru": "Инвертированный выход",
    "en": "Inverted output",
  },
  "plxq" :  {
    "ru": "Поменять:",
    "en": "Swap:",
  },
  "plxw" :  {
    "ru": "Время:",
    "en": "Clock:",
  },
  "plxe" :  {
    "ru": "оч медленно",
    "en": "Slowest",
  },
  "plxr" :  {
    "ru": "медленно",
    "en": "Slow",
  },
  "plxt" :  {
    "ru": "обычно",
    "en": "Normal",
  },
  "plxy" :  {
    "ru": "быстро",
    "en": "Fast",
  },
  "plxu" :  {
    "ru": "оч быстро",
    "en": "Fastest",
  },
  "plxi" :  {
    "ru": "IP-адрес:",
    "en": "IP address:",
  },
  "plxo" :  {
    "ru": "Кнопка НО",
    "en": "Pushbutton",
  },
  "plxp" :  {
    "ru": "Кнопка НЗ",
    "en": "Push inverted",
  },
  "plxa" :  {
    "ru": "Переключатель",
    "en": "Switch",
  },
  "plxs" :  {
    "ru": "Датчик PIR",
    "en": "PIR sensor",
  },
  "plxd" :  {
    "ru": "Сенсор",
    "en": "Touch",
  },
  "plxf" :  {
    "ru": "Аналоговый",
    "en": "Analog",
  },
  "plxg" :  {
    "ru": "Аналоговый инверт",
    "en": "Analog inverted",
  },

  "plwq" :  {
    "ru": "Настройка светодиодов(LED)",
    "en": "LED Settings",
  },
  "plww" :  {
    "ru": "Настройка светодиодного оборудования",
    "en": "LED &amp; Hardware setup",
  },
  "plwe" :  {
    "ru": "Общее количество светодиодов:",
    "en": "Total LEDs:",
  },
  "plwr" :  {
    "ru": "Рекомендуемый источник питания для яркого белого цвета:",
    "en": "Recommended power supply for brightest white:",
  },
  "plwt" :  {
    "ru": "Включить автоматический ограничитель яркости:",
    "en": "Enable automatic brightness limiter:",
  },
  "plwy" :  {
    "ru": "Максимальный ток:",
    "en": "Maximum Current:",
  },
  "plwu" :  {
    "ru": "&#9888; Ваш источник питания обеспечивает высокий ток.<br>Для повышения безопасности вашей установки,<br>пожалуйста, используйте толстые кабели,<br>несколько точек подачи питания и предохранитель!",
    "en": "&#9888; Your power supply provides high current.<br>To improve the safety of your setup,<br>please use thick cables,<br>multiple power injection points and a fuse!",
  },
  "plwi" :  {
    "ru": "Автоматически ограничивает яркость, чтобы она оставалась близкой к предельной.<br>Поддерживайте значение &lt;1A при включении светодиодов непосредственно от ESP 5V pin!<br>Если вы используете внешний источник питания, введите его номинальную мощность.<br>(Текущее расчетное потребление:",
    "en": "Automatically limits brightness to stay close to the limit.<br>Keep at &lt;1A if powering LEDs directly from the ESP 5V pin!<br>If you are using an external power supply, enter its rating.<br>(Current estimated usage:",
  },
  "plwo" :  {
    "ru": "неизвестно",
    "en": "unknown",
  },
  "plwp" :  {
    "ru": "Напряжение светодиода (максимальный ток для одного светодиода):",
    "en": "LED voltage (Max. current for a single LED):",
  },
  "plwa" :  {
    "ru": "по умолчанию 5В(55мА)",
    "en": "5V default (55mA)",
  },
  "plws" :  {
    "ru": "эффективный 5В(35мА)",
    "en": "5V efficient (35mA)",
  },
  "plwd" :  {
    "ru": "12В (30мA)",
    "en": "12V (30mA)",
  },
  "plwf" :  {
    "ru": "WS2815 (12мA)",
    "en": "WS2815 (12mA)",
  },
  "plwg" :  {
    "ru": "другой",
    "en": "Custom",
  },
  "plwh" :  {
    "ru": "Максимальный ток для светодиода:",
    "en": "Custom max. current per LED:",
  },
  "plwj" :  {
    "ru": "Оставьте значение по умолчанию, если вы не уверены в своем типе светодиодов.",
    "en": "Keep at default if you are unsure about your type of LEDs.",
  },
  "plwk" :  {
    "ru": "Настройка оборудования",
    "en": "Hardware setup",
  },
  "plwl" :  {
    "ru": "Светодиодные выходы:",
    "en": "LED outputs:",
  },
  "plwz" :  {
    "ru": "Используется памяти устройства:",
    "en": "LED Memory Usage:",
  },
  "plwx" :  {
    "ru": "&#9888; Вы можете столкнуться с проблемами стабильности или задержки.<br>Используйте меньше, чем",
    "en": "&#9888; You might run into stability or lag issues.<br>Use less than",
  },
  "plwc" :  {
    "ru": "800 светодиодов на выход",
    "en": "800 LEDs per output",//динамика
  },
  "plwv" :  {
    "ru": "для получения наилучших впечатлений!",
    "en": "for the best experience!",
  },
  "plwb" :  {
    "ru": "Создайте сегмент для каждого вывода:",
    "en": "Make a segment for each output:",
  },
  "plwn" :  {
    "ru": "Пользовательские индексы запуска шины:",
    "en": "Custom bus start indices:",
  },
  "plwm" :  {
    "ru": "Используйте глобальный буфер светодиодов:",
    "en": "Use global LED buffer:",
  },
  "plpq" :  {
    "ru": "Переопределение порядка цветов:",
    "en": "Color Order Override:",
  },
  "plpw" :  {
    "ru": "Отключение внутренних подтягивающих резисторов:",
    "en": "Disable internal pull-up/down:",
  },
  "plpe" :  {
    "ru": "Чувствительность датчика сенсора:",
    "en": "Touch threshold:",
  },
  "plpr" :  {
    "ru": "ИК GPIO:",
    "en": "IR GPIO:",
  },
  "plpt" :  {
    "ru": "управление отключено",
    "en": "Remote disabled",
  },
  "plpy" :  {
    "ru": "Внешний JSON-файл",
    "en": "JSON remote",
  },
  "plpu" :  {
    "ru": "Управление пультом только основным сегментом:",
    "en": "Apply IR change to main segment only:",
  },
  "plpi" :  {
    "ru": "JSON файл:",
    "en": "JSON file:",
  },
  "plpo" :  {
    "ru": "информация об ИК",
    "en": "IR info",
  },
  "plpp" :  {
    "ru": "Реле питания ленты GPIO:",
    "en": "Relay GPIO:",
  },
  "plpa" :  {
    "ru": "Инвертировать",
    "en": "Invert",
  },
  "plps" :  {
    "ru": "Значения по умолчанию",
    "en": "Defaults",
  },
  "plpd" :  {
    "ru": "Включите светодиоды после включения / сброса питания:",
    "en": "Turn LEDs on after power up/reset:",
  },
  "plpf" :  {
    "ru": "Яркость по умолчанию:",
    "en": "Default brightness:",
  },
  "plpg" :  {
    "ru": "Применить предустановку",
    "en": "Apply preset",
  },
  "plph" :  {
    "ru": "при загрузке (0 использует значения по умолчанию)",
    "en": "at boot (0 uses defaults)",
  },
  "plpj" :  {
    "ru": "Используйте гамма-коррекцию цвета:",
    "en": "Use Gamma correction for color:",
  },
  "plpk" :  {
    "ru": "(настоятельно рекомендуется)",
    "en": "(strongly recommended)",
  },
  "plpl" :  {
    "ru": "Используйте гамма-коррекцию яркости:",
    "en": "Use Gamma correction for brightness:",
  },
  "plpz" :  {
    "ru": "(не рекомендуется)",
    "en": "(not recommended)",
  },
  "plpx" :  {
    "ru": "Используйте значение гаммы:",
    "en": "Use Gamma value:",
  },
  "plpc" :  {
    "ru": "Коэффициент яркости:",
    "en": "Brightness factor:",
  },
  "plpv" :  {
    "ru": "Переходы",
    "en": "Transitions",
  },
  "plpb" :  {
    "ru": "Плавное переходное затухание:",
    "en": "Crossfade:",
  },
  "plpn" :  {
    "ru": "Эффект смешивания:",
    "en": "Effect blending:",
  },
  "plpm" :  {
    "ru": "Время перехода:",
    "en": "Transition Time:",
  },
  "plsq" :  {
    "ru": "Включить переходы между палитрами:",
    "en": "Enable Palette transitions:",
  },
  "plsw" :  {
    "ru": "Случайный цикл",
    "en": "Random Cycle",
  },
  "plse" :  {
    "ru": "Время палитры:",
    "en": "Palette Time:",
  },
  "plsr" :  {
    "ru": "Временный свет",
    "en": "Timed light",
  },
  "plst" :  {
    "ru": "Продолжительность по умолчанию:",
    "en": "Default Duration:",
  },
  "plsy" :  {
    "ru": "Целевая яркость по умолчанию:",
    "en": "Default Target brightness:",
  },
  "plsu" :  {
    "ru": "Режим:",
    "en": "Mode:",
  },
  "plsi" :  {
    "ru": "ожидание",
    "en": "Wait and set",
  },
  "plso" :  {
    "ru": "затухание",
    "en": "Fade",
  },
  "plsp" :  {
    "ru": "Исчезающий цвет",
    "en": "Fade Color",
  },
  "plsa" :  {
    "ru": "Рассвет",
    "en": "Sunrise",
  },
  "plss" :  {
    "ru": "Управление Белым цветом",
    "en": "White management",
  },
  "plsd" :  {
    "ru": "Коррекция баланса белого:",
    "en": "White Balance correction:",
  },
  "plsf" :  {
    "ru": "Глобальное переопределение для автоматического расчета белого:",
    "en": "Global override for Auto-calculate white:",
  },
  "plsg" :  {
    "ru": "отключено",
    "en": "Disabled",
  },
  "plsh" :  {
    "ru": "ярче",
    "en": "Brighter",
  },
  "plsj" :  {
    "ru": "точный",
    "en": "Accurate",
  },
  "plsk" :  {
    "ru": "двойной",
    "en": "Dual",
  },
  "plsl" :  {
    "ru": "максимально",
    "en": "Max",
  },
  "plsz" :  {
    "ru": "Вычислить CCT по RGB:",
    "en": "Calculate CCT from RGB:",
  },
  "plsx" :  {
    "ru": "Смешивание добавок CCT:",
    "en": "CCT additive blending:",
  },
  "plsc" :  {
    "ru": "Дополнительно",
    "en": "Advanced",
  },
  "plsv" :  {
    "ru": "Смешивание палитры:",
    "en": "Palette blending:",
  },
  "plsb" :  {
    "ru": "Линейный (обертывание при перемещении)",
    "en": "Linear (wrap if moving)",
  },
  "plsn" :  {
    "ru": "Линейный (всегда обтекаемый)",
    "en": "Linear (always wrap)",
  },
  "plsm" :  {
    "ru": "Линейный (никогда не обертывать)",
    "en": "Linear (never wrap)",
  },
  "plkq" :  {
    "ru": "Нет (не рекомендуется)",
    "en": "None (not recommended)",
  },
  "plkw" :  {
    "ru": "Частота обновления:",
    "en": "Target refresh rate:",
  },
  "plke" :  {
    "ru": "Шаблон конфигурации:",
    "en": "Config template:",
  },
  "plkr" :  {
    "ru": "Применить",
    "en": "Apply",
  },
  "pzlq" :  {
    "ru": "не исп.",
    "en": "unused",
  },
  "pzlw" :  {
    "ru": "испол.",
    "en": "used",
  },

  // settings_pin.htm
  "pps" :  {
    "ru": "Требуется PIN-код",
    "en": "PIN required",
  },
  "ppd" :  {
    "ru": "Пожалуйста, введите PIN-код",
    "en": "Please enter settings PIN code",
  },
  "ppf" :  {
    "ru": "Войти",
    "en": "Submit",
  },

  // settings_sec.htm
  "psiw" :  {
    "ru": "Настройки безопасности и обновление",
    "en": "Misc Settings",
  },
  "psie" :  {
    "ru": "Настройки безопасности и обновления",
    "en": "Security & Update setup",
  },
  "psir" :  {
    "ru": "Введите ПИН-код:",
    "en": "Settings PIN:",
  },
  "psit" :  {
    "ru": "&#9888; Незашифрованная передача. Будьте осторожны при выборе PIN-кода, не используйте свой банковский, дверной, SIM-карты и т.д. pin-код!",
    "en": "&#9888; Unencrypted transmission. Be prudent when selecting PIN, do NOT use your banking, door, SIM, etc. pin!",
  },
  "psiy" :  {
    "ru": "Блокировка беспроводного обновления программного обеспечения (OTA):",
    "en": "Lock wireless (OTA) software update:",
  },
  "psiu" :  {
    "ru": "Ключевая фраза:",
    "en": "Passphrase:",
  },
  "psii" :  {
    "ru": "Чтобы включить OTA, по соображениям безопасности вам также необходимо ввести правильный пароль!<br>Пароль должен быть изменен при включении OTA.<br><b>Отключайте OTA, когда он не используется, в противном случае злоумышленник может перепрошить программное обеспечение устройства!</b>",
    "en": "To enable OTA, for security reasons you need to also enter the correct password!<br>The password should be changed when OTA is enabled.<br><b>Disable OTA when not in use, otherwise an attacker can reflash device software!</b>",
  },
  "psio" :  {
    "ru": "Настройки на этой странице можно изменить только в том случае, если отключена блокировка OTA!",
    "en": "Settings on this page are only changable if OTA lock is disabled!",
  },
  "psip" :  {
    "ru": "Запретить доступ к настройкам Wi-Fi, если они заблокированы:",
    "en": "Deny access to WiFi settings if locked:",
  },
  "psia" :  {
    "ru": "Сброс устройства до заводских настроек:",//Сброс к заводским настройкам
    "en": "Factory reset:",
  },
  "psis" :  {
    "ru": "Все настройки и пресеты будут удалены.",
    "en": "All settings and presets will be erased.",
  },
  "psid" :  {
    "ru": "&#9888; Незашифрованная передача. Злоумышленник в той же сети может перехватить данные формы!",
    "en": "&#9888; Unencrypted transmission. An attacker on the same network can intercept form data!",
  },
  "psif" :  {
    "ru": "Обновление программного обеспечения",
    "en": "Software Update",
  },
  "psig" :  {
    "ru": "Ручное обновление OTA",
    "en": "Manual OTA Update",
  },
  "psih" :  {
    "ru": "Включить Ардруино OTA:",
    "en": "Enable ArduinoOTA:",
  },
  "psij" :  {
    "ru": "Резервное копирование и восстановление",
    "en": "Backup & Restore",
  },
  "psik" :  {
    "ru": "Бэкап пресетов",
    "en": "Backup presets",
  },
  "psil" :  {
    "ru": "Восстановление пресетов",
    "en": "Restore presets",
  },
  "psiz" :  {
    "ru": "Загрузить",
    "en": "Upload",
  },
  "psix" :  {
    "ru": "Бэкап конфигурации",
    "en": "Backup configuration",
  },
  "psic" :  {
    "ru": "Восстановление конфигурации устройства",
    "en": "Restore configuration",
  },
  "psiv" :  {
    "ru": "&#9888; Восстановление предустановок/конфигурации приведет к ПЕРЕЗАПИСИ ваших текущих предустановок/конфигурации.<br>Неправильная конфигурация может потребовать сброса настроек к заводским или повторной перепрошивки вашего ESP.",
    "en": "&#9888; Restoring presets/configuration will OVERWRITE your current presets/configuration.<br>Incorrect configuration may require a factory reset or re-flashing of your ESP.",
  },
  "psib" :  {
    "ru": "По соображениям безопасности резервные копии паролей не сохраняются.",
    "en": "For security reasons, passwords are not backed up.",
  },
  "psin" :  {
    "ru": "О WLED",
    "en": "About",
  },
  "psim" :  {
    "ru": "версия",
    "en": "version",
  },
  "pskq" :  {
    "ru": "Участники, зависимые лица и особая благодарность",
    "en": "Contributors, dependencies and special thanks",
  },
  "psiq" :  {
    "ru": "Огромное спасибо всем, кто помог мне создать WLED!<br><br>(c) 2016-2023 Christian Schwinne",
    "en": "A huge thank you to everyone who helped me create WLED!<br><br>(c) 2016-2023 Christian Schwinne",
  },
  "pskw" :  {
    "ru": "Лицензированный в соответствии с",
    "en": "Licensed under the",
  },
  "pske" :  {
    "ru": " <a href=\"https://github.com/nvppp/WLED-multilanguage\" target=\"_blank\">мультиязычный WLED от nvppp</a><br><br>",
    "en": "",
  },
  "pskr" :  {
    "ru": "Сообщение сервера:",
    "en": "Server message:",
  },
  "pskt" :  {
    "ru": "Ошибка ответа!",
    "en": "Response error!",
  },

  // settings_sync.htm
  "pstq" :  {
    "ru": "Настройки синхронизации",
    "en": "Sync Settings",
  },
  "pstw" :  {
    "ru": "Настройка синхронизации",
    "en": "Sync setup",
  },
  "pste" :  {
    "ru": "WLED широковещание",
    "en": "WLED Broadcast",
  },
  "pstr" :  {
    "ru": "UDP-порт:",
    "en": "UDP Port:",
  },
  "pstt" :  {
    "ru": "2-й порт:",
    "en": "2nd Port:",
  },
  "psty" :  {
    "ru": "Синхронизировать группы",
    "en": "Sync groups",
  },
  "pstu" :  {
    "ru": "Отправить:",
    "en": "Send:",
  },
  "psti" :  {
    "ru": "Получать:",
    "en": "Receive:",
  },
  "psto" :  {
    "ru": "Яркость",
    "en": "Brightness",
  },
  "pstp" :  {
    "ru": "Цвет",
    "en": "Color",
  },
  "psta" :  {
    "ru": "Эффекты",
    "en": "Effects",
  },
  "psts" :  {
    "ru": "Параметры сегмента",
    "en": "Segment options",
  },
  "pstd" :  {
    "ru": "границы",
    "en": "bounds",
  },
  "pstf" :  {
    "ru": "Отправлять команды о направлении движения:",
    "en": "Send notifications on direct change:",
  },
  "pstg" :  {
    "ru": "Отправка команды при нажатии кнопки или ИК излучении:",
    "en": "Send notifications on button press or IR:",
  },
  "psth" :  {
    "ru": "Отправлять команды принятые от Alexa:",
    "en": "Send Alexa notifications:",
  },
  "pstj" :  {
    "ru": "Отправлять команды принятые от Philips Hue:",
    "en": "Send Philips Hue change notifications:",
  },
  "pstk" :  {
    "ru": "Отправлять команды принятые от макросов:",
    "en": "Send Macro notifications:",
  },
  "pstl" :  {
    "ru": "Кол-во повторных отправок UDP-пакетов:",
    "en": "UDP packet retransmissions:",
  },
  "pstz" :  {
    "ru": "Для применения изменений требуется перезагрузка.",
    "en": "Reboot required to apply changes.",
  },
  "pstx" :  {
    "ru": "Список устройств",
    "en": "Instance List",
  },
  "pstc" :  {
    "ru": "Включить список устройств:",
    "en": "Enable instance list:",
  },
  "pstv" :  {
    "ru": "Сделать это устройство доступным для обнаружения:",
    "en": "Make this instance discoverable:",
  },
  "pstb" :  {
    "ru": "В реальном времени",
    "en": "Realtime",
  },
  "pstn" :  {
    "ru": "Получать UDP в режиме реального времени:",
    "en": "Receive UDP realtime:",
  },
  "pstm" :  {
    "ru": "Используйте только основной сегмент:",
    "en": "Use main segment only:",
  },
  "psuq" :  {
    "ru": "Сетевой DMX-вход",
    "en": "Network DMX input",
  },
  "psuw" :  {
    "ru": "Тип:",
    "en": "Type:",
  },
  "psue" :  {
    "ru": "E1.31 (sACN)",
    "en": "E1.31 (sACN)",
  },
  "psur" :  {
    "ru": "Art-Net",
    "en": "Art-Net",
  },
  "psut" :  {
    "ru": "другой порт",
    "en": "Custom port",
  },
  "psuy" :  {
    "ru": "Порт:",
    "en": "Port:",
  },
  "psuu" :  {
    "ru": "Многоадресная рассылка",
    "en": "Multicast:",
  },
  "psui" :  {
    "ru": "Вселенная",
    "en": "Start universe:",
  },
  "psuo" :  {
    "ru": "<i>Требуется перезагрузка.</i> Проверьте",
    "en": "<i>Reboot required.</i> Check out",
  },
  "psup" :  {
    "ru": "Пропуск пакетов, не соответствующих последовательности:",
    "en": "Skip out-of-sequence packets:",
  },
  "psua" :  {
    "ru": "Начальный адрес DMX:",
    "en": "DMX start address:",
  },
  "psus" :  {
    "ru": "Расстояние между сегментами DMX:",
    "en": "DMX segment spacing:",
  },
  "psud" :  {
    "ru": "Приоритет порта E1.31:",
    "en": "E1.31 port priority:",
  },
  "psuf" :  {
    "ru": "Режим DMX:",
    "en": "DMX mode:",
  },
  "psug" :  {
    "ru": "RGB",
    "en": "Single RGB",
  },
  "psuh" :  {
    "ru": "DRGB",
    "en": "Single DRGB",
  },
  "psuj" :  {
    "ru": "эффект",
    "en": "Effect",
  },
  "psuk" :  {
    "ru": "эффект + белый",
    "en": "Effect + White",
  },
  "psul" :  {
    "ru": "эффект сегмента",
    "en": "Effect Segment",
  },
  "psuz" :  {
    "ru": "эффект сегмента + белый",
    "en": "Effect Segment + White",
  },
  "psux" :  {
    "ru": "мульти RGB",
    "en": "Multi RGB",
  },
  "psuc" :  {
    "ru": "диммер + м RGB",
    "en": "Dimmer + Multi RGB",
  },
  "psuv" :  {
    "ru": "RGBW",
    "en": "Multi RGBW",
  },
  "psub" :  {
    "ru": "пресет",
    "en": "Preset",
  },
  "psun" :  {
    "ru": "информация E1.31",
    "en": "E1.31 info",
  },
  "psum" :  {
    "ru": "Перерыв:",
    "en": "Timeout:",
  },
  "pspq" :  {
    "ru": "Принудительная максимальная яркость:",
    "en": "Force max brightness:",
  },
  "pspw" :  {
    "ru": "Отключить гамма-коррекцию в реальном времени:",
    "en": "Disable realtime gamma correction:",
  },
  "pspe" :  {
    "ru": "Смещение светодиода в реальном времени:",
    "en": "Realtime LED offset:",
  },
  "pspr" :  {
    "ru": "Alexa голосовой ассистент",
    "en": "Alexa Voice Assistant",
  },
  "pspt" :  {
    "ru": "Эта сборка прошивки не включает поддержку Alexa.",
    "en": "This firmware build does not include Alexa support.",
  },
  "pspy" :  {
    "ru": "Эмулировать Alexa устройство:",
    "en": "Emulate Alexa device:",
  },
  "pspu" :  {
    "ru": "Имя в Alexa:",
    "en": "Alexa invocation name:",
  },
  "pspi" :  {
    "ru": "Эмулировать устройство первым для определённого пресета",
    "en": "Also emulate devices to call the first",
  },
  "pspo" :  {
    "ru": "пресеты",
    "en": "presets",
  },
  "pspp" :  {
    "ru": "&#9888; <b>Все MQTT и Hue sync подключаются к внешним хостам!<br>Это может повлиять на скорость отклика WLED.</b><br>",
    "en": "&#9888; <b>MQTT and Hue sync all connect to external hosts!<br>This may impact the responsiveness of WLED.</b><br>",
  },
  "pspa" :  {
    "ru": "Для достижения наилучших результатов используйте одновременно только одну из этих служб.<br>(в качестве альтернативы подключите к ним второй ESP и используйте UDP-синхронизацию)",
    "en": "For best results, only use one of these services at a time.<br>(alternatively, connect a second ESP to them and use the UDP sync)",
  },
  "psps" :  {
    "ru": "MQTT",
    "en": "MQTT",
  },
  "pspd" :  {
    "ru": "Эта сборка микропрограммы не включает поддержку MQTT.",
    "en": "This firmware build does not include MQTT support.",
  },
  "pspf" :  {
    "ru": "Включить MQTT:",
    "en": "Enable MQTT:",
  },
  "pspg" :  {
    "ru": "Брокер:",
    "en": "Broker:",
  },
  "psph" :  {
    "ru": "Порт:",
    "en": "Port:",
  },
  "pspj" :  {
    "ru": "<b>Учетные данные MQTT отправляются по незащищенному соединению.<br>Никогда не используйте пароль MQTT для другой службы!</b>",
    "en": "<b>The MQTT credentials are sent over an unsecured connection.<br>Never use the MQTT password for another service!</b>",
  },
  "pspk" :  {
    "ru": "Пользователь:",
    "en": "Username:",
  },
  "pspl" :  {
    "ru": "Пароль:",
    "en": "Password:",
  },
  "pspz" :  {
    "ru": "Идентификатор:",
    "en": "Client ID:",
  },
  "pspx" :  {
    "ru": "Топик устройства:",
    "en": "Device Topic:",
  },
  "pspc" :  {
    "ru": "Топик группы:",
    "en": "Group Topic:",
  },
  "pspv" :  {
    "ru": "Опубликовать при нажатии кнопки:",
    "en": "Publish on button press:",
  },
  "pspb" :  {
    "ru": "Сохранение яркости и цветовых сообщений:",
    "en": "Retain brightness & color messages:",
  },
  "pspn" :  {
    "ru": "Для применения изменений требуется перезагрузка.",
    "en": "Reboot required to apply changes. ",
  },
  "pspm" :  {
    "ru": "информация MQTT",
    "en": "MQTT info",
  },
  "psoq" :  {
    "ru": "Philips Hue",
    "en": "Philips Hue",
  },
  "psow" :  {
    "ru": "Данная сборка прошивкм не включает поддержку Philips Hue.",
    "en": "This firmware build does not include Philips Hue support.",
  },
  "psoe" :  {
    "ru": "Вы можете найти IP-адрес моста и номер источника света в разделе \"О программе\" приложения Hue.",
    "en": "You can find the bridge IP and the light number in the 'About' section of the Hue app.",
  },
  "psor" :  {
    "ru": "Опросить Hue",
    "en": "Poll Hue light",
  },
  "psot" :  {
    "ru": "каждые",
    "en": "every",
  },
  "psoy" :  {
    "ru": "Затем получите",
    "en": "Then, receive",
  },
  "psou" :  {
    "ru": "Вкл/Выкл",
    "en": "On/Off",
  },
  "psoi" :  {
    "ru": "Hue мост IP:",
    "en": "Hue Bridge IP:",
  },
  "psoo" :  {
    "ru": "<b>Нажмите кнопку pushlink на мосту, после чего сохраните эту страницу!</b><br>(при первом подключении)",
    "en": "<b>Press the pushlink button on the bridge, after that save this page!</b><br>(when first connecting)",
  },
  "psop" :  {
    "ru": "Hue статус:",
    "en": "Hue status:",
  },
  "psoa" :  {
    "ru": "Отключено в этой сборке ",
    "en": "Disabled in this build ",
  },
  "psos" :  {
    "ru": "Серийный",
    "en": "Serial",
  },
  "psod" :  {
    "ru": "Скорость передачи данных в бодах:",
    "en": "Baud rate:",
  },
  "psof" :  {
    "ru": "Сохраняйте значение 115200, чтобы использовать функцию Улучшения. Некоторые платы могут не поддерживать высокие значения.",
    "en": "Keep at 115200 to use Improv. Some boards may not support high rates.",
  },

  // settings_time.htm
  "ptrq" :  {
    "ru": "Настройки времени",
    "en": "Time Settings",
  },
  "ptrw" :  {
    "ru": "Настройка времени",
    "en": "Time setup",
  },
  "ptre" :  {
    "ru": "Получать время с NTP-сервера:",
    "en": "Get time from NTP server:",
  },
  "ptrr" :  {
    "ru": "Использовать формат 24 часа:",
    "en": "Use 24h format:",
  },
  "ptrt" :  {
    "ru": "Часовой пояс:",
    "en": "Time zone:",
  },
  "ptry" :  {
    "ru": "Смещение по UTC:",
    "en": "UTC offset:",
  },
  "ptru" :  {
    "ru": "секунды (максимум 18 часов)",
    "en": "seconds (max. 18 hours)",
  },
  "ptri" :  {
    "ru": "Текущее местное время -",
    "en": "Current local time is",
  },
  "ptro" :  {
    "ru": "Широта:",
    "en": "Latitude:",
  },
  "ptrp" :  {
    "ru": "Долгота:",
    "en": "Longitude:",
  },
  "ptra" :  {
    "ru": "C",
    "en": "N",
  },
  "ptrs" :  {
    "ru": "Ю",
    "en": "S",
  },
  "ptrd" :  {
    "ru": "В",
    "en": "E",
  },
  "ptrf" :  {
    "ru": "З",
    "en": "W",
  },
  "ptrg" :  {
    "ru": "Получить местоположение",
    "en": "Get location",
  },
  "ptrh" :  {
    "ru": "(открывает новую вкладку, работает только в браузере)",
    "en": "(opens new tab, only works in browser)",
  },
  "ptrj" :  {
    "ru": "Часы",
    "en": "Clock",
  },
  "ptrk" :  {
    "ru": "Наложение аналоговых часов:",
    "en": "Analog Clock overlay:",
  },
  "ptrl" :  {
    "ru": "Первый светодиод:",
    "en": "First LED:",
  },
  "ptrz" :  {
    "ru": "Последний светодиод:",
    "en": "Last LED:",
  },
  "ptrx" :  {
    "ru": "12ч LED:",
    "en": "12h LED:",
  },
  "ptrc" :  {
    "ru": "Показывать отметки за 5 минут:",
    "en": "Show 5min marks:",
  },
  "ptrv" :  {
    "ru": "Секунды (в виде следа):",
    "en": "Seconds (as trail):",
  },
  "ptrb" :  {
    "ru": "Режим обратного отсчета:",
    "en": "Countdown Mode:",
  },
  "ptrn" :  {
    "ru": "Цель обратного отсчета:",
    "en": "Countdown Goal:",
  },
  "ptrm" :  {
    "ru": "Дата:",
    "en": "Date:",
  },
  "pttq" :  {
    "ru": "Время:",
    "en": "Time:",
  },
  "pttw" :  {
    "ru": "Пресеты макросов",
    "en": "Macro presets",
  },
  "ptte" :  {
    "ru": "Макросы переместились!",
    "en": "Macros have moved!",
  },
  "pttr" :  {
    "ru": "Предустановки теперь также можно использовать в качестве макросов для сохранения команд JSON и HTTP API.<br>Просто введите предустановленный идентификатор ниже! Используйте 0 для действия по умолчанию вместо предустановленного",
    "en": "Presets now also can be used as macros to save both JSON and HTTP API commands.<br>Just enter the preset ID below! Use 0 for the default action instead of a preset",
  },
  "pttt" :  {
    "ru": "Alexa Вкл/Выкл предустановки:",
    "en": "Alexa On/Off Preset:",
  },
  "ptty" :  {
    "ru": "Обратный отсчет по предустановке:",
    "en": "Countdown-Over Preset:",
  },
  "pttu" :  {
    "ru": "Предустановки с подсветкой по времени:",
    "en": "Timed-Light-Over Presets:",
  },
  "ptti" :  {
    "ru": "Действия с кнопками",
    "en": "Button actions",
  },
  "ptto" :  {
    "ru": "нажать<br>переключить",
    "en": "push<br>switch",
  },
  "pttp" :  {
    "ru": "короткое<br>вкл-&gt;выкл",
    "en": "short<br>on-&gt;off",
  },
  "ptta" :  {
    "ru": "длительное<br>вкл-&gt;выкл",
    "en": "long<br>off-&gt;on",
  },
  "ptts" :  {
    "ru": "двойное<br>Н/Д",
    "en": "double<br>N/A",
  },
  "pttd" :  {
    "ru": "Настройка аналоговых кнопок",
    "en": "Analog Button setup",
  },
  "pttf" :  {
    "ru": "Предустановки, контролируемые по времени",
    "en": "Time-controlled presets",
  },
  "ptzq" :  {
    "ru": ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],
    "en": ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  },
  "ptzw" :  {
    "ru": "Вкл",
    "en": "En.",
  },
  "ptze" :  {
    "ru": "Час",
    "en": "Hour",
  },
  "ptzr" :  {
    "ru": "Минута",
    "en": "Minute",
  },
  "ptzt" :  {
    "ru": "Предустановка",
    "en": "Preset",
  },
  "ptzy" :  {
    "ru": "Запускается по",
    "en": "Run on weekdays",
  },
  "ptzj" :  {
    "ru": "от",
    "en": "from",
  },
  "ptzk" :  {
    "ru": "до",
    "en": "to",
  },
  "ptzu" :  {
    "ru": "Пн",
    "en": "M",
  },
  "ptzi" :  {
    "ru": "Вт",
    "en": "T",
  },
  "ptzo" :  {
    "ru": "Ср",
    "en": "W",
  },
  "ptzp" :  {
    "ru": "Чт",
    "en": "T",
  },
  "ptza" :  {
    "ru": "Пт",
    "en": "F",
  },
  "ptzs" :  {
    "ru": "Сб",
    "en": "S",
  },
  "ptzd" :  {
    "ru": "Вс",
    "en": "S",
  },
  "ptzf" :  {
    "ru": "Восход",
    "en": "Sunrise",
  },
  "ptzg" :  {
    "ru": "Закат",
    "en": "Sunset",
  },
  "ptzh" :  {
    "ru": "Кнопка",
    "en": "Button",
  },



  // settings_ui.htm  нужно допиливать убирать лишний код
  "puuq" :  {
    "ru": "Настройки интерфейса",
    "en": "UI Settings",
  },
  "puie" :  {
    "ru": "&#10004; Настройки сохранены в локальном хранилище браузера!",
    "en": "&#10004; Local UI settings saved!",
  },
  "puir" :  {
    "ru": "&#9888; Не удалось получить доступ к локальному хранилищу. Убедитесь, что он включен в вашем браузере.",
    "en": "&#9888; Could not access local storage. Make sure it is enabled in your browser.",
  },
  "puuw" :  {
    "ru": "Веб-настройка",
    "en": "Web Setup",
  },
  "puue" :  {
    "ru": "Название сервера:",
    "en": "Server description:",
  },
  "puur" :  {
    "ru": "Кнопка синхронизации переключает как отправку, так и получение:",
    "en": "Sync button toggles both send and receive:",
  },
  "puut" :  {
    "ru": "Эта сборка микропрограммы не включает поддержку упрощенного пользовательского интерфейса.",
    "en": "This firmware build does not include simplified UI support.",
  },
  "puuy" :  {
    "ru": "Включить упрощенный пользовательский интерфейс:",
    "en": "Enable simplified UI:",
  },
  "puuu" :  {
    "ru": "Следующие параметры настройки пользовательского интерфейса уникальны как для устройства WLED, так и для этого браузера.<br>Вам потребуется настроить их повторно, если вы используете другой браузер, устройство или IP-адрес WLED.<br>Обновите основной пользовательский интерфейс, чтобы применить изменения.",
    "en": "The following UI customization settings are unique both to the WLED device and this browser.<br>You will need to set them again if using a different browser, device or WLED IP address.<br>Refresh the main UI to apply changes.",
  },

  "pu" :  {
    "ru": "Методы выбора цвета",
    "en": "Color selection methods",
  },
  "pu12" :  {
    "ru": "Цветовое колесо",
    "en": "Color Wheel",
  },
  "pu3" :  {
    "ru": "Ползунки RGB",
    "en": "RGB sliders",
  },
  "pu4" :  {
    "ru": "Быстрый выбор цвета",
    "en": "Quick color selectors",
  },
  "pu5" :  {
    "ru": "Ввод HEX",
    "en": "HEX color input",
  },
  "puui" :  {
    "ru": "Внешний вид пользовательского интерфейса",
    "en": "UI Appearance",
  },
  "puuo" :  {
    "ru": "Показывать метки кнопок",
    "en": "Show button labels",
  },
  "puup" :  {
    "ru": "Показывать нижнюю панель вкладок в режиме ПК",
    "en": "Show bottom tab bar in PC mode",
  },
  "puua" :  {
    "ru": "Показывать идентификаторы Пресетов",
    "en": "Show preset IDs",
  },
  "puus" :  {
    "ru": "Установите длину сегмента вместо индикатора остановки",
    "en": "Set segment length instead of stop LED",
  },
  "puud" :  {
    "ru": "Скрыть мощность сегмента и яркость",
    "en": "Hide segment power &amp; brightness",
  },
  "puuf" :  {
    "ru": "Всегда расширять первый сегмент",
    "en": "Always expand first segment",
  },
  "puug" :  {
    "ru": "Использовать параметры эффекта по умолчанию",
    "en": "Use effect default parameters",
  },
  "puuh" :  {
    "ru": "Сортировать пресеты по ID",
    "en": "Sort presets by ID",
  },
  "puuj" :  {
    "ru": "Я ненавижу темный режим:",
    "en": "I hate dark mode:",
  },
  "puuk" :  {
    "ru": "Зачем тебе это?",
    "en": "Why would you? ",
  },
  "puul" :  {
    "ru": "Непрозрачность кнопки",
    "en": "Button opacity",
  },
  "puuz" :  {
    "ru": "Непрозрачность фона",
    "en": "Background opacity",
  },
  "puux" :  {
    "ru": "Цвет фона в HEX",
    "en": "BG HEX color",
  },
  "puuc" :  {
    "ru": "URL-адрес фонового изображения",
    "en": "BG image URL",
  },
  "puuv" :  {
    "ru": "Случайное фоновое изображение",
    "en": "Random BG image",
  },
  "puub" :  {
    "ru": "Включить кастомный CSS",
    "en": "Enable custom CSS",
  },
  "puun" :  {
    "ru": "Кастомный CSS:",
    "en": "Custom CSS:",
  },
  "puum" :  {
    "ru": "Включить пользовательский список праздников",
    "en": "Enable custom Holidays list",
  },
  "puiq" :  {
    "ru": "Праздники:",
    "en": "Holidays:",
  },
  "puiw" :  {
    "ru": "Очистить локальное хранилище",
    "en": "Clear local storage",
  },

  // settings_um.htm
  "puwq" :  {
    "ru": "Настройки пользовательского режима",
    "en": "Usermod Settings",
  },
  "puww" :  {
    "ru": "Конфигурация выходов устройства",
    "en": "Usermod Setup",
  },
  "puwe" :  {
    "ru": "&#9888; Не удалось загрузить конфигурацию.",
    "en": "&#9888; Could not load configuration.",
  },
  "puwr" :  {
    "ru": "Протокол I<sup>2</sup>C GPIOs (HW)",
    "en": "Global I<sup>2</sup>C GPIOs (HW)",
  },
  "puwt" :  {
    "ru": "(изменение требует перезагрузки!)",
    "en": "(change requires reboot!)",
  },
  "puwy" :  {
    "ru": "Протокол SPI GPIOs (HW)",
    "en": "Global SPI GPIOs (HW)",
  },
  "puwu" :  {
    "ru": "(изменяемо только на ESP32, для изменения требуется перезагрузка!)",
    "en": "(only changable on ESP32, change requires reboot!)",
  },
  "puwi" :  {
    "ru": "Перезагрузить устройство после сохранения?",
    "en": "Reboot after save?",
  },
  "puwo" :  {
    "ru": "Загрузка настроек<span class=\"l_load\">...</span>",
    "en": "Loading settings<span class=\"l_load\">...</span>",
  },
  "pzuq" :  {
    "ru": "Пользовательские модули не установлены",
    "en": "No Usermods installed.",
  },
  "pzuw" :  {
    "ru": "Конфигурация не найдена.  <br>Нажмите <i>Сохранить</i>, чтобы инициализировать настройки по умолчанию.",
    "en": "Usermods configuration not found.<br>Press <i>Save</i> to initialize defaults.",
  },
  "pzue" :  {
    "ru": "не исп.",
    "en": "unused",
  },

  // settings_wifi.htm
  "pwwq" :  {
    "ru": "Настройки WiFi",
    "en": "WiFi Settings",
  },
  "pwww" :  {
    "ru": "Настройка Wi-Fi",
    "en": "WiFi setup",
  },
  "pwwe" :  {
    "ru": "Подключение к существующей сети",
    "en": "Connect to existing network",
  },
  "pwwr" :  {
    "ru": "Имя сети (SSID, пустой чтобы не подключаться):",
    "en": "Network name (SSID, empty to not connect):",
  },
  "pwwt" :  {
    "ru": "Пароль:",
    "en": "Network password:",
  },
  "pwwy" :  {
    "ru": "IP-адрес (оставьте 0.0.0.0 для DHCP):",
    "en": "Static IP (leave at 0.0.0.0 for DHCP):",
  },
  "pwwu" :  {
    "ru": "Шлюз:",
    "en": "Static gateway:",
  },
  "pwwi" :  {
    "ru": "Маска подсети:",
    "en": "Static subnet mask:",
  },
  "pwwo" :  {
    "ru": "mDNS адрес (оставьте пустым, если нет mDNS):",
    "en": "mDNS address (leave empty for no mDNS):",
  },
  "pwwp" :  {
    "ru": "Текущий IP:",
    "en": "Client IP:",
  },
  "pwwa" :  {
    "ru": "не подключен",
    "en": "Not connected",
  },
  "pwws" :  {
    "ru": "Конфигурация точки доступа(AP)",
    "en": "Configure Access Point",
  },
  "pwwd" :  {
    "ru": "AP SSID (оставить пустым для выключения AP):",
    "en": "AP SSID (leave empty for no AP):",
  },
  "pwwf" :  {
    "ru": "Скрывать SSID AP:",
    "en": "Hide AP name:",
  },
  "pwwg" :  {
    "ru": "Пароль AP (без защиты, если оставить пустым):",
    "en": "AP password (leave empty for open):",
  },
  "pwwgq" :  {
    "ru": "Пусто или минимум 8 символов",
    "en": "Empty or min. 8 characters",
  },
  "pwwh" :  {
    "ru": "Канал WiFi AP:",
    "en": "Access Point WiFi channel:",
  },
  "pwwj" :  {
    "ru": "AP работает:",
    "en": "AP opens:",
  },
  "pwwk" :  {
    "ru": "Не включать после загрузки",
    "en": "No connection after boot",
  },
  "pwwl" :  {
    "ru": "Отключена",
    "en": "Disconnected",
  },
  "pwwz" :  {
    "ru": "Всегда",
    "en": "Always",
  },
  "pwwx" :  {
    "ru": "Никогда (не рекомендуется)",
    "en": "Never (not recommended)",
  },
  "pwwc" :  {
    "ru": "AP IP:",
    "en": "AP IP:",
  },
  "pwwv" :  {
    "ru": "Не активный",
    "en": "Not active",
  },
  "pwwb" :  {
    "ru": "Экспериментально",
    "en": "Experimental",
  },
  "pwwn" :  {
    "ru": "Принудительный режим 802.11g (только для ESP8266):",
    "en": "Force 802.11g mode (ESP8266 only):",
  },
  "pwwm" :  {
    "ru": "Отключить переход Wi-Fi в спящий режим:",
    "en": "Disable WiFi sleep:",
  },
  "pwkq" :  {
    "ru": "Может помочь при проблемах с подключением.<br>Не включайте, если Wi-Fi работает корректно, это увеличивает энергопотребление.",
    "en": "Can help with connectivity issues.<br>Do not enable if WiFi is working correctly, increases power consumption.",
  },
  "pwkw" :  {
    "ru": "Беспроводной пульт дистанционного управления",
    "en": "Wireless Remote",
  },
  "pwke" :  {
    "ru": "Прослушивание событий через ESP-NOW<br>Сохранять отключенным, если не используется пульт дистанционного управления, увеличивает энергопотребление.<br> ",
    "en": "Listen for events over ESP-NOW<br>Keep disabled if not using a remote, increases power consumption.<br> ",
  },
  "pwkr" :  {
    "ru": "Включить удаленное управление:",
    "en": "Enable Remote:",
  },
  "pwkt" :  {
    "ru": "MAC-адрес:",
    "en": "Hardware MAC:",
  },
  "pwky" :  {
    "ru": "Последний раз:",
    "en": "Last Seen:",
  },
  "pwku" :  {
    "ru": "Тип Ethernet",
    "en": "Ethernet Type",
  },

  "pzwq" :  {
    "ru": "Поиск...",
    "en": "Scanning...",
  },
  "pzww" :  {
    "ru": "ручной ввод...",
    "en": "Other network...",
  },
  "pzwe" :  {
    "ru": "Искать",
    "en": "Scan",
  },

  // update.htm
  "pud" :  {
    "ru": "WLED Обновление",
    "en": "WLED Update",
  },
  "puf" :  {
    "ru": "WLED Обновление прошивки",
    "en": "WLED Software Update",
  },
  "pug" :  {
    "ru": "Установленная версия",
    "en": "Installed version:",
  },
  "puh" :  {
    "ru": "Скачать последнюю версию",
    "en": "Download the latest binary:",
  },
  "puj" :  {
    "ru": "Обновить!",
    "en": "Update!",
  },
  "puk" :  {
    "ru": "<b>Идёт обновление<span class=\"l_load\">...</span><br>Пожалуйста не закрывайте и не обновляйте страницу :)",
    "en": "<b>Updating<span class=\"l_load\">...</span></b><br>Please do not close or refresh the page :)",
  },

  // //usermod.htm
  // "eq" :  {
  //   "ru": "Пользовательские моды отсутствуют на веб-странице.",
  //   "en": "No usermod custom web page set.",
  // },

  //welcome.htm
  "pwz" :  {
    "ru": "WLED Добро пожаловать!",
    "en": "WLED Welcome!",
  },
  "pwx" :  {
    "ru": "Добро пожаловать в WLED!",
    "en": "Welcome to WLED!",
  },
  "pwv" :  {
    "ru": "Спасибо за установку приложения!",
    "en": "Thank you for installing my application!",
    "pl": "спасибанама!",
  },
  "pwb" :  {
    "ru": "Следующий шаг:",
    "en": "Next steps:",
  },
  "pwn" :  {
    "ru": "Подключите устройство к локальному Wi-Fi",
    "en": "Connect the module to your local WiFi here!",
  },
  "pwm" :  {
    "ru": "Настройка WiFi",
    "en": "WiFi settings",
  },
  "pwl" :  {
    "ru": "Просто попробовать в режиме точки доступа",
    "en": "Just trying this out in AP mode?",
  },
  "pwk" :  {
    "ru": "К управлению!",
    "en": "To the controls!",
  },





// index.js
  //function onLoad()
  "zoq" :  {
    "ru": "Файловый режим. Пожалуйста, введите IP для WLED!",
    "en": "File Mode. Please enter WLED IP!",
  },

  //function getRuntimeStr(rt)
  "zpq" :  {
    "ru": "день",
    "en": "day",
  },
  "zpw" :  {
    "ru": "дней",
    "en": "days",
  },
  "zpe" :  {
    "ru": "час",
    "en": "hour",
  },
  "zpr" :  {
    "ru": "часов",
    "en": "hours",
  },
  "zpt" :  {
    "ru": "мин",
    "en": "min",
  },
  "zpy" :  {
    "ru": "сек",
    "en": "sec",
  },
  "zpu" :  {
    "ru": "и",
    "en": "and",
  },


  // function populateInfo(i)
  "zqm" :  {
    "ru": "Не рассчитано",
    "en": "Not calculated",
  },
  "zqq" :  {
    "ru": "Версия",
    "en": "Build",
  },
  "zqw" :  {
    "ru": "Уровень сигнала",
    "en": "Signal strength",
  },
  "zqe" :  {
    "ru": "Время работы",
    "en": "Uptime",
  },
  "zqr" :  {
    "ru": "Время",
    "en": "Time",
  },
  "zqt" :  {
    "ru": "Свободная память",
    "en": "Free heap",
  },
  "zqy" :  {
    "ru": "Свободно PSRAM",
    "en": "Free PSRAM",
  },
  "zqu" :  {
    "ru": "Расчетный ток",
    "en": "Estimated current",
  },
  "zqi" :  {
    "ru": "Среднее FPS",
    "en": "Average FPS",
  },
  "zqo" :  {
    "ru": "MAC адрес",
    "en": "MAC address",
  },
  "zqp" :  {
    "ru": "Файловая система",
    "en": "Filesystem",
  },
  "zqa" :  {
    "ru": "Среда разработки",
    "en": "Environment",
  },
  "zqs" :  {
    "ru": "",
    "en": "",//kB
  },

  //function populateNodes(i,n)
  "zqd" :  {
    "ru": "Список экземпляров отключен.",
    "en": "Instance List is disabled.",
  },
  "zqf" :  {
    "ru": "Других экземпляров не найдено.",
    "en": "No other instances found.",
  },
  "zqg" :  {
    "ru": "Текущий экземпляр:",
    "en": "Current instance:",
  },
  //function cnfReset()
  "zqh" :  {
    "ru": "Подтвердить перезагрузку",
    "en": "Confirm Reboot",
  },
  //function toggleSync()
  "zqj" :  {
    "ru": "Другие устройства в сети теперь будут синхронизированы с этим.",
    "en": "Other lights in the network will now sync to this one.",
  },
  "zqk" :  {
    "ru": "Это устройство и другие устройства в сети больше не будут синхронизироваться.",
    "en": "This light and other lights in the network will no longer sync.",
  },
  //function toggleNl()
  "ztq" :  {
    "ru": "Таймер активирован. Ваш контроллер будет",
    "en": "Timer active. Your light will turn",
  },
  "ztw" :  {
    "ru": "включен",
    "en": "on",
  },
  "zte" :  {
    "ru": "выключен",
    "en": "off",
  },
  "ztr" :  {
    "ru": "через",
    "en": "over",
  },
  "ztt" :  {
    "ru": "спустя",
    "en": "after",
  },
  "zty" :  {
    "ru": "минут",
    "en": "minutes.",
  },
  "ztu" :  {
    "ru": "Таймер выключен",
    "en": "Timer deactivated.",
  },
  //if (hasRGB && ((!controlDefined)
  "zqc" :  {
    "ru": "Цветовая палитра",
    "en": "Color palette",
  },
  "zqv" :  {
    "ru": "Цветовая палитра не используется",
    "en": "Color palette not used",
  },
  //function populateSegments(s)
  "zaq" :  {
    "ru": "Сегмент",
    "en": "Segment",
  },
  "zaw" :  {
    "ru": "Введите название...",
    "en": "Enter name...",
  },
  "zae" :  {
    "ru": "Старт LED",
    "en": "Start LED",
  },
  "zar" :  {
    "ru": "Стоп LED",
    "en": "Stop LED",
  },
  "zat" :  {
    "ru": "Смещение",
    "en": "Offset",
  },
  "zay" :  {
    "ru": "Группировка",
    "en": "Grouping",
  },
  "zau" :  {
    "ru": "Расстояние",
    "en": "Spacing",
  },
  "zai" :  {
    "ru": "Удалить",
    "en": "Delete",
  },
  "zao" :  {
    "ru": "Повторить до конца",
    "en": "Repeat until end",
  },
  "zap" :  {
    "ru": "Зеркальный эффект",
    "en": "Mirror effect",
  },
  "zaa" :  {
    "ru": "Обратное",
    "en": "Reverse",
  },
  "zas" :  {
    "ru": "направление",
    "en": "direction",
  },
  "zad" :  {
    "ru": "зерк.",
    "en": "Mirror",
  },
  "zag" :  {
    "ru": "обрат.",
    "en": "Reverse",
  },
  "zah" :  {
    "ru": "перемещать",
    "en": "Transpose",
  },
  "zaj" :  {
    "ru": "Старт",
    "en": "Start",
  },
  "zak" :  {
    "ru": "Стоп",
    "en": "Stop",
  },
  "zal" :  {
    "ru": "Звук.сим.",
    "en": "Sound sim",
  },
  "zaz" :  {
    "ru": "дополнить",
    "en": "Expand",
  },

  //function rSegs()
  "zsq" :  {
    "ru": "Подтвердите сброс",
    "en": "Confirm reset",
  },
  "zsw" :  {
    "ru": "Сбросить сегменты",
    "en": "Reset segments",
  },
  //function resetUtil(off=false)
  "zdq" :  {
    "ru": "Добавить",
    "en": "Add segment",
  },
  //function makeSeg()
  "zfq" :  {
    "ru": "Новый сегмент",
    "en": "New segment",
  },
  "zfw" :  {
    "ru": "Закрыть",
    "en": "Cancel",
  },
  //function delSeg(s)
  "zfk" :  {
    "ru": "У Вас должно быть несколько сегментов, чтобы удалить один!",
    "en": "You need to have multiple segments to delete one!",
  },

  //function setEffectParameters(idx)
  "zgq" :  {
    "ru": "Скорость",
    "en": "Effect speed",
  },
  "zgw" :  {
    "ru": "Интенсивность",
    "en": "Effect intensity",
  },
  "zge" :  {
    "ru": "Ручной",
    "en": "Custom",
  },

  //function presetError(empty)
  "zhq" :  {
    "ru": "У вас еще нет пресетов!",
    "en": "You have no presets yet!",
  },
  "zhw" :  {
    "ru": "Извините, возникла проблема с загрузкой ваших пресетов!",
    "en": "Sorry, there was an issue loading your presets!",
  },
  "zhe" :  {
    "ru": "Однако доступна резервная копия предустановленных данных предыдущей установки.<br> (Сохранение предустановки скроет это и перезапишет резервную копию)",
    "en": "However, there is backup preset data of a previous installation available.<br>(Saving a preset will hide this and overwrite the backup)",
  },
  "zhr" :  {
    "ru": "Вот резервная копия последнего известного исправного состояния:",
    "en": "Here is a backup of the last known good state:",
  },
  "zht" :  {
    "ru": "Скопировать",
    "en": "Copy to clipboard",
  },
  "zhy" :  {
    "ru": "Перезапись",
    "en": "Overwriting",
  },
  //function resetPUtil()
  "zjo" :  {
    "ru": "Пресет",
    "en": "Preset",
  },
  "zjp" :  {
    "ru": "Плейлист",
    "en": "Playlist",
  },

  //function cpBck()
  "zmq" :  {
    "ru": "Скопировано в буфер обмена",
    "en": "Copied to clipboard!",
  },

  //function showErrorToast()
  "zjw" :  {
    "ru": "Не удалось подключиться к устройству!",
    "en": "Connection to light failed!",
  },
  //function makePlUtil()
  "zje" :  {
    "ru": "Вам нужно как минимум 2 пресета, чтобы создать плейлист!",
    "en": "You need at least 2 presets to make a playlist!",
  },
  //function saveP(i,pl)
  "zbq" :  {
    "ru": "Пожалуйста, сначала введите вашу команду API",
    "en": "Please enter your API command first",
  },
  "zbw" :  {
    "ru": "Синтаксическая ошибка в пользовательской команде JSON API",
    "en": "Syntax error in custom JSON API command",
  },
  "zbe" :  {
    "ru": "Пожалуйста, обновите страницу, прежде чем вносить изменения в эту настройку",
    "en": "Please refresh the page before modifying this preset",
  },
  "zbr" :  {
    "ru": "Сохранение",
    "en": "Saving",
  },
  "zbt" :  {
    "ru": "Пожалуйста, обновите страницу, чтобы увидеть эту недавно сохраненную команду.",
    "en": "Please refresh the page to see this newly saved command.",
  },

  //function checkUsed(i)
  "zju" :  {
    "ru": "ID должен быть 250 или меньше.",
    "en": "ID must be 250 or less.",
  },

  //function makeP(i,pl)
  "zkq" :  {
    "ru": "Сохр.",
    "en": "Save",
  },
  "zkw" :  {
    "ru": "API команда",
    "en": "API command",
  },
  "zkm" :  {
    "ru": "Редактор плейлиста",
    "en": "Show playlist editor",
  },
  "zkn" :  {
    "ru": "Перезаписать состояние",
    "en": "Overwrite with state",
  },
  "zke" :  {
    "ru": "Исп. текущее состояние",
    "en": "Use current state",
  },
  "zkr" :  {
    "ru": "Включить яркость",
    "en": "Include brightness",
  },
  "zkt" :  {
    "ru": "Сохр. границ сегмента",
    "en": "Save segment bounds",
  },
  "zky" :  {
    "ru": "Только провер. сегменты",
    "en": "Checked segments only",
  },
  "zki" :  {
    "ru": "Кнопка на панели",
    "en": "Quick load label:",
  },
  "zko" :  {
    "ru": "(оставьте пустым, чтобы не было кнопки быстрой загрузки)",
    "en": "(leave empty for no Quick load button)",
  },
  "zku" :  {
    "ru": "Сохранить в ID",
    "en": "Save to ID",
  },
  "zkg" :  {
    "ru": "Идентификатор должен быть не более 250.",
    "en": "Preset ID must be 250 or less.",
  },
  "zkh" :  {
    "ru": "Перемешивать",
    "en": "Shuffle",
  },
  "zkj" :  {
    "ru": "Повторять бесконечно",
    "en": "Repeat indefinitely",
  },
  "zkz" :  {
    "ru": "Повторить",
    "en": "Repeat",
  },
  "zkx" :  {
    "ru": "раз",
    "en": "times",
  },
  "zkc" :  {
    "ru": "Конечная предустановка:",
    "en": "End preset:",
  },
  "zkv" :  {
    "ru": "нет",
    "en": "None:",
  },
  "zkb" :  {
    "ru": "Восстановить предустановку",
    "en": "Restore preset",
  },
  "zkk" :  {
    "ru": "Тест",
    "en": "Test",
  },
  //function testPl(i,bt)
  "zkl" :  {
    "ru": "Стоп",
    "en": "Stop",
  },
  //function populateQL()
  "zlq" :  {
    "ru": "Быстрый запуск",
    "en": "Quick load",
  },
  //function setPreset(i)
  "zlw" :  {
    "ru": "Загрузка предварительного набора",
    "en": "Loading preset",
  },
  //function refreshPlE(p)
  "zzq" :  {
    "ru": "Записи в списке воспроизведения",
    "en": "Playlist entries",
  },
  //function makePlEntry(p,i)
  "zzw" :  {
    "ru": "Продолжительность",
    "en": "Duration",
  },
  "zze" :  {
    "ru": "Переход",
    "en": "Transition",
  },


  //function readState(s,command=false)
  "zxq" :  {
    "ru": "Сегментов нет",
    "en": "No Segments!",
  },
  "zxw" :  {
    "ru": "Не удалось смонтировать файловую систему!",
    "en": "Could not mount filesystem!",
  },
  "zxe" :  {
    "ru": "Недостаточно места для сохранения предустановки!",
    "en": "Not enough space to save preset!",
  },
  "zxr" :  {
    "ru": "Предустановка не найдена.",
    "en": "Preset not found.",
  },
  "zxt" :  {
    "ru": "Отсутствует файл ir.json.",
    "en": "Missing ir.json.",
  },
  "zxy" :  {
    "ru": "Произошла ошибка файловой системы.",
    "en": "A filesystem error has occurred.",
  },
  "zxu" :  {
    "ru": "Ошибка",
    "en": "Error",
  },

  //function loadNodes()
  "zcq" :  {
    "ru": "Не удалось загрузить список узлов!",
    "en": "Could not load Node list!",
  },

  //function requestJson(command=null)
  "zjq" :  {
    "ru": "Пустой ответ",
    "en": "Empty response",
  },



  //обозначения
  "cq" :  {
    "ru": "сек",
    "en": "s",
  },
  "cw" :  {
    "ru": "мс",
    "en": "ms",
  },
  "ce" :  {
    "ru": "мин",
    "en": "min",
  },
  "ck" :  {
    "ru": "мА",
    "en": "mA",
  },

  "oi" :  {
    "ru": "сек.",
    "en": "s",
  },

  "ti" :  {
    "ru": "секунда",
    "en": "seconds",
  },
  "to" :  {
    "ru": "секунды",
    "en": "seconds",
  },
  "tp" :  {
    "ru": "секунд",
    "en": "seconds",
  },

//end lang
}

let lA = langArr;//Для JS скриптов lA[""][lL]
let langLSt = window.localStorage.getItem('language');
const lL=langLSt;
const d=document;
//let lLS = langLSt;

function createLang(i) {
  let w=langLSt;
  let e = document.querySelector('#translate');
  if(w === null){w=langDef;}

  //////////////////////////////////////////////////////////////////////////////////////нужна автоматическая перепроверка наличия языка
  if ((lA['ple'][w] === undefined) || (lA['plw'][w] === undefined)) {
    // ключа нет в объекте
    w=langDef;
  }
  if(i==="h2"){i=`<h2>${lA["plw"][w]}</h2>`;}else{i="";}
  e.innerHTML += `${i}<label>${lA["ple"][w]} </label><select id="language">`;
  for (let key in langAll) {
    let x="";
    let e = document.querySelector('#language');
    if(key===langLSt){x = " selected";}
    e.innerHTML += `<option value="${key}"${x}>${langAll[key]}</option>`;
  }
  e.innerHTML += `</select>`;
}

function loadLang() {
  const langSel = document.querySelector("#language");
  window.onload = function () {
    document.getElementById('language').onchange = function () {
      selectLang(langSel);
    };
  };
}

function selectLang(i) {
  window.localStorage.setItem('language', i.value);
  location.reload();
}

function changeLang() {
  let langLS;
  if (lL===null){
    langLS=langDef;
  } else{
    langLS = lL;
  }
  for (let key in langArr) {
    let elem = document.querySelectorAll('.l-' + key);
    elem.forEach(function (item) {
      if (item) {
        if (langArr[key][langLS] == null) {
          item.innerHTML = langArr[key][langDef];
        } else {
          item.innerHTML = langArr[key][langLS];
        }
      }
    });
  }
}

function placeH() {
  let p = lA["pirz"][lL];
  let el = document.getElementsByClassName("i-seach");
  for (let i = 0; i < el.length; i++) {
    el[i].setAttribute("placeholder", p);
  }
}

function countingDown() {
  document.addEventListener('DOMContentLoaded', function() {
    let s = 10;
    let t = null;
    function skl(n,w) {return w[(n % 100 > 4 && n % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(n % 10 < 5) ? n % 10 : 5]];}
    function tim() {
    if (s <= 0) {clearInterval(t);}
    $s.t = (s < 10) ? '0' + s : s;
    $s.e = skl(s, [lA["ti"][lL], lA["to"][lL], lA["tp"][lL]]);
    $s.innerHTML = $s.t+' '+$s.e;
    s--;
  }
    let $s = document.querySelector('.l-timer');
    if(!$s){return;}
    tim();
    t = setInterval(tim, 1000);
  });
}