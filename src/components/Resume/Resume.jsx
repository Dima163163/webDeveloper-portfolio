
import ListItems from '../listItems/ListItems';
import styles from './Resume.module.css';

const hardSkills = [
  'Владею навыками адаптивной вёрстки на HTML u CSS.',
  'Работаю в VS Code',
  'Использую препроцессор Sass',
  'Работаю в системе контроля версий Git',
  'Владею инструментами оптимизации изображений и кода',
  'Верстаю по Pixel Perfect',
  'Программирую на JavaScript, использую REST API',
  'Работаю со сборщиками Webpack, Vite',
  'Владею React.js / Redux / React-router-dom',
  'Придерживаюсь компонентного подхода'
];

const learns = [
  'Курс по React / learn.javascript.ru - 2024 год',
  'Курс JavaScript/DOM/Интерефейсы для новичков / learn.javascript.ru - 2024 год',
  'Курс «Frontent-разработчик» / METHED SCHOOL - 2024 год',
  'Курс JavaScript / GLO Academy - 2023 год',
  'Разработчик сайтов / GLO Academy - 2023 год',
  'Курс по современной верстке / learn.javascript.ru - 2022 год'
];

const universities = [
  'Магистр - Самарский гос. экономический университет / Экономика и управление на предприятии',
  'Специалист - Самарский архитектурно-строительный университет / Промышленное и гражданское строительство'
];

const softSkills = [
  'Коммуникативность, умение работать в команде. На предыдущих местах работы всегда работал в команде, отлично со всеми ладил.',
  'Самоорганизация и дисциплинированность (умение планировать работу). Очень ответственно подхожу к задачам, никогда не бросаю невыполненную работу. На предыдущих местах работы приходил раньше в офис или уходил позже - если были объемные задачи',
  'Внимательность к деталям. Стараюсь учитывать все нюансы в работе, аккуратен в написании кода. Ценю порядок в работе',
  'Адаптивность к новым вводным. Изменения и новые задачи расцениваю как точку роста',
  'Дружелюбие. Ко всем настроен позитивно и дружелюбно'
]

const Resume = () => {
  return (
    <div className={styles['container']}>
      <main className={styles['section']}>
        <h1 className={styles['title-1']}>Резюме</h1>
        <h2 className={styles['title-2']}>Навыки</h2>
        {hardSkills.length > 0 && <ListItems items={hardSkills} />}
        <h2 className={styles['title-2']}>Обучение</h2>
        {learns.length > 0 && <ListItems items={learns} />}
        <h2 className={styles['title-2']}>Образование</h2>
        {universities.length > 0 && <ListItems items={universities} />}
        <h2 className={styles['title-2']}>О себе</h2>
        {softSkills.length > 0 && <ListItems items={softSkills} />}
      </main>
    </div>
  )
}
export default Resume;