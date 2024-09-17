export default function LoginButton({ socialNetwork, Icon }) {
  return (
    <button className="hover:bg-slate-100 
    grid grid-cols-[2rem_1fr]
    w-full max-w-md 
    items-center justify-center 
    rounded-md border border-gray-300 p-3">
      <Icon className="text-2xl" />
      <span className="font-medium">Continue with {socialNetwork}</span>
    </button>
  );
}