import facebook from "../assets/icons/icons8-facebook.gif";
import twitter from "../assets/icons/icons8-twitter-bird.gif";
import instagram from "../assets/icons/icons8-insta.gif";
const Footer = () => {
    return (
        <div>
            <footer className="text-white bg-[#1A1919] p-10 border-b-red-700">
                <div className="footer max-w-screen-xl mx-auto sm:footer-horizontal">
                    <nav className="space-y-5">
                        <h1 className="text-white text-3xl font-extrabold">CareerHub</h1>
                        <p className="text-[rgba(255,255,255,0.7)]">
                            There are many variations of passages <br />
                            of Lorem Ipsum , but the majority have <br />
                            suffered alteration in some form.
                        </p>
                        <div className="flex gap-4">
                            <img className="rounded-full w-[42px]" src={facebook} />
                            <img className="rounded-full w-[42px]" src={twitter} />
                            <img className="rounded-full w-[42px]" src={instagram} />
                        </div>
                    </nav>
                    <nav className="space-y-2">
                        <h6 className="font-semibold text-[20px]">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Work</a>
                        <a className="link link-hover">Latest News</a>
                        <a className="link link-hover">Careers</a>
                    </nav>
                    <nav className="space-y-2">
                        <h6 className="font-semibold text-[20px]">Product</h6>
                        <a className="link link-hover">Prototype</a>
                        <a className="link link-hover">Plans & Pricing</a>
                        <a className="link link-hover">Customers</a>
                        <a className="link link-hover">Integrations</a>
                    </nav>
                    <nav className="space-y-2">
                        <h6 className="font-semibold text-[20px]">Support</h6>
                        <a className="link link-hover">Help Desk</a>
                        <a className="link link-hover">Sales</a>
                        <a className="link link-hover">Become a Partner</a>
                        <a className="link link-hover">Developers</a>
                    </nav>
                    <nav className="space-y-2">
                        <h6 className="font-semibold text-[20px]">Contact</h6>
                        <p>
                            524 Broadway , NYC <br /> <br />
                            +1 777 - 978 - 5570
                        </p>
                    </nav>
                </div>
               
            </footer>

        </div>

    );
};

export default Footer;