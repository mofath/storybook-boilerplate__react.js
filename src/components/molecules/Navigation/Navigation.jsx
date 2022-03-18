import React from "react";
import { arrayOf, shape, string } from "prop-types";
import Link from '../../atoms/Link/Link';
import Icon from '../../atoms/Icon/Icon';
import './navigation.scss'

const Navigation = ({ direction, items }) => (
	<nav className={`navigation navigation--${direction}`}>
		{items.map(item => (
			<Link href={item.url} icon={item?.icon}>
				{item.title}
        {item.icon && <Icon name={item.icon} />}
			</Link>
		))}
	</nav>
);

// Expected prop values
Navigation.propTypes = {
	direction: string.isRequired,
	items: arrayOf(
		shape({
			icon: string,
			title: string.isRequired,
			url: string.isRequired
		})
	)
};

// Default prop values
Navigation.defaultProps = {
	direction: "horizontal",
	items: []
};

export default Navigation;