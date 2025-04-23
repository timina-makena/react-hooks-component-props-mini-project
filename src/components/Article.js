import React from 'react';
import PropTypes from 'prop-types';


const Article = ({title, date, preview, minutes}) => {
let emoji = '';
let count = 0;

if (minutes < 30) {
count = Math.ceil(minutes / 5);
emoji = '☕️'.repeat(count);
} else {
count = Math.ceil(minutes / 10);
emoji = '🍱'.repeat(count);
}

return (
<article>
<h3>{title}</h3>
<small>{date} - {emoji} {minutes} min read</small>
<p>{preview}</p>
</article>
);
};

Article.propTypes = {
title: PropTypes.string.isRequired,
date: PropTypes.string,
preview: PropTypes.string.isRequired,
};

Article.defaultProps = {
date: "January 1, 1970",
};

export default Article;