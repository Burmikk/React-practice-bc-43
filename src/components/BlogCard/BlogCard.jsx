import PropTypes from 'prop-types';
import css from './BlogCard.module.css'
import {formatDistanceToNow} from 'date-fns'

export const BlogCard = ({
  poster,
  tag,
  title,
  description,
  name,
  avatar,
  postedAt,
}) => {
  return (
    <div className={css.section}>
      <img className={css.image}src={poster} alt={tag} />
      <span className={css.box}>{tag}</span>
      <h2 className={css.title}>{title}</h2>
      <p className={css.text}>{description}</p>
      <div className={css.loverBox}>
        <img className={css.additionalImage}src={avatar} alt="" />
        <p className={css.loverText}>{name}</p>
        <p className={css.date}>{ formatDistanceToNow(new Date(postedAt),{ addSuffix: true })}</p>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  poster: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
};
