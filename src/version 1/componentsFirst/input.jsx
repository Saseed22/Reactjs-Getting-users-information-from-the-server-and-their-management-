const Input = ({ name, value, lable, onChange }) => {
  return (
    <div className='mb-3'>
      <label htmlFor='email'>{lable} </label>
      <input
        onChange={onChange}
        name={name} value={value}
        id={name} className='form-control'
        type="text" />
    </div>
  );
};
 
export default Input;