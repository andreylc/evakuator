import style from './header.module.scss';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <div className={style.header}>
      <div className='container'>
        <div className={style.row}>
          <div className='col _logo'>
            <div className={style.logo}>
              <a href=''>
                <img src={logo} alt='Эвакуатор Кордай' />
                <div className={style.slogan}>
                  <div>Эвакуатор в Кордае</div>
                  <span>Заберем любой автомобиль в любом состоянии</span>
                </div>
              </a>
            </div>
          </div>
          <div className='col _phone'>
            <a href='tel:+77026855605' className='simple'>
              8 702 685 56 05
            </a>
            <a href='tel:+77026855605' className='btn btn_blue'>
              Позвонить
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
