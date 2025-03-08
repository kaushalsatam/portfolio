function Footer() {
    let date = new Date();
    return <footer>
        <p className="text-gray-300 text-sm text-center">Copyright © {date.getFullYear()} Kaushal Satam. All Rights Reserved.</p>
    </footer>
}

export default Footer;
