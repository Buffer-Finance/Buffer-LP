interface IGradientbtn {
  children: any;
  class?: string;
  disabled?: boolean;
  onClick?: (a: any) => void;
}

const Gradientbtn: React.FC<IGradientbtn> = (props) => {
  return (
    <button
      className={`flex justify-center btn bg-primary text-1 xsf transition-all hover:brightness-125  ${
        props.class ? props.class : ""
      } `}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

const SecondaryBtn: React.FC<IGradientbtn> = (props) => {
  return (
    <button
      className={`flex justify-center  btn !border-[1px] btn-border border-solid hover:bg-primary text-1 xsf ${
        props.class ? props.class : ""
      } `}
      disabled={props.disabled}
      onClick={!props.disabled && props.onClick}
    >
      {props.children}
    </button>
  );
};
export { SecondaryBtn };
export default Gradientbtn;
