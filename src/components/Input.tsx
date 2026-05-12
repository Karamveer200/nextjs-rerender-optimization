import { mergeClasses } from '@/utils/general';

const Input = (
  props: React.InputHTMLAttributes<HTMLInputElement> & {
    error: string | null;
    label?: string;
  }
) => {
  return (
    <div className="relative flex flex-col gap-2">
      {props.label && (
        <label className="text-sm text-white" htmlFor={props.name}>
          {props.label}
        </label>
      )}

      <input
        className={mergeClasses(`
        w-full
        rounded-sm
        border
        px-3
        py-2
        text-sm
        outline-none
        transition-colors
        focus:ring-2
        disabled:cursor-not-allowed
        disabled:opacity-50
  
        border-zinc-700
        bg-zinc-900
        text-white
        placeholder:text-zinc-500
  
        focus:border-sys-green-500
        focus:ring-sys-green-500/20
        ${props.error ? 'border-red-500' : ''}
      `)}
        {...props}
      />

      {props.error && (
        <span className="text-red-500 text-sm">{props.error}</span>
      )}
    </div>
  );
};

export default Input;
