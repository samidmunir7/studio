type CTAThirdProps = {
  label: string;
};

const CTAThird = (props: CTAThirdProps) => {
  return (
    <button className="w-[200px] text-center text-lg text-sky-500 font-bold border-2 border-sky-500 px-4 py-2 rounded-md hover:bg-sky-500 hover:text-zinc-900 transition-all shadhow-2xl">
      {props.label}
    </button>
  );
};

export default CTAThird;
