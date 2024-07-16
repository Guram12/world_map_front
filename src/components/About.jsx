import React from "react";
import Logo from "../asset/logoo.png";
import "../styles/About.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { fadeIn } from "../Variants";
import { useNavigate } from "react-router-dom";
// import Cancel from "../asset/cancel.png";
import Cancel from "../asset/delete.png";
// import LanguageJson from "../components/language.json";

const About = ({ language }) => {
  const navigate = useNavigate();
  // const [isIOS, setIsIOS] = useState(false);

  // useEffect(() => {
  //   const isIOSDevice =
  //     /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  //   setIsIOS(isIOSDevice);
  // }, []);

  const handleCloseButtClick = () => {
    console.log("click");
    document.querySelector(".title").style.display = "none";
    document.querySelector(".paragraph").style.display = "none";
    document.querySelector(".close_icon").style.display = "none";
    const logo = document.querySelector(".logo_image");
    logo.classList.add("grow-logo");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const textVariant = (direction, delay) => ({
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  });

  const translateAboutText = (lang) => {
    const translations = {
      en: {
        aboutUs: "About Us",
        ourMission: "OUR MISSION",
        oneInOne:
          "-is a modern, innovative advertising platform that offers a unique opportunity to make your brand a global leader, effectively develop your business.",
        text: " We help companies achieve their goals faster and more efficiently, ensure global availability of their products and services, and present themselves to a wider audience. By cooperating with us, you will be able to attract customers and partners from any part of the world, expand the scope of your activities.",
        HowWeWork: "How we work:",
        selectCountry: "Selecting a country: ",
        txt1: "each company can select the country it wants from the world map. This capability gives them a strategic advantage in local markets.",
        logo: "Logo Placement:",
        txt2: "We ensure that the company logo is overlaid on the map of the selected country. This increases brand visibility and helps increase awareness.",
        layout: "Layout of branches and locations:",
        txt3: " Our team works to ensure that the branches and locations of companies are accurately and completely displayed on the map. This makes it easier for users to find their preferred branch.",
        providing: "Providing information:",
        txt4: "any visitor to the site can easily find different brands, and by clicking on the logo, get complete information about these companies and the addresses of their branches in the marked country.",
        ourGoal:
          "Our goal is to create a global network that will allow interested brands to establish themselves in the international market, increase global awareness, provide their products and services to a wide audience from any part of the world.",
        ourValue: "AUR VALUES:",
        GlobalVision: "Global vision: ",
        txt5: "Our platform enables companies to establish their place in the global market and discover a new way to achieve their goals.",
        inovation: "Innovation: ",
        txt6: "We offer innovative, modern, unique advertising means to ensure effective development of your brand.",
        reliability: "Reliability: ",
        txt7: " Our services are based on reliable and verified data to ensure that your branches and locations are accurately reflected on the platform.",
        communication: "Communication: ",
        txt8: "We create a bridge between the company and customers partners. Provide easy and effective communication.",
        yourWay: "- your way to global success",
      },
      ge: {
        aboutUs: "ჩვენს შესახებ",
        ourMission: "ჩვენი მისია:",
        oneInOne:
          "- არის თანამედროვე, ინოვაციური სარეკლამო პლატფორმა, რომელიც გთავაზობთ უნიკალურ შესაძლებლობას, რომ თქვენი ბრენდი გახდეს გლობალური ლიდერი,  ეფექტურად განავითაროთ თქვენი საქმიანობა.",
        text: " ჩვენ ვეხმარებით კომპანიებს უფრო სწრაფად და ეფექტურად მიაღწიონ დასახულ  მიზნებს, უზრუნველყონ თავიანთი პროდუქტის და მომსახურების გლობალური ხელმისაწვდომობა და უფრო ფართო აუდიტორიას წარუდგინონ საკუთარი თავი. ჩვენთან თანამშრობლობით თქვენ შეძლებთ მოიზიდოთ მომხმარებლები და პარტნიორები მსოფლიოს ნებისმიერი კუთხიდან, გააფართოვოთ თქვენი საქმიანობის მაშტაბები.",
        HowWeWork: "როგორ ვმუშაობთ",
        selectCountry: "ქვეყნის არჩევა: ",
        txt1: " თითოეულ კომპანიას შეუძლია შეარჩიოს მსოფლიო რუკიდან ის ქვეყანა, რომელიც სურს. ეს შესაძლებლობა აძლევს მათ სტრატეგიულ უპირატესობას ადგილობრივ ბაზრებზე.",
        logo: "ლოგოს განთავსება: ",
        txt2: "ჩვენ უზრუნველვყოფთ, რომ არჩეული ქვეყნის რუკაზე გადაეფაროს კომპანიის ლოგო. ეს ზრდის ბრენდის ხილვადობას და ხელს უწყობს ცნობადობის გაზრდას.",
        layout: "ფილიალების და ლოკაციების განლაგება:",
        txt3: "ჩვენი გუნდი მუშაობს იმაზე, რომ კომპანიების ფილიალები და ლოკაციები ზუსტად და სრულყოფილად აისახოს რუკაზე. ეს მომხმარებლებს უადვილებს სასურველი ფილიალის მოძიებას.",
        providing: "ინფორმაციის მიწოდება:",
        txt4: "საიტზე შემოსულ ნებისმიერ სტუმარს შეუძლია მარტივად იპოვოს სხვადასხვა ბრენდები,  ლოგოზე დაკლიკებით კი მიიღოს სრული ინფორმაცია ამ კომპანიებზე და მათი ფილიალების მისამართებზე მონიშნულ ქვეყანაში.",
        ourGoal:
          "ჩვენი მიზანია, შევქმნათ გლობალური ქსელი, რომელიც საშუალებას მისცემს დაინტერესებულ ბრენდებს  დაიმკვიდრონ თავი საერთაშორისო ბაზარზე, გაზარდონ გლობალური ცნობადობა,  მიაწოდონ თავიანთი პროდუქტი და მომსახურება ფართო აუდიტორიას მსოფლიოს ნებისმიერი კუთხიდან.",
        ourValue: "ჩვენი ღირებულებები",
        GlobalVision: "	•	გლობალური ხედვა: ",
        txt5: " ჩვენი პლატფორმა საშუალებას აძლევს კომპანიებს, გლობალურ ბაზარზე თავისი ადგილი დაიმკვიდრონ და აღმოაჩინონ ახალი გზა დასახული მიზნების მისაღწევად.",
        inovation: "	•	ინოვაცია: ",
        txt6: " ჩვენ გთავაზობთ ინოვაციურ, თანამედროვე, უნიკალურ სარეკლამო საშუალებას, რათა უზრუნველვყოთ თქვენი ბრენდის ეფექტური განვითარება.",
        reliability: "	•	სანდოობა:",
        txt7: "ჩვენი სერვისები დაფუძნებულია სანდო და გადამოწმებულ მონაცემებზე, რათა თქვენი ფილიალები და ლოკაციები სრული სიზუსტით აისახოს პლატფორმაზე.",
        communication: "•	კომუნიკაცია: ",
        txt8: "ჩვენ ვქმნით ხიდს კომპანიასა და მომხმარებლებს/პარტნიორებს შორის, უზრუნველყოფთ მარტივ და ეფექტურ კომუნიკაციას.",
        yourWay: "- თქვენი გზა გლობალური წარმატებისკენ",
      },
      ru: {
        aboutUs: "О нас",
        ourMission: "НАША МИССИЯ:",
        oneInOne:
          "— современная, инновационная рекламная платформа, предлагающая уникальную возможность сделать ваш бренд мировым лидером, эффективно развивать свой бизнес.",
        text: "Мы помогаем компаниям быстрее и эффективнее достигать своих целей, обеспечивать глобальную доступность своих продуктов и услуг, а также представлять себя более широкой аудитории. Сотрудничая с нами, вы сможете привлечь клиентов и партнеров из любой точки мира, расширить сферу своей деятельности.",
        HowWeWork: "КАК МЫ РАБОТАЕМ:",
        selectCountry: "Выбор страны:",
        txt1: "каждая компания может выбрать на карте мира нужную ей страну. Эта возможность дает им стратегическое преимущество на местных рынках.",
        logo: "Размещение логотипа: ",
        txt2: "Мы гарантируем наложение логотипа компании на карту выбранной страны. Это увеличивает узнаваемость бренда и помогает повысить узнаваемость.",
        layout: "Расположение филиалов и локаций: ",
        txt: " Наша команда работает над тем, чтобы на карте точно и полно отображались филиалы и локации компаний. Это облегчает пользователям поиск предпочитаемого филиала.",
        providing: "Предоставление информации: ",
        txt4: " любой посетитель сайта легко сможет найти различные бренды, а нажав на логотип, получить полную информацию об этих компаниях и адресах их филиалов в отмеченной стране.",
        ourGoal:
          "Наша цель — создать глобальную сеть, которая позволит заинтересованным брендам утвердиться на международном рынке, повысить глобальную узнаваемость, предоставить свои продукты и услуги широкой аудитории из любой точки мира.",
        ourValue: "НАШИ ЦЕННОСТИ:",
        GlobalVision: "Глобальное видение: ",
        txt5: "Наша платформа позволяет компаниям занять свое место на мировом рынке и открыть для себя новый способ достижения своих целей.",
        inovation: "Инновации: ",
        txt6: " Мы предлагаем инновационные, современные, уникальные рекламные средства для обеспечения эффективного развития вашего бренда.",
        reliability: "Надежность: ",
        txt7: " наши услуги основаны на надежных и проверенных данных, что позволяет гарантировать, что ваши филиалы и местоположения точно отражаются на платформе. ",
        communication: "Коммуникация: ",
        txt8: " Мы создаем мост между компанией и клиентами-партнерами. Обеспечьте легкое и эффективное общение.",
        yourWay: "– ваш путь к глобальному успеху",
      },
    };

    return translations[lang] || translations.en;
  };

  const translatedText = translateAboutText(language);

  // const translateAboutText = (lang) => {
  //   var languageInfo = {
  //     // statusInfoLanguage: "en",
  //     aboutUs: "About Us",
  //   };

  //   switch (lang) {
  //     case "en":
  //       // languageInfo.statusInfoLanguage = "About Us";
  //       break;

  //     case "ka":
  //       // languageInfo.statusInfoLanguage = "ჩვენს შესახებ";

  //       languageInfo = {
  //         aboutUs: "ჩვენს შესახებ",
  //       };
  //       break;

  //     case "ru":
  //       // languageInfo.statusInfoLanguage = "О нас";
  //       languageInfo = {
  //         aboutUs: "О нас",
  //       };
  //       break;
  //     default:
  //       // Default to English if no language is matched
  //       break;
  //   }
  //   return languageInfo;
  // };
  // const translatedText = translateAboutText(language);

  return (
    <div className="about_container">
      {/* <BackVideo src={BckVideo} /> */}
      {/* <video
        autoPlay
        loop
        muted
        controls={false}
        playsInline
        className="background-video"
      >
        <source src={BckVideo} type="video/mp4" />
      </video> */}
      {/* <Starfield /> */}
      <Helmet>
        <title>About Us - 1inone</title>
        <meta
          name="description"
          content="Learn more about 1inone and our mission."
        />
      </Helmet>
      <div className="flex_container">
        <div className="abouttext_paragraph">
          <motion.div
            className="titl_cont"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            arg="txt"
          >
            <h1 className="title">{translatedText.aboutUs}</h1>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="paragraph "
          >
            <motion.p variants={textVariant("left", 0.1)}>
              <a
                className="oneinone"
                href="https://www.1inone.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                1inone.com
              </a>
              {translatedText.oneInOne}
            </motion.p>
            <div className="para_span">
              <motion.p className="tit fs" variants={textVariant("left", 0.2)}>
                {translatedText.ourMission}
              </motion.p>
              <motion.p
                className="text_span"
                variants={textVariant("left", 0.3)}
              >
                {translatedText.text}
              </motion.p>
            </div>
            <div className="para_span">
              <motion.p className="tit fs" variants={textVariant("left", 0.2)}>
                {translatedText.HowWeWork}
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">
                  {translatedText.selectCountry}
                </span>
                {translatedText.txt1}
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">{translatedText.logo}</span>
                {translatedText.txt2}
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">{translatedText.layout}</span>
                {translatedText.txt3}
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">
                  {translatedText.providing}
                </span>
                {translatedText.txt4}
              </motion.p>
              <motion.p
                className="text_span"
                variants={textVariant("left", 0.3)}
              >
                {translatedText.ourGoal}
              </motion.p>
              <motion.p className="tit fs" variants={textVariant("left", 0.2)}>
                {translatedText.ourValue}
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">
                  {translatedText.GlobalVision}
                </span>
                {translatedText.txt5}
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">
                  {translatedText.inovation}
                </span>
                {translatedText.txt6}
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">
                  {translatedText.reliability}
                </span>
                {translatedText.txt7}
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">
                  {translatedText.communication}
                </span>
                {translatedText.txt8}
              </motion.p>
              <motion.p variants={textVariant("left", 0.1)}>
                <a
                  className="oneinone"
                  href="https://www.1inone.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1inone.com
                </a>
                {translatedText.yourWay}
              </motion.p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="closebutt_logo"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="close_icon"
            // initial={{ y: -100, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // transition={{ duration: 0.5 }}
          >
            <img onClick={handleCloseButtClick} src={Cancel} alt="delete"></img>
          </motion.div>
          <motion.div
            // variants={fadeIn("left", 0.3)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.3 }}
            className="logo_image"
          >
            <img className="about_logo_styles" src={Logo} alt=""></img>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
