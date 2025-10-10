interface HeaderProps {
  title: string;
  subtitle: string;
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="text-center">
      {/*3. Tampilkan data dari props, bukan teks statis */}
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4 text-xl">{subtitle}</p>
    </div>
  );
}

export default Header;
