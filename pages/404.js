import Link from "next/link";
export default function Custom404() {
    return (<section className="vs-error-wrapper space-md-top space-bottom">
        <div className="container">
            <div className="error-content text-center">
                <h1 className="error-number">404</h1>
                <h2 className="error-title h3 fw-semibold text-uppercase text-body mb-5 pb-1">
                    The page you've requested is not available.
                </h2>
                <Link href="/" className="vs-btn">
                    Return To Home
                </Link>
                <img src="/assets/img/error/error-1.png" alt="Error Image" />
            </div>
        </div>
    </section>
    )
}