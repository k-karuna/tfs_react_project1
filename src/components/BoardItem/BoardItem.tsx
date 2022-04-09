import React from 'react';
import cn from 'classnames';
import Button from '../Button/Button';

import styles from './BoardItem.module.css';

const BoardItem: React.FC<any> = ({ type, title, customTitle }) => {
	return (
		<div className={styles.item}>
			<div className={cn(styles.logo, styles[`logo_${type}`])} />
			<div className={styles.title}>{DisplayTitle (title, customTitle)}</div>
			<Button >Кнопка</Button>
		</div>
	);
};
const DisplayTitle = (title, customTitle) => {
	return customTitle ? customTitle : title;
}

export default BoardItem;
