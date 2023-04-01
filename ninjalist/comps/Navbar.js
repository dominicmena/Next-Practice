import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={128} height={77}/>
                <h1>Ninja List</h1>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/ninjas'>Ninja Listing</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;