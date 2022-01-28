import Link from "next/link";
import TagLink from "./TagLink";

export default function ReduxMenu() {
    return (
        <>
            <div style={{ margin: '20px 0' }}>
                <Link href='/redux'>
                    <TagLink>Counter</TagLink>
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link href='/redux-form'>
                    <TagLink>Forms</TagLink>
                </Link>
            </div>
        </>
    );
}