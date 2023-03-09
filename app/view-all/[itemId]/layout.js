import Recs from "./recs/page";

export default function RootLayout({ children }) {
  return (
    <div>
      {children}
      <Recs />
    </div>
  );
}
