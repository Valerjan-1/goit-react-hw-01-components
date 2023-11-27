import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  console.log(title);
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>UPLOAD STATS</h2> : <></>}
      <ul className={css.stat_list}>
        {stats.map(stat => {
          return (
            <li key={stat.id} className={css.item}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Statistics;
