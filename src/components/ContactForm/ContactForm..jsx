import React from 'react';
import css from './ContactForm.module.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    
    this.props.addContactCallback(this.state.name, this.state.number);

    this.setState({ name: '', number: '' });
  };
  render() {
    // const nameInputId = nanoid();
    return (
      <form onSubmit={this.handleSubmit} className={css.contactForm}>
        <label>
          Name
          <input
            className={css.inputText}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
            // id={nameInputId}
          />
        </label>
        <label>
          Number
          <input
            className={css.inputText}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
        </label>
        <button type="submit" className={css.formButton}>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
