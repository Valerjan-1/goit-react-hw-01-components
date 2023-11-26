import css from './Statistics.module.css';

const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

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
