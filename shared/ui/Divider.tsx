interface DividerProps {
  mt?: string;
  mb?: string;
}

export default function Divider({
  mt = "mt-[24px]",
  mb = "mb-[16px]",
}: DividerProps) {
  return <div className={`border-t border-[#E5E7EB] ${mt} ${mb}`} />;
}
