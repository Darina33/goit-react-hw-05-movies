import { useState } from 'react';
import css from './Form.module.css'

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input  className={css.input} 
        type="text"
        placeholder="Name movie"
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <button  className={css.btn} type="submit" disabled={!query}>
        Search
      </button>
    </form>
  );
};

export default Form;