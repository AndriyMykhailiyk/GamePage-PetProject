import Header from "../../Header/Header";
import Fotter from "../../Footer/Fotter";
import './AboutUs.scss'

const AboutUs = () => {
    return (
        <>
        <Header />
            <section className="wrapper">
        <div className="Main_Section">
          <div className="Header_Section">
            <h1 className="shop-header">Про Магазин</h1>
          </div>
          <div className="Sub-Section">
            <strong> 
                <p className="P-header">
                <span className="P-header-span">
                RetroMagaz — це шматочок історії - якою ми хочемо поділитися з вами. Це гарний настрій, цікаві ігри, нові знайомі. Це легенди, які оживають на екрані і дарують особливу ностальгію.
                </span>
                </p>
            </strong>
          </div>
          
          <div className="wrapper-Li">
            <div className="wrapper-text">
          <section className="about-Section">
            <div className="Future">
                <h1 className="shop-header-future">Назад у{" "}
                    <span className="Future-Text">майбутнє</span>
            </h1>
                <p className="P-header-future">
                <span className="P-section-future-span">
                RetroMagaz — це шматочок історії - якою ми хочемо поділитися з вами. Це гарний настрій, цікаві ігри, нові знайомі. Це легенди, які оживають на екрані і дарують особливу ностальгію.
                </span>
                </p>
            </div>
            </section>

            <section className="about-Section">
            <div className="Future">
                <h1 className="shop-header-future">Чому{" "}
                    <span className="Future-Text">Люди грають</span>
</h1>
                <p className="P-header-future">
                <span className="P-section-future-span">
                Тому що це весело. Так само, як перегляд фільму за попкорном. Так само, як похід з наметами. Так само, як стрибок з парашутом. Уяви собі: у тебе був дуже важкий день. Такий, з похмурою погодою, дощем і дедлайнами. І тут ти береш приставку, дзвониш другові чи подрузі, у яких був такий же пекельний день - і ось він перетворюється в крутий вечір з пригодами і приємним спілкуванням. Це спосіб позбутися негативних емоцій, розслабитися і з новими силами йти в бій.

</span>
                </p>
            </div>
            
            </section>
            </div>
            <div className="Picture">
            </div>
            </div>
        </div>
      </section>

<Fotter/>        </>
    )
}

export default AboutUs;