import { useAppSelector } from "@store/hooks";
import styles from "./styles.module.css";

const Account = () => {
  const user = useAppSelector((state) => state.registerAuth.user);

  return (
    <>
      <h1 className={styles.title}>Account Info</h1>
      <ul>
        <li>First Name: {user?.firstName}</li>
        <li>Last Name: {user?.lastName}</li>
        <li>Email: {user?.email}</li>
      </ul>
    </>
  );
};

export default Account;
