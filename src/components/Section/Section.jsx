import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className={css.title}>{title}</h2>
        {children}
      </div>
    </section>
  );
};
