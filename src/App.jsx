// import { useState } from 'react';
import style from './App.module.css';
// import { MyComponents } from './MyComponents';

function App() {
	return (
		<div className={style.app}>
			<h1 className={style.pageHeading}>Ввод значения</h1>
			<p className={style.noMarginText}>
				Текущее значение <code>value</code>: "
				<output className={style.currentValue}></output>"
			</p>
			<div className={style.error}>
				Введенное значение должно содержать минимум 3 символа
			</div>
			<div className={style.buttonsContainer}>
				<button className={style.button}>Ввести новое</button>
				<button className={style.button} disabled>
					Добавить в список
				</button>
			</div>
			<div className={style.listContainer}>
				<h2 className={style.listHeading}>Список:</h2>
				<p className={style.noMarginText}>Нет добавленных элементов</p>
				<ul className={style.list}>
					<li className={style.listItem}>Первый элемент</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
