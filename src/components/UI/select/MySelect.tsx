type IOption = {
  value: string;
  name: string;
};
type IMySelect = {
  options: IOption[];
  defaultValue: string;
  value:string;
  onChange: (sort:string) => void;
};

export const MySelect = ({ options, defaultValue,value ,onChange }: IMySelect) => {
  return (
    <select
    value={value}
    onChange={(event:React.ChangeEvent<HTMLSelectElement>)=>{
        onChange(event.target.value)
    }}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  );
};
