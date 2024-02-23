import styles from "./styles.module.scss";
import dayjs from "dayjs";
import Image from "next/image";
import Logo from "../../public/svg/logo.svg";
export default function Copyright({ country }) {
  const date = dayjs();
  const companyName = "NCE Infotech";
  const companyLogo = "/logo.png";
  return (
    <div className={styles.footer__copyright}>
      <section className={styles.websiteLogo}>
        <Image src={companyLogo} width={100} height={100} alt={`${companyName}-logo`} />
{/* <Logo/> */}
      </section>
      <section>
        <section>
          <h2>{companyName}</h2>
          <p>
            ©{date.format(`YYYY`)} {companyName} All Rights Resereved.
          </p>
        </section>
        <ul></ul>
      </section>
    </div>
  );
}
