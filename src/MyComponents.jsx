import { useState } from 'react';

export const MyComponents = () => {
	const [showText, setShowText] = useState(true);

	const onClick = () => {
		setShowText(!showText);
	};
	const text = <div>Текст</div>;
	return (
		<>
			{showText && text}
			<button onClick={onClick}>
				{showText ? 'Скрыть' : 'Показать'} текст
			</button>
		</>
	);
};
