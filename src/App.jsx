import Layout from './components/Layout.jsx'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

function App() {
    const siteTitle = 'Мой React-сайт'
    const userName = 'Студент'

    return (
        <Layout siteTitle={siteTitle}>
            <Header title={siteTitle} userName={userName} />
            <Sidebar items={['Главная', 'О нас', 'Услуги', 'Контакты']} />
            <MainContent>
                <h1>Добро пожаловать!</h1>
                <p>
                    Это пример макета на CSS Grid с React-компонентами
                    (JS-версия).
                </p>
                <ul>
                    <li>
                        Grid-области задаются через <code>grid-template-areas</code>.
                    </li>
                    <li>
                        Сайдбар занимает фиксированные <code>250px</code>, а
                        контент — всё оставшееся место (<code>1fr</code>).
                    </li>
                    <li>
                        Контент передаётся через <code>children</code> (аналог
                        слотов).
                    </li>
                    <li>
                        Данные передаются через <code>props</code>.
                    </li>
                </ul>

                <div className="cards">
                    <article className="card">
                        <h2>Grid</h2>
                        <p>Двумерная сетка: строки и колонки одновременно.</p>
                    </article>
                    <article className="card">
                        <h2>Flex</h2>
                        <p>Одномерная раскладка внутри каждой области.</p>
                    </article>
                    <article className="card">
                        <h2>Adaptive</h2>
                        <p>На узких экранах макет перестраивается в одну колонку.</p>
                    </article>
                </div>
            </MainContent>
            <Footer year={new Date().getFullYear()} />
        </Layout>
    )
}

export default App
