type CTASecondaryProps = {
  label: string;
};

const CTASecondary = (props: CTASecondaryProps) => {
  return (
    <button className="w-[200px] text-center text-lg text-emerald-500 font-bold border-2 border-emerald-500 px-4 py-2 rounded-md hover:bg-emerald-500 hover:text-zinc-900 transition-all">
      {props.label}
    </button>
  );
};

export default CTASecondary;
