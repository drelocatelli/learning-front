import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/menu.module.css';

export default function Menu() {

    const router = useRouter();

    return (
        <nav className={styles.nav}>
            <li>
                <Link href='/'>
                    <a onClick={(e) => e.stopPropagation()}>Home</a>
                </Link>
            </li>
            <li>
                <Link href='/about'>
                    <a onClick={(e) => e.stopPropagation()}>About</a>
                </Link>
            </li>
            <li>
                <Link href='/redux'>
                    <a onClick={(e) => e.stopPropagation()}>Redux</a>
                </Link>
            </li>
        </nav>
    );
}