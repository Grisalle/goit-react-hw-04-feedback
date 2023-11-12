import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statisticsContainer}>
      <ul className={css.list}>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
      </ul>
      <p className={css.total}>Total: {total}</p>
      <p className={css.total}>Positive feedback: {positivePercentage} %</p>
    </div>
  );
};
