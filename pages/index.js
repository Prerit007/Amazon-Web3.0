import { Sidebar, Main } from "../components";

const styles = { container: `h-full w-full flex bg-[#fff]` };

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  );
}
