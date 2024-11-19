
export default function Input({label , invalid , ...props}) {

  let labelClasses = 'mb-2 uppercase font-bold block text-xs tracking-wide';
  let inputClasses = 'w-full px-3 border rounded shadow leading-tight py-2'

  if(invalid) {
    labelClasses += ' text-red-400' //// this white space is important
    inputClasses += ' text-red-500 bg-red-100 border-red-300'
  }
  else {
    labelClasses += ' text-stone-300'
    inputClasses += ' text-gray-700 bg-stone-300'
  }
    
  return (
        <p>
            <label className={labelClasses}>{label}</label>
            <input className={inputClasses} {...props}/>
        </p>
    )
};