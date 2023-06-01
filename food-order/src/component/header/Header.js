import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsJpg from "../asset/meals.jpg"; 

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton checkout={props.checkout} meals={props.meals} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsJpg} alt="Delicious meals served at our restaurant"></img>
      </div>
    </>
  );
}

export default Header; 